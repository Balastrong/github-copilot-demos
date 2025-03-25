import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

// Constants for the component
const README_PATH = '/README.md'

export const Route = createFileRoute('/instructions')({
  component: RouteComponent,
})

function useReadmeContent() {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchReadme() {
      try {
        const response = await fetch(README_PATH)
        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status}`)
        }
        const text = await response.text()
        setContent(text)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'))
      } finally {
        setLoading(false)
      }
    }

    fetchReadme()
  }, [])

  return { content, loading, error }
}

function RouteComponent() {
  const { content, loading, error } = useReadmeContent()

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error loading README: {error.message}</p>
          <p>Make sure the README.md file is available in the public folder.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="prose prose-blue max-w-none">
        <ReactMarkdown 
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 border-b pb-2">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
            p: ({ children, node, ...props }) => {
              // Handle the align attribute for paragraphs
              const align = node?.properties?.align as string | undefined;
              const className = `mb-4 leading-relaxed text-gray-700 ${
                align === "center" ? "text-center" : 
                align === "right" ? "text-right" : ""
              }`;
              return <p className={className} {...props}>{children}</p>;
            },
            ul: ({ children }) => <ul className="list-disc pl-6">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
            li: ({ children }) => <li className="mb-1">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>
            ),
            code: ({ children, className }) => (
              <code className={`${className} bg-gray-100 rounded px-1 py-0.5`}>{children}</code>
            ),
            pre: ({ children }) => (
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto my-4">{children}</pre>
            ),
            a: ({ href, children }) => (
              <a href={href} className="text-blue-600 hover:underline">{children}</a>
            ),
            img: ({ src, alt, width, ...props }) => {
              // Apply custom width if specified, otherwise use responsive width
              const style = width ? { width: typeof width === 'string' ? width : `${width}px` } : {};
              
              return (
                <img 
                  src={src} 
                  alt={alt || ''} 
                  className="mx-auto my-6 h-auto rounded-lg shadow-md" 
                  style={style}
                  loading="lazy"
                  {...props}
                />
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}

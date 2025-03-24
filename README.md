# GitHub Copilot Demos

<p align="center">
  <img src="./copilot.png" width="150px" />
</p>

> This repository a **sandbox** to **experiment and showcase [GitHub Copilot](https://github.com/features/copilot) features**. It is born as reference for my YouTube videos and conferences and it's **free for everyone to use**.

## How to use

The overall idea is that you should be able to quickly get your hands dirty and try out the features yourself, rather than just watching someone else do it on a video.

This README file contains a list of demos, each with focus on a Copilot feature.

For each demo you can find the entry file, a description of what to do and some notes on the expected behavior or possible continuations.

> ⚠️ **Work in progress**
> This isn't yet the full list and I want to add more detailed instructions and record a short video for each demo.
> Feedback, suggestions and PRs are welcome!

### How to run the application

The project in this repository is a simple React app (Typescript) with some features and a few files, some implemented and some intentionally empty.

To run the application, clone the repo and install the dependencies with the package manager of your choice (for example `npm install`)

Then run the app with `npm run start` and open it in your browser at http://localhost:3000

## Recorded Sessions

If you want to see some examples on how to run the demos, these are some of my recorded sessions:

- [Single demos playlist](https://www.youtube.com/playlist?list=PLOQjd5dsGSxLRBUDKZvQhnqOjzNeMUkDj) (12 videos)
- [October 2024 Routine](https://youtu.be/InQT82hI66E?si=XmtQRjCgQ_ZKoOr4&t=233)
- [January 2025 Routine 🇮🇹](https://youtu.be/T8xYVyhvO_Q?si=ax54V4MRva6eZIx2&t=792)

## Table of Contents

- [Ghost Text](#ghost-text)
  - [Simple Code Generation](#simple-code-generation)
  - [Code Panel](#code-panel)
  - [Temporary Context](#temporary-context)
- [Next Edit Suggestion](#next-edit-suggestion)
  - [Manual Mode](#manual-mode)
- [Inline Chat](#inline-chat)
  - [Generate Code & Tests](#generate-code--tests)
- [Chat Context](#chat-context)
  - [File/Folder/Symbol](#filefoldersymbol)
  - [Codebase](#codebase)
  - [Problems](#problems)
- [Copilot Customization](#copilot-customization)
  - [Chat Code Generation](#chat-code-generation)
  - [Commit Instructions](#commit-instructions)
  - [Test Generation](#test-generation)
- [Prompt Files](#prompt-files)
- [Copilot Edits](#copilot-edits)
  - [Create a Large Component from Scratch](#create-a-large-component-from-scratch)
  - [Edit Multiple Files](#edit-multiple-files)
- [Agent Mode](#agent-mode)
- [Copilot Vision](#copilot-vision)
  - [Alt Text](#alt-text)
  - [Image to Code](#image-to-code)
  - [Double Model Trick](#double-model-trick)
- [Model Selector](#model-selector)
- [Contributing](#contributing)

## Requirements

Make sure to have [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/) as some features listed here might be in preview and not yet available in the stable vscode version.

Learn more about GitHub Copilot in Visual Studio Code on the official docs: https://code.visualstudio.com/docs/copilot/overview

> If you don't yet have a Copilot subscription, you can use Copilot for free by signing up for the [Copilot Free plan](https://github.com/github-copilot/signup) and get a monthly limit of completions and chat interactions.

## Ghost Text

Ghost text is the text that Copilot suggests as you type. It appears in a lighter color and is meant to be a suggestion for what you might want to write next.

### Simple Code Generation

Entry: `src/utils/item.ts`

Uncomment the first line and see ghost text completing the class

### Code Panel (Feature Name?)

Entry: `src/utils/item.ts`

Delete everything from the previous demo and start again with `class Item {`

Press Ctrl+Enter to open the side panel

### Temporary (pasted) Context

Entry: `src/localization/en.json`

If the context is on the text of an Issue, on Slack or anywehre else and you can paste it...

Paste on the file: `Create an item with name, description, price and imgUrl`

Start typing `"item"` and see the ghost text completing the right keys and labels

## Next Edit Suggestion

Copilot suggests the next edit anywhere in your file, regardless of the cursor position.

Make sure to enable the setting `github.copilot.nextEditSuggestions.enabled`

Entry: `src/utils/product.ts`

Go next to the `public price: number`, copilot should already suggest a new field in ghost text. Accept it and NES kicks in automatically.

Add one more field `public maxDiscount: number` and more methods will be suggested.

_Note_: If you try the demo, reject some suggestions and you see it's no longer suggesting just reload vscode (Cmd+Shift+P -> Reload Window)

### Manual mode

You can add a keybind to `editor.action.inlineSuggest.triggerInlineEditExplicit` to trigger the next edit suggestion manually.

## Inline Chat

You can open the inline chat with `Ctrl+I` (or `Cmd+I` on Mac) to get more context and suggestions from Copilot.

### Generate Code & Tests

Entry: `src/hooks/useDebounce.ts`

With an empty file open the chat and prompt `do it`, it will generate the debounce hook.

Open the chat again to use the slash commands

- `/explain` - Explains the code
- `/doc` - Generates the documentation
- `/test` - Generates the test

It might generate the tests using jest, that's awesome, here's how to continue:

- Fix the import react-hooks TODO
- Save the new file generated by copilot (`useDebounce.test.ts`)
- Select all and prompt `use vitest instead of jest`

You can run `pnpm run test` and they should pass.

## Chat Context

You can attach context to the chat (inline and sidebar) by clicking the clipboard icon or by typing `#`, the attached context will be sent along with the prompt.

### File/Folder/Sym

Entry: `src/entity/pizza.api.ts`

Run the prompt `get pizza by ingredient` and copilot will generate some generic code.

Delete and run the prompt `get pizza by ingredient` and attach file `restaurant.api.ts` and symbol `Pizza`

### Codebase

Same example as above, might not 100% work as this repo is not a real codebase

### Problems

TODO Break something, close the file and ask on sidebar chat

## Copilot Customization

Some copilot prompts can be customized by setting some default instructions.

Instructions can be in versioned files inside the project (workspace) or in the user's settings.

### Chat Code Generation

Set the content of `.github/copilot-instructions.md` to the following:

```markdown
In hooks, make sure to keep constant values at the top of the file named in UPPER_SNAKE_CASE.
```

Enable/Disable the config `github.copilot.chat.codeGeneration.useInstructionFiles` and re-generate the useDebounce hook.

### Commit Instructions

`github.copilot.chat.commitMessageGeneration.instructions`

Set as value: `{ "text": "Do not use conventional commit message format." }` and toggle with/without `not` to show the difference

### Test Generation

`github.copilot.chat.testGeneration.instructions`

Set as value: `{ "text": "Always use vitest as testing framework" }`

## Prompt files

You can create custom prompts for Copilot to use when generating code, either on the repo or in your user settings.
You can find the prompt files in the `.github/prompts` folder.

Entry: `src/components/WorkItemForm.tsx`

Open the chat and prompt `Create a form`

The form will likely be a generic html form, try again by attaching a Prompt and selecting `react-form` from the dropdown

## Copilot Edits

### Create a large component from scratch

Entry: `src/components/Calendar.tsx`

Prompt: Make a big calendar to display the events #file:calendar-events.ts

### Edit multiple files

Entry: `src/routes/calculator.tsx`

Open Copilot Edits (Cmd+Shift+I) and prompt `Implement it in the Calculator component on a separate file`

Possible continuations:

- Use tailwind/css for the style
- Refactor the buttons in a new component
- Add the memory buttons

## Agent Mode

Entry: `src/routes/board.tsx`

Open the chat, set Agent mode and prompt `Implement a new KanBan board with 4 columns, I want to create cards for each column and drag & drop them around`.

Have fun with Copilot installing the dependencies and creating the components.

You can ask to reorganize the code or write some tests.

## Copilot Vision

## Alt Text

Attach the image to the chat and prompt `Generate alt text for the image`

## Image to Code

Entry: `src/components/weather.tsx`
Image: `/weather-report.png`

Prompt: `Create an interactive weather report form as in the attached image`

Make sure to use one of the supported models like GPT-4o to _see_ the image, you can then use other models to improve the code.

### Double model trick

Ask GPT-4o to generate a detailed prompt to use with another model.

Prompt: `Look at the attached image and generate a very well detailed prompt to use with an LLM to generate the code for this image`

Or even use the `read-image.prompt.md` prompt to generate a detailed prompt.

## Model Selector

Completion uses gpt-4o-copilot, chat let you select the model to use.

Show the dropdown and the Manage Models command.

More: https://docs.github.com/en/copilot/using-github-copilot/ai-models/changing-the-ai-model-for-copilot-chat

## Contributing

If you have any suggestion, fix or want to submit an new demo feel free to open a PR or an issue and I'll be happy to include that to the repo.

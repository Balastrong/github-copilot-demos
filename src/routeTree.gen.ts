/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as WorkItemImport } from './routes/work-item'
import { Route as WeatherImport } from './routes/weather'
import { Route as InstructionsImport } from './routes/instructions'
import { Route as CalendarImport } from './routes/calendar'
import { Route as CalculatorImport } from './routes/calculator'
import { Route as BoardImport } from './routes/board'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const WorkItemRoute = WorkItemImport.update({
  id: '/work-item',
  path: '/work-item',
  getParentRoute: () => rootRoute,
} as any)

const WeatherRoute = WeatherImport.update({
  id: '/weather',
  path: '/weather',
  getParentRoute: () => rootRoute,
} as any)

const InstructionsRoute = InstructionsImport.update({
  id: '/instructions',
  path: '/instructions',
  getParentRoute: () => rootRoute,
} as any)

const CalendarRoute = CalendarImport.update({
  id: '/calendar',
  path: '/calendar',
  getParentRoute: () => rootRoute,
} as any)

const CalculatorRoute = CalculatorImport.update({
  id: '/calculator',
  path: '/calculator',
  getParentRoute: () => rootRoute,
} as any)

const BoardRoute = BoardImport.update({
  id: '/board',
  path: '/board',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/board': {
      id: '/board'
      path: '/board'
      fullPath: '/board'
      preLoaderRoute: typeof BoardImport
      parentRoute: typeof rootRoute
    }
    '/calculator': {
      id: '/calculator'
      path: '/calculator'
      fullPath: '/calculator'
      preLoaderRoute: typeof CalculatorImport
      parentRoute: typeof rootRoute
    }
    '/calendar': {
      id: '/calendar'
      path: '/calendar'
      fullPath: '/calendar'
      preLoaderRoute: typeof CalendarImport
      parentRoute: typeof rootRoute
    }
    '/instructions': {
      id: '/instructions'
      path: '/instructions'
      fullPath: '/instructions'
      preLoaderRoute: typeof InstructionsImport
      parentRoute: typeof rootRoute
    }
    '/weather': {
      id: '/weather'
      path: '/weather'
      fullPath: '/weather'
      preLoaderRoute: typeof WeatherImport
      parentRoute: typeof rootRoute
    }
    '/work-item': {
      id: '/work-item'
      path: '/work-item'
      fullPath: '/work-item'
      preLoaderRoute: typeof WorkItemImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/board': typeof BoardRoute
  '/calculator': typeof CalculatorRoute
  '/calendar': typeof CalendarRoute
  '/instructions': typeof InstructionsRoute
  '/weather': typeof WeatherRoute
  '/work-item': typeof WorkItemRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/board': typeof BoardRoute
  '/calculator': typeof CalculatorRoute
  '/calendar': typeof CalendarRoute
  '/instructions': typeof InstructionsRoute
  '/weather': typeof WeatherRoute
  '/work-item': typeof WorkItemRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/board': typeof BoardRoute
  '/calculator': typeof CalculatorRoute
  '/calendar': typeof CalendarRoute
  '/instructions': typeof InstructionsRoute
  '/weather': typeof WeatherRoute
  '/work-item': typeof WorkItemRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/board'
    | '/calculator'
    | '/calendar'
    | '/instructions'
    | '/weather'
    | '/work-item'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/board'
    | '/calculator'
    | '/calendar'
    | '/instructions'
    | '/weather'
    | '/work-item'
  id:
    | '__root__'
    | '/'
    | '/board'
    | '/calculator'
    | '/calendar'
    | '/instructions'
    | '/weather'
    | '/work-item'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  BoardRoute: typeof BoardRoute
  CalculatorRoute: typeof CalculatorRoute
  CalendarRoute: typeof CalendarRoute
  InstructionsRoute: typeof InstructionsRoute
  WeatherRoute: typeof WeatherRoute
  WorkItemRoute: typeof WorkItemRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  BoardRoute: BoardRoute,
  CalculatorRoute: CalculatorRoute,
  CalendarRoute: CalendarRoute,
  InstructionsRoute: InstructionsRoute,
  WeatherRoute: WeatherRoute,
  WorkItemRoute: WorkItemRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/board",
        "/calculator",
        "/calendar",
        "/instructions",
        "/weather",
        "/work-item"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/board": {
      "filePath": "board.tsx"
    },
    "/calculator": {
      "filePath": "calculator.tsx"
    },
    "/calendar": {
      "filePath": "calendar.tsx"
    },
    "/instructions": {
      "filePath": "instructions.tsx"
    },
    "/weather": {
      "filePath": "weather.tsx"
    },
    "/work-item": {
      "filePath": "work-item.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

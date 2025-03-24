IMPORTANT: Before writing any code, please have a look at other form examples in the codebase.

- Forms are build with the library `@tanstack/react-form`
- The form is created with the `useAppForm` hook exported from `src/components/form/index.tsx`
- For the form fields, use the custom components defined in `src/components/form`
- Validation is done by passing a `zod` schema to the `onChange` form validator
- There's no need to pass validators to each field as long as you pass it to `useAppForm`

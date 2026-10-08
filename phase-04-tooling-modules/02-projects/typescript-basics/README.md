# TypeScript Basics

## Purpose

Practice the basic TypeScript concepts used before moving into React.

## Concepts Practiced

- Basic types: `string`, `number`, `boolean`
- Type inference
- Function parameter types
- Function return types
- Arrays
- Object types
- Type aliases
- Interfaces
- Optional properties
- Union types
- Type checking with `tsc`

## Example

```ts
interface User {
  name: string;
  age: number;
  email?: string;
  id: string | number;
}

const person: User = {
  name: "Sadik",
  age: 24,
  id: "sadik",
};

function getUserName(person: User): string {
  return person.name;
}
```

## Command

```bash
npm run dev
npx tsc --noEmit
npm run build
```


### What I Learned
```text
TypeScript adds type checking on top of JavaScript and helps catch incorrect types before the program runs.
```


### Question:-

The significance of union and intersection types in Typescript.

## Ans:

### Union
Union and Intersection type in Typescript helps to ensure type safety in our code.
When a variable has multiple types or value then union type helps us to define this variable. This variable can be either one type or another type.

Here's an example

```
type PhoneNumber = number | string

const contact:PhoneNumber = 01707894381; // valid
const contact:PhoneNumber = "01707894381"; // valid

const gender = "male"|"female"
```

### Intersection
On the other hand, Intersection type enable the combination of multiple types into a single type. When we need a type that have one type also another type, we can use intersection types.

Here's an example

```
type FrontendDeveloper = {
  skills: string[];
  designation1: "Frontend Developer";
};
type BackendDeveloper = {
  skills: string[];
  designation2: "Backend Developer";
};

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullStackDeveloper: FullStackDeveloper = {
  skills: ["HTML", "JS", "NODE"],
  designation1: "Frontend Developer",
  designation2: "Backend Developer",
};

```

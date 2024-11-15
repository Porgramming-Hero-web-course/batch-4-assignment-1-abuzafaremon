{
  //Problem - Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    const result = keys.every((key) => key in obj);
    return result;
  };

  type Person = { name: string; age: number; email: string };

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };

  const result = validateKeys<Person>(person, ["age", "email"]);
  console.log(result);

  //
}

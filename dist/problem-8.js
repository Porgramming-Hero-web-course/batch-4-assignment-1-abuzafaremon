"use strict";
{
    //Problem - Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
    const validateKeys = (obj, keys) => {
        const result = keys.every((key) => key in obj);
        return result;
    };
    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = validateKeys(person, ["age", "email"]);
    console.log(result);
    //
}

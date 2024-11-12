"use strict";
{
    // Problem - Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    const getProperty = (obj, property) => {
        return obj[property];
    };
    const person = { name: "Alice", age: 30 };
    const result = getProperty(person, "name");
    console.log(result);
}
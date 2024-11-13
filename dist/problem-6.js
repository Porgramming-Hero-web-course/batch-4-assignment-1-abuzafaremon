"use strict";
{
    const updateProfile = (profile, updatedValue) => {
        let updatedProfile = Object.assign(Object.assign({}, profile), updatedValue);
        return updatedProfile;
    };
    const myProfile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
    };
    const result = updateProfile(myProfile, {
        name: "Emon",
        age: 26,
    });
    console.log(result);
    //
}

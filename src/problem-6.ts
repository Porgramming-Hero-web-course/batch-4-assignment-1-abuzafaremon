{
  // Problem - Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  // create an optional type using profile
  type UpdatedValue = Partial<Profile>;

  const updateProfile = <T extends UpdatedValue>(
    profile: Profile,
    updatedValue: T
  ): Profile => {
    let updatedProfile = { ...profile, ...updatedValue };
    return updatedProfile;
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  const result = updateProfile<{ age: number; name: string }>(myProfile, {
    name: "Emon",
    age: 26,
  });

  console.log(result);

  //
}

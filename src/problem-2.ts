{
  // Problem - Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (arr: number[]): number[] => {
    let updatedArray: number[] = [];
    arr.forEach((number: number) => {
      if (updatedArray.indexOf(number) === -1) {
        updatedArray.push(number);
      }
    });
    return updatedArray;
  };

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
}

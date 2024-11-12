{
  // Problem - Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (sentence: string, word: string): number => {
    let wordCount: number = 0;
    const wordArray: string[] = sentence.split(" ");
    wordArray.forEach((mappedWord: string) => {
      if (mappedWord.toLowerCase() === word.toLowerCase()) {
        wordCount++;
      }
    });
    return wordCount;
  };
  const res = countWordOccurrences("I love you my Love", "love");
  console.log(res);

  //
}

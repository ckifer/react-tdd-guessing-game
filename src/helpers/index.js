/**
 * get the letter match count from api
 * @function getLetterMatchCount
 * @param {String} guessedWord
 * @param {String} secretWord
 * @returns {Boolean} response
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
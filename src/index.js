const disemvowel = (str) => {
  vowels = ["a", "e"]
  capitalVowels = ["A", "E"]

  let outStr = str

  for (let ch of str) {
    if (vowels.includes(ch) || capitalVowels.includes(ch)) {
      outStr = outStr.replaceAll(ch, "")
    }
  }
  return outStr
};

module.exports = {
  disemvowel,
};

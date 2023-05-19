const disemvowel = (str) => {
  vowels = ["a", "e", "i", "o", "u"]

  let outStr = str

  for (v of vowels) {
    if (outStr.includes(v)){
      outStr = outStr.replaceAll(v, "")
    }

    if (outStr.includes(v.toUpperCase())){
      outStr = outStr.replaceAll(v.toUpperCase(), "")
    }
  }

  return outStr
};

module.exports = {
  disemvowel,
};

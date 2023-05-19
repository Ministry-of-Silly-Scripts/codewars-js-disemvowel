const disemvowel = (str) => {
  var outStr = str.replaceAll("a", "")
  outStr = outStr.replaceAll("e", "")
  return outStr
};

module.exports = {
  disemvowel,
};

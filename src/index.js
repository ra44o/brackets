module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsObj = {};
  let sourceString = str.split('');
  bracketsConfig.forEach(item => {
    if(item[0] == item[1]) {
      bracketsObj[item[0]] = item[0] + item[0];
      let f = 0;
      sourceString = sourceString.map(elem => 
        elem == item[0] && f++ % 2 != 0 ? item[0] + item[0] : elem
      );
    } else {
      bracketsObj[item[0]] = item[1];
    }
  });

  for (let i = 0; i < sourceString.length; i += 1) {
    if (sourceString[i] in bracketsObj) {
      stack.push(sourceString[i]);
    } else if (bracketsObj[stack.pop()] != sourceString[i]) {
      return false;
    }
  }
  if(stack.length != 0) {
    return false;
  }
  return true;
}

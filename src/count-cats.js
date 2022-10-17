function countCats(matrix) {

  const kitty = '^^';
  const eseyMatrix = matrix.flat();

  return eseyMatrix.reduce(
    function (counter, founded) {
      if (founded == kitty)
        counter++;

      return counter;
    }, 0);
}

module.exports = {
  countCats
};
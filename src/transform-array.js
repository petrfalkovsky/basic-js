const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // const arr = [1, 2, '--discard-next', 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];
  // const arr = [1, 2, 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];

  // const arr = [1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const indexes = {
    "--discard-next": [],
    "--discard-prev": [],
    "--double-next": [],
    "--double-prev": []
  };

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element in indexes) {
      indexes[element].push(i);
    }
  }

  console.log(indexes);

  // пустой слайс вернет копию исходного массива
  // const discartNextArr = arr.slice();

  // for (let i = 0; i < indexes['--discard-next'].length; i++) {
  //   const index = indexes['--discard-next'][i];

  //   if (index < arr.length - 1) {
  //     // удаляю след за "--discard-next" элемент
  //     discartNextArr.splice(index, 2);
  //   }
  // }
  // [1, 2, '--discard-next', 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];
  // console.log(discartNextArr)

  // еще раз создам пустой копию исходного массива
  // const discartPrevArr = arr.slice();

  // for (let i = 0; i < indexes['--discard-prev'].length; i++) {
  //   const index = indexes['--discard-prev'][i];

  //   if (index < arr.length - 1) {
  //     // удаляю след за "--discard-prev" элемент
  //     discartPrevArr.splice(index, 1);
  //   }
  // }

  // [1, 2, '--discard-next', 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];
  // console.log(discartPrevArr)

  // еще раз создам пустой копию исходного массива
  // const doubleNext = arr.slice();

  // for (let i = 0; i < indexes['--double-next'].length; i++) {
  //   const index = indexes['--double-next'][i];

  //   if (index < arr.length - 1) {
  //     // удаляю след за "--double-next" элемент и пушу два впереди стоящих
  //     doubleNext.splice(index, 1, arr[index + 1]);
  //   } else {
  //     doubleNext.splice(index, 1);
  //   }

  // }

  // [1, 2, '--discard-next', 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];
  // console.log(doubleNext)

  // еще раз создам пустой копию исходного массива
  // const doublePrev = arr.slice();

  // for (let i = 0; i < indexes['--double-prev'].length; i++) {
  //   const index = indexes['--double-prev'][i];

  //   if (index < arr.length - 1) {
  //     // удаляю след за "--double-next" элемент и пушу два за ним стоящих
  //     doublePrev.splice(index, 1, arr[index - 1]);
  //   } else {
  //     doublePrev.splice(index, 1);
  //   }

  // }

  // [1, 2, '--discard-next', 3, '--discard-prev', 4, '--double-next', 5, '--double-prev', 6];
  // console.log(doublePrev)

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (current === "--discard-next") {
      i++;
    } else if (current === "--double-next") {
      if (next !== undefined) {
        result.push(next);
      }
    } else if (current === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        result.push(arr[i - 1]);
      }
    } else if (current === "--discard-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        result.pop();
      }
    } else {
      result.push(current);
    }
  }

  return result;
}
// [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5],
// console.log(transform());

module.exports = {
  transform
};

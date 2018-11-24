const toggler = function (item1, item2) {
  let count = 0;
  return function () {
    count++
    return count % 2 == 1 ? item1 : item2;
  }
}

const toggler = function (item1, item2) {
  let count = 0;
  return function () {
    return count++ % 2 == 0 ? item1 : item2;
  }
}

const isSubset = function(superset,subset) {
  const findSubset = function( element ) {
    return superset.includes( element );
  }
  return subset.every( findSubset );
}

exports.toggler = toggler;
exports.isSubset = isSubset;

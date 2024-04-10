function curriedAdd(total) {
  return function addNext(num) {
    if (num === undefined) {
      return total;
    }
    total += num;
    return addNext;
  };
}

module.exports = { curriedAdd };

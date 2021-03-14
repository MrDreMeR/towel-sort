module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length === 0) return [];

  const reverser = (item, index) => {
    let arr = [];
    index % 2 ? arr = item.reverse() : arr = item;
    
    return arr;
  }

  return matrix.reduce((accum, item, index) => {
    
    return accum.concat(reverser(item, index));
  });

}
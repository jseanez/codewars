function sumArray(array) {
    if (array === null || array.length === 0){
      return 0
    }else{
    let sortedArr = array.sort((a, b) => a - b);
    sortedArr.shift();
    sortedArr.pop();
    return sortedArr.reduce((acc, cv)=> acc + cv, 0)
    }
}
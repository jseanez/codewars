function getAverage(marks){
  return Math.floor(marks.reduce((acc, cv) => acc + cv, 0)/marks.length)
}
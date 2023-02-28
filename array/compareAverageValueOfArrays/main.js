function betterThanAverage(classPoints, yourPoints) {
    let classAverageSum = classPoints.reduce((acc, cv) => acc + cv, 0)
    let classAverage = classAverageSum / classPoints.length
    if (classAverage < yourPoints){
      return true;
    } else{
      return false;
    }
}
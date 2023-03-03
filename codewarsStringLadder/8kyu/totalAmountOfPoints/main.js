function points(games) {
    let points = 0;
    for (let i = 0; i < 10; i++) {
      const [x, y] = games[i].split(':').map(Number);
      if (x > y) {
        points += 3;
      } else if (x === y) {
        points += 1;
      }
    }
    return points;
}
const rps = (p1, p2) => {
  if (p1 === p2){
    return "Draw!";
  }else if(p1.charAt(0) === "s" && p2.charAt(0) === "p"){
    return "Player 1 won!";
  }else if(p1.charAt(0) === "r" && p2.charAt(0) === "s"){
    return "Player 1 won!";
  }else if(p1.charAt(0) === "p" && p2.charAt(0) === "r"){
    return "Player 1 won!";
  }else if(p2.charAt(0) === "r" && p1.charAt(0) === "s"){
    return "Player 2 won!";
  }else if(p2.charAt(0) === "p" && p1.charAt(0) === "r"){
    return "Player 2 won!";
  }else if(p2.charAt(0) === "s" && p1.charAt(0) === "p"){
    return "Player 2 won!";
  }
};
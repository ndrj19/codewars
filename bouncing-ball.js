function bouncingBall(h, bounce, window) {
  if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
    let seeBall = 0;
    let ballPosition = h;
    while (ballPosition > window) {
      //falling
      seeBall += 1;
      //bouncing
      if (ballPosition * bounce > window) seeBall += 1;
      ballPosition = ballPosition * bounce;
    }
    return seeBall;
  } else {
    return -1;
  }
}
console.log(bouncingBall(3, 0.66, 1.5));
console.log(bouncingBall(4, 0.25, 1));

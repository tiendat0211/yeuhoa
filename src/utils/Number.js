function Random(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export default Random;

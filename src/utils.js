const getRandom = (max, min = 0) => Math.round(Math.random() * (max - min)) + min;

export default getRandom;

const executePromise = () => {
  const randomPromise = new Promise((resolve, reject) => {
    const aleatArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50 + 1))
    aleatArray.forEach((element, index) => aleatArray[index] = (element * element));
    const sumArray = aleatArray.reduce((acc, curr) => acc + curr, 0);

    (sumArray < 8000) ? resolve(sumArray) : reject();
  });

  randomPromise
    .then((sumArray) => [2, 3, 5, 10].map((n) => Math.random(sumArray / n)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
}

executePromise();

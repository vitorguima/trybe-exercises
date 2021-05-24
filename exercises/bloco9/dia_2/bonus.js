const executePromise = () => {
  const aleatArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50 + 1))
  aleatArray.forEach((element, index) => aleatArray[index] = (element * element));
  const sumArray = aleatArray.reduce((acc, curr) => acc + curr, 0);

  if (sumArray > 8000) {
    throw new Error();
  }

  return sumArray;
}

const sumFromSumArray = (total) => {
  return [2, 3, 5, 10].map((n) => total / n)
}

const execute = async () => {
  try {
    const sumArray2 = await executePromise();
    const sumFromArray = await sumFromSumArray(sumArray2);
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
}

execute();
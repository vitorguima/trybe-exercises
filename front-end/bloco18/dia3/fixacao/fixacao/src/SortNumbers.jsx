import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SorNumbers() {
  const [sortedNumber, sortNumber] = useState('unsorted');
  const [timerCount, setTimer] = useState(0);

  const validateRandom = (number) => {
    if (number % 5 === 0 || number % 3 === 0) {
      return(
        <p>Acerto</p>
      )
    } return(
      <p>Erro</p>
    )
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerCount < 10) {
        setTimer(timerCount + 1);
        console.log(timerCount);
      } else {
        setTimer(0);
      }
    }, 1000);

    if (timerCount === 10) {
      sortNumber(Math.floor(Math.random() * 101))
    }

    if (timerCount === 4) {
      sortNumber('unsorted')
    }

    return () => {
      clearInterval(timer);
    }
  }, [timerCount])

  return(
    <div>
      <h1>{timerCount}</h1>
      <p>{sortedNumber}</p>
      { validateRandom(sortedNumber) }
      <Link to="/todo">TO DO LIST</Link>
    </div>
  )
}
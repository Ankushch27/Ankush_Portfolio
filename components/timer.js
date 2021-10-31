import React, { useState, useEffect, useRef } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevState => prevState + 1)
    }, 1000);
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <div>
      Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear timer</button>
    </div>
  )
}

export default Timer

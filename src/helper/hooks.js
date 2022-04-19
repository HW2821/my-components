const { useState, useEffect } = require("react")

const useDogImg = () => {
  const [dogs, setDogs] = useState([])

  useEffect(async () => {
    const message = await fetchDogs()
    setDogs(message)
  }, [])

  return dogs
}

const fetchDogs = async () => {
  const res = await fetch("")
  const { message } = await res.json()
  return message
}

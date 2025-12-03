import axios from "axios";

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  axios.get("https://lanciweb.github.io/demo/api/actors/").then
    ((resp) => {
      console.log(resp);
    })

  return (
    <>
    </>
  )
}

export default App

import axios from "axios";
import './App.css'
import { useEffect, useState } from 'react'
import Card from "./assets/components/Card";


function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/").then
      ((resp) => {
        setActors(resp.data)
        console.log(resp.data);
      });
  }, []);

  return (
    <>
      <div className="container py-5">
        <h1>my actors</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {actors.map((actor) => (
            <div className="col" key={actor.id}>
             <Card actor={actor}/>
            </div>
          ))}

        </div>
      </div>
    </>
  )
}

export default App

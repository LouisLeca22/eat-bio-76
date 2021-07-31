import Map from "./components/Map"
import {useState, useEffect} from "react"
import Loader from "./components/Loader"
import Header from "./components/Header"

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
       const array = []
      for (let i=1; i < 70; i++ ){
        let res = await fetch(`https://back.agencebio.org/api/gouv/operateurs/?departements=76&filtrerRestaurants=1&filterVenteDetail=1&nb=20&debut=${i}`)
        let {items} = await res.json()
        items.forEach(item => array.push(item))
      }
      
      console.log(array)
      setData(array)
      setLoading(false)
    }
    fetchData(); 
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map data={data}/> : <Loader /> }
    </div>
  );
}

export default App;

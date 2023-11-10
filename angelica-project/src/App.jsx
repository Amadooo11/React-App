import { useState, useEffect } from "react";
import './App.css';
import girl from './girl.png'




function App() {


  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch("http://universities.hipolabs.com/search?country=United%20States")
    const value = await response.json()
    setData(value)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <header className='header'>
        <div className='col-1'>
          <img src={girl} alt="" width={200} height={200} />
        </div>

        <div className='col-2'>
          <p>Krish <br />Full Stack developer</p>
        </div>
      </header>

      <section>
        <div className='row-1'>
         {data[1].name}
        </div>

        <div className='row-2'>
          {data[1].country}
        </div>

        <div className='row-3'>
          <a href={data[1].web_pages}>{data[1].web_pages}</a>
        </div>
      </section>
    </div>
  );
}

export default App;

import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const {REACT_APP_GET_ALL_COUNTRIES} = process.env

const Detail = () => {

  const { id } = useParams()
  const [country, setCountry] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function fetchData(){
      try {
        const response = await axios.get(`${REACT_APP_GET_ALL_COUNTRIES}/id/${id}`)
        const data = response.data
        const capital = data.capital.replace(/[{}""]/g, '').split(',')
        setCountry({
          name : data.name,
          flag: data.flags,
          continent: data.continents,
          capital: capital[0],
          population: data.population,
        })

        if(data.Activities.length > 0){
          setCountry({
            name : data.name,
            flag: data.flags,
            continent: data.continents,
            capital: capital[0],
            population: data.population,
            activity: data.Activities[0].name
          })
        }

        setLoading(false)
        
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  },[id])


  return !loading ? (
    <div>
      <h1>{country.name}</h1>
      <h1>{country.continent}</h1>
      <h1>{country.capital}</h1>
      <h1>{country.activity === undefined ? 'No existen actividades' : country.activity}</h1>
      <h1>{country.population}</h1>
      <img src={country.flag} alt={country.name} height='100px' width='200px'/>
      <div>
        <Link to='/home'>
          <button>Home</button>
        </Link>
      </div>
    </div>
    
  ) : (<h1>Loading</h1>)
}

export default Detail
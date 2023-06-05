import React, {useEffect, useState} from 'react'
import axios from 'axios'
import style from './CreatActivity.module.css'
import NavBar from '../NavBar/NavBar'

const {REACT_APP_GET_ALL_COUNTRIES, REACT_APP_POST_ACTIVITY} = process.env

const CreatActivity = () => {
    
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([])
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []
    })

    const handleChange = e =>{
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    

    useEffect(() =>{
        async function fetchData(){
            try {
                const response = await axios.get(REACT_APP_GET_ALL_COUNTRIES)
                const data = response.data

                setCountries(data)

                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])

    const handleOptionToggle = value =>{
        if(selectedOptions.includes(value)){
            setSelectedOptions(selectedOptions.filter(opt => opt !== value))
        }else{
            setSelectedOptions([...selectedOptions, value])
        }
    }

    const handleSubmit = e =>{
        e.preventDefault()
        input.countries = selectedOptions
        console.log(input)
        axios.post(REACT_APP_POST_ACTIVITY, input)
            .then(() => alert('Actividad Creada Correctamente'))
            .catch(() => alert('error'))   
    }

  return !loading ? (
    <div className={style.backgroundCreate}>
        <NavBar></NavBar>
        <div className={style.divForm}>
            <h1> Create an Activity </h1>
            <div className={style.inputsForm}>
                <form className={style.createForm} onSubmit={handleSubmit}>
                    <input className={style.createInput} placeholder='Activity Name' onChange={handleChange} name='name'></input>
                    <div className={style.createSelects}>
                        <select  onChange={handleChange} name="difficulty" id="difficultySelect">
                            <option>--Select difficulty--</option>
                            <option value="1">1- Easy</option>
                            <option value="2">2- Medium</option>
                            <option value="3">3- Hard</option>
                            <option value="4">4- Extreme</option>
                        </select>
                    </div>
                    <div className={style.createSelects}>
                        <select  onChange={handleChange} name="duration" id="durationSelect">
                            <option>--Select Duration--</option>
                            <option value="1">1 hour</option>
                            <option value="2">2 hour</option>
                            <option value="3">3 hour</option>
                            <option value="4">4 hour and more</option>
                        </select>
                    </div>
                    <div className={style.createSelects}>
                        <select  onChange={handleChange} name="season" id="season">
                            <option>--Select Season--</option>
                            <option value="1">Summer</option>
                            <option value="2">Winter</option>
                            <option value="3">Fall</option>
                            <option value="4">Autumn</option>
                        </select>
                    </div>
                    
                    <select 
                        id='countriesSelect' 
                        multiple
                        name='countriesSelect'
                        value={selectedOptions}
                        onChange={(e) => handleOptionToggle(e.target.value)}
                        className={style.countrySelections}
                    >
                        {countries && countries.map(country =>{
                            return <option key={country.id} value={country.id}>{country.name}</option>
                        })}
                    </select>
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    </div>
  ): (<h1>Loading</h1>)
}

export default CreatActivity
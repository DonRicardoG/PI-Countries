import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getAllCountries } from '../../redux/action-creators';
import Card from '../Card/Card.jsx';
import style from '../Home/home.module.css';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';


const Home = () => {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.allCountries)

  useEffect(() => {
    dispatch(getAllCountries())
  }, [dispatch])

  return (
    <div>
      <NavBar></NavBar>
      <div className={style.home}>
        <div className={style.filterBtns}>
          <div className={style.filters}>
            <select className={style.filterAlpha} name='alpha' id='alphaOrder'>
              <option value="">--Select and option --</option>
              <option value="Americas">Alphabetical Order</option>
              <option value="Asia">Population Order</option>
            </select>
            <SearchBar></SearchBar>
            <select className={style.filterContinents} name="continent-type" id="continentsSelect">
              <option value="">--Select and option --</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Antartica">Antartica</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      <div className={style.homeFlex}>
      {allCountries.map(country => (
        <Card
          key = {country.id}
          name={country.name}
          continent={country.continents}
          image ={country.flags}
          id={country.id}
        />
      ))}
      </div>
    </div>
      
    </div>
    
  )
}

export default Home
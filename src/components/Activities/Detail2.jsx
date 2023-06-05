const Detail = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.allCountries)

    useEffect(() =>{
        dispatch(getAllCountries())
    },[dispatch])

    const isCountry = allCountries.find(country => country.id === id)

    const flags = isCountry.flags.replace(/[{}]/g, '')
    const flagsArray = flags.split(',')
    const flag = flagsArray[0]

  return (
    <div>
        <div>
            <h1>{isCountry.name}</h1>
            <img src={flag} alt={isCountry.name} height='100px' width='200px'/>
            <h2>{isCountry.continents}</h2>
            <h2>{isCountry === null ? '' : isCountry.capital.replace(/[{}]/g, '')}</h2>
            <h1>{isCountry.population}</h1>
        </div>
        <Link to={'/home'}>Home</Link>
        
    </div>
  )
}

export default Detail
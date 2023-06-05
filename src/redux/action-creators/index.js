import axios from "axios";
import { GET_ALL_COUNTRIES} from "../action-types";
const {REACT_APP_GET_ALL_COUNTRIES} = process.env


export const getAllCountries = () =>{
    return async (dispatch) =>{
        const response = await axios.get(REACT_APP_GET_ALL_COUNTRIES)
        dispatch({type: GET_ALL_COUNTRIES, payload: response.data})
    }
}





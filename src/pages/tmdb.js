import axios from "axios";

const API_KEY = "265e4832988cc479ac9414f05cd2dcf4";
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () =>{
    try{
        const res = await axios.get(`${BASE_URL}/trending/movie/week`,{
            params:{
                api_key: API_KEY,
            },
        });
        return res.data.results;
    }catch(err){
        console.error(err);
        return [];
    }
};
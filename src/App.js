import {useEffect} from 'react';

const API_URL =    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const App=() => {
const searchMovis=async (title) => {
    let response=await fetch(`${API_URL}${title}`);
    let data=await response.json();
    console.log(data)
}  

useEffect(()=>{
    searchMovis('saw');
},[])

    return (
        <h1>hello world</h1>
    )
}


export default App
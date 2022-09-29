import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '517e23a6d8msh138d75aab2b0f00p131290jsn19e935cddc39', // src/.env removed where API key was stored
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options)
  return data;
}
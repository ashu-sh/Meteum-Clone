import axios from 'axios';
import React, { useEffect, useState} from 'react'


const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {
      textFormat: 'Raw',
      safeSearch: 'Off'
    },
    headers: {
      'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'API_Key',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
  };

function Channel() {

  const [News,getNews] = useState() 

  useEffect(()=>{

    axios.request(options).then((res)=>{
        console.log(res.data);
        getNews(res.data);
    }).catch((err)=>{
        console.log("error",err);
    })
  },[])

  return (
    <div>
        <h3>{News.value.description}</h3>
    
    </div>
  )
}

export default Channel
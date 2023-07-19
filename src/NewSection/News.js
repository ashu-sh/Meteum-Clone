import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, Nav } from 'react-bootstrap'


const options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news",
  params: {
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "f2c96fff79msh40b7292eff6e669p14bcd0jsnb9466e88f411",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

function News() {

  const [news, getNews] = useState('');

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        getNews(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  return (
    <div>{news && (
      <>
      <Nav className='justify-content-center'>
        <Card  style={{ color:"#fff",width:'44rem', minHeight:"14rem",backgroundColor:"#333333",borderRadius:"8px 8px 8px 8px",margin:"5px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Img variant="top"style={{height:"14rem"}} src={news.value[1].image.thumbnail.contentUrl} />
        <Card.Body>
          <div style={{margin:"10px 8px"}}>
          <Card.Title className='text-start'>Top News</Card.Title>
          <Card.Text className='text-start'>{news.value[1].name}</Card.Text>
          </div>
       </Card.Body>
       </Card>
       </Nav>
       <Nav className='justify-content-center'>
        <Card  style={{ color:"#fff",width:'44rem', minHeight:"14rem",backgroundColor:"#333333",borderRadius:"8px 8px 8px 8px",margin:"5px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Img variant="top"style={{height:"14rem"}} src={news.value[2].image.thumbnail.contentUrl} />
        <Card.Body>
          <div style={{margin:"10px 8px"}}>
          <Card.Title className='text-start'>Top News</Card.Title>
          <Card.Text className='text-start'>{news.value[2].name}</Card.Text>
          </div>
       </Card.Body>
       </Card>
       </Nav>
       <Nav className='justify-content-center'>
        <Card  style={{ color:"#fff",width:'44rem', minHeight:"14rem",backgroundColor:"#333333",borderRadius:"8px 8px 8px 8px",margin:"5px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Img variant="top"style={{height:"14rem"}} src={news.value[3].image.thumbnail.contentUrl} />
        <Card.Body>
          <div style={{margin:"10px 8px"}}>
          <Card.Title className='text-start'>Top News</Card.Title>
          <Card.Text className='text-start'>{news.value[3].name}</Card.Text>
          </div>
       </Card.Body>
       </Card>
       </Nav>
       <Nav className='justify-content-center'>
        <Card  style={{ color:"#fff",width:'44rem', minHeight:"14rem",backgroundColor:"#333333",borderRadius:"8px 8px 8px 8px",margin:"5px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Img variant="top"style={{height:"14rem"}} src={news.value[4].image.thumbnail.contentUrl} />
        <Card.Body>
          <div style={{margin:"10px 8px"}}>
          <Card.Title className='text-start'>Top News</Card.Title>
          <Card.Text className='text-start'>{news.value[4].name}</Card.Text>
          </div>
       </Card.Body>
       </Card>
       </Nav>
       <Nav className='justify-content-center'>
        <Card  style={{ color:"#fff",width:'44rem', minHeight:"14rem",backgroundColor:"#333333",borderRadius:"8px 8px 8px 8px",margin:"5px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Img variant="top"style={{height:"14rem"}} src={news.value[5].image.thumbnail.contentUrl} />
        <Card.Body>
          <div style={{margin:"10px 8px"}}>
          <Card.Title className='text-start'>Top News</Card.Title>
          <Card.Text className='text-start'>{news.value[5].name}</Card.Text>
          </div>
       </Card.Body>
       </Card>
       </Nav>
     </>
    )}   
    </div>
  )
}

export default News
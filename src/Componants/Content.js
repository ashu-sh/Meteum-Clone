import { IconButton } from '@material-ui/core';
import React, { useState } from 'react'
import { Nav,Card} from 'react-bootstrap'
import { FiWind,FiSearch } from "react-icons/fi";
import {WiHumidity} from "react-icons/wi";

// http://api.weatherstack.com/current?access_key=b34f1e67bef074d0c2209e9d2a569b28&query=New York"


export const Content = () => {

  const[city, setCity] = useState()
  const [weatherData, setWeatherData] = useState('');

  const handleSearch = async (e) =>{
    e.preventDefault();
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cc3d5383f8c32bc5635faaed148eb4d&units=metric`)
    const data = await res.json();
    setWeatherData(data);
  }

  // const WeatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const cityImage = `https://source.unsplash.com/450x390/?${weatherData.name}`;
  const currTime = new Date().toLocaleTimeString();
 
  return (
    <>
    <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link href="/home">Live Weather</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Forcast</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Air Quality</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">
            Support
          </Nav.Link>
        </Nav.Item>
    </Nav>

    {/* Search Bar & App Title */}
    <p className="text-center mt-5 mb-4">
      <div className='Title'>Meteum</div>
    </p>
    <div className="text-center mt-5 mb-4">
      <div>
      <form onSubmit={handleSearch}>
        <IconButton type='submit' style={{position:"absolute",margin:"-3px 0px 0px 0px"}}>
        <FiSearch style={{width:"20px",color:"#fff"}}/>
        </IconButton>
        <input  className='search_componant' type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name"/>
      </form>
      </div>  
      </div> 
      <div>
        <Nav className='justify-content-center'>
        <Card className='text-start' style={{ color:"#fff",width:'22rem', minHeight:"12rem",backgroundImage:`url(${cityImage})`,backgroundSize: 'cover',backgroundRepeat:'no-repeat',borderRadius:"8px 8px 8px 8px",margin:"0px",border:"none",boxShadow:"0px 2px 8px 0px grey"}}>
        <Card.Body>{weatherData && (
          <>
          <br/>
          <br/>
          <br/>
          <div  style={{margin:"0px 50px;"}}>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt='Icons'></img>
          <Card.Title style={{fontSize:"35px",margin:"0px 8px ",fontFamily:"'Varela Round', sans-serif",display:"flex"}}>{weatherData.name}</Card.Title>
          <Card.Title style={{fontSize:"18px",margin:"0px 8px ",fontFamily:"'Poppins', sans-serif"}}>{currTime}</Card.Title>
          </div>
          </>
        )}
       </Card.Body>
       </Card>
       <Card style={{ width: '22rem',borderRadius:"8px 8px 8px 8px",boxShadow:"0px 2px 8px 0px grey",margin:"5px",border:"none"}}>
      <Card.Img variant="top"/>
      <Card.Body>{weatherData && (
        
          <>
          <Card.Title className='text-start' style={{fontSize:"55px",fontFamily:"'Poppins', sans-serif"}}>{weatherData.main.temp} °C</Card.Title>
          <Card.Title className='text-start' style={{fontFamily:"'Poppins', sans-serif",display:"flex"}}>{weatherData.weather[0].description}&nbsp;<p style={{fontSize:"16px",padding:"3px",fontWeight:"800"}}>Feels Like {weatherData.main.feels_like} °C</p></Card.Title>
          <Card.Title className='text-start' style={{fontSize:"16px",fontFamily:"'Varela Round', sans-serif"}}></Card.Title>
          <br/>
          <br/>
          <Card.Text className='text-start'><WiHumidity style={{color:"blue",height:"30px",width:"50px"}}/>%</Card.Text>
          <Card.Text className='text-start'><FiWind  style={{color:" #66b3ff",height:"30px",width:"50px"}}/>m/s</Card.Text>
          </>
        )};
      </Card.Body>
    </Card>
       </Nav>
       
      </div>
      
    </>
    
  )
}
export default Content



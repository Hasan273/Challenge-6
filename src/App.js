import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Login from './pages/Login';
import Register from './pages/Register';
import Slider from './slider';




const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=ef3b961f319f812ac0d501ce712550e8";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=ef3b961f319f812ac0d501ce712550e8&query"

function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]= useState('');
  

  useEffect(()=>{
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  const searchMovie= async(e)=>{
    e.preventDefault();
    console.log("Searching")
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=ef3b961f319f812ac0d501ce712550e8&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      console.log(data);
      setMovies(data.results)
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e)=>{
    setQuery(e.target.value);
  }

  return (
    <>
    <div>
    <Navbar bg='dark' variant='dark'>
        <Container>
            <Navbar.Brand><h1 className="text-danger" >Movielist</h1></Navbar.Brand>
            <Form className="d-flex" onSubmit={searchMovie}>
            <Form.Control
              onSubmit={searchMovie}
              type="search"
              placeholder="Search"
              className="me-1"
              aria-label="Search"
              name="query"
              value={query}
              onChange={changeHandler}/>
            <Button variant="outline-danger" type="sumbit">Search</Button>
          </Form>
            <Nav>
            <Button className="me-3" variant="outline-danger" href='/Login' onClick={Login}>Login</Button>{' '}
            <Button variant="danger" href='/Register' onClick={Register}>Register</Button>{' '}
            </Nav>
        </Container>
       </Navbar>
    </div>
    <Slider/>
    <h1 className='p-4 m-1'>Popular Movies</h1>
    <div className='container'>
      <div className='grid'>
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id} {...movieReq}/>)}
      </div>
    </div>
    </>
  );
}

export default App;

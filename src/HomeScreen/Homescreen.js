import React from 'react'
import Banner from './basComponent/Banner/Banner'
import requests from "../axios/Request"
import Nav from './basComponent/NavBar/Nav'
import "./HomeScreen.css"
import Row from '../RowComponents/Row'
function Homescreen() {
    return (
        <div className='homeScreen'>
            <Nav/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
            <Row title= 'Trending Now'fetchUrl={requests.fetchTrending} />
            <Row title="Action Movies"fetchUrl={requests.fetchActionsMovies}/>
            <Row title= 'Comedy Movies'fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
            <Row title= 'Romance Movies'fetchUrl={requests.fetchRomanceMovies} />
            <Row title= 'Documentaries'fetchUrl={requests.fetchDocumentaries} />
            
           

          
        </div>
        
     
         // Rows
    )
}

export default Homescreen

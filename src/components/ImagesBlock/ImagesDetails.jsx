import React, { Component } from "react";
import src from "../../assets/shantanu.png"
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
    Divider,
    Image,
    Grid,
    Pagination
  } from "semantic-ui-react"; 

import "./imageDetails.css";
import ImagesDetails2 from "./ImagesDetails2";
import ImagesDetails3 from "./ImagesDetails3";
import ImagesDetails1 from "./ImagesDetails1";
/* eslint import/no-webpack-loader-syntax: off */
// const src = '../../../public/logo192.png'
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFuc2h1a2F1bDU3IiwiYSI6ImNreWhzbTRhMzFjbHozM3Focnp1cTlibDkifQ.OVdwiLZeI_LFgzNsBliIMA';  
class ImagesDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // lng1: -58.67970354687943,
            // lat1: -34.74364891186528,
            // lng2: -58.39012114479379,
            // lat2: -34.98389791149417,
            // lng3: -58.08367546403999,
            // lat3: -34.87448820924735,
            // lng4: -58.08130931527511,
            // lat4: -34.961072530951064,
            // zoom: 17,
            displayMap: false,
            imagesDetailsFlag1: true,
            imagesDetailsFlag2: false,
            imagesDetailsFlag3: false
        }
    }

    onPageChange = (event, data) =>{
        if(data.activePage == 1){
            this.setState({
                imagesDetailsFlag1: true,
                imagesDetailsFlag2: false,
                imagesDetailsFlag3: false
            })
            console.log("active page is 1")
        }else if(data.activePage == 2){
            this.setState({
                imagesDetailsFlag1: false,
                imagesDetailsFlag2: true,
                imagesDetailsFlag3: false
            })
            console.log("active page is 2")
        }else if(data.activePage == 3){
            this.setState({
                imagesDetailsFlag1: false,
                imagesDetailsFlag2: false,
                imagesDetailsFlag3: true
            })
            console.log("active page is 3")
        }
        console.log("event name is ", event)
        console.log("data type is ", data)
    }
    render(){
//         mapboxgl.accessToken = 'sk.eyJ1Ijoic2FnZ2FyMjQiLCJhIjoiY2t5YjQxMWZnMGJ1NzJ2b2wzbmIzbnc2YSJ9.g2-W6nPPJ1sWf1uy9CwFGQ';
//         const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style: 'mapbox://styles/mapbox/satellite-v9', // style URL
//         center: [137.9150899566626, 36.25956997955441], // starting position [lng, lat]
//         zoom: 9 // starting zoom
// });
        return (
            // <div>
            //     <div ref={this.mapContainer1} className="map-container" />
            //     <div ref={this.mapContainer2} className="map-container" />
            //     <div ref={this.mapContainer3} className="map-container" />
            //     <div ref={this.mapContainer4} className="map-container" />
            // </div>
            <div>
                <Grid.Row>
                    {(this.state.imagesDetailsFlag1 && 
                        <ImagesDetails1/>) || (this.state.imagesDetailsFlag2 && <ImagesDetails2/>) || (this.state.imagesDetailsFlag3 && <ImagesDetails3/>)}
                </Grid.Row>
                <Grid.Row>
                    <Pagination defaultActivePage={1} totalPages={3} onPageChange={this.onPageChange}/>
                </Grid.Row>
            </div>
            // <div>
            //     <Image.Group size='small'>
            //         <Image src={src} />
            //         <Image src={src} />
            //         <Image src={src} />
            //     </Image.Group>
            //     <Divider hidden />
            //     <Image.Group size='small'>
            //         <Image src={src} />
            //         <Image src={src} />
            //         <Image src={src} />
            //     </Image.Group>
            // </div>
        )
    }
}

export default ImagesDetails;
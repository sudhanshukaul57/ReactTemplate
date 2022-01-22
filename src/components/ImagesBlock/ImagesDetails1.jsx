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
/* eslint import/no-webpack-loader-syntax: off */
// const src = '../../../public/logo192.png'
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFuc2h1a2F1bDU3IiwiYSI6ImNreWhzbTRhMzFjbHozM3Focnp1cTlibDkifQ.OVdwiLZeI_LFgzNsBliIMA';  
class ImagesDetails1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lng1: -58.08130931527511,
            lat1: -34.961072530951064,
            lng2: -58.08130931527511,
            lat2: -34.961072530951064,
            lng3: -58.08130931527511,
            lat3: -34.961072530951064,
            lng4: -58.08130931527511,
            lat4: -34.961072530951064,
            zoom: 17,
            displayMap: false
        }
        this.mapContainer1 = React.createRef();
        this.mapContainer2 = React.createRef();
        this.mapContainer3 = React.createRef();
        this.mapContainer4 = React.createRef();
    }

    componentDidMount() {
        const { lng1, lat1, lng2, lat2, lng3, lat3, lng4, lat4, zoom } = this.state;
        const map1 = new mapboxgl.Map({
        container: this.mapContainer1.current,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: [lng1, lat1],
        zoom: zoom
        });

        const map2 = new mapboxgl.Map({
            container: this.mapContainer2.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [lng2, lat2],
            zoom: zoom
        });
        const map3 = new mapboxgl.Map({
            container: this.mapContainer3.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [lng3, lat3],
            zoom: zoom
        });
        const map4 = new mapboxgl.Map({
            container: this.mapContainer4.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [lng4, lat4],
            zoom: zoom
        });

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
            <Grid columns={2} divided block>
                <Grid.Row id="row_image1">
                    <Grid.Column>
                        <div ref={this.mapContainer1} className="map-container" />
                    </Grid.Column>
                    <Grid.Column>
                        <div ref={this.mapContainer2} className="map-container" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row id="row_image2">
                    <Grid.Column>
                        <div ref={this.mapContainer3} className="map-container" />
                    </Grid.Column>
                    <Grid.Column>
                        <div ref={this.mapContainer4} className="map-container" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
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

export default ImagesDetails1;
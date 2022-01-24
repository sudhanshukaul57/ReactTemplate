import React, { Component } from "react";
import src from "../../assets/shantanu.png"
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
    Divider,
    Image,
    Grid,
    Pagination,
    Label
  } from "semantic-ui-react"; 

import "./imageDetails.css";
/* eslint import/no-webpack-loader-syntax: off */
// const src = '../../../public/logo192.png'
mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaGFuc2h1a2F1bDU3IiwiYSI6ImNreWhzbTRhMzFjbHozM3Focnp1cTlibDkifQ.OVdwiLZeI_LFgzNsBliIMA';  
class ImagesDetails2 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lng1: -58.39012114479379,
            lat1: -34.98389791149417,
            lng2: -58.39012114479379,
            lat2: -34.98389791149417,
            lng3: -58.39012114479379,
            lat3: -34.98389791149417,
            lng4: -58.39012114479379,
            lat4: -34.98389791149417,
            zoom: 17,
            displayMap: false
        }
        this.mapContainer1 = React.createRef();
        this.mapContainer2 = React.createRef();
        this.mapContainer3 = React.createRef();
        this.mapContainer4 = React.createRef();
    }

    componentDidMount() {
        let { lng1, lat1, lng2, lat2, lng3, lat3, lng4, lat4, zoom } = this.state;
        let imageData = this.props.imageData
        lng1 = imageData[0].Long
        lat1 = imageData[0].Lat
        lng2 = imageData[1].Long
        lat2 = imageData[1].Lat
        lng3 = imageData[2].Long
        lat3 = imageData[2].Lat
        lng4 = imageData[3].Long
        lat4 = imageData[3].Lat
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

        let imageData = this.props.imageData
        let label1 = imageData[0].Label
        let label2 = imageData[1].Label
        let label3 = imageData[2].Label
        let label4 = imageData[3].Label
        
        if(label1 == 0){
            label1 = "Non Slum"
        }else{
            label1 = "Slum"
        }

        if(label2 == 0){
            label2 = "Non Slum"
        }else{
            label2 = "Slum"
        }

        if(label3 == 0){
            label3 = "Non Slum"
        }else{
            label3 = "Slum"
        }

        if(label4 == 0){
            label4 = "Non Slum"
        }else{
            label4 = "Slum"
        }
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
                        <Grid columns={2}>
                            <Grid.Column>
                                <div ref={this.mapContainer1} className="map-container" />
                            </Grid.Column>
                            <Grid.Column>
                                <Label>{label1}</Label>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                <div ref={this.mapContainer2} className="map-container" />
                            </Grid.Column>
                            <Grid.Column>
                                <Label>{label2}</Label>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row id="row_image2">
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                <div ref={this.mapContainer3} className="map-container" />
                            </Grid.Column>
                            <Grid.Column>
                                <Label>{label3}</Label>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        <Grid columns={2}>
                            <Grid.Column>
                                <div ref={this.mapContainer4} className="map-container" />
                            </Grid.Column>
                            <Grid.Column>
                                <Label>{label4}</Label>
                            </Grid.Column>
                        </Grid>
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

export default ImagesDetails2;
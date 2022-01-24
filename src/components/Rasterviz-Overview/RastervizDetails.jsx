import React, { Component } from "react";
import {
    Grid,
    Button,
    Dimmer, Loader, Segment
  } from "semantic-ui-react"; 
import FileSelection from "../FilesBlock/FileSelection";
import GraphDetails from "../GraphBlock/GraphDetails";
import ImagesDetails from "../ImagesBlock/ImagesDetails";
import LabelDetails from "../LabelBlock/LabelDetails";
import "./rasterviz.css";
import axios from "axios";

class RastervizDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            displayMap: false,
            labelDetails: {},
            labelDisabled: true,
            loaderEnabled: false,
            labelComponent: false,
            imageDetails1: [],
            imageDetails2: [],
            imageDetails3: []
        }
    }

    submitLabels = async () =>{
        this.setState({
            loaderEnabled: true
        })
        const endPoint = "http://127.0.0.1:5000/satlab/label"
        const requestBody = {}
        // Uncomment below code
        const labelDetails = await axios.post(
            endPoint, requestBody
        )
        console.log("labels are :", labelDetails)
        console.log("Submit button clicked")
        this.setState({
            displayMap: true,
            labelDetails: labelDetails,
            labelDisabled: true,
            loaderEnabled: false,
            labelComponent: false
        })
    }
    disableLabel = () => {
        this.setState({
            labelDisabled: false,
            labelComponent: true
        })
    }

    enableImageComponent = () => {
        this.setState({
            labelComponent: false,
            displayMap: true
        })
    }

    setImageData = (imageDetails) => {
        let imageDetail = imageDetails.data.data
        let imageDetails1 = []
        let imageDetails2 = []
        let imageDetails3 = []
        for(let i=0; i<12;i++){
            if(i<4){
                imageDetails1.push(imageDetail[i])
            }else if(i<8){
                imageDetails2.push(imageDetail[i])
            }else{
                imageDetails3.push(imageDetail[i])
            }
        }
        this.setState({
            imageDetails1: imageDetails1,
            imageDetails2: imageDetails2,
            imageDetails3: imageDetails3
        })
    }

    render(){
        return (
            // <div>
            //     <ImagesDetails/>
            // </div>
           <div>
               {(this.state.labelDisabled &&  <FileSelection disableLabel={this.disableLabel}/>) || (this.state.labelComponent && <LabelDetails enableImages={this.enableImageComponent} setImageData={this.setImageData}/>) || (this.state.displayMap && <ImagesDetails  imageDetails1 = {this.state.imageDetails1} imageDetails2 = {this.state.imageDetails2} imageDetails3 = {this.state.imageDetails3}/> )}
           </div>
            // <Grid columns={2} divided block>
            //     <Grid.Row>
            //         <Grid.Column>
            //             <FileSelection disableLabel={this.disableLabel}/>
            //         </Grid.Column>
            //         <Grid.Column>
            //             <LabelDetails/>
            //         </Grid.Column>
            //     </Grid.Row>
            //     <Grid.Row id="row1" centered>
            //             {(!this.state.loaderEnabled && <Button inverted color="green" onClick={this.submitLabels} disabled={this.state.labelDisabled}>Label Images</Button>) || (this.state.loaderEnabled && 
            //                 <Loader active inline='centered' >Preparing Files</Loader>)}
            //     </Grid.Row>
            //     <Grid.Row>
            //         <Grid.Column>
            //             {this.state.displayMap && <ImagesDetails/>}
            //         </Grid.Column>
            //         <Grid.Column>
            //             {this.state.displayMap && <GraphDetails labelDetails={this.state.labelDetails}/>}
            //         </Grid.Column>
            //     </Grid.Row>
            // </Grid>
        )
    }
}

export default RastervizDetails;
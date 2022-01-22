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
            labelComponent: false
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
    render(){
        return (
            // <div>
            //     <ImagesDetails/>
            // </div>
           <div>
               {(this.state.labelDisabled &&  <FileSelection disableLabel={this.disableLabel}/>) || (this.state.labelComponent && <LabelDetails enableImages={this.enableImageComponent}/>) || (this.state.displayMap && <ImagesDetails/> )}
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
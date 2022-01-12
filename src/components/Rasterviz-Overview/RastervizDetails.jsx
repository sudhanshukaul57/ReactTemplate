import React, { Component } from "react";
import {
    Grid,
    Button
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
    }

    submitLabels = async () =>{
        const endPoint = "http://127.0.0.1:5000/satlab/label"
        const requestBody = {}
        const labelDetails = await axios.post(
            endPoint, requestBody
        )
        console.log("Submit button clicked")
    }
    
    render(){
        return (
            <Grid columns={2} divided block>
                <Grid.Row>
                    <Grid.Column>
                        <FileSelection/>
                    </Grid.Column>
                    <Grid.Column>
                        <LabelDetails/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                        <Button color="blue" onClick={this.submitLabels}>Label Images</Button>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <ImagesDetails/>
                    </Grid.Column>
                    <Grid.Column>
                        <GraphDetails/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default RastervizDetails;
import React, { Component } from "react";
import {
    Grid
  } from "semantic-ui-react"; 
import FileSelection from "../FilesBlock/FileSelection";
import GraphDetails from "../GraphBlock/GraphDetails";
import ImagesDetails from "../ImagesBlock/ImagesDetails";
import LabelDetails from "../LabelBlock/LabelDetails";
import "./rasterviz.css";

class RastervizDetails extends React.Component{

    constructor(props){
        super(props);
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
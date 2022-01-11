import React, { Component } from "react";
import {
    Grid,
    Button,
    Label
  } from "semantic-ui-react"; 

class FileSelection extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Grid divided="vertically">
                    <Grid.Row columns={3}>
                        <Grid.Column>
                                <Button  color="blue" onClick={this.getEthDetails}>Choose File</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Label>No File Chosen</Label>   
                        </Grid.Column>
                        <Grid.Column>
                            <Button  color="blue" onClick={this.getFaucetDetails}>Submit</Button>   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default FileSelection;
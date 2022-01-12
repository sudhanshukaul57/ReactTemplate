import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Input
  } from "semantic-ui-react"; 
import axios from "axios";

class FileSelection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            path: ""
        }
    }

    onChange(e){
        let files = e.target.files
        console.log("data file", files)
    }

    onPathSubmit =  async () =>{
        const endPoint = "http://127.0.0.1:5000/satlab/load"
        const requestBody = {
            "path": this.state.searchValue
        }
        
        const fileDetails = await axios.post(
            endPoint, requestBody
        )
        console.log("Form submit clicked and updated path is ", this.state.path)
    }

    getInputValue = (event, {value}) => {
        this.setState({
          path: value
        })
    }

    render(){
        return (
            <div>
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        {/* <Grid.Column>
                            <Label>Enter Path</Label>   
                        </Grid.Column> */}
                        <Grid.Column>
                            <Input style={{ width:"300px" }} focus placeholder='Enter Path' onChange={this.getInputValue} />
                                {/* <Button  color="blue" onClick={this.getEthDetails}>Choose File</Button> */}
                        </Grid.Column>
                        {/* <div>
                            <input type ="file" name="file" directory="" webkitdirectory="" onChange={(e) => this.onChange(e)}/>
                        </div> */}
                        <Grid.Column>
                            <Button   onClick={this.onPathSubmit}>Submit</Button>   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default FileSelection;
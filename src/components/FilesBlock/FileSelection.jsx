import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Input
  } from "semantic-ui-react"; 

class FileSelection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    onChange(e){
        let files = e.target.files
        console.log("data file", files)
    }

    onFormSubmit = () =>{
        console.log("Form submit clicked")
    }

    getInputValue = (event, {value}) => {
        console.log("Search value is ", value)
        this.setState({
          searchValue: value
        })

        console.log("Search state value is ", this.state.searchValue)
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
                            <Button   onClick={this.onFormSubmit}>Submit</Button>   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default FileSelection;
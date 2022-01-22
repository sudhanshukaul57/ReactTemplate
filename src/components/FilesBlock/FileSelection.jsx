import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Input
  } from "semantic-ui-react"; 
import axios from "axios";
import "./files.css";

class FileSelection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            path: "",
            formData:[]
        }
    }

    async onChange(e) {

        let file = e.target.files

        
        console.log("data file", typeof(file))

      
         // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
    //   formData.append(
    //     "myFile",
    //     file,
    //     file.name
    //   );

    for(let i=0;i<file.length;i++)
        {
            formData.append('file', file[i])

        }




    
      // Details of the uploaded file
    console.log(formData);
    this.setState({
        formData: formData
    })
        // let data = new FormData();
        // data.append('file', files[0]);
        
        // console.log("data", data)

        // const endPoint = "http://127.0.0.1:5000/satlab/load"
        // const requestBody = {
        //     "path": formData
        // }
        // const fileDetails = await axios.post(
        //     endPoint, formData,{headers}
        // )

      //  console.log()
    }


    onPathSubmit =  async () =>{

        console.log("Search value is", this.state.formData)
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Content-type': 'multipart/form-data; boundary=---------------------------974767299852498929531610575'
        }

        const endPoint = "http://127.0.0.1:5000/satlab/load"
        const fileDetails = await axios.post(
            endPoint, this.state.formData,{headers}
        )

        // const endPoint = "http://127.0.0.1:5000/satlab/load"
        // const requestBody = {
        //     "path": this.state.path
        // }
        // // const fileDetails = await axios.post(
        // //     endPoint, requestBody
        // // )
        // console.log("Form submit clicked and updated path is ", this.state.path)
        this.props.disableLabel()
    }

    getInputValue = (event, {value}) => {
       // console.log(value)
        this.setState({
          path: value
        })

        
    }

    render(){
        return (
            // <div>
            //     <input type ="file" name="file" directory="" webkitdirectory="" onChange={(e) => this.onChange(e)}/>
            // </div>
            <div id="files">
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        {/* <Grid.Column>
                            <Label>Enter Path</Label>   
                        </Grid.Column> */}
                        <Grid.Column>
                        <input type ="file" id="file" name="file" class="inputfile" directory="" webkitdirectory="" onChange={(e) => this.onChange(e)}/>
                        <label for="file">Choose a file</label>
                                {/* <Button  color="blue" onClick={this.getEthDetails}>Choose File</Button> */}
                        </Grid.Column>
                        {/* <div>
                            <input type ="file" name="file" directory="" webkitdirectory="" onChange={(e) => this.onChange(e)}/>
                        </div> */}
                        <Grid.Column>
                            <Button id="button1" inverted color="blue"   onClick={this.onPathSubmit}>Submit</Button>   
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default FileSelection;
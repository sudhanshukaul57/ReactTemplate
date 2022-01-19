import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Form,
    Checkbox
  } from "semantic-ui-react"; 
import axios from "axios";
import "./label.css";

class LabelDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lf_index: []
        }
    }

    toggleCheckBox = async (e) => {
        console.log("event value is ", e.target.checked)
        let value = parseInt(e.target.id)
        let indexArray = this.state.lf_index
        if(!e.target.checked){
            let valueIndex = indexArray.indexOf(value)
            if(valueIndex>-1){
                indexArray.splice(valueIndex,1)
            }
        }else{
            indexArray.push(value)
        }
        this.setState({
            lf_index: indexArray
        })
        console.log("Checkbox clicked ", e.target.id)
        console.log("updated Index array is ", indexArray)

        const endPoint = "http://127.0.0.1:5000/satlab/labelingfunctions"
        const requestBody = {
            "lf_index" : this.state.lf_index
        }
        const labelDetails = await axios.post(
            endPoint, requestBody
        )
        console.log("Labels are updated")
    }
    render(){
        return (
            <div id="functions">
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column >
                                <Label> Spatial Labeling Functions:</Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Form.Group>
                                    <Form.Field>
                                        <Checkbox id={1} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={2} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={3} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={4} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={5} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={6} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={7} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={8} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={9} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={10} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    {/* <Form.Field  id={1} control='input' type='checkbox' />
                                    <Form.Field  id={2} control='input' type='checkbox' />
                                    <Form.Field  id={3} control='input' type='checkbox' />
                                    <Form.Field  id={4} control='input' type='checkbox' />
                                    <Form.Field  id={5} control='input' type='checkbox' />
                                    <Form.Field  id={6} control='input' type='checkbox' />
                                    <Form.Field  id={7} control='input' type='checkbox' />
                                    <Form.Field  id={8} control='input' type='checkbox' />
                                    <Form.Field  id={9} control='input' type='checkbox' />
                                    <Form.Field  id={10} control='input' type='checkbox' /> */}
                                </Form.Group>   
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                                <Label> Textural Labeling Functions:</Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Form.Group>
                                <Form.Field>
                                        <Checkbox id={11} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={12} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={13} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={14} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={15} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    <Form.Field>
                                        <Checkbox id={16} onChange={this.toggleCheckBox} />
                                    </Form.Field>
                                    {/* <Form.Field  id={1} control='input' type='checkbox' />
                                    <Form.Field  id={2} control='input' type='checkbox' />
                                    <Form.Field  id={3} control='input' type='checkbox' />
                                    <Form.Field  id={4} control='input' type='checkbox' />
                                    <Form.Field  id={5} control='input' type='checkbox' />
                                    <Form.Field  id={6} control='input' type='checkbox' /> */}
                                </Form.Group>
                            </Form>   
                        </Grid.Column>
                    </Grid.Row>
                    {/* <Grid.Row>
                        <Button>Label Images</Button>
                    </Grid.Row> */}
                </Grid>
            </div>
        )
    }
}

export default LabelDetails;
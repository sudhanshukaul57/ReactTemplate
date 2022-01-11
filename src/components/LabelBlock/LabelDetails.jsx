import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Form
  } from "semantic-ui-react"; 

class LabelDetails extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Grid divided="vertically">
                    <Grid.Row columns={2}>
                        <Grid.Column>
                                <Label> Spatial Labeling Functions:</Label>
                        </Grid.Column>
                        <Grid.Column>
                            <Form>
                                <Form.Group>
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
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
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                    <Form.Field  control='input' type='checkbox' />
                                </Form.Group>
                            </Form>   
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Button>Label Images</Button>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default LabelDetails;
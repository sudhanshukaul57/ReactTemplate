import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Form,
    Checkbox
  } from "semantic-ui-react"; 

class LabelDetails extends React.Component{

    constructor(props){
        super(props);
    }

    toggleCheckBox = (e) => {
        console.log("Checkbox clicked ", e.target.id)
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
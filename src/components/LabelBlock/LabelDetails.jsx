import React, { Component } from "react";
import {
    Grid,
    Button,
    Label,
    Form,
    Checkbox,
    Loader,
    Dropdown,
    Popup,
    Input
  } from "semantic-ui-react"; 
import axios from "axios";
import "./label.css";

const spatialOptions = [
    { key: 'Spatial1', description: 'Hospital', value: '1' },
    { key: 'Spatial2', description: 'Shopping Malls', value: '2' },
    { key: 'Spatial3', description: 'Schools', value: '3' },
    { key: 'Spatial4', description: 'Waste Disposal', value: '4' },
    { key: 'Spatial5', description: 'Forests', value: '5' },
    { key: 'Spatial6', description: 'Powerlines', value: '6' },
    { key: 'Spatial7', description: 'Residential Houses', value: '7' },
    { key: 'Spatial8', description: 'Roads', value: '8' },
    { key: 'Spatial9', description: 'Drinking Water', value: '9' },
    { key: 'Spatial10', description: 'Grasslands', value: '10' }
]

const texturalOptions = [
    { key: 'Textural1', description: 'Contrast', value: '1' },
    { key: 'Textural2', description: 'Dissimilairty', value: '2' },
    { key: 'Textural3', description: 'Homogeneity', value: '3' },
    { key: 'Textural4', description: 'Energy', value: '4' },
    { key: 'Textural5', description: 'Correlation', value: '5' },
    { key: 'Textural6', description: 'ASM', value: '6' }
]
class LabelDetails extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            lf_index: [],
            labelEnabled: true,
            loaderEnabled: false,
            spatialDetails:[],
            spatialDetailsMap: {},
            spatialDetailsFlag: false,
            spatialId: 0,
            spatialInputValue: "",
            spatialServerList: [],
            spatialServerMap: {},
            texturalDetails:[],
            texturalDetailsMap: {},
            texturalDetailsFlag: false,
            texturalId: 0,
            texturalInputValue: "",
            texturalServerList: [],
            texturalServerMap: {}
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

    submitLabels = async () =>{
        this.setState({
            loaderEnabled: true,
            labelEnabled: false
        })
        const endPoint = "http://127.0.0.1:5000/satlab/label"
        // const requestBody = {}
        let spatialServerMap = this.state.spatialServerMap
        let texturalServerMap = this.state.texturalServerMap

        console.log("Spatial Server map ", spatialServerMap)
        console.log("Textural Server map ", texturalServerMap)
        let spatialServerList = []

        for(let spatialKey in spatialServerMap){
            let innerList = []
            innerList.push(parseInt(spatialKey))
            innerList.push(parseFloat(spatialServerMap[spatialKey]))
            spatialServerList.push(innerList)
        }

        let texturalServerList = []

        for(let texturalKey in texturalServerMap){
            let innerList = []
            innerList.push(parseInt(texturalKey)+10)
            innerList.push(parseFloat(texturalServerMap[texturalKey]))
            texturalServerList.push(innerList)
        }

        console.log("Spatial server list ", spatialServerList)
        console.log("Textural server list ", texturalServerList)
        // Uncomment below code
        let final_list = spatialServerList.concat(texturalServerList)
        console.log("final list", final_list)

        const requestBody = {

            "lf_index":final_list
        }
        const labelDetails = await axios.post(
            endPoint, requestBody
        )
        //
        console.log("Submit button clicked")
        this.setState({
            displayMap: true,
            // labelDetails: labelDetails,
            loaderEnabled: false
        })
        this.props.enableImages()
    }

    closeSpatialeRow1 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 1){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[1]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow2 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 2){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[2]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow3 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 3){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[3]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow4 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 4){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[4]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow5 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 5){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[5]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow6 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 6){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[6]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })   
     }

    closeSpatialeRow7 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 7){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[7]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })

    }

    closeSpatialeRow8 = ()=> {
        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 8){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[8]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })
    }

    closeSpatialeRow9 = ()=> {

        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 9){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[9]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })

    }

    closeSpatialeRow10 = ()=> {

        let indexValue = 0
        let spatialDetails = this.state.spatialDetails
        let spatialServerMap = this.state.spatialServerMap
        for(let i=0; i<spatialDetails.length; i++){
            if(spatialDetails[i].key == 10){
                indexValue = i;
                break;
            }
        }
        spatialDetails.splice(indexValue, 1)
        delete spatialServerMap[10]
        this.setState({
            spatialDetails: spatialDetails,
            spatialServerMap: spatialServerMap
        })

    }

    getSpatialInputValue1 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[1]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue2 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[2]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue3 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[3]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue4 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[4]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue5 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[5]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue6 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[6]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue7 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[7]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue8 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[8]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue9 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[9]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialInputValue10 = (e) =>{
        let spatialServerMap = this.state.spatialServerMap
        spatialServerMap[10]=e.target.value
        this.setState({
            spatialInputValue: e.target.value,
            spatialServerMap: spatialServerMap
        })
        console.log(this.state.spatialServerMap)
    }

    getSpatialDropDownValue = (event, {value}) => {
        let spatialDetails = this.state.spatialDetails
        let spatialId = value
        let closeFunction = this.closeSpatialeRow1
        let getInputValue = this.getSpatialInputValue1
        if(spatialId == 1){
            closeFunction = this.closeSpatialeRow1
            getInputValue = this.getSpatialInputValue1
        }else if(spatialId == 2){
            closeFunction = this.closeSpatialeRow2
            getInputValue = this.getSpatialInputValue2
        }else if(spatialId == 3){
            closeFunction = this.closeSpatialeRow3
            getInputValue = this.getSpatialInputValue3
        }else if(spatialId == 4){
            closeFunction = this.closeSpatialeRow4
            getInputValue = this.getSpatialInputValue4
        }else if(spatialId == 5){
            closeFunction = this.closeSpatialeRow5
            getInputValue = this.getSpatialInputValue5
        }else if(spatialId == 6){
            closeFunction = this.closeSpatialeRow6
            getInputValue = this.getSpatialInputValue6
        }else if(spatialId == 7){
            closeFunction = this.closeSpatialeRow7
            getInputValue = this.getSpatialInputValue7
        }else if(spatialId == 8){
            closeFunction = this.closeSpatialeRow8
            getInputValue = this.getSpatialInputValue8
        }else if(spatialId == 9){
            closeFunction = this.closeSpatialeRow9
            getInputValue = this.getSpatialInputValue9
        }else if(spatialId == 10){
            closeFunction = this.closeSpatialeRow10
            getInputValue = this.getSpatialInputValue10
        }
        let gridContent = <Grid columns={3} key={spatialId}>
        <Grid.Column>
            <Popup content={value} trigger={<Button  color='blue'>{event.target.innerText}</Button>} />
        </Grid.Column>
        <Grid.Column>
            <Input style={{ width:"200px" }} focus placeholder='Add Threshold' onChange={getInputValue} id={spatialId}/>
        </Grid.Column>
        <Grid.Column>
            <Button icon='close' color='red' id={spatialId} onClick={closeFunction}/>
        </Grid.Column>
    </Grid>
        spatialDetails.push(gridContent)
        this.setState({
            spatialDetails: spatialDetails,
            spatialId: spatialId
        })
    }

    closeTexturalRow1 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 1){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[1]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })
    }

    closeTexturalRow2 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 2){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[2]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })
    }

    closeTexturalRow3 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 3){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[3]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })
    }

    closeTexturalRow4 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 4){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[4]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })
    }

    closeTexturalRow5 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 5){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[5]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })
    }

    closeTexturalRow6 = ()=> {
        let indexValue = 0
        let texturalDetails = this.state.texturalDetails
        let texturalServerMap = this.state.texturalServerMap
        for(let i=0; i<texturalDetails.length; i++){
            if(texturalDetails[i].key == 6){
                indexValue = i;
                break;
            }
        }
        texturalDetails.splice(indexValue, 1)
        delete texturalServerMap[6]
        this.setState({
            texturalDetails: texturalDetails,
            texturalServerMap: texturalServerMap
        })   
     }

     getTexturalInputValue1 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[1]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalInputValue2 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[2]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalInputValue3 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[3]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalInputValue4 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[4]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalInputValue5 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[5]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalInputValue6 = (e) =>{
        let texturalServerMap = this.state.texturalServerMap
        texturalServerMap[6]=e.target.value
        this.setState({
            texturalInputValue: e.target.value,
            texturalServerMap: texturalServerMap
        })
        console.log(this.state.texturalServerMap)
    }

    getTexturalDropDownValue = (event, {value}) => {
        let texturalDetails = this.state.texturalDetails
        let texturalId = value
        let closeFunction = this.closeTexturalRow1
        let getInputValue = this.getTexturalInputValue1
        if(texturalId == 1){
            closeFunction = this.closeTexturalRow1
            getInputValue = this.getTexturalInputValue1
        }else if(texturalId == 2){
            closeFunction = this.closeTexturalRow2
            getInputValue = this.getTexturalInputValue2
        }else if(texturalId == 3){
            closeFunction = this.closeTexturalRow3
            getInputValue = this.getTexturalInputValue3
        }else if(texturalId == 4){
            closeFunction = this.closeTexturalRow4
            getInputValue = this.getTexturalInputValue4
        }else if(texturalId == 5){
            closeFunction = this.closeTexturalRow5
            getInputValue = this.getTexturalInputValue5
        }else if(texturalId == 6){
            closeFunction = this.closeTexturalRow6
            getInputValue = this.getTexturalInputValue6
        }
        let gridContent = <Grid columns={3} key={texturalId}>
        <Grid.Column>
            <Popup content={value} trigger={<Button  color='blue'>{event.target.innerText}</Button>} />
        </Grid.Column>
        <Grid.Column>
            <Input style={{ width:"200px" }} focus placeholder='Add Threshold' onChange={getInputValue} id={texturalId}/>
        </Grid.Column>
        <Grid.Column>
            <Button icon='close' color='red' id={texturalId} onClick={closeFunction}/>
        </Grid.Column>
    </Grid>
        texturalDetails.push(gridContent)
        this.setState({
            texturalDetails: texturalDetails,
            texturalDetails: texturalDetails
        })
    }

    render(){
        return (
            <Grid divided='vertically'>
                <Grid.Row>
                    <Grid columns={2}>
                        <Grid.Column>
                            <Grid.Row>
                                <Button.Group color='blue'>
                                    <Button>Spatial</Button>
                                    <Dropdown
                                        className='button icon'
                                        floating
                                        options={spatialOptions}
                                        trigger={<></>}
                                        onChange={this.getSpatialDropDownValue}
                                    />
                                </Button.Group>
                            </Grid.Row>
                            <Grid.Row>
                                {this.state.spatialDetails}
                            </Grid.Row>
                        </Grid.Column>
                        <Grid.Column>
                            <Grid.Row>
                                <Button.Group color='blue'>
                                    <Button>Textural</Button>
                                    <Dropdown
                                        className='button icon'
                                        floating
                                        options={texturalOptions}
                                        trigger={<></>}
                                        onChange={this.getTexturalDropDownValue}
                                    />
                                </Button.Group>
                            </Grid.Row>
                            <Grid.Row>
                                {this.state.texturalDetails}
                            </Grid.Row>
                        </Grid.Column> 
                    </Grid>
                </Grid.Row>
                <Grid.Row centered>
                    {this.state.labelEnabled && <Button  color="blue" onClick={this.submitLabels} >Label Images</Button> || (this.state.loaderEnabled && 
                     <Loader active inline='centered' >Preparing Files</Loader>)}
                </Grid.Row>
            </Grid>
            // <Grid columns={2}>
            //     <Grid.Row>
            //         <Grid.Column>
            //             <Popup content='Add users to your feed' trigger={<Button icon='Roads' color='blue'>Roads</Button>} />
            //         </Grid.Column>
            //         <Grid.Column>
            //             <Input style={{ width:"100px" }} focus placeholder='Search...' onChange={this.getInputValue} />
            //         </Grid.Column>           
            //     </Grid.Row>
            // </Grid>
            // <Grid.Row columns={2}>
            //             <Grid.Column >
            //                     <Grid.Row>
            //                         <Button.Group color='blue'>
            //                             <Button>Spatial</Button>
            //                             <Dropdown
            //                                 className='button icon'
            //                                 floating
            //                                 options={options}
            //                                 trigger={<></>}
            //                                 onChange={this.getDropDownValue}
            //                             />
            //                         </Button.Group>
            //                     </Grid.Row>
            //                     <Grid.Row columns={2} divided>
            //                         <Grid.Column>
            //                             <Popup content='Add users to your feed' trigger={<Button icon='Roads' color='blue'>Roads</Button>} />
            //                         </Grid.Column>
            //                         <Grid.Column>
            //                             <Input style={{ width:"100px" }} focus placeholder='Search...' onChange={this.getInputValue} />
            //                         </Grid.Column>
            //                     </Grid.Row>
            //             </Grid.Column>
            //     </Grid.Row>
            // <div id="functions">
            //     <Grid divided="vertically">
            //         <Grid.Row columns={2}>
            //             <Grid.Column >
            //                     <Label> Spatial Labeling Functions:</Label>
            //             </Grid.Column>
            //             <Grid.Column>
            //                 <Form>
            //                     <Form.Group>
            //                         <Form.Field>
            //                             <Checkbox id={1} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={2} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={3} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={4} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={5} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={6} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={7} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={8} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={9} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={10} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         {/* <Form.Field  id={1} control='input' type='checkbox' />
            //                         <Form.Field  id={2} control='input' type='checkbox' />
            //                         <Form.Field  id={3} control='input' type='checkbox' />
            //                         <Form.Field  id={4} control='input' type='checkbox' />
            //                         <Form.Field  id={5} control='input' type='checkbox' />
            //                         <Form.Field  id={6} control='input' type='checkbox' />
            //                         <Form.Field  id={7} control='input' type='checkbox' />
            //                         <Form.Field  id={8} control='input' type='checkbox' />
            //                         <Form.Field  id={9} control='input' type='checkbox' />
            //                         <Form.Field  id={10} control='input' type='checkbox' /> */}
            //                     </Form.Group>   
            //                 </Form>
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row columns={2}>
            //             <Grid.Column>
            //                     <Label> Textural Labeling Functions:</Label>
            //             </Grid.Column>
            //             <Grid.Column>
            //                 <Form>
            //                     <Form.Group>
            //                     <Form.Field>
            //                             <Checkbox id={11} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={12} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={13} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={14} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={15} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         <Form.Field>
            //                             <Checkbox id={16} onChange={this.toggleCheckBox} />
            //                         </Form.Field>
            //                         {/* <Form.Field  id={1} control='input' type='checkbox' />
            //                         <Form.Field  id={2} control='input' type='checkbox' />
            //                         <Form.Field  id={3} control='input' type='checkbox' />
            //                         <Form.Field  id={4} control='input' type='checkbox' />
            //                         <Form.Field  id={5} control='input' type='checkbox' />
            //                         <Form.Field  id={6} control='input' type='checkbox' /> */}
            //                     </Form.Group>
            //                 </Form>   
            //             </Grid.Column>
            //         </Grid.Row>
            //         <Grid.Row>
            //             {this.state.labelEnabled && <Button inverted color="green" onClick={this.submitLabels} >Label Images</Button> || (this.state.loaderEnabled && 
            //                 <Loader active inline='centered' >Preparing Files</Loader>)}
            //         </Grid.Row>
            //         {/* <Grid.Row>
            //             <Button>Label Images</Button>
            //         </Grid.Row> */}
            //     </Grid>
            // </div>
        )
    }
}

export default LabelDetails;
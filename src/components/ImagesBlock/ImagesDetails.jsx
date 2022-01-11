import React, { Component } from "react";
import src from "../../assets/shantanu.png"
import {
    Divider,
    Image
  } from "semantic-ui-react"; 

// const src = '../../../public/logo192.png'
    
class ImagesDetails extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Image.Group size='small'>
                    <Image src={src} />
                    <Image src={src} />
                    <Image src={src} />
                </Image.Group>
                <Divider hidden />
                <Image.Group size='small'>
                    <Image src={src} />
                    <Image src={src} />
                    <Image src={src} />
                </Image.Group>
            </div>
        )
    }
}

export default ImagesDetails;
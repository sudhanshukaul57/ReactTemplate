import React, { Component } from "react";
import src from "../../assets/shantanu.png"
import {
    Divider,
    Image
  } from "semantic-ui-react"; 

import { Icon, Label, Menu, Table } from 'semantic-ui-react'

    
class GraphDetails extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return (
            // <div>
            //     <Image.Group size='small'>
            //         <Image src={src} />
            //         <Image src={src} />
            //         <Image src={src} />
            //     </Image.Group>
            //     <Divider hidden />
            //     <Image.Group size='small'>
            //         <Image src={src} />
            //         <Image src={src} />
            //         <Image src={src} />
            //     </Image.Group>
            // </div>
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>imageID</Table.HeaderCell>
        <Table.HeaderCell>Geometry</Table.HeaderCell>
        <Table.HeaderCell>Label</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
        <Table.Cell>Cell</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>


        )
    }
}

export default GraphDetails;

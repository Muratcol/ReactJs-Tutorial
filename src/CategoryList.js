import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {
    constructor(props){
        super(props); //With this "super()" function. We changed <h2>'s environment to "Component"
        this.state = {}
    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2> {/* We used Super here */}
                <ListGroup>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Morbi leo risus</ListGroupItem>
                    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>

                </ListGroup>
            </div>
        )
    }
}

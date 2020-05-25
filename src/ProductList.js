import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';


export default class ProductList extends Component {
    state = {categories : [
        { categoryId: 1, categoryName: "Beverages"},
        { categoryId: 2, categoryName: "Condiments"},
        { categoryId: 3, categoryName: "Candies"},
        { categoryId: 4, categoryName: "Furnitures"}
    ]
    };
    render() {
        return (
            <div>
                <h3>{this.props.info.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            // It's Mandatory to use Key Id's for looping objects. Otherwise we keep getting errors
                            <ListGroupItem key={category.categoryId} >{category.categoryName}</ListGroupItem>
                        ))}
                </ListGroup>
            </div>
        )
    }
}

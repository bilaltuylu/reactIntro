import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table borderless>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unite Price</th>
              <th>Quantity Per Unit</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="info"
                  >
                    Add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

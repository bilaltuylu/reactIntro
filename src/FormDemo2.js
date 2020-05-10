import React, { Component } from "react";
import alertify from "alertifyjs";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  onChangeHandle = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(
      this.state.email + " " + this.state.password + " Dbye kaydedildi"
    );
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <FormGroup>
            <Label for="email">E-mail</Label>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={this.onChangeHandle}
              placeholder="E-mail"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={this.onChangeHandle}
              placeholder="Password"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              onChange={this.onChangeHandle}
              placeholder="description"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.onChangeHandle}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>İzmir</option>
              <option>Bursa </option>
            </Input>
          </FormGroup>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

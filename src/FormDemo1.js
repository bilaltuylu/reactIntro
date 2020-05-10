import React, { Component } from "react";
import { Input, Button } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { userName: "", city: "" };

  onChangeEvent = (event) => {
    // this.setState({ userName: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.userName);
  };
  render() {
    return (
      <div>
        <h3>User Name</h3>
        <form onSubmit={this.onSubmitHandler}>
          <Input name="userName" onChange={this.onChangeEvent} type="text">
            {" "}
          </Input>
          <h3>{this.state.userName}</h3>

          <Input name="city" onChange={this.onChangeEvent} type="text">
            {" "}
          </Input>
          <h3>{this.state.city}</h3>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

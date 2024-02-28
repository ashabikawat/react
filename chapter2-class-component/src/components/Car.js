import { Component } from "react";

class Car extends Component {
  constructor() {
    super();
    this.name = "BMW";
    this.year = 2001;
    this.purchasedPerson = "Raj Patil";
  }

  onHandleDetails() {
    console.log(
      `Name of the brand is ${this.name} and its manufactured year is ${this.year} Purchased by ${this.purchasedPerson}`
    );
  }

  render() {
    return (
      <>
        <h2>{this.name}</h2>
        <button onClick={this.onHandleDetails.bind(this)}>Get details :</button>
      </>
    );
  }
}

export default Car;

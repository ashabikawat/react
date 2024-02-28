import { Component } from "react";

class Employee extends Component {
  constructor() {
    super();
    this.name = "Asha";
    this.dept = "IT";
    this.salary = 45000;
  }

  onHandleGetDetails() {
    console.log(
      `Employee name is ${this.name} working in ${this.dept} department with salary of rs ${this.salary}`
    );
  }

  render() {
    return (
      <>
        <button onClick={this.onHandleGetDetails.bind(this)}>
          Get Employee Details
        </button>
      </>
    );
  }
}

export default Employee;

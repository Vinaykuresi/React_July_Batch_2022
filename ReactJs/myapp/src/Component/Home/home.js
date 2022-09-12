import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import GetEmployeeDetails from "./employeeData";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
            timer : 0
        }
    }

    setTime = () => {
        this.setState({
            timer : this.state.timer+1
        })
    }

    componentDidMount() {
        axios.get("http://localhost:4000/employeeData")
            .then(response => {
                this.setState({
                    data: response.data
                })
                console.log("Data : ", this.state.data)
            })
            .then(() => {
                this.setState({
                    isLoading: false
                })
            })
            .catch((err) => {
                console.log("Error : ", err)
            })
        
        // this.interval = setInterval(this.setTime, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    addData = (employeeDetails) => {
        console.log("Add details data : ", employeeDetails)
        this.setState({isLoading : true})
        this.setState({
            data: [...this.state.data, employeeDetails],
            isLoading : false
        })
    }


    render() {
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading : false
        //     })
        // }, 1500);

        // if(this.state.timer > 12){
        //     throw new Error("The timer has increased the limit of 12")
        // }
        return (
            <div className="empTable">
                {
                    this.state.isLoading ?
                        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "transition(-50%, 50%)" }} className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        :
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Emp ID</th>
                                    <th scope="col">Emp Name</th>
                                    <th scope="col">Qualification</th>
                                    <th scope="col">Designation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.length ?
                                        this.state.data.map(empData => {
                                            return (
                                                <tr key={empData.empId}>
                                                    <th scope="row">{empData.empId}</th>
                                                    <td>{empData.name}</td>
                                                    <td>{empData.Qualification}</td>
                                                    <td>{empData.Designation}</td>
                                                </tr>
                                            )
                                        })
                                        :
                                        <p>No data Found</p>
                                }
                            </tbody>
                        </table>
                }
                <br/>
                <div>{this.state.timer}</div>
                <GetEmployeeDetails addMethod={this.addData}  />
            </div>
        )
    }
}



export default Home;


import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: [],
        }
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

                <GetEmployeeDetails addMethod={this.addData}  />
            </div>
        )
    }
}

function GetEmployeeDetails(props) {
    const [empId, setEmpId] = useState(null);
    const [empName, setEmpName] = useState("");
    const [empOualf, setEmpQualf] = useState("");
    const [empDesg, setDesg] = useState("");


    function handleSubmit(e) {
            e.preventDefault()
            let employeeData = {
                empId: empId,
                name: empName,
                Qualification: empOualf,
                Designation: empDesg
            }
            props.addMethod(employeeData)
            setEmpId("")
            setEmpName("")
            setEmpQualf("")
            setDesg("")        
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }
    // (e) => {setEmpId(...e.target.value)}
    return (
        <React.Fragment>
            {/* {props.name} */}
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmpId">Emp ID</label>
                    <input type="text" onChange={(e) => { setEmpId(e.target.value) }} className="form-control" id="exampleInputEmpId" aria-describedby="emailHelp" placeholder="Enter EmpId" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmpPass">Emp Name</label>
                    <input type="text" onChange={(e) => { setEmpName(e.target.value) }} className="form-control" id="exampleInputEmpPass" placeholder="Enter Emp Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmpQualf">Emp Qualification</label>
                    <input type="text" onChange={(e) => { setEmpQualf(e.target.value) }} className="form-control" id="exampleInputEmpQualf" aria-describedby="emailHelp" placeholder="Enter Emp Qualification" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmpDesg">Emp Designation</label>
                    <input type="text" onChange={(e) => { setDesg(e.target.value) }} className="form-control" id="exampleInputEmpDesg" placeholder="Enter Emp Designation" />
                </div>
                <button onClick={(e) => handleSubmit(e)} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Home;


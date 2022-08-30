import React from "react";
import "./home.css";
import axios from "axios";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/employeeData")
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
    }


    render() {
        // setTimeout(()=>{
        //     this.setState({
        //         isLoading : false
        //     })
        // }, 1500);
        return (
            <div>
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

            </div>
        )
    }
}

export default Home;


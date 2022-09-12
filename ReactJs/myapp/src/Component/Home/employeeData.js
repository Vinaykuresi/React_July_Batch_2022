import React, { useEffect, useState } from "react";

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

export default GetEmployeeDetails;
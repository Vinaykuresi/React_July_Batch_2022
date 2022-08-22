var person_details = {
    name : "Vinay",
    qualification : "MCA",
    profession : "SSE",
    all_details : function (){
        // let name = "Kumar"
        return "My name is " + this.name + ", and my qualification is " + this.qualification + ", amd my professio is : "+ this.profession
    }
}

// console.log(person_details)
// console.log(person_details.name)
// console.log(person_details.all_details())

// console.log(person_details["name"])

function  emp_details (name, qualification, profession){
    this.emp_name = name;
    this.emp_qualification = qualification;
    this.emp_profession = profession;

    this.all_details = function (name){
        return "My name is " + this.emp_name + ", and my qualification is " + this.emp_qualification + ", amd my professio is : "+ this.emp_profession
    }
}

var emp_1 = new emp_details("Vinay", "MCA", "SSE")
var emp_2 = new emp_details("Krishna", "B.tech", "SSE")

console.log(emp_2.emp_name)
console.log(emp_2.all_details("Vinay"))
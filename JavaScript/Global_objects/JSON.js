var json = `{
    "name" : "Vinay",
    "Qualification" : "MCA",
    "Profession" : "SSE",
    "Location" : "Mysore",
    "Experience" : 4
}`

console.log(json)

var emp_obj = JSON.parse(json)

console.log(emp_obj)

var emp_json = JSON.stringify(emp_obj)

console.log(emp_json)
var names = ["Vinay", "MCA", "SSE", 4]

console.log(names.length)

console.log(names.push("Mysore"))
console.log(names)

console.log(names.pop())
console.log(names)

console.log(names.slice(0,2))

names.forEach(name => {
    console.log(name)
})

list = names.map((name, index) => {
    return name+" "+index
})

console.log(list)


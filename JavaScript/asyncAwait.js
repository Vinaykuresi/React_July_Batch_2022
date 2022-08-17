const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});


totalBags = 40;

async function removeBags(remainingbags, collectedBags){
    console.log("Function called")
    return Promise.resolve(remainingbags-collectedBags);
}

async function definingLoops(){
    for(var remainingbags = totalBags; remainingbags >=0;){
        readline.question("Enter the baggages colleted ? : ", async bags => {
            console.log("No.of bags collected : ", bags);
            remainingbags = await removeBags(remainingbags, bags)
            console.log("No.of remamining bags : ", remainingbags)
            readline.close()
        });
    }
}

definingLoops()
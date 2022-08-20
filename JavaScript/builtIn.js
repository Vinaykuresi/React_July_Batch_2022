function myFunction() {

    var date = new Date()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var hour = date.getHours()

    var setInstance = setInterval(()=>{
         second++

         if(second % 60 == 0){
             minute++
             second = 0
         }
         if(minute % 60 == 0){
            hour++
            minute = 0
         }
         
         console.log("Minutes : " + minute + " Seconds : "+second)
         document.getElementById("time").innerText = hour + " Hours " + minute + " minutes " + second + " seconds"
     }, 1000)

    //  setTimeout(() => {
    //     clearInterval(setInstance)
    //  }, 5000)

    //  var value = prompt("Enter the Value : ")
    //  document.getElementById("value").innerText = value
 }
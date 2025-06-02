// Multiple if syntax

let Name = prompt("Please enter your name");
let TcNo = prompt("Please enter your userNo")

check2(Name,TcNo);

// Function
function check(Name , TcNo){
    if(Name!=""){
        if(TcNo.length == 11){
            console.log("Successfully loginned");
        }else{
            console.log("Please enter your TcNo 11 charset");
        }
    }else{
        console.log("Please enter your name!!!");
    }
}

function check2(Name , TcNo){
    if(Name==""){
        console.log("Please enter your name!!");
        return;
    }

    if(TcNo.length!=11){
        console.log("Please enter your TcNo 11 charset");
        return;
    }

    console.log("Successfully loginned"); 
}
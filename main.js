console.log("My Console Project");

var FName = document.getElementById("first_name").value;
var LName = document.getElementById("last_name").value;
var FNumber = document.getElementById("first_number").value;
var SNumber = document.getElementById("second_number").value;
var resultnumber = FNumber+SNumber;
function consoledisplay(){
    console.log(FName.concat(LName));
    console.log(resultnumber);
}
let name_of_the_students = [];
var count= [];
var counter=0;
function submit(){
    counter = counter + 1;
    count.push("<br>"+counter);

    name_of_the_students.push(document.getElementById("dropdown").value);
    console.log(name_of_the_students);
    var length = name_of_the_students.length;
    console.log(length);
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = counter;
    cell2.innerHTML = document.getElementById("dropdown").value;
    cell2.style.width = "1000px";
}
// console.log(name_of_the_students);
function nextPage(){
    window.location = "scoreboard.html";
}
function createBoard(){
    console.log(name_of_the_students);
    console.log("came");
    console.log(length_2);
    for(var i=0;i<length;i++){
        var btn = document.createElement("DIV");
        console.log(btn);
        btn.innerHTML = "CLICK ME";
        btn.style.border = '2px solid black'
        document.body.appendChild(btn);
    }
}
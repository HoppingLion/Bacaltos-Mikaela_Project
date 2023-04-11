var u, p, r;

document.getElementById("psswrd").innerHTML = u;
document.getElementById("usrnme").innerHTML = p;

//for when user does not input username and or password
if (u = " "){
    document.getElementById("rtrn").innerHTML = ("Please input a username.")
}
else if (p = " "){
    document.getElementById("rtrn").innerHTML = ("Please input a password.")
}
else{
    document.getElementById("rtrn").innerHTML = ("Please input a username and password.")
}

//supposed to be for box change color ah ;-;
document.getElementById("form").addEventListener("mouseover", function() {
    document.getElementById("form").style.backgroundColor = "#512020";
});
    
document.getElementById("form").addEventListener("mouseout", function() {
    document.getElementById("form").style.backgroundColor = "#323233";
});
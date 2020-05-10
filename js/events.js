function navmouseover(myObj) {
    console.log("A 'mouseover' event occured");
    console.log(myObj); 
    origcolor = myObj.style.color;
    myObj.style.color="orange";
}

function navmouseout(myObj) {
    console.log("A 'mouseout' event occured");
    console.log(myObj);
	myObj.style.color=origcolor;
}
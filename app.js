var newItem = () =>{
    console.log("Inside newItem");
    var item = document.getElementById("input").value;
    console.log(item);
    //store the unordered list as a variable
    var ul = document.getElementById("list");

    var li = document.createElement("li");
    li.appendChild(document.createTextNode("- " + item)); //puts text in list item
    ul.appendChild(li);   //puts list item in the unordered list

    document.getElementById("input").value = ""; //erases what is currently in the input box

    li.onclick = removeItem;
}
//the newItem function activates on a press of the enter key
document.body.onkeyup = function(e) {
  //13 is the keycode for the return/enter key on JS.
  if (e.keyCode == 13) {
    console.log("enter clicked!");
    newItem();
  }
};

//removes item, activated by an event.
var removeItem = (e) => {
  e.target.remove()
}

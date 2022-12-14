// import { Tile, initHTML } from './Tiles.js';

var defaultBgColor = 'paleyellow';
var count = 0;

class Tile{
  constructor(state, bgColor) {
      // FIXME make struct?
      this.state = 0;
      this.bgColor = defaultBgColor;
      this.name = "temp";
      console.log(" new Tile with ID " + this.ID);
  }

  setState(newState) {
      this.state = newState;
  }

  getName(){
    return this.name;
  }

  setName(newName){
    return this.name = newName;
  }

  initHTML() { 
    console.log("Tiles.initHTML()");
    // create new divs
    const main = document.createElement("div");
    main.className = "tile-box";
    
    // create header
    const header = document.createElement("div");
    header.className = "tile-header";
    var nameText = "header";
    this.name = (nameText);
    const headerContent = document.createTextNode(nameText);
    header.appendChild(headerContent);

    // create close button
    const close = document.createElement("div");
    close.className = "tile-close";
    const closeContent = document.createTextNode("X");
    const thisId = "close-"+count;
    close.id = thisId;
    close.addEventListener('click', function(e) {
      closeDiv(document.getElementById(thisId));
    });
    close.appendChild(closeContent);

    // create content area
    const content = document.createElement("div");
    content.className = "tile-content";
    const contentContent = document.createTextNode("content");
    const thisContentID = 'content-'+count;
    content.id = thisContentID;
    content.appendChild(contentContent);

    // create edit button
    const edit = document.createElement("div");
    edit.className = "tile-edit";
    const editContent = document.createTextNode("E");
    const thisEditId = 'edit-'+count;
    // edit.id = thisEditId;
    edit.addEventListener('click', function(e) {
      // pass content ID cuz thats what we will edit
      editDivContents(content);
    });
    edit.appendChild(editContent);
    
    // add all sections to main
    main.appendChild(header);
    main.appendChild(edit);
    main.appendChild(close);
    main.appendChild(content);
    
    // add the newly created Tile into the DOM
    const containerDiv = document.getElementById("tile-container");
    containerDiv.appendChild(main);
    makeDraggable(main);

    count++;
    
  }

} 




window.addEventListener('load', (event) => {

    // create two default Tiles

    let t1 = new Tile(0);
    t1.initHTML();
    let t2 = new Tile(1);
    t2.initHTML();

    // get all divs 
    const divs = document.getElementById('tile-container').getElementsByClassName('tile-box');
    // make the divs draggable
    for (let i = 0; i < divs.length; i++) {
        
        var divStyle = divs[i].style;
        // FIX ME what should initial positions be set based on?
        divStyle.left = i * 38 + '%';
        // console.log(divs[i] + " " + divStyle);
        makeDraggable(divs[i]);
    } 
  });


function createDiv () {
  // FIXME add to data structure
  
  let newTile = new Tile(0);
  newTile.initHTML();

  // add to sidebar
  newTile.setName("ok");
  var html_to_insert = "<p>"+newTile.getName()+"<p>";
  document.getElementById('s2').insertAdjacentHTML('beforeend', html_to_insert);

}

function editDivContents(item) {
  console.log("Edit div " + item.id);
  const ele = document.getElementById(item.id);
  ele.style.backgroundColor = 'paleyellow';
  
  ele.innerHTML = "<input type=\"text\" id=\"myText\" value=\"Mickey\">" +
                  "<button type=\"button\" onclick=\"myFunction()\">Try it</button>" + 
                  "<p id=\"demo\"></p>";
  
  
  console.log(ele);
}

function closeDiv(item) {
    console.log('Close div ' + item);
    const element = document.getElementById($(item).attr('id')).parentElement;
    element.remove();
}

function setPosition(item, x, y) {
    console.log('Set position on ' + item.id);
}

function makeDraggable(item) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(item.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(item.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      item.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      item.style.top = (item.offsetTop - pos2) + "px";
      item.style.left = (item.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
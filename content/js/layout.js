window.addEventListener('load', (event) => {
    // get all divs 
    const divs = document.getElementById('tile-container').getElementsByClassName('tile-box');
    // make the divs draggable
    for (let i = 0; i < divs.length; i++) {
        
        var divStyle = divs[i].style;
        // FIX ME what should initial positions be set based on?
        divStyle.left = i * 38 + '%';
        console.log(divs[i] + " " + divStyle);
        makeDraggable(divs[i]);
    }
    


  });




function createDiv () {

  console.log("addElement()");
    // create new divs
    const main = document.createElement("div");
    main.className = "tile-box";

    const header = document.createElement("div");
    header.className = "tile-header";
    const headerContent = document.createTextNode("header");
    header.appendChild(headerContent);

    const close = document.createElement("div");
    close.className = "tile-close";
    const closeContent = document.createTextNode("x");
    
    const thisId = "close-9";
    close.id = thisId;
    close.addEventListener('click', function(e) {
      console.log(close);
      closeDiv(document.getElementById(thisId));
    });
    close.appendChild(closeContent);

    const content = document.createElement("div");
    content.className = "tile-content";
    const contentContent = document.createTextNode("content");
    content.appendChild(contentContent);
  
    // add the text node to the newly created div
    
    main.appendChild(header);
    main.appendChild(close);
    main.appendChild(content);

    
  
    // add the newly created element and its content into the DOM
    const containerDiv = document.getElementById("tile-container");
    containerDiv.appendChild(main);
    makeDraggable(main);
    //document.body.insertBefore(newDiv, containerDiv);
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
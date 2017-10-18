function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function setAttrP()
{
    var check1 = document.getElementById("pDragger");
    var drag1 = document.getElementById("pg1");
    if(check1.checked){
        drag1.setAttribute('draggable', true);
    }
    else{
        drag1.removeAttribute('draggable');
    }
}

function setAttrT()
{
    var check2 = document.getElementById("tDragger");
    var drag2 = document.getElementById("drag2");
    if(check2.checked){
        drag2.setAttribute('draggable', true);
    }
    else{
        drag2.removeAttribute('draggable');
    }
}

function setAttrImg()
{
    var check3 = document.getElementById("imgDragger");
    var drag3 = document.getElementById("drag1");
    if(check3.checked){
        drag3.setAttribute('draggable', true);
    }
    else{
        drag3.removeAttribute('draggable');
    }
}
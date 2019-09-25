let list1 = new List();
let count = 0;

/**
 *
 */
function List() {
  this.itemList = [];
  this.add = function(item1) {
    this.itemList.push(item1);
  };

  this.draw = function() {
    let divItemList = document.createElement("div");
    divItemList.id = "divItemList";
    document.body.appendChild(divItemList);

    let divTempList = document.getElementById("divItemList");
    while (divTempList.hasChildNodes()) {
      divTempList.removeChild(divTempList.firstChild);
    }
    this.itemList.forEach(function(temp) {
      temp.draw();
    });
  };
}

/**
 * The individual items within our list
 * @param {string} name        The name of the task
 * @param {String} details     The task itself i.e. description
 * @param {object} completion  The time the task is expected to be complete
 */
function item(name, details, completion) {
  this.name = name;
  this.details = details;
  this.completion = completion;
  this.divItem;
  this.divText;
  this.divBtn;
  this.text;
  this.btnDelete;
  this.btnMoveUp;
  this.btnMoveDown;
  this.divTempList;

  let text;
  this.draw = function() {
    //console.log(count);
    count++;

    divItem = new DomElement("div");
    divText = new DomElement("div");
    divBtn = new DomElement("div");
    text = new DomElement("p");
    br = new DomElement("br");
    btnDelete = new DomElement("button");
    btnMoveUp = new DomElement("button");
    btnMoveDown = new DomElement("button");
    divTempList = document.getElementById("divItemList");

    btnMoveUp.element.id = "btnMoveUp";
    btnMoveDown.element.id = "btnMoveDown";
    btnDelete.element.id = "btnDelete";

    btnDelete.element.innerHTML = "X";
    btnMoveUp.element.innerHTML = "UP";
    btnMoveDown.element.innerHTML = "DWN";

    divItem.append(text);
    divItem.append(divText);
    divItem.append(text);
    divItem.append(divBtn);
    divBtn.append(btnDelete);
    divBtn.append(btnMoveUp);
    divBtn.append(btnMoveDown);

    divTempList.appendChild(divItem.element);
    console.log(document.body);
    text.element.innerHTML = this.name + this.details + this.completion;
  };
}

function SubItem(Name, text, position, completion) {}

function addItem() {
  let item1 = new item(
    document.getElementById("nameBox").value,

    //TODO THIS\/
    document.getElementById("detailBox").value,
    document.getElementById("completionBox").value
  );
  //console.log(list1.length);
  list1.add(item1);
  list1.draw();
}
function DomElement(type) {
  this.element = document.createElement(type);
  this.append = function(name) {
    console.log(name.element);
    this.element.appendChild(name.element);
  };
}

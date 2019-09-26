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
function item(name, completion, details) {
  this.name = name;
  this.details = details;
  this.completion = completion;
  this.divItem;
  this.divText;
  this.divBtn;
  this.divOrder;
  this.text;
  this.heading;
  this.btnDelete;
  this.btnEdit;
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
    divOrder = new DomElement("div");
    heading = new DomElement("h3");
    text = new DomElement("p");
    br = new DomElement("br");
    btnEdit = new DomElement("button");
    btnDelete = new DomElement("button");
    btnMoveUp = new DomElement("button");
    btnMoveDown = new DomElement("button");
    divTempList = document.getElementById("divItemList");

    divItem.element.id = "divItem";
    divText.element.id = "divText";
    divBtn.element.id = "divBtn";
    divOrder.element.id = "divOrder";
    btnMoveUp.element.id = "btnMoveUp";
    btnDelete.element.className = "btn btn-danger";
    btnMoveDown.element.id = "btnMoveDown";
    btnMoveDown.element.className = "btn";
    btnDelete.element.id = "btnDelete";
    btnEdit.element.id = "btnEdit";
    btnEdit.element.className = "btn btn-success";
    btnMoveUp.element.className = "btn";

    btnDelete.element.innerHTML = "X";
    btnEdit.element.innerHTML = "<";
    btnMoveUp.element.innerHTML = "UP";
    btnMoveDown.element.innerHTML = "DOWN";

    divItem.append(divText);
    divItem.append(divBtn);

    divText.append(heading);
    divText.append(text);
    divBtn.append(btnEdit);
    divBtn.append(btnDelete);
    divBtn.append(divOrder);
    divOrder.append(btnMoveUp);
    divOrder.append(btnMoveDown);

    divTempList.appendChild(divItem.element);
    //console.log(document.body);
    heading.element.innerHTML = this.name + this.completion;
    text.element.innerHTML = this.details;
    divItem.element.style.padding = "8px";
    btnMoveDown.element.style.position = "right";

    if (count % 2) {
      divItem.element.style.backgroundColor = "#fcdf86";
    } else {
      divItem.element.style.backgroundColor = "#fafafa";
    }
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

let list1 = new List();
let count = 0;

/**
 *
 */
function List() {
  this.counterDelete = 0;
  this.itemList = [];
  let divItemList = document.createElement("div");
  divItemList.id = "divItemList";
  divItemList.onclick = function(event) {
    let target = event.target;
    if (target.tagName != "BUTTON") {
      console.log("No");
      return;
    }
    deleteFunc(target);
  };
  this.add = function(item1) {
    this.itemList.push(item1);
  };

  this.draw = function() {
    document.body.appendChild(divItemList);

    let divTempList = document.getElementById("divItemList");
    while (divTempList.hasChildNodes()) {
      divTempList.removeChild(divTempList.firstChild);
    }
    for (let counter = this.itemList.length - 1; counter >= 0; counter--) {
      this.itemList[counter].draw();
    }
    for (
      counterDelete = 0;
      counterDelete < this.itemList.length;
      counterDelete++
    ) {
      //this.itemList[counterDelete]
      //.getDelete()
      //.element.addEventListener("click", deleteFunc);
    }
  };
  deleteFunc = function(target) {
    target.parentNode.parentNode.remove();

    //let divTempList = document.getElementById("divItemList");
    //if (divTempList.hasChildNodes()) {
    //divTempList.removeChild(divTempList.childNodes[counterDelete]);
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
  this.divItem = new DomElement("div");
  this.divText = new DomElement("div");
  this.divBtn = new DomElement("div");
  this.divOrder = new DomElement("div");
  this.heading = new DomElement("h3");
  this.text = new DomElement("p");
  this.br = new DomElement("br");
  this.btnEdit = new DomElement("button");
  this.btnDelete = new DomElement("button");
  this.btnMoveUp = new DomElement("button");
  this.btnMoveDown = new DomElement("button");

  this.divItem.element.id = "divItem";
  this.divText.element.id = "divText";
  this.divBtn.element.id = "divBtn";
  this.divOrder.element.id = "divOrder";
  this.btnMoveUp.element.id = "btnMoveUp";
  this.btnDelete.element.className = "btn btn-danger";
  this.btnMoveDown.element.id = "btnMoveDown";
  this.btnMoveDown.element.className = "btn";
  this.btnDelete.element.id = "btnDelete";
  this.btnEdit.element.id = "btnEdit";
  this.btnEdit.element.className = "btn btn-success";
  this.btnMoveUp.element.className = "btn";
  this.getDelete = function() {
    return this.btnDelete;
  };

  let text;
  this.draw = function() {
    //console.log(count);
    count++;

    this.divTempList = document.getElementById("divItemList");

    this.btnDelete.element.innerHTML = "X";
    this.btnEdit.element.innerHTML = "<";
    this.btnMoveUp.element.innerHTML = "UP";
    this.btnMoveDown.element.innerHTML = "DOWN";

    this.divItem.append(this.divText);
    this.divItem.append(this.divBtn);

    this.divText.append(this.heading);
    this.divText.append(this.text);
    this.divBtn.append(this.btnEdit);
    this.divBtn.append(this.btnDelete);
    this.divBtn.append(this.divOrder);
    this.divOrder.append(this.btnMoveUp);
    this.divOrder.append(this.btnMoveDown);

    this.divTempList.appendChild(this.divItem.element);
    //console.log(document.body);
    this.heading.element.innerHTML = this.name + " " + this.completion;
    this.text.element.innerHTML = this.details;
    this.divItem.element.style.padding = "8px";
    this.btnMoveDown.element.style.position = "right";

    if (count % 2) {
      this.divItem.element.style.backgroundColor = "#fcdf86";
    } else {
      this.divItem.element.style.backgroundColor = "#f5f5f5";
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

/**
 * Creates Node elements
 * @param {node} type
 */
function DomElement(type) {
  this.element = document.createElement(type);
  this.append = function(name) {
    console.log(name.element);
    this.element.appendChild(name.element);
  };
}

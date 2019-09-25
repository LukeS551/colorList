let list1 = new List();
let count = 0;

function List() {
  this.itemList = [];
  this.add = function(item1) {
    this.itemList.push(item1);
    console.log(item1.name);
    console.log(this.itemList.length);
  };
  this.draw = function() {
    let fullBox = document.createElement("div");
    fullBox.id = "fullBox";
    document.body.appendChild(fullBox);
    while (fullBox.firstChild) {
      fullBox.removeChild(fullBox.firstChild);
    }
    this.itemList.forEach(function(temp) {
      temp.draw();
    });
  };
}

function item(name, details, completion) {
  this.name = name;
  this.details = details;
  this.completion = completion;
  let text;
  this.draw = function() {
    let box = document.createElement("div");

    let text = document.createElement("p");
    let temp = document.getElementById("fullBox");

    temp.appendChild(box);
    box.appendChild(text);
    text.innerHTML = this.name + this.details + this.completion;
  };
}

function SubItem(Name, text, position, completion) {}

function addItem() {
  let item1 = new item(
    document.getElementById("nameBox").value,
    document.getElementById("detailBox").value,
    document.getElementById("completionBox").value
  );
  //console.log(list1.length);
  list1.add(item1);
  list1.draw();
}

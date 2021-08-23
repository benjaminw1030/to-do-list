// To Do List
function ToDoList() {
  this.items = {};
  this.currentId = 0;
}

ToDoList.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items[item.id] = item;
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

ToDoList.prototype.removeItem = function(id) {
  if (this.items[id] === undefined) {
    return false;
  }
  delete this.items[id];
  return true;
}

ToDoList.prototype.completeItem = function(id) {
  if (this.items[id] === undefined) {
    return false;
  }
  this.items[id].complete = true;
  return true;
}

// Items
function Item(task) {
  this.task = task;
  this.complete = false;
}


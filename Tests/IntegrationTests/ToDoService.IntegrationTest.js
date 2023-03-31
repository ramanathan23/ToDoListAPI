const expect = require("chai").expect;
const Store = require('../../Persistence/InMemory');
const ToDoService = require('../../Services/ToDoService');

describe( "ToDoService Unit Tests", () => {
    var store = new Store();
    var todoService = new ToDoService(store);
    store.push({});
    store.push({});

    it("ToDoService should list all todos", () => {
       let list = todoService.ListToDo();
       expect(list.length).equals(3);
	});

    it("ToDoService should complete todo", () => {
        todoService.CompleteToDo(0);
        expect(todoService.ListToDo()[0].state == "complete").true
    });

    it("ToDoService should create todo", () => {
        todoService.CreateToDo({});
        expect(todoService.ListToDo().length == 3).true
    });
});

import "./App.css";
import React, { useState } from "react";
import {
  TodoController,
  TodoControllerImpl,
} from "./controller/todo-controller";
import List from "./component/List";
import { TodoElementModel } from "./model/todo-model";
import TodoListForm from "./component/TodoListForm";

const todoController: TodoController = new TodoControllerImpl();

function App() {
  const list = todoController.findAll();
  const [items, setItems] = useState<TodoElementModel[]>(list);

  const addItem = (item: TodoElementModel) => {
    console.log("add item to list");
    
    setItems(prevItems => [...prevItems, item]);
  };

  console.log(items);

  return (
    <div className="App">
      <List items={items} />
      <TodoListForm
        todoController={todoController}
        addItem={addItem}
      />
    </div>
  );
}

export default App;

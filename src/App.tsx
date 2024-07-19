import "./App.css";
import React, { useState } from "react";
import {
  TodoController,
  TodoControllerImpl,
} from "./controller/todo-controller";
import List from "./component/List";
import { TodoElementModel } from "./model/todo-model";
import TodoListForm from "./component/TodoListForm";

const todoController: TodoController = new TodoControllerImpl([]);

function App() {
  const [items, setItems] = useState<TodoElementModel[]>([]);

  const addItem = (item: TodoElementModel) => {
    setItems([...items, item]);
  };

  console.log(todoController.list);

  return (
    <div className="App">
      <List items={items} />
      <TodoListForm todoController={todoController} addItem={addItem} />
    </div>
  );
}

export default App;

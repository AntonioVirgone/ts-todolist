import React, { useState } from "react";
import { TodoStatus } from "../model/todo-status";
import { TodoElementModel } from "../model/todo-model";
import { generateRandomString } from "../utils/utils";
import { TodoController } from "../controller/todo-controller";

interface TodoListFormProps {
  todoController: TodoController;
  addItem: (item: TodoElementModel) => void;
}

const TodoListForm: React.FC<TodoListFormProps> = ({
  todoController,
  addItem,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const item: TodoElementModel = {
      _id: generateRandomString(10),
      title: title,
      description: description,
      status: TodoStatus.IN_PROGRESS,
    };

    try {
      todoController.addElement(item);
      addItem(item);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    console.log("delete all");
    todoController.removeAll()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button onClick={handleDelete}>Delete</button>
    </form>
  );
};

export default TodoListForm;

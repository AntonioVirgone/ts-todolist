import React from "react";
import { TodoController } from "../controller/todo-controller";
import { TodoStatus } from "../model/todo-status";
import { generateRandomString } from "../utils/utils";
import { TodoElementModel } from "../model/todo-model";

interface AddElementButtonProps {
  name: string;
  todoController: TodoController;
  addItem: (item: TodoElementModel) => void;
}

const AddElementButton: React.FC<AddElementButtonProps> = ({
  name,
  todoController,
  addItem,
}) => {
  const handleClick = () => {
    const item: TodoElementModel = {
      _id: generateRandomString(10),
      title: "Titolo 1",
      description: "Lorem ipsum dolor sit amet",
      status: TodoStatus.IN_PROGRESS,
    };

    todoController.addElement(item, []);
    addItem(item);
  };
  return <button onClick={handleClick}>{name}</button>;
};

export default AddElementButton;

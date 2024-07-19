import { TodoElementModel } from "../model/todo-model";
import { TodoStatus } from "../model/todo-status";

export interface TodoService {
  // Find all element
  findAll(): TodoElementModel[];
  // Add element
  addElement(item: TodoElementModel): void;
  // Remove element
  removeElement(itemId: string): void;
}

export class TodoServiceImpl implements TodoService {
  findAll(): TodoElementModel[] {
    return [
      {
        _id: "abc",
        title: "Titolo 1",
        description: "Lorem ipsum",
        status: TodoStatus.PENDING,
      },
      {
        _id: "def",
        title: "Titolo 2",
        description: "Lorem ipsum",
        status: TodoStatus.COMPLETED,
      },
      {
        _id: "ghi",
        title: "Titolo 3",
        description: "Lorem ipsum",
        status: TodoStatus.IN_PROGRESS,
      },
    ];
  }
  addElement(item: TodoElementModel): void {
    throw new Error("Method not implemented.");
  }
  removeElement(itemId: string): void {
    throw new Error("Method not implemented.");
  }
}

export {};

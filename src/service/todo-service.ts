import { TodoElementModel } from "../model/todo-model";
import { TodoStatus } from "../model/todo-status";

export interface TodoService {
  // Find all element
  findAll(): TodoElementModel[];
  // Add element
  addElement(item: TodoElementModel, list: TodoElementModel[]): void;
  // Remove element
  removeElement(itemId: string): void;
  // Remove all element
  removeAll(): void;
}

export class TodoServiceImpl implements TodoService {
  list: TodoElementModel[] = [
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

  findAll(): TodoElementModel[] {
    return this.list;
  }
  addElement(item: TodoElementModel, list: TodoElementModel[]): void {
    list.push(item);
  }
  removeElement(itemId: string): void {
    throw new Error("Method not implemented.");
  }

  removeAll(): void {
    console.log("remove all from service");
    
    this.list.length = 0;
  }
}

export {};

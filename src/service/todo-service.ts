import { TodoElementModel } from "../model/todo-model";

export interface TodoService {
  // Find all element
  findAll(): TodoElementModel[];
  // Add element
  addElement(item: TodoElementModel): void;
  // Remove element
  removeElement(itemId: string): void;
}

class TodoServiceImpl implements TodoService {
    findAll(): TodoElementModel[] {
        throw new Error("Method not implemented.");
    }
    addElement(item: TodoElementModel): void {
        throw new Error("Method not implemented.");
    }
    removeElement(itemId: string): void {
        throw new Error("Method not implemented.");
    }
}

export {};

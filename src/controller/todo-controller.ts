import { TodoElementModel } from "../model/todo-model";

export interface TodoController {
  list: TodoElementModel[];
  addElement(element: TodoElementModel): void;
  removeElement(elementId: string): void;
}

export class TodoControllerImpl implements TodoController {
  constructor(public list: TodoElementModel[]) {}
  addElement(element: TodoElementModel): void {
    this.list.push(element);
  }
  removeElement(elementId: string): void {
    throw new Error("Method not implemented.");
  }
}

export {};

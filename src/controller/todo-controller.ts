import type { TodoElementModel } from "../model/todo-model";
import { TodoService, TodoServiceImpl } from "../service/todo-service";
import { CheckInput } from "../decorator/check-input-decorator";

export interface TodoController {
  findAll(): TodoElementModel[];
  addElement(element: TodoElementModel): void;
  removeElement(elementId: string): void;
  removeAll(): void;
}

export class TodoControllerImpl implements TodoController {
  private service: TodoService;

  constructor() {
    this.service = new TodoServiceImpl();
  }

  findAll(): TodoElementModel[] {
    return this.service.findAll();
  }

  @CheckInput
  addElement(element: TodoElementModel): void {
    const list = this.findAll();    
    this.service.addElement(element, list);
  }

  removeElement(elementId: string): void {
    throw new Error("Method not implemented.");
  }

  removeAll(): void {
    this.service.removeAll();
  }
}

export {};

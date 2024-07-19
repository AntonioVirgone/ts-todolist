import { TodoStatus } from "./todo-status"

export type TodoElementModel = {
    readonly _id: string,
    title: string,
    description: string,
    status: TodoStatus
}

import { TodoElementModel } from "../model/todo-model";

export function CheckInput(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  console.log("decorator -> ", originalMethod);

  descriptor.value = function (...args: any[]) {
    const values: TodoElementModel[] = JSON.parse(JSON.stringify(args));
    console.log(
      `Called ${propertyKey} with parameters: ${JSON.stringify(args)}`
    );

    if (values[0].title.length === 0 || values[0].description.length === 0) {
      throw new Error("Input not valid");
    }

    return originalMethod.apply(this, args);
  };
  
  return descriptor;
}

export function Log(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Called ${propertyKey} with args: ${JSON.stringify(args)}`);
    const result = originalMethod.apply(this, args);
    console.log(`Result from ${propertyKey}: ${result}`);
    return result;
  };

  // Nota: Non c'è bisogno di restituire esplicitamente il descrittore, poiché stiamo modificando l'oggetto passato.
}

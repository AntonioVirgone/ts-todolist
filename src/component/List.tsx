// src/components/List.tsx
import React from 'react';
import { TodoElementModel } from '../model/todo-model';

interface ListProps {
  items: TodoElementModel[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
};

export default List;
import './App.css';
import React, { useState } from 'react';

import Header from './Header.js';
import Adder from './Adder.js';
import List from './List.js';

var list = [
  {
    "id": 1,
    "task": "Give dog a bath",
    "imp": false
  },
  {
    "id": 2,
    "task": "Second task",
    "imp": true
  }
];

var list2 = list;
var ids = 3;

export default function FolderList() {
  const [toDoList, setToDoList] = useState(list);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id) ? { ...task, imp: !task.imp } : { ...task };
    });
    setToDoList(mapped);
  }

  const handleDelete = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id) ? { ...task, id: -1 } : { ...task };
    });
    setToDoList(mapped);
    list2 = mapped;
    setTimeout(() => {
      tdel(id);
    }, 5000);
  }

  const tdel = (id) => {
    let deleted = list2.filter((task) => {
      return task.id !== -1;
    });
    setToDoList(deleted);
    list2 = deleted;
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: ids, task: userInput, imp: false }];
    ids = ids + 1;
    setToDoList(copy);
    list2 = copy;
  }

  return (
    <div>
      <Header />
      <Adder addTask={addTask} />
      <List list={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
    </div>
  );
}
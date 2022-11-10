import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    return list;
  };

  const addTask = (myTask) => {
    const newEntry = { label: myTask, done: false };
    const newList = [...getList(), newEntry];
    setList(newList)
    console.log(newList)
    return newList;
  };

  const clearList = () => {
    setList([])
    return getList();
  };

  const deleteTask = (index) => {
    const editList = getList().filter((task, i) => i != index);
    console.log(editList)
    setList(editList)
    return getList();
  };

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(newTask);
    setNewTask("");
  };
  
  const handleClear = (event) => {
    event.preventDefault();
    clearList();
    setNewTask("");
  }

  const handleDelete = (index) => {
    deleteTask(index)
  }

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit}>
        <h2>
          <label>
            What do you need to do?<br></br>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </label>
        </h2>
        <input type="submit" />
      </form>
      <br></br>
      <ul className="list-unstyled">
      {list.map((task, i) => {
        return (
          <li key={i}>
            <p>{task.label} <button className="btn" onClick={() => handleDelete(i)}>X</button></p>
          </li>)}
)}
      </ul>
      <button onClick={handleClear}>Clear list</button>
    </div>
  );
};

export default Home;

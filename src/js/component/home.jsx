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
    const newList = [...list, newEntry];
    console.log(newList)
    return newList;
  };

  const clearList = () => {
    const tempEntry = { label: " ", done: false };
    const tempList = [tempEntry];
    console.log(tempList)
    return tempList;
  };

  const deleteTask = (index) => {
    const editList = list.filter((task, i) => i != index);
    console.log(editList)
    return(editList);
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
      {list.map((task, i) => {
        return (
          <>{
            i == 0 ? "" : <p key={i}>{task.label} <button className="btn btn-danger" onClick={() => handleDelete(i)}>X</button></p>
          }</>
)})}
      <button onClick={handleClear}>Clear list</button>
    </div>
  );
};

export default Home;

import React from "react";

export const TaskContainer = () => {
  return (
    <section>
      <h1>TASK</h1>
      <form>
        <label>Name</label>
        <input type="text" />

        <label>Description</label>
        <textarea></textarea>

        <label>List</label>
        <select>
          <option>PERSONAL</option>
          <option>SCHOOL</option>
          <option>MARKET</option>
          <option>ADD NEW LIST</option>
        </select>

        <label>DUE DATE</label>
        <input type="date" />

        <button>DELETE TASK</button>
        <button>SAVE CHANGES</button>
      </form>
    </section>
  );
};

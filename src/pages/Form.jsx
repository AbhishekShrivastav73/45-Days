import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    naam: "",
    password: "",
    age : ''
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("Form DAta", data);
  };

  return (
    <div className="p-6">
      <form onSubmit={handleSubmit}>
        <input
          name="naam"
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Name"
          className="px-4 py-2 rounded-3xl bg-zinc-200"
        />
        <input
          name="password"
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Password"
          className="px-4 py-2 rounded-3xl bg-zinc-200"
        />
        <input
          name="age"
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Password"
          className="px-4 py-2 rounded-3xl bg-zinc-200"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;

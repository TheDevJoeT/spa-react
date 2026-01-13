import React, { useState } from "react";
import "./index.css";

export default function PostForm() {
  let [title, setTitle] = useState("");

  let requestForm = () => {
    setTitle("");
  };

  return (
    <div>
      <form className="post-form">
        <h1>Create Post</h1>
        <div className="form-control">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
        </div>
        <p>{title}</p>
        <button type="button" onClick={requestForm}>
          Reset
        </button>
        <div className="form-control">
          <button>Post Now</button>
        </div>
      </form>
    </div>
  );
}

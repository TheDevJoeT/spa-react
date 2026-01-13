import React, { useState } from "react";
import "./index.css";

export default function PostForm({addPost}) {
  let [title, setTitle] = useState("");

  let resetForm = () => {
    setTitle("");
  };

  let upload_post = (e) => {
    e.preventDefault() // preventing refreshing pages
    

    let post = {
        id : Math.floor(Math.random() * 1000),
        title : title
    }

    resetForm();
    
    addPost(post)
  }
  return (
    <div>
      <form className="post-form" onSubmit={upload_post}>
        <h1>Create Post</h1>
        <div className="form-control">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
        </div>
        <div className="form-control">
          <button type="submit">Post Now</button>
        </div>
      </form>
    </div>
  );
}


import { useState } from 'react';
import './App.css'; // this css only implies app.js which is a component 


function App() {
 
  let [name,setName] = useState("Thant Zin Aung") // [getter,setterFun]
  let [posts, setPosts] = useState([
    {
      id : 1,
      title : "First Post"
    },
    {
      id : 2,
      title : "Second Post"
    },
    {
      id : 3,
      title : "Third Post"
    }
  ])
 
  const changeName = () => {
    setName('Joe')
  }

  const deletePost = (id) => {
    setPosts((prevState)=> prevState.filter(post => post.id !== id))
  }
  return (
  
    <div className='app'>
      <h1>Hello {name}!</h1>
      <button onClick={changeName}>Change Name</button> 

      <h1>Posts</h1>
      <ul>
       {!!posts.length &&
        posts.map((post)=> (
          <li key={post.id}>
            {post.title}
            <button onClick={()=>deletePost(post.id)}>Delete</button>
          </li>
        ))
       }
       {!posts.length && <p>No post available</p>}
      </ul>
    </div>

  );
}

export default App;

// import { set } from 'lodash'
// import React, { useState } from 'react'

// export default function App() {

//   let [count,setCount] = useState(0)
//   let increament = () => {
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1)
//     setCount((prevState)=> prevState +1) 
//     // setCount(count+1) Never use this kind of thing to check
//   }

//   return (
//     <div>
//       <h1>Counter</h1>
//       <h3>Count : {count}</h3>
//       <button onClick={increament}>Increase</button>
//     </div>
//   )
// }


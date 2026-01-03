import logo from './logo.svg';
import './App.css'; // this css only implies app.js which is a component 
import Image from './assets/image.jpg'

function App() {
 
  let name = "Thant Zin Aung"
 
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='app'>
      <h1>Hello {name}!</h1>
      {/* <img src='/image.jpg' alt=''></img> public folder method
      <img src={Image} alt='' /> src folder-import method */} 
    </div>

  );
}

export default App;

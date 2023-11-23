
import { useRef } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
 import { useSelector } from 'react-redux';

function App() {
  let inputRef=useRef();
let dispatch=useDispatch();
let storeObj=useSelector((store)=>{return store})
  return (
    <div className="App">
      <div>
        <input ref={inputRef}></input>
        <button onClick={()=>{
dispatch({type:"addActor",data:inputRef.current.value})
        }}>SEND TO STORE</button>
        <h1>{storeObj.actors}</h1>
      </div>
    </div>
  );
}

export default App;

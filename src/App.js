// import logo from './logo.svg';
import './App.css';
import OS from "./OS";
import Mfg from './Mfg';

function App() {

  const operating = ["Android", "Blackberry","iPhone","Windows Phone"];
  const manufacture = ["Samsung", "HTC", "Mocromax", "Apple"]
  return (
    <div className="App">
      <h1 style={{textAlign: "left"}}>Mobile Operation System</h1>
      <ul>{operating.map((el)=>(
            <OS os={el} />
          ))}
      </ul>

      <h1 style={{textAlign: "left"}}>Mobile Manufacturers</h1>
      <ul>
        {manufacture.map((prd)=>(
          <Mfg mfg={prd}/>
        ))}
      </ul>
    </div>
  );
}



export default App;
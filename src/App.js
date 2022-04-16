import "./App.css";
import { useState } from "react";

function App() {
  const [box0, setbox0] = useState(true);
  const [box1, setbox1] = useState(false);
  const [box2, setbox2] = useState(false);
  const [box3, setbox3] = useState(false);
  const [box4, setbox4] = useState(false);
  const [box5, setbox5] = useState(false);

  const handle0plus = () => {
    if (box0) {
      setbox0(false);
      setbox1(true);
    }
  };

  const handle1plus = () => {
    if (box1) {
      setbox1(false);
      setbox2(true);
    }
  };

  const handle2plus = () => {
    if (box2) {
      setbox2(false);
      setbox3(true);
    }
  };

  const handle3plus = () => {
    if (box3) {
      setbox3(false);
      setbox4(true);
    }
  };

  const handle4plus = () => {
    if (box4) {
      setbox4(false);
      setbox5(true);
    }
  };

  const handle5minus = () => {
    if (box5) {
      setbox5(false);
      setbox4(true);
    }
  };

  const handle4minus = () => {
    if (box4) {
      setbox4(false);
      setbox3(true);
    }
  };

  const handle3minus = () => {
    if (box3) {
      setbox3(false);
      setbox2(true);
    }
  };

  const handle2minus = () => {
    if (box2) {
      setbox2(false);
      setbox1(true);
    }
  };

  const handle1minus = () => {
    if (box1) {
      setbox1(false);
      setbox0(true);
    }
  };

  const go0throw = () => {
      setbox0(true)
      setbox1(false)
      setbox2(false)
      setbox3(false)
      setbox4(false)
      setbox5(false)
  }

  const go1throw = () => {
    setbox0(false)
    setbox1(true)
    setbox2(false)
    setbox3(false)
    setbox4(false)
    setbox5(false)
}

const go2throw = () => {
  setbox0(false)
  setbox1(false)
  setbox2(true)
  setbox3(false)
  setbox4(false)
  setbox5(false)
}

const go3throw = () => {
  setbox0(false)
  setbox1(false)
  setbox2(false)
  setbox3(true)
  setbox4(false)
  setbox5(false)
}

const go4throw = () => {
  setbox0(false)
  setbox1(false)
  setbox2(false)
  setbox3(false)
  setbox4(true)
  setbox5(false)
}

const go5throw = () => {
  setbox0(false)
  setbox1(false)
  setbox2(false)
  setbox3(false)
  setbox4(false)
  setbox5(true)
}

  return (
    <div className="App">
      <h1 style={{color : "#05B38A"}}>Elevator Playground</h1>
      <div className="generealbox">
        <div className={`box ${box5 && "green"}`}>
          <h2>5</h2>
          {box5 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
        </div>

        <div className="buttons">
          <button className="button">+</button>
          <button className="button" onClick={handle5minus}>
            -
          </button>
        </div>
      </div>

      <div className="generealbox">
        <div className={`box ${box4 && "green"}`}>
          <h2>4</h2>
          {box4 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
        </div>

        <div className="buttons">
          <button className="button" onClick={handle4plus}>
            +
          </button>
          <button className="button" onClick={handle4minus}>
            -
          </button>
        </div>
      </div>

      <div className="generealbox">
        <div className={`box ${box3 && "green"}`}>
          <h2>3</h2>
          {box3 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
        </div>

        <div className="buttons">
          <button className="button" onClick={handle3plus}>
            +
          </button>
          <button className="button" onClick={handle3minus}>
            -
          </button>
        </div>
      </div>

      <div className="generealbox">
      <div className={`box ${box2 && "green"}`}>
          <h2>2</h2>
          {box2 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
          
        </div>

        <div className="buttons">
          <button className="button" onClick={handle2plus}>
            +
          </button>
          <button className="button" onClick={handle2minus}>
            -
          </button>
        </div>
      </div>

      <div className="generealbox">
      <div className={`box ${box1 && "green"}`}>
          <h2>1</h2>
          {box1 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
          
        </div>

        <div className="buttons">
          <button className="button" onClick={handle1plus}>
            +
          </button>
          <button className="button" onClick={handle1minus}>
            -
          </button>
        </div>
      </div>

      <div className="generealbox">
        <div className={`box ${box0 && "green"}`}>
          <h2>0</h2>
          {box0 &&           <div className="floors">
            <div className="minidiv" onClick={go5throw}>
              5
            </div>
            <div className="minidiv" onClick={go4throw}>
              4
            </div>
            <div className="minidiv" onClick={go3throw}>
              3
            </div>
            <div className="minidiv" onClick={go2throw}>
              2
            </div>
            <div className="minidiv" onClick={go1throw}>
              1
            </div>
            <div className="minidiv" onClick={go0throw}>
              0
            </div>
          </div>}
          
        </div>

        <div className="buttons">
          <button className="button" onClick={handle0plus}>
            +
          </button>
          <button className="button">-</button>
        </div>
      </div>
    </div>
  );
}

export default App;

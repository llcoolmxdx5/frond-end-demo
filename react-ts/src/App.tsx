import React, { useState } from "react";
import Home from "./pages/Home";
import Counter from "./pages/count/Counter";
import Hoc from "./component/Hoc";
import Button from "./component/Button";
import { request } from "./utils/http"
import MyInput from "./component/MyInput";
import MyForm from "./component/MyForm";

interface IState {
  count: number;
}

function App() {
  const [count, setCount] = useState<IState["count"]>(0);
  React.useEffect(() => {
    let fun = async () => {
      let rs =  await request({
        url: "http://www.baidu.com",
        type: "get"
      })
      console.log(rs)
    }
    fun()
  }, [])
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  const handleClick = (e: React.MouseEvent) => {
    console.log(e.target);
  };
  return (
    <div className="App">
      {/* <Home name={"中国加油"}></Home> */}
      <p></p>
      <Counter
        count={count}
        increment={incrementCount}
        decrement={decrementCount}
      ></Counter>
      <p></p>
      {/* <Hoc></Hoc> */}
      <p></p>
      <Button click={handleClick}>
        <span>button 组件</span>
      </Button>
      <p></p>
      {/* <MyInput /> */}
      <p></p>
      <MyForm />
    </div>
  );
}

export default App;

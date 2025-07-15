import "./App.css";
import Counter from "./components/counter";
import UseStatePrac from "./components/UseStatePrac";
import UseEffectCounter from "./components/UseEffectCounter";
import { Box } from "./components/Box";
import Button from "./components/Button";
import Timer from "./components/Timer";

function App() {
  // const onClickButton1 = () => {
  //   console.log("리액트 어렵죠?");
  // };

  // const onClickButton2 = () => {
  //   console.log("세션 끝났다!");
  // };

  return (
    <>
      {/* <Counter />
      <UseStatePrac />
      <UseEffectCounter />

      <Box label="빨강박스" color="red" />
      <Box label="파랑" color="blue" />

      <Button
        label={"리액트 어렵죠?"}
        bgColor={"#5e3afd"}
        buttonHandler={onClickButton1} 
      />
      <Button
        label={"세션 끝내기!"}
        bgColor={"#2c9c4e"}
        buttonHandler={onClickButton2} 
      /> */}

      <Timer />
    </>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import cn from "./App.module.css";

function App() {
  const cash = useSelector((state) => state.cash.cash);
  const dispatch = useDispatch();

  const addCash = (num) => {
    dispatch({ type: "ADD_CASH", payload: num });
  };

  const getCash = (num) => {
    dispatch({ type: "GET_CASH", payload: num });
  };

  return (
    <div className={cn.wrapper}>
      <button onClick={() => addCash(Number(prompt()))} className={cn.button}>
        Пополнить счет
      </button>
      <button onClick={() => getCash(Number(prompt()))} className={cn.button}>
        Снять со счета
      </button>
      <h1 className={cn.cash}>{cash}</h1>
    </div>
  );
}

export default App;

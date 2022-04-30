import { useDispatch, useSelector } from "react-redux";
import cn from "./App.module.css";
import { fetchCustomers } from './asyncActions/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();

  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (num) => {
    dispatch({ type: "ADD_CASH", payload: num });
  };

  const getCash = (num) => {
    dispatch({ type: "GET_CASH", payload: num });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <>
      <div className={cn.wrapper}>
        <button onClick={() => addCash(Number(prompt()))} className={cn.button}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))} className={cn.button}>
          Снять со счета
        </button>
        <button onClick={() => addCustomer(prompt())} className={cn.button}>
          Добавить клиента
        </button>
        <button onClick={() => dispatch(fetchCustomers())} className={cn.button}>
          Добавить клиентов из базы
        </button>

        <h1 className={cn.cash}>{cash}</h1>
      </div>
      <div className={cn.customers}>
        {customers.length > 0 ? (
          <div>
            {customers.map((customer) => (
              <div
                onClick={() => removeCustomer(customer)}
                style={{
                  fontSize: "2rem",
                  border: "1px solid black",
                  padding: "10px",
                  marginTop: 15,
                  width: "600px",
                  margin: "auto",
                }}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "2rem", marginTop: 20 }}>
            Клиенты отсутствуют
          </div>
        )}
      </div>
    </>
  );
}

export default App;

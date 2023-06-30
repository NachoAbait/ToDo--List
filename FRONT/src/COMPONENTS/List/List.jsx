import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./list.module.css";
import { addList } from "../../REDUX/Actions/addList.js";
import { checkItem } from "../../REDUX/Actions/checkItem.js"
import { useAuth } from "../../Context/userContext.js";

export default function List() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.listado);
  const [item, setItem] = useState("");

  const { signup, user } = useAuth()
  console.log(user)

  function handleInputChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(addList(item));
    setItem("");
  }

  function handleCheckboxChange(index) {
    const updatedList = list.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    dispatch(checkItem(updatedList))
    // Dispatch an action or update the state with the updated list
  }

  return (
    <div className={css.container}>
      <div className={css.list}>
        <div className={css.titulo}>
          <h1>To Do</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Comprar tomates..."
            className={css.input}
            value={item}
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Agregar</button>
        </div>
        <div className={css.listado}>
          {list.map((item, index) => (
            <div key={index} className={`${css.ul} ${item.checked ? css.checked : ""}`}>
              <div className={css.checkBox}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
              </div>
              <div className={`${css.item} ${item.checked ? css.tachado : ""}`}>{item.name}</div>
              <div className={css.x}>❌</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

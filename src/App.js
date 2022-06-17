import "./styles.css";
import React, { useState, useReducer } from "react";
import Modal from "./Modal";
const defaultstate = {
  people: [],
  isModalOpen: false,
  modalContent: "item did not added"
};
const reducer = (state, action) => {
  if (action.type === "add") {
    const NewItem = [...state.people, action.payload];
    return {
      ...state,
      people: NewItem,
      isModalOpen: true,
      modalContent: "item added"
    };
  } else if (action.type === "close") {
    return { ...state, isModalOpen: false };
  } else {
    throw new Error("no such action type");
  }
};
export default function App() {
  const [item, setItem] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultstate);

  function HandleForm(e) {
    e.preventDefault();
    if (item) {
      const ite = { id: new Date().getTime().toString(), item };
      dispatch({ type: "add", payload: ite });
    } else {
      dispatch({ type: "random" });
    }
  }

  const CloseModal = () => {
    dispatch({ type: "close" });
  };
  return (
    <div className="App">
      {state.isModalOpen && (
        <Modal modalContents={state.modalContent} CloseModal={CloseModal} />
      )}
      <form className="form-control" onSubmit={HandleForm}>
        <div className="form-control">
          <label className="label" htmlFor="user">
            Item
          </label>
          <input
            type="text"
            name="user "
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="inputs"
          />
        </div>
        <button type="submit" className="btn">
          Add Item
        </button>
      </form>

      {state.people.map((people) => {
        const { id, item } = people;
        return (
          <div key={id} className="area">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

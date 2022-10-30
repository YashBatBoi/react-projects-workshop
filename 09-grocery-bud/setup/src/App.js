import React, { useState, useEffect, useRef } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorageItem = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorageItem());
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showAlert, setShowAlert] = useState({
    show: false,
    message: "",
    typeOfAlert: "",
  });

  const focusedRef = useRef(null);

  const deleteItems = (id) => {
    displayAlert(true, "danger", "item removed");
    setList(list.filter((element) => element.id !== id));
  };

  const clearList = () => {
    displayAlert(true, "danger", "empty list");
    setList([]);
  };

  // this function is used to show alert
  const displayAlert = (show, type, message) => {
    setShowAlert({ show, message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      displayAlert(true, "danger", "please enter value");
    } else if (name && isEdit) {
      // this below logic is complicated so I had to saw our sir code(roopam)
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setIsEdit(false);
      displayAlert(true, "success", "value changed");
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      displayAlert(true, "success", "item added to list");
      setName("");
    }
  };

  // this hook is use to set items in the localStorage so it will remain as long.
  useEffect(() => {
    focusedRef.current.focus();
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleEdit = (id) => {
    const particlarItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditId(id);
    console.log(particlarItem);
    setName(particlarItem.title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {/* here alert will is going to be shown */}
        {showAlert.show ? (
          <Alert {...showAlert} list={list} removeAlert={displayAlert} />
        ) : null}

        <h3>grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            ref={focusedRef}
            className="grocery"
            placeholder="e.g. milk"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEdit ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 ? (
        <div className="grocery-container">
          <List
            items={list}
            deleteItems={deleteItems}
            editHandling={handleEdit}
          />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default App;

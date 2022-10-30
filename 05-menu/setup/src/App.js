import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// Set objects are collections of values. A value in the Set may only occur once; it is unique in the Set's collection. You can iterate through the elements of a set in insertion order.
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    // this will set the state which we are sending to the Menu component and only send the filtered data.
    setMenuItems(newItems);
  };

  return (
    <>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          {/* This component will use the filterItems function and filtered the particular category data */}
          <Categories filterItems={filterItems} categories={categories} />
          {/* This component has the filtered data that has been filter by the Catergories component to be displayed */}
          <Menu menuItems={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;

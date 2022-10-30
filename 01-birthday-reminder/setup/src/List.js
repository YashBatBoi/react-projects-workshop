// import React, { useState } from "react";

// const List = ({ people }) => {
//   const [peopleData, setPeopleData] = useState(
//     people.length === 0 ? [] : people
//   );

//   const removeEvents = (id) => {
//     let newPeople = peopleData.filter((person) => person.id !== id);
//     setPeopleData(newPeople);
//   };

//   const addReminders = (newPerson) => {
//     const newAdded = [...peopleData];
//     newAdded.push(newPerson);
//     setPeopleData(newAdded);
//   };

//   return (
//     <>
//       <h3>{peopleData.length} birthdays today</h3>
//       {peopleData.map((person) => {
//         const { id, name, age, image } = person;
//         return (
//           <article key={id} className="person">
//             <img src={image} alt={name} />
//             <div>
//               <h4>{name}</h4>
//               <p>{age}</p>
//               <h5
//                 style={{ cursor: "pointer", color: "blue" }}
//                 onClick={() => {
//                   removeEvents(id);
//                 }}
//               >
//                 Remove Event
//               </h5>
//             </div>
//           </article>
//         );
//       })}
//       <button
//         className="btn"
//         onClick={() => {
//           let name = prompt("Enter your name");
//           let age = prompt("Enter your age");

//           addReminders({
//             id: peopleData.map((id) => {
//               return id.id + 1;
//             }),
//             name: name,
//             age: age,
//             image:
//               "https://images.unsplash.com/photo-1663550910420-97605cfa81ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
//           });
//         }}
//       >
//         Add Reminder
//       </button>
//     </>
//   );
// };

// export default List;

import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

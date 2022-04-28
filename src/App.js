// import React from "react";
import { useState } from "react";
import User from "./components/users/User";
function App() {
  const users = [
    {
      image: "https://admin-dashboardv1.netlify.app/img/user/avatar1.jpg",
      phone: "0912345",
      cell: "0954321",
      name: "Zaw Zaw",
    },
    {
      image: "https://admin-dashboardv1.netlify.app/img/user/avatar2.jpg",
      phone: "0978182",
      cell: "094056",
      name: "Mg Mg",
    },
    {
      image: "https://admin-dashboardv1.netlify.app/img/user/avatar3.jpg",
      phone: "0988888",
      cell: "0999999",
      name: "Htet Htet",
    },
    {
      image: "https://admin-dashboardv1.netlify.app/img/user/avatar4.jpg",
      phone: "099876",
      cell: "096789",
      name: "Hlyan Hlyan",
    },
  ];

  let [count, setCount] = useState(users.length);

  return (
    <div className="container mt-3">
      <h1>{count}</h1>
      <button
        className="btn btn-outline-info mb-2"
        onClick={() => {
          setCount(++count);
          console.log(count);
        }}
      >
        Increase
      </button>
      <div className="row g-2">
        {users.map((cur, i) => (
          <User
            img={cur.image}
            phone={cur.phone}
            cell={cur.cell}
            name={cur.name}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

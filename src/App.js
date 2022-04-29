// import React from "react";
import { useState, useEffect } from "react";
import User from "./components/users/User";
import ShowBtn from "./components/users/ShowBtn";
import AddUser from "./components/users/AddUser";
function App() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch("https://randomuser.me/api/?results=20");
        const { results } = await data.json();
        const user = results.map((res) => {
          return {
            uuid: res.login.uuid,
            name: `${res.name.title} ${res.name.first}`,
            phone: res.phone,
            cell: res.cell,
            image: res.picture.medium,
          };
        });
        setUsers(user);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const addUser = (user) => {
    setUsers([user, ...users]);
    setShowForm(!showForm);
  };

  const deleteUser = (uId) => {
    setUsers(users.filter((user) => user.uuid !== uId));
  };

  const showOnClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <ShowBtn showForm={showOnClick} />

      <div className="row g-2 justify-content-center">
        {showForm && <AddUser addUser={addUser} />}

        <div className="col-lg-6">
          <div className="row g-2 vh-100 overflow-auto justify-content-end">
            {users.map((cur, i) => (
              <User
                img={cur.image}
                phone={cur.phone}
                cell={cur.cell}
                name={cur.name}
                key={i}
                id={cur.uuid}
                deleteUser={deleteUser}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

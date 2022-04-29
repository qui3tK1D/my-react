import { useState } from "react";
const AddUser = function ({ addUser }) {
  const [name, setName] = useState("");
  const [uuid, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [cell, setCell] = useState("");
  const [image, setImage] = useState("");

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeId = (e) => setId(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeCell = (e) => setCell(e.target.value);
  const handleChangeImage = (e) => setImage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ uuid, name, phone, cell, image });
  };

  return (
    <div className="col-lg-6">
      <div className="card bg-light border-0 shadow-sm">
        <div className="card-header">Add User</div>
        <div className="card-body">
          <form
            onSubmit={handleSubmit}
            action=""
            className="row g-3 justify-content-end"
          >
            <div className="col-md-6">
              <label className="form-label" htmlFor="firstName">
                Name
              </label>
              <input
                className="form-control"
                placeholder="John"
                type="text"
                id="firstName"
                onChange={handleChangeName}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label" htmlFor="userId">
                Id
              </label>
              <input
                className="form-control"
                placeholder=""
                type="text"
                id="userId"
                onChange={handleChangeId}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tele"
                className="form-control"
                placeholder="09-0000"
                id="phone"
                onChange={handleChangePhone}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="cell" className="form-label">
                Cell
              </label>
              <input
                type="tel"
                className="form-control"
                placeholder="09-1111"
                id="cell"
                onChange={handleChangeCell}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label" htmlFor="image">
                Image Url
              </label>
              <input
                className="form-control"
                placeholder="https://..."
                type="text"
                id="image"
                onChange={handleChangeImage}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-primary">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddUser;

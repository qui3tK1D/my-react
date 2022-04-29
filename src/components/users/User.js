// import React from "react";
function User({ img, phone, cell, name, id, deleteUser }) {
  return (
    <div>
      <div className="card border-0 bg-light shadow-sm">
        <div className="card-body">
          <div className="row justify-content-between align-items-center">
            <div className="col-auto">
              <img
                src={img}
                className="img-thumbnail"
                style={{ width: "72px", height: "72px" }}
              />
            </div>
            <div className="col">
              <p className="m-0">Name: {name}</p>
              <p className="m-0">Ph: {phone}</p>
              <p className="m-0">Cell: {cell}</p>
            </div>
            <div className="col-auto">
              <button
                className="btn btn-outline-danger "
                onClick={() => deleteUser(id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;

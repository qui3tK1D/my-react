// import React from "react";
function User({ img, phone, cell, name }) {
  return (
    <div>
      <div className="card ">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <img src={img} />
            <div>
              <p className="m-0">Name: {name}</p>
              <p className="m-0">Ph: {phone}</p>
              <p className="m-0">Cell: {cell}</p>
            </div>
            <button className="btn btn-outline-danger">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User;

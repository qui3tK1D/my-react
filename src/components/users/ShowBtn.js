const ShowBtn = function ({ showForm }) {
  return (
    <div className="mt-2 mb-2">
      <button className="btn btn-outline-primary" onClick={showForm}>
        Add User
      </button>
    </div>
  );
};

export default ShowBtn;

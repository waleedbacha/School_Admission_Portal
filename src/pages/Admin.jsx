import React from "react";
import { useStudentContext } from "../contexts/StudentContext";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const { state, dispatch } = useStudentContext();
  const navigate = useNavigate();

  const handleEdit = (student) => {
    dispatch({ type: "Set_Current", payload: student });
    navigate("/AdmissionForm");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      dispatch({ type: "Delete_Student", payload: id });
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Admin Panel</h2>

      {state.students.length === 0 ? (
        <div className="alert alert-warning">No students enrolled yet.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Class</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.students.map((student, index) => (
                <tr key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    {student.profilePicture ? (
                      <img
                        src={student.profilePicture}
                        alt="Profile"
                        className="rounded-circle"
                        width="50"
                        height="50"
                      />
                    ) : (
                      <span className="text-muted">N/A</span>
                    )}
                  </td>
                  <td>{student.name}</td>
                  <td>{student.classLevel}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-info me-2"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/profile/${student.id}`} className="btn btn-sm btn-secondary ms-2">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Admin;



import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStudentContext } from "../contexts/StudentContext";

const Profile = () => {
  const { id } = useParams();
  const { state } = useStudentContext();

  const student = state.students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Student not found.</div>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header">
          <h3>Student Profile</h3>
        </div>
        <div className="card-body row">
          <div className="col-md-4 text-center">
            {student.profilePicture ? (
              <img
                src={student.profilePicture}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            ) : (
              <div className="text-muted">No Profile Picture</div>
            )}
          </div>
          <div className="col-md-8">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Age:</strong> {student.age}</p>
            <p><strong>Class:</strong> {student.classLevel}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
            <Link to="/AdmissionForm" className="btn btn-secondary mt-3">Back to Admission</Link>
            <Link to="/admin" className="btn btn-warning mt-3 ms-2">Go to Admin Panel</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

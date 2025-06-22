import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Home = () => {
  return (
    <div className="bg-success min-vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center p-5 shadow rounded bg-white" style={{ maxWidth: "600px" }}>
        <div className="mb-4 text-primary">
          <FaUserGraduate size={60} />
        </div>
        <h1 className="mb-3">Welcome to <MdSchool className="text-success" size={28} /> Student Admission Portal</h1>
        <p className="lead text-muted">
          Begin your academic journey with us. Click below to start your admission process.
        </p>
        <Link to="/AdmissionForm" className="btn btn-success btn-lg mt-4 px-5 py-2">
          Start Admission
        </Link>
      </div>
    </div>
  );
};

export default Home;

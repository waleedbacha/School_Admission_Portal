import React, { useState, useEffect } from 'react';
import { useStudentContext } from '../contexts/StudentContext';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import Form from '../Components/Form';

const AdmissionForm = () => {
  const { state, dispatch } = useStudentContext();
  const { currentStudent } = state;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    classLevel: "",
    email: "",
    phone: "",
    profilePicture: ""
  });

  useEffect(() => {
    if (currentStudent) {
      setForm(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.classLevel) {
      alert("Please fill in all required fields.");
      return;
    }

    if (currentStudent) {
      dispatch({ type: "Edit_Student", payload: form });
    } else {

      const newStudent = {
        ...form,
        id: uuidv4()
      };
      dispatch({ type: "Add_Student", payload: newStudent });
      navigate(`/profile/${newStudent.id}`);
      return;
    }

    dispatch({ type: "Clear_Current" });
    navigate("/admin");
  };

  return (
  <>

  <Form 
  form={form} 
  handleChange={ handleChange} 
  handleSubmit={handleSubmit} 
  currentStudent = {currentStudent}/>
  </>
  );
};

export default AdmissionForm;

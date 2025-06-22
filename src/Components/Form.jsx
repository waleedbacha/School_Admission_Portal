import React from 'react'

const Form = ({handleChange , handleSubmit , form , setForm , hanleEdit , currentStudent}) => {
  return (
        <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title mb-4 text-center text-primary">
            {currentStudent ? "Edit Student Information" : "Student Admission Form"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
                value={form.age}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="mb-3">
              <label className="form-label">Class</label>
              <input
                type="text"
                name="classLevel"
                className="form-control"
                value={form.classLevel}
                onChange={handleChange}
                required
              />
            </div>

            
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

          
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={form.phone}
                onChange={handleChange}
                 required

              />
            </div>

            
            <div className="mb-3">
              <label className="form-label">Profile Picture URL</label>
              <input
                type="text"
                name="profilePicture"
                className="form-control"
                value={form.profilePicture}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              {currentStudent ? "Update Student" : "Submit Admission"}
            </button>
          </form>
        </div>
      </div>
    </div>
  
  )
}

export default Form;

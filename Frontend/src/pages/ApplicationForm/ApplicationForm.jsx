import React, { useState } from 'react';
import axios from 'axios';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    motherName: '',
    fatherName: '',
    address: '',
    tenthMarksheet: null,
    twelfthMarksheet: null,
    recentExamDetails: '',
    mobileNumber: '',
    emailId: '',
    documents: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    axios.post('/api/student/apply', formDataToSend)
      .then(response => {
        //
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  };

  return (
    <div className="application-form">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="motherName">Mother's Name</label>
          <input type="text" name="motherName" id="motherName" value={formData.motherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="fatherName">Father's Name</label>
          <input type="text" name="fatherName" id="fatherName" value={formData.fatherName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="tenthMarksheet">10th Marksheet</label>
          <input type="file" name="tenthMarksheet" id="tenthMarksheet" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="twelfthMarksheet">12th Marksheet</label>
          <input type="file" name="twelfthMarksheet" id="twelfthMarksheet" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="recentExamDetails">Recent Exam Details</label>
          <input type="text" name="recentExamDetails" id="recentExamDetails" value={formData.recentExamDetails} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="text" name="mobileNumber" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email ID</label>
          <input type="email" name="emailId" id="emailId" value={formData.emailId} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="documents">Additional Documents (e.g., Domicile, Caste)</label>
          <input type="file" name="documents" id="documents" onChange={handleChange} multiple />
        </div>
        <button type="submit" className="btn submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;

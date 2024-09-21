import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = ({name}) => {
  const [studentDetails, setStudentDetails] = useState({ nameA: "RV", email: "vishnu@example.com", id: 1 });
  const [status, setStatus] = useState('under verification');

//   useEffect(() => {
//     // Fetch student details and uploaded documents from the backend
//     axios.get('/api/student/details')
//       .then(response => {
//         setStudentDetails(response.data.details);
//         setUploadedDocuments(response.data.documents);
//         setStatus(response.data.status);
//       })
//       .catch(error => {
//         console.error('Error fetching student details:', error);
//       });
//   }, []);

 

  const handleTrackStatus = () => {
    axios.get('/api/student/status')
      .then(response => {
        setStatus(response.data.status);
      })
      .catch(error => {
        console.error('Error fetching status:', error);
      });
  };

  return (
    <div className="student-dashboard body-bg-1">
      <h1>Welcome, {name}</h1>

      <div className="status-section">
        <h2>Application Status: {status}</h2>
        <button onClick={handleTrackStatus} className="btn track-btn">Track Status</button>
      </div>

      

      <section className="pmsss-info">
        <div className="card">
          <h3>Prime Minister's Special Scholarship Scheme (PMSSS)</h3>
          <p>The PMSSS aims to provide financial support to students from economically weaker sections to pursue higher education.</p>
          <Link to="/apply" className="btn apply-btn">Apply Now</Link>
        </div>
      </section>
    </div>
  );
};

export default StudentDashboard;

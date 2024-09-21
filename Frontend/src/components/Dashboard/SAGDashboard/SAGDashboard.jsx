import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import './SAGDashboard.css';

Chart.register(ArcElement, Tooltip, Legend);

const SAGDashboard = ({name}) => {
    const [pendingDocuments, setPendingDocuments] = useState(['hello' , 'heelo']);
  const [verifiedDocuments, setVerifiedDocuments] = useState(['jiuwebjhds']);
  const [rejectedDocuments, setRejectedDocuments] = useState(['whjedsn']);
  const [sagDetails, setSAGDetails] = useState({ nameA: 'SAG Name', id: 'SAG1234' });
//   useEffect(() => {
//     // Fetch documents and SAG details from the backend
//     axios.get('/api/sag/documents')
//       .then(response => {
//         const { pending, verified, rejected } = response.data;
//         setPendingDocuments(pending);
//         setVerifiedDocuments(verified);
//         setRejectedDocuments(rejected);
//       })
//       .catch(error => {
//         console.error('Error fetching documents:', error);
//       });
//   }, []);

  const chartData = {
    labels: ['Pending', 'Verified', 'Rejected'],
    datasets: [{
      data: [pendingDocuments.length, verifiedDocuments.length, rejectedDocuments.length],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }]
  };

  return (
    <div className="sag-dashboard ">
      <div className="header-section body-bg-1">
        <div className="chart-container">
          <Pie data={chartData} />
        </div>
        <div className="sag-details">
          <h2>{name}</h2>
          <p>ID: {sagDetails.id}</p>
        </div>
      </div>

      <section className="pending-verifications">
        <h2 className="section-title">Pending Verifications</h2>
        <ul className="document-list">
          {pendingDocuments.map(doc => (
            <li key={doc._id} className="document-item">
              <span>{doc.studentName}</span>
              <span>{doc.documentType}</span>
              <Link to={`/sag/verify/${doc._id}`} className="btn-1 verify-btn">Verify</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="verified-documents">
        <h2 className="section-title">Verified Documents</h2>
        <ul className="document-list">
          {verifiedDocuments.map(doc => (
            <li key={doc._id} className="document-item">
              <span>{doc.studentName}</span>
              <span>{doc.documentType}</span>
              <button className="btn forward-btn" onClick={() => handleForwardToFinance(doc._id)}>Forward to Finance</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rejected-documents">
        <h2 className="section-title">Rejected Documents</h2>
        <ul className="document-list">
          {rejectedDocuments.map(doc => (
            <li key={doc._id} className="document-item">
              <span>{doc.studentName}</span>
              <span>{doc.documentType}</span>
              <span>Reason: {doc.reason}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SAGDashboard;

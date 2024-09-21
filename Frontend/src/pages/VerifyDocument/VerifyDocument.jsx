import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './VerifyDocument.css';

const VerifyDocument = () => {
  const { documentId } = useParams();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [document, setDocument] = useState("null");

  // useEffect(() => {
  //   // Fetch document details from the backend
  //   axios.get(`/api/sag/document/${documentId}`)
  //     .then(response => {
  //       setDocument(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching document details:', error);
  //     });
  // }, [documentId]);

  const handleConfirmVerification = () => {
    axios.post(`/api/sag/verify/${documentId}`)
      .then(() => {
        navigate('/sag/dashboard'); // Redirect to dashboard after verification
      })
      .catch(error => {
        console.error('Error verifying document:', error);
      });
  };

  const handleReject = (reason) => {
    axios.post(`/api/sag/reject/${documentId}`, { reason })
      .then(() => {
        navigate('/sag/dashboard'); // Redirect to dashboard after rejection
      })
      .catch(error => {
        console.error('Error rejecting document:', error);
      });
  };

  if (!document) return <div>Loading...</div>;

  return (
    <div className="verify-document">
      <h1>Verify Document</h1>
      <div className="document-details">
        <p><strong>Student Name:</strong> {document.studentName}</p>
        <p><strong>Document Type:</strong> {document.documentType}</p>
        {/* Add more document details here */}
      </div>
      <button onClick={handleConfirmVerification} className="btn confirm-btn">Confirm Verification</button>
      <button onClick={() => handleReject('Specify reason')} className="btn reject-btn">Reject</button>
    </div>
  );
};

export default VerifyDocument;

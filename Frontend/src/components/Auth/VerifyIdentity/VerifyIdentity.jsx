import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './VerifyIdentity.css';

const VerifyIdentity = ({setIsLoggedIn , role , setRole}) => {
  const [aadhaar, setAadhaar] = useState(null);
  const [employmentId, setEmploymentId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/auth/user/verify', {
          withCredentials: true,
        });
        
        if (res.data.success) {
          setRole(res.data.role);
        } else {
          toast.error('Not Able To Get Role. Please try again.');
        }
      } catch (error) {
        console.error('Error fetching role:', error);
        toast.error('Failed to fetch role. Please try again.');
      }
    };

    fetchRole();
  }, [role]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (aadhaar) formData.append('aadhaar', aadhaar);
    if (role === 'sag' || role === 'finance') {
      if (employmentId) formData.append('employmentId', employmentId);
    }

    if (!aadhaar) {
      toast.error('Please Upload Aadhaar Card!');
      return;
    }

    if ((role !== 'student') && !employmentId) {
      toast.error('Please Upload Employment ID Card!');
      return;
    }

    toast.success('Identity Verified Successfully!');
    navigate('/dashboard'); 
    setIsLoggedIn(true);

  };

  return (
    <div className="container">
      <div className="verify-identity-container">
        <h2 className="verify-identity-title">Verify Your Identity</h2>
        <form className="verify-identity-form" onSubmit={handleSubmit}>
          <label htmlFor="aadhaar">Upload Aadhaar Card</label>
          <input
            type="file"
            id="aadhaar"
            className="verify-identity-input"
            onChange={(e) => setAadhaar(e.target.files[0])}
            
          />
          {(role === 'sag' || role === 'finance') && (
            <>
              <label htmlFor="employmentId">Upload Employment ID</label>
              <input
                type="file"
                id="employmentId"
                className="verify-identity-input"
                onChange={(e) => setEmploymentId(e.target.files[0])}
                
              />
            </>
          )}
          <button type="submit" className="verify-identity-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VerifyIdentity;

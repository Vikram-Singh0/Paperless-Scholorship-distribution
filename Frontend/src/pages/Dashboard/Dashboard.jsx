import axios from 'axios';
import { useEffect, useState } from 'react';
import StudentDashboard from '../../components/Dashboard/StudentDashboard/StudentDashboard.jsx';
import SAGDashboard from '../../components/Dashboard/SAGDashboard/SAGDashboard.jsx';
import FinanceDashboard from '../../components/Dashboard/FinanceDashboard/FinanceDashboard.jsx';

const Dashboard = ({role , setRole}) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);

  useEffect(() => {
    const fetchRole = async () => {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        console.warn('No auth token found in local storage. Skipping role retrieval.');
        setError('Authentication token is missing.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:5000/api/auth/user/dashboard",
          {
            withCredentials: true
          }
        );

        console.log(response.data)
        setRole(response.data.role)
        const fullname = response.data.user.firstName + " " + response.data.user.lastName;
        setName(fullname);
      } catch (error) {
        console.error('Error fetching user role:', error);
        setError('Failed to fetch role data.');
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {role === 'student' && <StudentDashboard name={name} />}
      {role === 'sag' && <SAGDashboard name={name} />}
      {role === 'finance' && <FinanceDashboard name={name} />}
      {!(role === 'student' || role === 'sag' || role === 'finance') && (
        <p>No dashboard available.</p>
      )}
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import './FinanceDashboard.css';

const FinanceDashboard = ({name}) => {
  const [pendingPayments, setPendingPayments] = useState(['heeoooo']);
  const [completedPayments, setCompletedPayments] = useState(['hyd']);
  const [financeDetails, setFinanceDetails] = useState({ name: 'Finance User', id: 'FIN1234' });

//   useEffect(() => {
//     // Fetch payments and finance details from the backend
//     axios.get('/api/finance/payments')
//       .then(response => {
//         const { pending, completed } = response.data;
//         setPendingPayments(pending);
//         setCompletedPayments(completed);
//       })
//       .catch(error => {
//         console.error('Error fetching payments:', error);
//       });
//   }, []);

  const chartData = {
    labels: ['Pending', 'Completed'],
    datasets: [{
      data: [pendingPayments.length, completedPayments.length],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  const handlePayment = (paymentId) => {
    axios.post(`/api/finance/pay/${paymentId}`)
      .then(() => {
        setPendingPayments(pendingPayments.filter(payment => payment._id !== paymentId));
        setCompletedPayments([...completedPayments, { _id: paymentId, status: 'Completed' }]);
      })
      .catch(error => {
        console.error('Error processing payment:', error);
      });
  };

  return (
    <div className="finance-dashboard  ">
      <div className="header-section body-bg-1">
        <div className="chart-container">
          <Pie data={chartData} />
        </div>
        <div className="finance-details">
          <h2>{name}</h2>
          <p>ID: {financeDetails.id}</p>
        </div>
      </div>

      <section className="pending-payments">
        <h2 className="section-title">Pending Payments</h2>
        <ul className="payment-list">
          {pendingPayments.map(payment => (
            <li key={payment._id} className="payment-item">
              <span>{payment.studentName}</span>
              <span>{payment.amount}</span>
              <button className="btn pay-btn" onClick={() => handlePayment(payment._id)}>Pay</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="completed-payments">
        <h2 className="section-title">Completed Payments</h2>
        <ul className="payment-list">
          {completedPayments.map(payment => (
            <li key={payment._id} className="payment-item">
              <span>{payment.studentName}</span>
              <span>{payment.amount}</span>
              <span>Status: {payment.status}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FinanceDashboard;

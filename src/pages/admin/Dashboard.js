// import React from 'react';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
// import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
// import Side from './Side';
// import './Dashboard.css'; 
// import Dash from './Dash';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const Dashboard = () => {
//   const data = {
//     labels: ['January', 'February', 'March', 'April', 'May','June','July'],
//     datasets: [
//       {
//         label: 'Booking Rate',
//         data: [65, 59, 73, 81, 56,76,65],
//         backgroundColor: '#2196F3',
//       },
//     ],
//   };

//   return (
//     <div>
//         <Side />
//       <div className="dashboard-layout">
//           <div className="dashboard-container">
//             <div className="card-container">
//               <div className="card" id="total-duration">
//                 <h3>Total Bookings</h3>
//                 <p>120</p>
//               </div>
//               <div className="card" id="total-workouts">
//                 <h3>Ongoing</h3>
//                 <p>50</p>
//               </div>
//               <div className="card" id="goals-achieved">
//                 <h3>Completed</h3>
//                 <p>10</p>
//               </div>
//               <div className="card" id="calories-burned">
//                 <h3>Total Earnings</h3>
//                 <p>₹ 20000 Rs</p>
//               </div>
//             </div>
//             <div className="charts-container">
//               <div className="chart">
//                 <Bar data={data} />
//               </div>
//               <div className="chart">
//                 <Line data={data} />
//               </div>
//             </div>
//             <div className="charts-container">
//               <div className="chart">
//                 <Pie data={data} />
//               </div>
//               <div className="chart">
//                 <Doughnut data={data} />
//               </div>
//             </div>
//           </div>

//         </div>
//         <div className="dashboard-container1">
//           <Dash/>
//         </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2';
import Side from './Side';
import './Dashboard.css'; 
import Dash from './Dash';
import AnimatedNumber from '../admin/AnimatedNumber'; // Import the animated number component

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May','June','July'],
    datasets: [
      {
        label: 'Booking Rate',
        data: [65, 59, 73, 81, 56,76,65],
        backgroundColor: '#2196F3',
      },
    ],
  };

  return (
    <div>
      <Side />
      <div className="dashboard-layout">
        <div className="dashboard-container">
          <div className="card-container">
            <div className="card" id="total-duration">
              <h3>Total Bookings</h3>
              <p><AnimatedNumber value={120} /></p> {/* Animated Number */}
            </div>
            <div className="card" id="total-workouts">
              <h3>Ongoing</h3>
              <p><AnimatedNumber value={50} /></p> {/* Animated Number */}
            </div>
            <div className="card" id="goals-achieved">
              <h3>Completed</h3>
              <p><AnimatedNumber value={10} /></p> {/* Animated Number */}
            </div>
            <div className="card" id="calories-burned">
              <h3>Total Earnings</h3>
              <p>₹ <AnimatedNumber value={20000} /> Rs</p> {/* Animated Number */}
            </div>
          </div>
          <div className="charts-container">
            <div className="chart">
              <Bar data={data} />
            </div>
            <div className="chart">
              <Line data={data} />
            </div>
          </div>
          <div className="charts-container">
            <div className="chart">
              <Pie data={data} />
            </div>
            <div className="chart">
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard-container1">
        <Dash />
      </div>
    </div>
  );
};

export default Dashboard;

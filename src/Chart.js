import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

function Chart({ condition , updateLogs}) {
    const [logs, setLogs] = useState([]);

     useEffect(() => {
        fetch('http://localhost:3002/logs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch logs');
                }
                return response.json();
            })
            .then(logs => {
                setLogs(logs);
            })
            .catch(error => {
                console.error(error);
            });
     }, []);
  // useEffect(() => {
  //   const chartData = {
  //   labels: logs.map(log => log.date),
  //   datasets: []
  // };

  // let chartTitle = '';
  // }, [logs]);

  //useEffect(() => {
  //  // Fetch data from logs.json
  //   fetch('http://localhost:3002/')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch logs');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Extract logs from data
  //       updateLogs(data);
  //     })
  //     .catch(error => {
  //       console.log(logs);
  //       console.error(error);
  //     });
  // }, []);

  
  const chartData = {
    labels: logs.map(log => log.date),
    datasets: []
  };

  let chartTitle = '';

  switch (condition) {
    case 'Feline Lower Urinary Track Disease':
      chartData.datasets.push({
        label: 'Water Intake',
        data: logs.map(log => log.waterIntake)
      },
      {
        label: 'Urination Frequency',
        data: logs.map(log => log.frequency)
      });
      chartTitle = 'Feline Lower Urinary Track Disease Monitor';
      break;
    case 'Chronic Kidney Disease':
      chartData.datasets.push(
        {
          label: 'Food Intake',
          data: logs.map(log => log.foodIntake)
        },
        {
          label: 'Water Intake',
          data: logs.map(log => log.waterIntake)
        }
      );
      chartTitle = 'Chronic Kidney Disease Monitor';
      break;
    case 'Hyperthyroidism':
      chartData.datasets.push(
        {
          label: 'Water Intake',
          data: logs.map(log => log.waterIntake)
        },
        {
          label: 'Weight',
          data: logs.map(log => log.weight)
        }
      );
      chartTitle = 'Hyperthyroidism Monitor';
      break;
      case 'Inflammatory Bowel Disease':
      chartData.datasets.push(
        {
          label: 'Weight',
          data: logs.map(log => log.waterIntake)
        },
        {
          label: 'Food Intake',
          data: logs.map(log => log.foodIntake)
        }

      );
      chartTitle = 'Inflammatory Bowel Disease Monitor';
      break;
    case 'Diabetes Mellitus':
      chartData.datasets.push(
        {
          label: 'Weight',
          data: logs.map(log => log.weight)
        },
        {
          label: 'Water Intake',
          data: logs.map(log => log.waterIntake)
        }
      )
      chartTitle = 'Diabetes Mellitus Monitor';
      break;
    default:
      // If condition is not recognized, don't render chart
      return console.log("profile not found");
  }

  return (
    <div>
      <h2 className="text-center font-semibold text-sm mb-4">{chartTitle}</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import "chart.js/auto";

// function Chart({ condition , logs, updateLogs}) {

//   useEffect(() => {
//     fetch('http://localhost:3002/logs')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch logs');
//         }
//         return response.json();
//       })
//       .then(logs => {
//         console.log(logs)
//         // updateLogs(logs);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   // Move chartData generation inside the fetch's then block
//   const generateChartData = (logs) => {
//     const chartData = {
//       labels: logs.map(log => log.date),
//       datasets: []
//     };

//     let chartTitle = '';

//     switch (condition) {
//       case 'Feline Lower Urinary Track Disease':
//         chartData.datasets.push({
//           label: 'Water Intake',
//           data: logs.map(log => log.waterIntake)
//         },
//         {
//           label: 'Urination Frequency',
//           data: logs.map(log => log.frequency)
//         });
//         chartTitle = 'Feline Lower Urinary Track Disease Monitor';
//         break;
//       case 'Chronic Kidney Disease':
//         chartData.datasets.push(
//           {
//             label: 'Food Intake',
//             data: logs.map(log => log.foodIntake)
//           },
//           {
//             label: 'Weight',
//             data: logs.map(log => log.weight)
//           }
//         );
//         chartTitle = 'Chronic Kidney Disease Monitor';
//         break;
//       case 'Hyperthyroidism':
//         chartData.datasets.push(
//           {
//             label: 'Food Intake',
//             data: logs.map(log => log.foodIntake)
//           },
//           {
//             label: 'Weight',
//             data: logs.map(log => log.weight)
//           }
//         );
//         chartTitle = 'Hyperthyroidism Monitor';
//         break;
//       case 'Inflammatory Bowel Disease':
//         chartData.datasets.push(
//           {
//             label: 'Food Intake',
//             data: logs.map(log => log.foodIntake)
//           },
//           {
//             label: 'Weight',
//             data: logs.map(log => log.weight)
//           }
//         );
//         chartTitle = 'Inflammatory Bowel Disease Monitor';
//         break;
//       case 'Diabetes Mellitus':
//         chartData.datasets.push(
//           {
//             label: 'Weight',
//             data: logs.map(log => log.weight)
//           },
//           {
//             label: 'Food Intake',
//             data: logs.map(log => log.foodIntake)
//           }
//         )
//         chartTitle = 'Diabetes Mellitus Monitor';
//         break;
//       default:
//         console.log("Profile not found");
//     }

//     return { chartData, chartTitle };
//   };

//   const { chartData, chartTitle } = generateChartData(logs);

//   return (
//     <div>
//       <h2 className="text-center font-semibold text-sm mb-4">{chartTitle}</h2>
//       <Line data={chartData} />
//     </div>
//   );
// }

// export default Chart;


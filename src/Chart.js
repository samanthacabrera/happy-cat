import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import "chart.js/auto";

function DynamicChart({ profile, condition }) {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    if (profile && profile.condition === condition) {
      const filteredLogs = profile.logs.map(log => ({
        date: log.date,
        foodIntake: log.foodIntake,
        waterIntake: log.waterIntake,
        weight: log.weight
      }));
      setLogs(filteredLogs);
    } else {
      setLogs([]);
    }
  }, [profile, condition]);

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
      });
      chartTitle = 'Feline Lower Urinary Track Disease Monitor';
      break;
    case 'Chronic Kidney Disease':
      chartData.datasets.push(
        {
          label: 'Weight',
          data: logs.map(log => log.weight)
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
          label: 'Weight',
          data: logs.map(log => log.weight)
        },
        {
          label: 'Food Intake',
          data: logs.map(log => log.foodIntake)
        }
      );
      chartTitle = 'Hyperthyroidism Monitor';
      break;
      case 'Inflammatory Bowel Disease':
      chartData.datasets.push(
        {
          label: 'Weight',
          data: logs.map(log => log.weight)
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
          label: 'Food Intake',
          data: logs.map(log => log.foodIntake)
        }
      );
      chartTitle = 'Diabetes Mellitus Monitor';
      break;
      case 'Feline Obesity':
      chartData.datasets.push(
        {
          label: 'Weight',
          data: logs.map(log => log.weight)
        },
        {
          label: 'Food Intake',
          data: logs.map(log => log.foodIntake)
        }
      );
      chartTitle = 'Feline Obesity Monitor';
      break;
    default:
      // If condition is not recognized, don't render chart
      return console.log("profile not found");
  }

  return (
    <div>
      <h2>{chartTitle}</h2>
      <Line data={chartData} />
    </div>
  );
}

export default DynamicChart;

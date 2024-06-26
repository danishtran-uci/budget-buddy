import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box, Typography } from '@mui/material';

const options = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Month',
        color: '#111',
        font: {
          size: 16,
          weight: 'bold'
        }
      },
      beginAtZero: true
    },
    y: {
      title: {
        display: true,
        text: 'Spending ($ Dollars)',
        color: '#111',
        font: {
          size: 16,
          weight: 'bold'
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

const categoryColors = {
  'Housing': 'rgba(255, 99, 132, 0.2)',
  'Transportation': 'rgba(54, 162, 235, 0.2)',
  'Food': 'rgba(255, 206, 86, 0.2)',
  'Savings': 'rgba(75, 192, 192, 0.2)',
  'Utilities': 'rgba(153, 102, 255, 0.2)',
  'Miscellaneous': 'rgba(255, 159, 64, 0.2)'
};

const calendarMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function SpendingChart({ purchaseData }) {
  const datasets = Object.keys(categoryColors).map(category => ({
    label: category,
    data: Array(12).fill(0),
    backgroundColor: categoryColors[category],
    borderColor: categoryColors[category].replace('0.2', '1'),
    borderWidth: 1,
  }));

  purchaseData.forEach(({ type, amount, date }) => {
    const monthIndex = calendarMonths.indexOf(date);
    datasets.find(dataset => dataset.label === type).data[monthIndex] += amount;
  });

  const data = {
    labels: calendarMonths,
    datasets: datasets,
  };

  return (
    <Box
      style={{
        width:'100%',
        height:'55%',
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-evenly',
      }}
    >
      <Typography
        style={{
          width: '10%',
          marginLeft: '-3vw'
        }}
      >
        Tip: Click categories at the top of the chart to show and hide categories in the chart
      </Typography>
      <Box
        style={{
          width:'75%',
          height:'90%',
          backgroundColor: '#D9D9D9',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Bar data={data} options={options} />;
      </Box>
    </Box>
  )
  
}

export default SpendingChart;
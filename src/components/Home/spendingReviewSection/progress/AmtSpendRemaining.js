import { Box, Typography } from '@mui/material';
import React from 'react';

function AmtSpendRemaining( {budget, monthSpending} ) {
  return (
    <>
      {/* Amount Spend and Remaining */}
      <Box
        style={{
          width: '100%',
          height: '30%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Amount Spend*/}
        <Box
          style={{
            marginTop: '1vh',
            marginRight: '5vw',
            width: '50%',
            height: '90%',
            backgroundColor: '#D9D9D9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            style={{
              fontWeight: 'bold',
              fontSize: '1vw',
            }}
          >
            Amount Spend: ${monthSpending}
          </Typography>
        </Box>

        {/* Amount Remaining */}
        <Box
          style={{
            marginTop: '1vh',
            width: '50%',
            height: '90%',
            backgroundColor: '#D9D9D9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Typography
            style={{
              fontWeight: 'bold',
              fontSize: '1vw',
            }}
          >
            Amount Remaining: ${(budget - monthSpending)}
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default AmtSpendRemaining;
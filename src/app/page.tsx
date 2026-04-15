'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '../components/appBar';
import { Card } from '@mui/material';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export default function Home() {
  const [currentResult, setCurrentResult] = useState('0');
  const [question, setQuestion] = useState('');
  const buttons = [
    'AC', 'c', '%', '/',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+'
  ];
  const handleButtonClick = (num: string) => {
    if (num === '=') {
      calculateResult();
    } else if (num === 'AC') {
      setCurrentResult('0');
      setQuestion('');
    } else if (num === 'c') {
      setCurrentResult(pre => pre.slice(0, -1) || '0');
    } else if (['+', '-', 'x', '/'].includes(currentResult.slice(-1)) && !['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '%'].includes(num)) {
      setCurrentResult(pre => pre.slice(0, -1) + num);
    } else {
      setCurrentResult(prev => prev === '0' ? num : prev + num);
    }
  };
  

  function calculateResult() {
    const raw = ['+', '-', 'x', '/'].includes(currentResult.slice(-1)) ? currentResult.slice(0, -1) : currentResult;
    const value = raw.replace(/x/g, '*').replace(/%/g, '/100');

    try {
      const evalResult = Number(parseFloat(evaluate(value).toFixed(6)));
      setCurrentResult(String(evalResult));
      setQuestion(raw + '=');
    } catch (error) {
      setCurrentResult('Error');
    }
  }

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 64px)', // subtract AppBar height
          pt: 8,
          px: 2,
        }}
      >

        <Card sx={{ maxWidth: 360, p: 0, boxShadow: 6 }}>
          <Box>
            <Box sx={{ bgcolor: 'background.default', p: 3 }}>
              <Typography sx={{ textAlign: 'right', fontSize: '14px' }}>{question}</Typography>
              <Typography sx={{
                textAlign: 'right', fontSize: '24px', whiteSpace: 'nowrap',
                overflowX: 'auto',
              }}> {currentResult} </Typography>
            </Box>
            <Grid
              container
              columns={4}
              spacing={0.5}
              sx={{ maxWidth: 360, bgcolor: '#e0e0e0', padding: '4px' }}
            >
              {[...buttons, '0', '.', '='].map((num) => (
                <Grid size={num === '0' ? 2 : 1} key={num}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleButtonClick(num)}
                    sx={{
                      bgcolor: '#ffffff',
                      color: num === '+' || num === '-' || num === 'x' || num === '/' ? '#1976d2' : '#000000',
                      height: 60,
                      fontSize: '14px',
                      fontWeight: 'bold',
                      boxShadow: 2,
                      '&:hover': {
                        bgcolor: '#e0e0e0',
                      },
                    }}
                  >
                    {num}
                  </Button>
                </Grid>
              ))}
            </Grid>

          </Box>
        </Card>
      </Box>
    </Box>
  );
}
'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '../components/appBar';
import { Card} from '@mui/material';
import {useState,useEffect, use} from 'react';

export default function Home() {
  const [currentNumber,setCurrentNumber] = useState('');
  const [currentResult,setCurrentResult] = useState('0');
  const [arithematicMethod,setArithematicMethod] = useState('');
  const buttons = [
    'AC','c','%','/',
    '7', '8', '9','x',
    '4', '5', '6','-',
    '1', '2', '3','+'
  ];
 
  useEffect(()=>{
    if(currentResult === '0'){
      setCurrentResult(currentNumber);
      setCurrentNumber('');
    }else{
    setCurrentResult(prev=> prev + currentNumber);
   setCurrentNumber('');
    }
 
  },[currentNumber]);

  useEffect(()=>{ 
    if(currentResult === '0' && arithematicMethod !== '.'){
      setCurrentResult('0');
    }else if (arithematicMethod === 'AC') {
      setCurrentResult('0');
      setArithematicMethod(''); 
    }else if (arithematicMethod === 'c') {
      setCurrentResult(pre=> pre.slice(0,-1) || '0');
      setArithematicMethod(''); 
    }else if(['+', '-', 'x', '/'].includes(currentResult.slice(-1))){
  setCurrentResult(pre=>pre.slice(0,-1) + arithematicMethod);
    }else{
      setCurrentResult(pre=>pre + arithematicMethod);
    }
   },[arithematicMethod]);

  function calculateResult(){
    let result = 0;
    const num1 = parseFloat(currentResult);
    const num2 = parseFloat(currentNumber);
    switch (arithematicMethod) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case 'x':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        break;
    }}
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
       
       <Card  sx={{ maxWidth: 360, p:0,boxShadow:6}}>
        <Box>
          <Box sx={{bgcolor:'background.default', p:3}}>
            <Typography sx={{textAlign:'right',fontSize:'10px'}}>1250+45</Typography>
          <Typography sx={{textAlign:'right',fontSize:'36px',whiteSpace:'nowrap',
            overflowX:'auto',}}> {currentResult} </Typography>
          </Box>
           <Grid 
          container 
          columns={4} 
          spacing={0.5}
          sx={{ maxWidth: 360 , bgcolor: '#e0e0e0',padding:'4px'}}
        >
          {buttons.map((num) => (
            <Grid size={1} key={num}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  if (!isNaN(Number(num))) {
                    setCurrentNumber(num);
                  } else {
                    setArithematicMethod(num);
                  }
                }}
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
        <Box sx={{display:'flex',flexDirection:'row',bgcolor: '#e0e0e0',gap:0.5,p:0.3}}>
          <Button
                variant="contained"
                onClick={() => {
                  setCurrentNumber('0');
                }}

                sx={{
                  bgcolor: '#ffffff', 
                  color: '#000000', 
                  height: 60,
                  flex:3,
                  fontSize: '14px',
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },textAlign:'left',
                }}
              >
                0
              </Button>
              <Button
                variant="contained"
                 onClick={()=> setArithematicMethod('.')}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#000000',
                  height: 60,
                  flex:1,
                  fontSize: '14px',
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },
                }}
              >
                .
              </Button>
              <Button
                variant="contained"
                color='primary'
                onClick={calculateResult}
                sx={{
                  height: 60,
                  flex:1,
                  fontSize: '14px',
                  boxShadow: 2,
                  '&:hover': {
                    bgcolor: '#e0e0e0',
                  },
                }}
              >
                =
              </Button>
        </Box>
        </Box>
       </Card>
      </Box>
    </Box>
  );
}
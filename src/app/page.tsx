'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '../components/appBar';
import { Card, CardContent } from '@mui/material';
import { SpaceBar } from '@mui/icons-material';

export default function Home() {
  const buttons = [
    
    'AC','+/-','%','/',
    '7', '8', '9','x',
    '4', '5', '6','-',
    '1', '2', '3','+'
  ];

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
          <Typography sx={{textAlign:'right',fontSize:'36px'}}>1,295</Typography>
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
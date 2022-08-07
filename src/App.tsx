import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/system/Box';

export default function App() {

  return (
    <div className='app'>
      <header className='app-header'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            m: 2
          }}
        >
          <ButtonGroup variant="text" aria-label="text button group">
            <Button style={{ fontSize: '20px' }}>
              Home
            </Button>
            <Button style={{ fontSize: '20px' }}>
              Our Menu
            </Button>
            <Button style={{ fontSize: '20px' }}>
              Contact Us
            </Button>
          </ButtonGroup>
        </Box>
      </header>
    </div>

  );
}
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ChangeEvent, ClickEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TextField } from '@mui/material';
import './App.css'
import axios from 'axios';

function App() {
  const theme = createTheme();

  const [text, setText] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const submitData = async (text: string) => {
    try {
      const { data, status } = await axios.post<string>(
        'https://localhost:9000/test',
        text,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <h2>Title: {import.meta.env.VITE_APP_TITLE}</h2>
        <h2>Mode: {import.meta.env.MODE}</h2>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            defaultValue={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setText(e.target.value) }}
          />
        </div>
        <div>
          <Button onClick={(e: ClickEvent<HTMLInputElement>) => { submitData(text).then((value) => setResponse(value)) }}>
            Send to
          </Button>
        </div>
        <Typography variant="h5">
          <p>
            Result is {JSON.stringify(response)}
          </p>
          <p>
            Click on the Vite and React logos to learn more
          </p>
        </Typography>
      </ThemeProvider>
    </>
  )
}

export default App

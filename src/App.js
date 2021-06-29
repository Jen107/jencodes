import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
  }
})

/*test */

function App() { 
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;

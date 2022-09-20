import React from "react";
import { createRoot } from 'react-dom/client';
import Authentication from './Components/Authentication'
import "./styles.css";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    btncolor:{
      main: '#304ffe',
    },
    background:{
      headerpanel:'#fff',
      menupanel:'#303538',
      //menupanel: '#fff',
      contentpanel:'#F0F0F0',
      //logopanel:'#303538',
      logopanel: '#fff',
    },
    textColor:{
      headerpanel: '#000',
      //menupanel: '#fff',
      menupanel: '#000',
      contentpanel: '#000',
      //logopanel: '#fff',
      logopanel: '#303538',
    }
   
  },

});
class WithProvider extends React.Component{
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Authentication />
      </MuiThemeProvider>
    )
  }
}

const rootElement = document.getElementById("root");

const root = createRoot(rootElement); 
root.render(<WithProvider />);
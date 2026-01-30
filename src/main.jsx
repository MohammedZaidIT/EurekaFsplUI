import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import CustomThemeProvider from "./theme/ThemeProvider";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>,
  //  <BrowserRouter>
  //   <CustomThemeProvider>
  //     <App />
  //   </CustomThemeProvider>
  // </BrowserRouter>
)

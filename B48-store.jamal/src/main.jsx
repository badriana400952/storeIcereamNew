import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./fonts/themefont.jsx";
import { BrowserRouter } from "react-router-dom";





ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store} >
         <ChakraProvider theme={theme}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </ChakraProvider>
      </Provider>
   </React.StrictMode>
);

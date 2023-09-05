import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Reset.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

const queryClient = new QueryClient({
  //buradaki ayar sayfa içinde gezinirken her productsa tıklandığında backendtten veri çekmemesini sağlar.
  //sadece bir kere çekmesini sağlar
  defaultOptions:{
    queries:{
      refetchOnMount:false,
      refetchOnWindowFocus:false,
    },
  }
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
   <QueryClientProvider client={queryClient}>

    <ChakraProvider>
      <AuthProvider>
        <BasketProvider>
        <App />
        </BasketProvider>
     

      </AuthProvider>
     
        
    
    </ChakraProvider>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

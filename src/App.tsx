import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import PrivateRoutes from "./routing/privateRoutes";
import PublicRoutes from "./routing/publicRoutes";
import NotFound from "./pages/error/NotFound";
import ThankYou from "./pages/thankyou/ThankYou"; 
import store from "./store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  
  return (
   
    <Provider store={store}>
    <Routes>
       <Route element={<PrivateRoutes />}>
      <Route element={<Home />} path='/' />     
      <Route path="/about" Component={About} /> 
      <Route path="/thank-you" element={<ThankYou/>} />
      
      </Route>

      <Route element={<PublicRoutes />}>
        {/* FOR UN AUTHORIZED USERS */}
      <Route element={<About />} path='/about' />

      </Route>

 <Route path="*" element={<NotFound />} />     
    </Routes>
       </Provider>
  );
};

export default App;

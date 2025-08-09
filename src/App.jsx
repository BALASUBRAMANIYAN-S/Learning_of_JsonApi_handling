import React from "react";
import ApiCall from "./components/ApiCall";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ApiCall />}/>
            <Route path="/card/:id" element={<UserCard />}/>
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;

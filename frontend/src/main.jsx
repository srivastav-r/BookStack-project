import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import "./index.css";
import SignUp from "./forms/SignUp.jsx";
import SignIn from "./forms/SignIn.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookList from "./pages/BookList.jsx";
import EditPage from "./pages/EditPage.jsx";
import VisitorPage from "./pages/VisitorPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/visitor" element={<VisitorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UploadBookPage from './pages/UploadBookPage';
import BookDetailPage from './pages/BookDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadBookPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} /> {/* 🚀 NUEVA RUTA */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

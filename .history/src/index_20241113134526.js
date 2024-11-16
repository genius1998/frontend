import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// 카카오 SDK 초기화
if (window.Kakao) {
  window.Kakao.init("629a046bf0fa611328bd69bc1571aa3a"); // 카카오 JavaScript 키로 SDK 초기화
  console.log("Kakao SDK initialized:", window.Kakao.isInitialized());
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

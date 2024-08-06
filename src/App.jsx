import './App.css'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = (type) => {
    switch(type) {
      case 'success':
        toast.success("Success toast notification");
        break;
      case 'info':
        toast.info("Info toast notification");
        break;  
      case 'warn':
        toast.warn("Warning toast notification");
        break;   
      case 'error':
        toast.error("Error toast notification");
        break;  
      default:
        break;     
    }
  }

  return (
    <div className="app-container">
      <div className="toast-button-containter">
        <ToastContainer />
          <button className='button-success toast-btn' onClick={() => notify('success')}>Success</button>
          <button className='button-info toast-btn' onClick={() => notify('info')}>Info</button>
          <button className='button-warn toast-btn' onClick={() => notify('warn')}>Warning</button>
          <button className='button-error toast-btn' onClick={() => notify('error')}>Error</button>
      </div>
    </div>
  )
}

export default App

import React, { useState } from 'react';
import LoginForm from '../components/layout/LoginForm';
import RegisterForm from '../components/layout/RegisterForm';

function ValidateForm() {
    const [activeForm, setActiveForm] = useState('login')
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Tabs - Login/Register */}
            <div className="px-5 pt-5 flex justify-center mb-2">
              <button 
                className={`px-4 py-2 mx-2 rounded-t-lg font-medium ${activeForm === 'login' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveForm('login')}
              >
                LOGIN
              </button>
              <button 
                className={`px-4 py-2 mx-2 rounded-t-lg font-medium ${activeForm === 'register' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveForm('register')}
              >
                REGISTER
              </button>
            </div>
  
            {activeForm === 'login' && <LoginForm setActive={setActiveForm}/>}
            {activeForm === 'register' && <RegisterForm setActive={setActiveForm}/>}
          </div>
        </div>
      </div>
    )
  }

export default ValidateForm;
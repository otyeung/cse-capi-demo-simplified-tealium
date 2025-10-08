// src/App.tsx
import React from 'react'
import ContactForm from './ContactForm'
import './App.css'

// Functional Component for the App
const App: React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-6'>
      <div className='max-w-screen-lg mx-auto'>
        {/* Rendering the ContactForm component */}
        <ContactForm />
      </div>
    </div>
  )
}

export default App

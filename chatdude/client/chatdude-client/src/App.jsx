import React from 'react'
import Routing from './Routes/Routing'
import { Toaster } from 'react-hot-toast'


function App() {
  return (
    <>
      <Toaster position="top-center"
  reverseOrder={false} 
  toastOptions={{ duration: 2000,}}/>
      <Routing/>
    
    </>
  )
}

export default App
import React from 'react'
import Header from './components/Header'
import Demo from './components/Demo'

const App = () => {
  return (
    <div className="max-w[1204px] min-h-screen p-6 bg-[url('./assets/Image.png')] bg-center bg-cover">
      <Header />
      <Demo />
    </div>
  )
}

export default App
import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-800 '>
      <main className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <header>
          <Header />
        </header>
      </main>
    </div>
  )
}

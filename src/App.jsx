import './App.css'

function App() {

  return (
    <>
      <div className='flex items-center justify-center h-screen '> 
        <div className='text-white font-serif'>
          <input className='m-2 p-2 border-t-white rounded-2xl' type='text' placeholder='Enter player name' />
          <button className='m-2 p-2 bg-slate-500 rounded-2xl' type='submit'>Submit</button>
        </div>
      </div>
    </>
  )
}

export default App

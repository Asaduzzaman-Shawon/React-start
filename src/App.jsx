
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Student name="siyam" result="pass"></Student>
      <Student name="sawon" result="pass"></Student>
      <Student name="rejoyan" result="pass"></Student>
      
    </>
  )
}

function Student(p){
  const name = p.name
  const result = p.result
  return(
    <div className='test'>Name : {name} and result is {result} </div>
  )
}

export default App

import './App.css'
import LineChart from './components/LineChart/LineChart'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-3xl bg-red-600 text-center font-bold'>Navbar</h1> */}
      {/* <div className='flex items-center justify-center'>
      <div className="card bg-primary  text-primary-content w-96 mt-6">
     <div className="card-body">
        <h2 className="card-title">Card title!</h2>
         <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn">Buy Now</button>
    </div>
    </div>
   </div>
   </div> */}
     
    </>
  )
}

export default App

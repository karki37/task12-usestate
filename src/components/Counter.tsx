import {useState} from 'react'
import './counter.css'
const initialCount = 0;

const Counter = () => {
    const [currentCount, setCurrentCount] = useState(0);

    const decrement=()=>{
        
        if(currentCount>0){
            setCurrentCount(currentCount -1);
        }
    }
  return (
    <div className='counter'>
        <div>
        <h1>Simple Counter app: {currentCount}</h1>
        <button className='plus' onClick={()=>setCurrentCount(currentCount + 1)}>Increment</button>
       
        <button className='reset' onClick={()=> setCurrentCount(initialCount)}>Reset</button>

        <button className='minus' onClick={decrement}>Decrement</button>
        </div>
        </div>
   
  )
}

export default Counter

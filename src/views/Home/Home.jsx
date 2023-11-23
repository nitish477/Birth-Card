import { useSearchParams } from 'react-router-dom'
import './Home.css'
import { useState } from 'react';

const quets=["As a wise person once said, “We’re not here for a long time, so let’s make it a good time.” Never toast with an empty glass, always dance like no one’s watching, and be nice to your designated driver.",
"Half a century on this planet is no small feat. You’ve built such a beautiful life, and I can’t wait to see what you do with the next 50!",
" I came for the free cake. Hanging out with such an awesome person is just a bonus. Happy birthday!",
" Happy birthday, [name]! I’d serenade you with a song, but I’m told birthdays are supposed to be enjoyable. Enjoy your special day!"
]
function Home() {
  const [searchParams]=useSearchParams();

  const [to,setTo]=useState(searchParams.get('to'))
  const[from,setFrom]=useState(searchParams.get('from'))
  const[message,setMessage]=useState(searchParams.get('g') >= quets.length ? 0 : searchParams.get('g') ||0)
  const[themeNumber,setThemeNumber]=useState(searchParams.get('t'))
  
  return (
    <>
    <div className = {`contanier theme-${themeNumber}`} >
       <span className='sender'>Dear {to} 💐</span>
       <p className='contaient'>
        {quets[message]}
       </p>
       <span className='reciver'>From {from} </span>
    </div>
    <div className='url-contanier'>
      <p>{import.meta.env.VITE_BASE_URL}?to={to}&from={from}& g={message}& t={themeNumber} </p>
    </div>
    <div className='input-contanier'>
      <input type="text"
             value={to}
             onChange={e=>{setTo(e.target.value)}}
             placeholder= "Enter your name here"
             className='input-box'
      />
      <input type="text"
      value={from}
      onChange={e=>{setFrom(e.target.value)}}
      placeholder= "Enter sender name here"
      className='input-box'

      />
    </div>
    <div className='input-contanier'>
      <select value={message}
      onChange={e => setMessage(parseInt(e.target.value))}
      className='input-box'
      >
        <option value={'0'}>Message1</option>
        <option value={'1'}>Message2</option>
        <option value={'2'}>Message3</option>
        <option value={'3'}>Message4</option>
        </select>
        <select value={themeNumber}
        onChange={e => setThemeNumber(parseInt(e.target.value))}
        className='input-box'
        >
          <option value={'0'}>Theme-1</option>
          <option value={'1'}>Theme-2</option>
          <option value={'2'}>Theme-3</option>
          <option value={'3'}>Theme-4</option>
          <option value={'4'}>Theme-5</option>
        </select>
    </div>
    </>
  )
}

export default Home

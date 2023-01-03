import React from 'react'
import './welcome.css'

export default function Welcome() {
  return (
    <div className='welcomeContainer' id='welcome'>
      <div className='aneal'>
      <h1 className='nametext'><code>Hello <span class="wave">👋</span>,<br className='breakName'/>  I'm Aneal Laryea.</code></h1>
      <p className='paragraphtext'>I'm a full-stack web developer.</p>
      <button className='talkbtn' type='button'><code><a href="mailto:aneallaryea100@gmail.com" target="_blank" rel="noreferrer" className='talklink'>Let talk</a></code></button>
      </div>
    </div>
  )
}

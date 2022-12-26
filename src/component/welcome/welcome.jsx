import React from 'react'
import './welcome.css'

export default function Welcome() {
  return (
    <div className='welcomeContainer'>
      <div className='aneal'>
      <h1 className='nametext'><code>Hello <span class="wave">👋</span>,  I'm Aneal Laryea.</code></h1>
      <p className='paragraphtext'>I'm a full-stack web developer.</p>
      <button className='talkbtn' type='button'><code>Let talk</code></button>
      </div>
    </div>
  )
}

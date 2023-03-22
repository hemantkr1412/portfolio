import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'MERN Stack Developer',
          'Python Developer',
          'Full Stack Developer',
          'Software Engineer',
          'Web3 Developer',
          'Blockchain Developer',
          'Dapp Developer',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
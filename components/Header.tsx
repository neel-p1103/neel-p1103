import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
  <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
    <motion.div
      initial={{
        x:-500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center'>
      {/* Social Icons */}
      <SocialIcon
        url='https://www.linkedin.com/in/neelp03'
        fgColor='#8E8D8A'
        bgColor='transparent'
      />
      <SocialIcon
        url='https://www.github.com/neelp03'
        fgColor='#8E8D8A'
        bgColor='transparent'
      />
      <SocialIcon
        url='https://www.instagram.com/neel__patel03/'
        fgColor='#8E8D8A'
        bgColor='transparent'
      />
    </motion.div>

    <motion.div
      initial={{
        x:500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center text-#8E8D8A-300 cursor-pointer'>
      <SocialIcon
        className='cursor-pointer'
        network='email'
        fgColor='#8E8D8A'
        bgColor='transparent'
      />
      <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch!</p>
    </motion.div>
  </header>
)}
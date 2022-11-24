import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function BackgroundAnimation({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center items-center -z-10'
    >
      <div className='absolute border border-[#DBC3A5] opacity-40 rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
      <div className='absolute border border-[#DBC3A5] opacity-10 rounded-full h-[350px] w-[350px] mt-52'></div>
      <div className='absolute border border-[#DBC3A5] opacity-20 rounded-full h-[500px] w-[500px] mt-52 animate-pulse'></div>
      <div className='absolute border border-[#E98074] opacity-25 rounded-full h-[650px] w-[650px] mt-52'></div>
    </motion.div>
  )
}

export default BackgroundAnimation
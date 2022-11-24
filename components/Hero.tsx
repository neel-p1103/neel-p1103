import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundAnimation from './BackgroundAnimation';

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, I\'m Neel',
      'guy-who-loves-coffee.tsx',
      '<ButLovesToCodeMore />'
    ],
    loop: true,
    delaySpeed: 2000
  });
  return (
  <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[40px]'>
    <BackgroundAnimation />
    <Image className='relative h-32 w-32 rounded-full mx-auto object-cover'
      src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
      alt=''
    />
    <h2 className='text-sm uppercase text-[#8E8D8A] pb-2 tracking-[15px]'>Software Engineer</h2>
    <h1 className='text-[#E85A4F] text-4xl lg:text-5xl scroll-px-10 font-sans font-semibold tracking-wide'>
      <span className='mr-3'>{text} <Cursor cursorColor='#8E8D8A'/></span>
    </h1>

    <div className='pt-5'>
      <Link href={'#about'}>
        <button className='heroButton'>About</button>
      </Link>
      <Link href={'#experience'}>
        <button className='heroButton'>Experience</button>
      </Link>
      <Link href={'#skills'}>
        <button className='heroButton'>Skills</button>
      </Link>
      <Link href={'#projects'}>
        <button className='heroButton'>Projects</button>
      </Link>
    </div>
  </div>
)}

export default Hero
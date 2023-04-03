/* eslint react/no-unescaped-entiities */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import pix from '../public/pic.png'

const About = () => {
  return (
    <div id='about' className='w-full  p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'> About</p>
                <h2 className='py-4 '>Who I Am</h2> 
                
                <p>Greetings, I am an aspiring Blockchain Developer from Bhopal, Madhya Pradesh, currently in my final semester of Mechanical Engineering. Despite my non-tech background, I have a burning passion for the cutting-edge world of Blockchain Technology. </p>
                
                <p className='py-2'> While pursuing my degree, I explored different opportunities in the tech field and began to learn the basics of front-end development using HTML, CSS, and JavaScript. As I continued to learn more about programming, I discovered the decentralized world of Blockchain Technology and became enamored with its intricacies. </p>

<p>Over the past year, I have gained hands-on experience in both front-end and back-end development by working on various projects. In addition, I completed a 4-month internship as a Blockchain Developer where I further developed my skills and gained invaluable experience working on real-world projects.</p>
<pre/>

<p>Furthermore, I was fortunate enough to be selected as a mentee for the 18-week Defi Talents program organized by The Frankfurt school of Blockchain center, Germany, where I received guidance and mentorship from industry experts in the field of Blockchain Technology. Through this program, I was able to enhance my knowledge and understanding of DeFi protocols, Smart Contract development, and more.</p>
<pre/>
<pre/>
<pre/>

<p>Overall, my journey in the tech field has been an exciting and fulfilling experience, and I look forward to continuing to learn and grow as a successful Blockchain Developer.</p>
                <Link href='/#project'>
                <p  className='py-2 text-gray-600 cursor-pointer underline'>Check out some of my latest projects</p>
                </Link>
              </div>
                <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 sm:flex-row sm:p-8'>
                <Image className='rounded-3xl rounded-tr-3xl object-contain md:object-cover' src={pix} width={1300} height={34} />
                </div>
        </div>
    </div>
  )
}

export default About
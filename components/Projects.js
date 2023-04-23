/* eslint react/no-unescaped-entiities */

import React from 'react'
import kryptImg from '../public/assets/Projects/krypt.png';
import DrawingImg from '../public/assets/Projects/drawing.png';
import PortfolioImg from '../public/assets/Projects/portfolio.png';
import daoImg from '../public/assets/Projects/dao.png';
import walletImg from '../public/assets/Projects/wallet.png';
import Projectitems from './Projectitems';

const Projects = () => {
  return (
    <div id='project' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest font-semibold uppercase text-[#5651e5]'> Projects </p>
        <h2 className='py-4'>Have a look at what I've built</h2>

        <div className='grid md:grid-cols-2 gap-8'>
           <Projectitems title='Krypt' backgroundImg={kryptImg} projectUrl='/krypt' Stack="React Js" />

           <Projectitems title='DAO DAPP' backgroundImg={daoImg} projectUrl='/dao' Stack="React Js"/>
            
           <Projectitems title='Decentralized Wallet' backgroundImg={walletImg} projectUrl='/Wallet' Stack="React Js"/>
        
           <Projectitems title='Portfolio-Site' backgroundImg={PortfolioImg} projectUrl='/portfolio' Stack="Next Js"/>
            
           <Projectitems title='Drawing App' backgroundImg={DrawingImg} projectUrl='/drawing' Stack="Canva"/>
        
           </div>

            </div>
            </div>
  )
}

export default Projects
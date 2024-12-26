import React from 'react'
import  {Arrow2, Arrow } from '../../assets/image.jsx'
import  { Profilecard, Servicescard, Websitecard } from './Profilecard.jsx'

const Onboard = () => {
  return (
    <section className='flex container max-w-[88rem] mx-auto flex-col items-center justify-center  mt-8'>
        <div className='flex flex-col items-center justify-center' >

            <h1 className='text-[50px] font-bold'>Onboard business in 3 simple steps</h1>
            <p className='text-[16px] mt-4 '>Quick assisted onboarding with 30day free trial. No credit card needed</p>
        </div>


        <div className='w-full grid grid-cols-12 flex-row items-center justify-center gap-2 ml-20 mt-24'>
          <Profilecard/>
          <div className='-mt-40 -ml-14'>
            <Arrow/>
          </div>
          <Servicescard/>
          <div className='-mt-40 -ml-14'>
            <Arrow2/>
          </div>
          <Websitecard/>
        </div> 

        
    </section>
  )
}

export default Onboard

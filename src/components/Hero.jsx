import React from 'react'
import styles from '../style'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () =>(
    <section id='home'  className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          <div className={` flex flex-row items-center px-4 py-[6px] bg-discount-gradient roundex-[10px]  mb-2`}>
              <img src={discount} alt="discount" className='w-[32px] h-[32px] '/>
              <p className={styles.paragraph}>
                  <span className='text-white'>20%</span> Discount For {" "}
                  <span className='text-white'>1 Month</span> Account
              </p>
          </div>  

          <div className='flex flex-row justify-between items-center w-full'>
              <h1 className='flex-1 text-white text-[52px] ss:text-[72px] font-semibold font-poppins ss:leading-[100px] leading-[75px]'>
                The Next <br className='sm:block hidden' /> {' '}
                <span className='text-gradient'>Generation</span> {''}
                
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0 '>
                <GetStarted/>
              </div>
          </div>
          <h1 className=' text-white text-[52px] ss:text-[68px] font-semibold font-poppins ss:leading-[100px] leading-[75px]'>
            Payment Method
          </h1>
          <p className={`${styles.paragraph} max-w-470px mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.We examine annual percentage rates,annual fees</p>
      </div>

      <div className={`${styles.flexCenter} relative flex-1 md:my-0 my-10 xl:px-0 sm:px-10 px-0`}>
        <img src={robot} alt="robot" className='w-[100%] h-[100%] '/>
        <div className='absolute top-0 z-[0] w-[40%] h-[35%] pink__gradient'/>
        <div className='absolute bottom-40 rounded-full z-[1] w-[80%] h-[80%] white__gradient'/>
        <div className='absolute bottom-20 right-20 z-[0] w-[50%] h-[50%] blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter} `}>
          <GetStarted/>
      </div>
    </section>
)
export default Hero
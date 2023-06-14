import React from 'react'
import Button from './Button'
import styles,{layout} from '../style'
import { features } from '../constants'

const Feature = ({icon,title,content,index}) =>(
  <div className={`flex-row flex feature-card rounded-[20px] p-6 ${index !== features.length -1 ? "mb-6" : "mb-0"}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex flex-col flex-1 ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] mb-1 leading-[24px]'>
          {content}
        </p>
    </div>
    
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className='sm:block hidden'/> we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          With the right credit card, you can improve your financial life by building credit, learning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature,index) =>(
            <Feature 
              key={feature.id} 
              {...feature}
              index={index}
            />
          ))}
      </div>
    </section>
  )
}

export default Business
import styles from '../style'
import {logo} from '../assets'
import {footerLinks} from '../constants'
import { socialMedia } from '../constants'

const Footer = () =>(
   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Footerlogo */}
        <div className={`flex-1 flex flex-col mr-10 justify-start`}>
          <img src={logo} alt='logo' className={`w-[266px] h-[72px] object-contain`}/>
          <p className={`mt-4 max-w-[310px] ${styles.paragraph}`}>A new way to make the payments easy,reliable and secure.</p>
        </div>

        {/* footerlinks */}
        <div className='flex-[1.5] w-full flex-row justify-between flex-wrap flex md:mt-0 mt-10'>
          {footerLinks.map(footerLink =>(
            <div key={footerLink.title} className='flex flex-col ss:my-o my-14 min-w-[150px]'>
                <h4 
                  className='text-white font-poppins font-medium text=[18px] leading-[27px]'
                >{footerLink.title}</h4>
                <ul className='mt-4 list-none'>
                  {footerLink.links.map((link,index) =>(
                    <li 
                      key={link.name}
                      className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer  ${ index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                    >
                        {link.name}
                    </li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </div>

      <div className=' flex sm:flex-row flex-col w-full justify-between items-center pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='text-white font-poppins text-center font-normal text=[18px] leading-[27px]'>
          2023 Hoobank. All Rights Reserved
        </p>

        <div className='flex-row flex md:mt-0 mt-6'>
          {socialMedia.map((social,index) =>(
            <img 
              src={social.icon} 
              key={social.id}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${ index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>
   </section>
)

export default Footer
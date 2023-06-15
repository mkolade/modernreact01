import { apple,bill,google } from "../assets"
import styles,{layout} from '../style'
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="h-[100%] w-100%] relative z-[5]" />
      <div className="rounded-full -left-1/2 top-0 w-[50%] h-[50%] absolute z-[3] white__gradient"/>
      <div className="rounded-full -left-1/2 bottom-0 w-[50%] h-[50%] absolute z-[o] pink__gradient"/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}
      >Easily control your <br className="sm:block hidden"/> billing and info</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla deleniti in officiis, esse eum exercitationem et soluta quia expedita nam suscipit fuga nisi reprehenderit!</p>

      <div className='flex flex-row sm:mt-10 mt-6'>
        <img src={apple} alt="apple_bill" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
        <img src={google} alt="apple_bill" className='w-[128px] h-[42px] object-contain  cursor-pointer' />
      </div>
    </div>
  </section>
)

export default Billing
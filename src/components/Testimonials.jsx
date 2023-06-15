import styles from '../style'
import FeedbackCard from './FeedbackCard'
import {feedback} from '../constants'


const Testimonials = () => (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className='z-[0] absolute h-[60%] w-[60%] -right-[50%] rounded-full blue__gradient' />
      <div className='flex justify-between w-full items-center md:flex-row flex-col sm:mb-16 mb-10 relative z-[1]'>
        <h2 className={styles.heading2}>
          What people are <br className='sm:block hidden' /> saying about us
        </h2>
        <div className='md:mt-0 mt-6 w-full'>
            <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
        </div>
      </div>

      <div className='flex-wrap flex w-full sm:justify-start justify-center feedback-container relative z-[1]'>
          {feedback.map((card) =>(
            <FeedbackCard key={card.id} {...card} />
          ))}
      </div>
    </section>
)

export default Testimonials
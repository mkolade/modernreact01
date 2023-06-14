import React from 'react'
import styles from './style'

/* Components */
import  {Navbar,Billing,CardDeal,Business,Clients,CTA,Stats,Footer,Testimonials,Hero,} from './components'
import Button from './components/Button'
import FeedbackCard from './components/FeedbackCard'

const App = () =>(
    <div className='bg-primary w-full overflow-hidden'>
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
            <Navbar/>
        </div>
      </div>

      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      {/* Other components */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>


    </div>
  )
export default App
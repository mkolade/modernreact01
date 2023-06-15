import styles from "../style"

const Feature = ({icon,title,content,index,features}) =>{
    return (
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
  )}
export default Feature
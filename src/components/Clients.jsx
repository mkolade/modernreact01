import { clients } from "../constants"
import styles from "../style"

const Clients = () => (
  <section id="clients" className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} fles-wrap w-full`}>
      {clients.map(client =>(
        <div key={client.id} className={`flex-1 sm:min-w-[192px] min-w-[120px] ${styles.flexCenter}`}>
            <img src={client.logo} alt="client__logo" className="sm:w-[130px] w-[100px] object-contain client-img" />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
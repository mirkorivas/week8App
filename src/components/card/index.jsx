import './index.css'
import Image from 'mui-image'
import Seal from '../seal'
import Stamp from '../stamp'
import SealEagle2Red from '../seal/img/stampEagle2Red.svg'

export function Card({ user }) {
    const { studentName, department, imgSrc, message, date, sender } = user
    return (
    <div className="card">
    <div className="addressee">
        <div className="studentName">{studentName}</div>
        <div className="department">{department}</div>
    </div>
    <div className="imageFrame">
        <div className="stamp">
        <Image src={imgSrc} alt="image" duration={0} />
        </div>
    </div>
    <Seal imgSrc={SealEagle2Red}/>
    <div className="message">
        <div className="content">{message}</div>
        <div className="sender">{date +  " - " + sender}</div>
    </div>
    </div>
    )
}

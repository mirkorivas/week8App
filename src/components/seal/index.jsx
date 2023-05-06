import './index.css'
import stampEagle from './img/stampEagle.svg'
import stampEagle2 from './img/stampEagle2.svg'
import stampEagle2White from './img/stampEagle2White.svg'
import stampEagle2Grey  from './img/stampEagle2Grey.svg'


export default function Seal({ imgSrc }) {
    //random number between 1 and 5
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //5 different styles for the seal
    let style = {}; 
    switch(randomNumber){
        case 1:
            style = {left: '-20px', bottom: '190px', transform: 'rotate(-25deg)'};
            break;
        case 2:
            style = {left: '-15px', bottom: '180px', transform: 'rotate(20deg)'};
            break;
        case 3:
            style = {left: '-10px', bottom: '185px', transform: 'rotate(-5deg)'};
            break;
    }
  return (
    <div className="seal" style={style}>
        <div className="seal-icon"><img src={imgSrc}/></div>
    </div>
  )
}
import './artisanFull.css'
import { states } from '../../utils/context'
import { useContext } from 'react'
import {IoCloseCircle as CloseIcon} from 'react-icons/io5'

import {FaUserAlt as UserIcon} from 'react-icons/fa'
import {AiFillStar as StarFilled, AiOutlineStar as StarOutlined} from 'react-icons/ai'
import {MdVerified as VBadge} from 'react-icons/md'
import {RiQuestionFill as UBadge} from 'react-icons/ri'

const ArtisanFull = () => {
     const {pickedArtisan, setPickedArtisan} = useContext(states)
  return (
    <div className='artisanFull'>
     <div className="artisanWindow">
          <CloseIcon className='closeIcon' onClick={()=> setPickedArtisan(null)}/>
          {pickedArtisan.avatar ? (<img className="aImg" src={pickedArtisan.avatar}/>):(<UserIcon className='aIcon'/>)}
          <h2 className="aFullName">{pickedArtisan.name}</h2>
          {pickedArtisan.verified ? 
               (
                    <>
                         <VBadge className= 'vBadge'/>
                         <p>Verified</p>
                    </>
               ) 
          : 
               (
                    <>
                         <UBadge className='uBadge'/>
                         <p>Unverified</p>
                    </>
               )}
          <p className="basicInfo">
               <span className="veri">{pickedArtisan.verified ?"Verified" : "Unverified"}</span>
               <span className="aService">{pickedArtisan.services[0]}</span>
               <span className="area">{pickedArtisan.area}</span>
          </p>
          <div className="servicesWrapper">
               <span className="servTitle">Services</span>
               <div className="servicesContainer">
                    {
                         pickedArtisan.services?.map((service,index)=>(
                              <div className="serviceBubble" key={index}>{service}</div>
                         ))
                    }
               </div>    
          </div>
          <div className="servicesWrapper">
               <span className="servTitle">Summary</span>
               <p className="summary">
                    {
                         pickedArtisan.summary
                    }
             </p>   
          </div>

          <div className="servicesWrapper">
               <span className="servTitle">Contact</span>
               <p className="summary">
                    {pickedArtisan.contact}
               </p>   
          </div>
     </div>
    </div>
  )
}

export default ArtisanFull
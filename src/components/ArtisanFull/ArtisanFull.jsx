import './artisanFull.css'
import { states } from '../../utils/context'
import { useContext } from 'react'

import {FaUserAlt as UserIcon} from 'react-icons/fa'
import {AiFillStar as StarFilled, AiOutlineStar as StarOutlined} from 'react-icons/ai'

const ArtisanFull = () => {
     const {pickedArtisan} = useContext(states)
  return (
    <div className='artisanFull'>
     <div className="artisanWindow">
          {pickedArtisan.avatar ? (<img className="aImg" src={pickedArtisan.avatar}/>):(<UserIcon className='aIcon'/>)}
          <h2 className="aFullName">{pickedArtisan.name}</h2>
          <p className="basicInfo">
               <span className="veri">{pickedArtisan.verify?"Verified" : "Unverified"}</span>
               <span className="aService">{pickedArtisan.services[0]}</span>
               in
               <span className="area">{pickedArtisan.area}</span>
          </p>
     </div>
    </div>
  )
}

export default ArtisanFull
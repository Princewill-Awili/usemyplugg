import './artisan.css'
import {FaUserAlt as UserIcon} from 'react-icons/fa'
import {AiFillStar as StarFilled, AiOutlineStar as StarOutlined} from 'react-icons/ai'

const Artisan = ({name, avatar, rating,area,verified,services}) => {
  return (
    <div className='artisanComp'>
          {avatar === "" ? <UserIcon className='userIcon'/> : <img className='avatarImg' src={avatar} alt="avatar"/> }
          <p className="aName">{name}</p>
          <div className="serviceWrap">
               {
                    services.map((service,index)=>(
                         <div className="serviceBubble" key={index}>{service}</div>
                    ))
               }
          </div>
          <p className="aAdd">{area}</p>

          <div className="ratings">
              {
                [...Array(rating)].map((star,index) =>(
                    <StarFilled key={index} className='starFill'/>
               ))
              }
              {
               [...Array(5-rating)].map((star,index) => (
                    <StarOutlined key={index} className='starHollow'/>
               ))
              }
          </div>
          {verified ? <span className='verify v'>Verified</span> : <span className='verify nv'>Not Verified</span>}
    </div>
  )
}

export default Artisan
import { useState,useEffect } from 'react'
import './home.css'
import { wordRandomizer, services } from '../../utils/helperFuncs'

const Home = () => {

const [artisan, setArtisan] = useState(wordRandomizer());
const [showResults,setShowResults] = useState(true);

 useEffect(() => {
     const interval = setInterval(() => {
       setArtisan(wordRandomizer())
     }, 2000);
     return () => clearInterval(interval);
   }, []);

  return (
    <div className='home'>
     <h2 className="logoTxt">
          <span className="faded">use</span>
          myplugg
          <span className="faded">.com</span>
     </h2>
     {!showResults && (
          <>
               <h1 className='largeFont'>
                    <span className="lgfontTop">Find the right</span>
                    <span className="lgfontTop artisan">{artisan}</span>
                    <span className="lgfontTop">for your project</span> 
               </h1>
               <div className="caption">
                    Finally, the directory of top-rated local artisans you've been looking for!
               </div>
          </>
     )}
     
     <div className="inputFields">
          <select className='servCat select1'>
               <option value="Service Category" className='servOpt'>Service Category</option>
               {
                    services.map((service,index) => (
                         <option className='servOpt' key={index}>{service}</option>
                    ))
               }
          </select>

          <select className="servCat select2">
               <option className='servOpt' value="location">Location</option>
               <option className='servOpt' value="lagos">Lagos</option>
               <option className='servOpt' value="abuja">Abuja</option>
               <option className='servOpt' value="ph">Port Harcourt</option>
               <option className='servOpt' value="asaba">Asaba</option>
          </select>

          <div className="searchBtn">Search</div>
     </div>
     {!showResults && (<h4 className="vetted">Over 100+ industry-vetted service professionals</h4>)}
    
     <div className="cavaet">{showResults ? (<p className='miscInfo'>Can't find what you're looking for?<span className="boldtxt">Make a suggestion.</span></p>): "*Service professionals are rated by clients they've served."}</div>
    </div>
  )
}

export default Home
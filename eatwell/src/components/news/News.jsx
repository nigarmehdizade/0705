import React from 'react'
import './news.scss'
const News = () => {
  return (
    <>
     <div className="news">
        <div className="newstxt">
            <h2>NEWS</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>
        <div className="newscards">
         
            <div className="newscard">
            <div className="newsimg">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_1.jpg.webp" alt="" />
            </div>
            <div className="cardinfo">
            
            <h3>We Have Dilecious Food</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
            </div>
         </div>
         <div className="newscard">
            <div className="newsimg">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_2.jpg.webp" alt="" />
            </div>
            <div className="cardinfo">
            
            <h3>Chef Special Menu</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
            </div>
         </div>
         <div className="newscard">
            <div className="newsimg">
            <img src="https://preview.colorlib.com/theme/eatwell/images/offer_3.jpg.webp" alt="" />
            </div>
            <div className="cardinfo">
            
            <h3>Merriage Celebrations</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <button>Read More</button>
            </div>
         </div>
     
        </div>
    </div>
    </>
  )
}

export default News
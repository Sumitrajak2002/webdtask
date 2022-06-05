import React from 'react'
import './card.css'
function Card ({title,imageUrl,body}) {
return(
<div className = 'card-container'>
    <div className = "image-container">
        <img src = {imageUrl} alt =''/> 
    </div>
    <div className = "card-conatainer">
    <div className ="card-title">
        <h3>{title}</h3>
    </div>
    <div className = "card-body">
        {body}
    </div>
    </div>
  <div className = "btn">
  <button>
        <a>
            View More
        </a>
    </button>
  </div>
    
</div>

)

}
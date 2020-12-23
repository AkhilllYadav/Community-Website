import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  
export class Owldemo1 extends Component {  
        render()  
        {  
          return (  
            <div>     
        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={10} 
          autoplay ={true}
          >  
           <div ><img  className="img" alt="" src= "./images/help.png"/></div>  
           <div><img  className="img" alt="" src= "./images/aim.png"/></div>  
           <div><img  className="img" alt="" src= "./images/outcome.png"/></div>  
           <div><img  className="img" alt="" src= "./images/about.png"/></div>  
      </OwlCarousel>   
      </div>  
          )  
        }  
      }  


export default Owldemo1 
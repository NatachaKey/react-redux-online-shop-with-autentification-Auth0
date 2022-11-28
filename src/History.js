import { useState } from "react";
import { historyImages } from "./historyImages";
import ParticlesHistory from "./ParticlesHistory";
import 'aos/dist/aos.css'; 

const History = ()=>{

    const [foto, setFoto]= useState(0);
    const {image}= historyImages[foto];

    const previousFoto=()=>{
        setFoto((foto=>{
            foto --;
            if (foto<0){
                return historyImages.length-1
            }
            return foto
        }))
    }

    const nextFoto =()=>{
        setFoto((foto=>{
            foto++;
            if(foto>historyImages.length-1){
                foto=0;
            }
            return foto;
        }))
    }

    return(<div data-aos="zoom-in">

    <ParticlesHistory/> 
     

<div >
<h2 className="text" >From donuts to carrot cakes, from brownie to meringue...</h2>
<h3 className="text">From our ❤️ to yours</h3>
<br/>
<h3 className="text">See our best desserts in the gallery:</h3>
    
        <div className="box">
            <div className="containerSlides" >
                <button className="btnNexAndPrevious" onClick={previousFoto}> Back </button>
                <img src={image} className="slide" alt="foto"></img>
                <button  className="btnNexAndPrevious" onClick={nextFoto}>Next</button>
            </div>
        </div>
<h4 className="text"> "This was why she enjoyed baking. A good dessert could make her feel like she'd created joy at the tips of her fingers. <br/> Suddenly, the people around the table were no longer strangers. They were friends and confidantes, and she was sharing with them her magic." <br/>- Marissa Meyer</h4>

</div>
</div>)
}

export default History;
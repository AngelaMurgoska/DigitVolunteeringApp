import React from "react";
import { Carousel } from "react-responsive-carousel";
import volunteeringImg1 from '../../assets/images/involved_volunteering.jpg'
import volunteeringImg2 from '../../assets/images/Tips-for-Volunteering-With-Kids.jpg'
import volunteeringImg3 from '../../assets/images/Volunteering is Good for You and Your Kids.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default () => (
    <div>
        <Carousel autoPlay={true} showIndicators={false} showArrows={false} width={"100%"} showThumbs={false}>
            <div>
                <img src={volunteeringImg2} />
            </div>
            <div>
                <img src={volunteeringImg1}/>
            </div>
            <div>
                <img src={volunteeringImg3} />
            </div>
        </Carousel>
    </div>
);

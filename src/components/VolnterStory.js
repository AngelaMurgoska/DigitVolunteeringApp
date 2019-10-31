import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import "./VolnterStory.css";

import volunteeringImg1 from '../assets/images/involved_volunteering.jpg'
import volunteeringImg2 from '../assets/images/Tips-for-Volunteering-With-Kids.jpg'
import volunteeringImg3 from '../assets/images/Volunteering is Good for You and Your Kids.jpg'

class VolnterStory extends Component {
    render(){
        return (
<div>

            <div className={"container mt-5"}>
                <h1 className={"text-center"}>Искуства на волонтери</h1>
                <div className={"row p-5"}>
                     <div className={"col-4"}>
                        <div className={"card-element"}>
                            <div class="card border-danger mb-3">
                                 <Card.Img variant="top"  src={volunteeringImg2} />
                                 <h2>Stori1</h2>
                                 <div class="card-body text-danger">
                               <p class="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                                    <Button variant="primary">Види повеќе...</Button>
                            </div>
                        </div>
                     </div>
                   </div>
                   <div className={"col-4"}>
                       <div className={"card-element"}>
                          <div class="card border-danger mb-3">
                            <Card.Img variant="top"  src={volunteeringImg2} />
                              <h2>Stori1</h2>
                                <div class="card-body text-danger">
                                <p class="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                                                       <Button variant="primary">Види повеќе...</Button>
                            </div>
                         </div>
                      </div>
                  </div>

                 <div className={"col-4"}>
                    <div className={"card-element"}>
                     <div class="card border-danger mb-3">
                      <Card.Img variant="top"  src={volunteeringImg2} />
                      <h2>Stori1</h2>
                        <div class="card-body text-danger">
                           <p class="card-text">Quick sample text to create the card title and make up the body of the card's content.</p>
                                                                        <Button variant="primary">Види повеќе...</Button>
                       </div>
                    </div>
                    </div>
                </div>


                </div>


                    <ul class="pagination pt-2  justify-content-center">
                      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                 </div>
                  <div className={"image"}>
                        <img src="https://www.ageuk.org.uk/bp-assets/globalassets/lindsey/images/volunteering/hands_med.jpg"/>
                   </div>
</div>


        );

    }
}

export default VolnterStory;
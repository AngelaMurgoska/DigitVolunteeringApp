import React, {Component} from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

import HeaderSections from './HeaderSections';

import volunteeringImg1 from '../../../assets/images/involved_volunteering.jpg'
import volunteeringImg2 from '../../../assets/images/Tips-for-Volunteering-With-Kids.jpg'
import volunteeringImg3 from '../../../assets/images/Volunteering is Good for You and Your Kids.jpg'
class NewsSections extends Component {
    render(){
        return (
      <div className={"container"}>

        <HeaderSections/>
      <div className="card-elem">
      <CardDeck>
         <Card>
            <Card.Img variant="top" src={volunteeringImg1} />
            <Card.Body>
                <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Види повеќе...</Button>
            </Card.Footer>
         </Card>

        <Card>
        <Card.Img variant="top"  src={volunteeringImg2} />
            <Card.Body>
            <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
            </Card.Body>
        <Card.Footer>
            <Button variant="primary">Види повеќе...</Button>
        </Card.Footer>
        </Card>

        </CardDeck>
        <br/>
        <CardDeck>
                 <Card>
                    <Card.Img variant="top" src={volunteeringImg1} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Види повеќе...</Button>
                    </Card.Footer>
                 </Card>

                <Card>
                <Card.Img variant="top"  src={volunteeringImg2} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Види повеќе...</Button>
                </Card.Footer>
                </Card>

                </CardDeck>
        </div>
        <ul class="pagination pt-2  justify-content-end">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
     </div>
    );
    }
}

export default NewsSections;
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
      <div className="content">

      <HeaderSections categories={this.props.categories}/>

      <div className="card-elem">
         <CardDeck>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[0].nastani[0].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[0].nastani[0].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary">Пријави се</Button>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[0].nastani[1].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[0].nastani[1].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary">Пријави се</Button>
            </Card.Footer>
         </Card>
         <Card>
            <Card.Body>
               <Card.Title className={"font-weight-bold"}>{this.props.categories[0].nastani[2].naslov}</Card.Title>
               <hr/>
               <Card.Text>{this.props.categories[0].nastani[2].sodrzina}</Card.Text>
            </Card.Body>
            <Card.Footer>
               <Button variant="primary">Пријави се</Button>
            </Card.Footer>
         </Card>
         </CardDeck>

      </div>

        <ul class="pagination pt-5  justify-content-center">
          <li class="page-item disable=true"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item "><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
     </div>
    );
    }
}

export default NewsSections;
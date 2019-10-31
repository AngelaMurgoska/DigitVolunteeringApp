import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FooterLinks.css'

class FooterLinks extends Component {
    render(){
        return (
            <div className={"pt-3"}>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Градови</li>
                     <li className={"li-item"}>Скопје</li>
                     <li className={"li-item"}>Тетово</li>
                     <li className={"li-item"}>Битола</li>
                     <li className={"li-item"}>Куманово</li>
                     <li className={"li-item"}>Прилеп</li>
                 </ul>
             </div>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Категории</li>
                     <li className={"li-item"}>Образование</li>
                     <li className={"li-item"}>Екологија</li>
                     <li className={"li-item"}>Филмски фестивали</li>
                     <li className={"li-item"}>Медицина</li>
                     <li className={"li-item"}>Правни совети</li>
                 </ul>
             </div>
             <div className={"links-display"}>
                 <div className={"row mb-4"}>
                     <div className={"col"}>
                         <ul className={"ul-links"}>
                             <li className={"h5"}>Инфо</li>
                             <li className={"li-item"}>За нас</li>
                             <li className={"li-item"}>Информации</li>
                             <li className={"li-item"}>Контакт</li>
                         </ul>
                     </div>
                 </div>
                 <div className={"row"}>
                     <div className={"col"}>
                     </div>
                 </div>
             </div>
            </div>
        );
    }
}

export default FooterLinks;
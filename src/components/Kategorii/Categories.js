import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Categories(props){

    return <div>{props.categories.map((kategorija)=>{
            return <div className={"DisplayCathegory"}>
                <div>
                {/*kategorija.title*/}
                <button>
                <img src={kategorija.backgroundUrl} className={"Slika"} />
            </button>





            <p>
            {/*kategorija.content*/}
            </p>


            </div>
            </div>})}
            </div>





        }

        export default Categories;
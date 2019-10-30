import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Categories(props){

    return <div className={"text-center"}>
            {props.categories.map((kategorija)=>{
                return<div className={"display-category"}>
                          <div className={"container-category"}>
                                  <img src={kategorija.backgroundUrl} className={"rounded-circle category-image"} />
                                  <div className="overlay rounded-circle">
                                      <div className={"text"}> {kategorija.title}</div>
                                  </div>
                          </div>
                      </div>
            })}
            </div>

        }

        export default Categories;
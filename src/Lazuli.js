import React from 'react';
import './lazuli.css';
import $ from 'jquery'; 

class Lazuli extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: null,
    }

    $('body').addClass('bg-lazuli')
  }

  switchLazuli = () => {
    $('body').toggleClass('bg-lazuli');
  } 

  render(){
    return (
      <div className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <a href="./index.html" className="btn">Lazuli</a>
          </div>
          <div className="d-flex justify-contents-start align-items-center">
            <div className="form-check form-switch">
              <input className="form-check-input bg-amber border-warning" type="checkbox" role="switch" onChange={this.switchLazuli} />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}



export default Lazuli;

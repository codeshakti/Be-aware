import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button'





class partners extends React.Component {
  render() {
    return (
      <div className="container">
     <section className="contact">
          <Container fluid style>
            <div className="row">
              <div>
                 <h2 className="heading">About Us</h2>
              </div>
                    <div className="col-md-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                    </div>
                     <div className="col-md-4">
                     <img className="img-responsive" src="http://lorempixel.com/400/200/" alt="logo"/>
                     </div>
                       <div>
                       <hr className="divider"/>
                       </div>
              </div>
            </Container>
     </section>
     </div>
     )
  }
}

export default partners;
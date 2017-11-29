import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import logo from '../img/what.png'

import "./section-b.css";

class SectionB extends React.Component {
  render() {
    return (
      <Container className="container">
        <section className="section-b">
              <div className="col-md-4">
                <img className="img-responsive" src={logo} alt="logo"/>
              </div>
              <div>
                <h2 className="heading">Nuestras acciones y obras</h2>
              </div>
              <div className="col-md-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.                   
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.                   
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi vel facilisis. Donec in ornare massa.
              </div>
      </section>
      </Container>
    )
  }
}

export default SectionB;

import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';
import Button from './Button'
import "./section-c.css";
import logo from '../img/partners.png'




class SectionC extends React.Component {
  render() {
    return (
       <Container className="container">
             <section className="section-c">
                <Container fluid styles>
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
                        <div className="col-md-4">
                      <img className="img-responsive" src={logo} alt="logo"/>
                        </div>
                </Container>
             </section>
      <br/>
      </Container>

     )
  }
}

export default SectionC;

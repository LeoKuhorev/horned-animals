import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
    return (
      <Container fluid className="App">
        <Header title='Horned Animals' />
        <Main />
        <Footer title='Author: Sergii Otryshko'/>
      </Container>
    );
  }
}

export default App;

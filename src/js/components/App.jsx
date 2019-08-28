import React, { Component } from "react";
import data from "./data"
import Nav from "./Nav"
import Header from "./Header"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import People from "./People"
import Studio from "./Studio"
import Form from "./Form"
import Footer from "./Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data:data
    };
  };
  render() { 
    return ( 
      <div>
        <Nav nav={this.state.data[0].nav}/>
        <Header header={this.state.data[0].header} />
        <About about={this.state.data[0].about}/>
        <Services services={this.state.data[0].services}/> 
        <Portfolio portfolio={this.state.data[0].portfolio}/>
        <People people={this.state.data[0].people} />
        <Studio studio={this.state.data[0].studio}/>
        <Form form={this.state.data[0].form}/>
        <Footer footer={this.state.data[0].footer}/>
      </div>
      
     );
  }
}
 
export default App;

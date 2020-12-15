import React from 'react'
import './App.css';
import Header from './components/head'
import Section from './components/sections'
import './css/main.css'
class App extends React.Component{
    render(){
      return (
      <div className="container">
     <Header/>
      <Section/>  
      </div>)
    }
  }
export default App;

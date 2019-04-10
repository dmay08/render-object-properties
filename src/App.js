import React, { Component } from 'react';
import './App.css';
import { dannyLaptop, ryanLaptop, mikeDesktop } from './computer'
import { smallHouse, mediumHouse, largeHouse } from './house'
import { lameCar, decentCar, coolCar } from './car'

const names = ['danny', 'ryan', 'mike']
const houses = ['small', 'medium', 'large']
const cars = ['lame', 'decent', 'cool']
const computersKey = {
  'danny': 'dannyLaptop',
  'ryan': 'ryanLaptop',
  'mike': 'mikeDesktop'
}
const housesKey = {
  'small': 'smallHouse',
  'medium': 'mediumHouse',
  'large': 'largeHouse'
}
const carsKey = {
  'lame': 'lameCar',
  'decent': 'decentCar',
  'cool': 'coolCar'
}

class App extends Component {

    state = {
      dannyLaptop: {},
      ryanLaptop: {},
      mikeDesktop: {},

      smallHouse: {},
      mediumHouse: {},
      largeHouse: {},

      lameCar: {},
      decentCar: {},
      coolCar: {},

      selectedItem: '',
      selectedProperty: ''
    }

    danny = React.createRef()
    ryan = React.createRef()
    mike = React.createRef()
    small = React.createRef()
    medium = React.createRef()
    large = React.createRef()
    lame = React.createRef()
    decent = React.createRef()
    cool = React.createRef()

  componentDidMount() {
    this.setValuesToState()
  }

  setValuesToState = async () => {
    this.setState(
      {
        dannyLaptop, ryanLaptop, mikeDesktop, smallHouse, mediumHouse, largeHouse, lameCar, decentCar, coolCar
        :
        dannyLaptop, ryanLaptop, mikeDesktop, smallHouse, mediumHouse, largeHouse, lameCar, decentCar, coolCar
      }
    )
  }

  handleClickItem(val) { 
    this.setState(() => ({
      selectedItem: this[val].current.id, // 'current.id' comes from {ref} that we created for each of the 9 items (above) 
        // this.danny.current.id >>>> look @ divs >>> includes 'ref = {this.danny}' >>> which has {this.danny.current.id}
    }))
  }

  handleClickProperty(val) {
    this.setState(() => ({ selectedProperty: val }))
  }
  
  renderComputerInfo(type, property) { 
    let result = ''
    names.forEach(name => { // 'names' arr = top of component 
      if (this.state.selectedItem === name && this.state.selectedProperty === type) {
        if (type === 'owner' && property) {
          result = this.state[computersKey[name]][type][property]
        } else {
          result = this.state[computersKey[name]][type]// const computersKey = @ top of component
        }

      }
    })
    return result
  }

  renderHouseInfo(type, property) {
    let result = ''
    houses.forEach(house => { // 'houses' arr = top of component
      if (this.state.selectedItem === house && this.state.selectedProperty === type) {
        if (type === 'color' && property) {
          result = this.state[housesKey[house]][type][property]
        } else {
          result = this.state[housesKey[house]][type]
        }
      }
    })
    console.log('HOUSE-RESULT', result)
    return result
  }

  renderCarInfo(type, property) {
    let result = ''
    cars.forEach(car => {
      if (this.state.selectedItem === car && this.state.selectedProperty === type) {
        if (type === 'horsepower' && property) {
          result = this.state[carsKey[car]][type][property]
        } else {
          result = this.state[carsKey[car]][type]
        }
      }
    })
    return result
  }
  
  render() {
    return (
      <div className="App">
        <div className="column one">
          <h1>Computers</h1>

          <div className={`button ${this.state.selectedItem === 'danny' ? 'grey' : ''}`} id="danny" ref={this.danny} onClick={() => this.handleClickItem('danny')}>Danny's Laptop</div>
          <div className={`button ${this.state.selectedItem === 'ryan' ? 'grey' : ''}`} id="ryan" ref={this.ryan} onClick={() => this.handleClickItem('ryan')}>Ryan's Laptop</div>
          <div className={`button ${this.state.selectedItem === 'mike' ? 'grey' : ''}`} id="mike" ref={this.mike} onClick={() => this.handleClickItem('mike')}>Mike's Desktop</div>

          <h1>Houses</h1>
          <div className={`button ${this.state.selectedItem === 'small' ? 'grey' : ''}`} id="small" ref={this.small} onClick={() => this.handleClickItem('small')}>Small House</div>
          <div className={`button ${this.state.selectedItem === 'medium' ? 'grey' : ''}`} id="medium" ref={this.medium} onClick={() => this.handleClickItem('medium')}>Medium House</div>
          <div className={`button ${this.state.selectedItem === 'large' ? 'grey' : ''}`} id="large" ref={this.large} onClick={() => this.handleClickItem('large')}>Large House</div>

          <h1>Cars</h1>
          <div className={`button ${this.state.selectedItem === 'lame' ? 'grey' : ''}`} id="lame" ref={this.lame} onClick={() => this.handleClickItem('lame')}>Lame Car</div>
          <div className={`button ${this.state.selectedItem === 'decent' ? 'grey' : ''}`} id="decent" ref={this.decent} onClick={() => this.handleClickItem('decent')}>Decent Car</div>
          <div className={`button ${this.state.selectedItem === 'cool' ? 'grey' : ''}`} id="cool" ref={this.cool} onClick={() => this.handleClickItem('cool')}>Cool Car</div>
        </div>

        <div className="column two">
          <h1>Computers</h1>
          <div className={`button ${this.state.selectedProperty === 'brand' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('brand')}>Brand</div>
          <div className={`button ${this.state.selectedProperty === 'size' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('size')}>Size</div> {/* === MIGHT HAVE TO CHANGE === */}
          <div className={`button ${this.state.selectedProperty === 'owner' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('owner')}>Owner</div>

          <h1>Houses</h1>
          <div className={`button ${this.state.selectedProperty === 'year' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('year')}>Year</div> {/* === MIGHT HAVE TO CHANGE === */}
          <div className={`button ${this.state.selectedProperty === 'squareFeet' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('squareFeet')}>Square Feet</div>
          <div className={`button ${this.state.selectedProperty === 'color' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('color')}>Color</div>

          <h1>Cars</h1>
          <div className={`button ${this.state.selectedProperty === 'make' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('make')}>Make</div>
          <div className={`button ${this.state.selectedProperty === 'model' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('model')}>Model</div>
          <div className={`button ${this.state.selectedProperty === 'horsepower' ? 'grey' : ''}`} onClick={() => this.handleClickProperty('horsepower')}>Horsepower</div>
        </div>

        <div className="column three">
          <h1>Computers</h1>
          <div className="answer">{this.renderComputerInfo('brand')}</div>
          <div className="answer">{this.renderComputerInfo('size')}</div>
          <div className="answer">Name: {this.renderComputerInfo('owner', 'name')}</div>
          <h1>Houses</h1>
          <div className="answer">{this.renderHouseInfo('year')}</div>
          <div className="answer">{this.renderHouseInfo('squareFeet')}</div>
          <div className="answer">Roof: {this.renderHouseInfo('color', 'roof')}</div>
          <h1>Cars</h1>
          <div className="answer">{this.renderCarInfo('make')}</div>
          <div className="answer">{this.renderCarInfo('model')}</div>
          <div className="answer">HP: {this.renderCarInfo('horsepower', 'hp')}</div>
        </div>

        {/*  ========= mostly blank (quicker than redoing css) ========== */}
        <div className="column four">
          <h1 className="blank-title">a</h1>
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="answer unique">Age: {this.renderComputerInfo('owner', 'age')}</div>
          <h1 className="blank-title">a</h1>
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="answer unique">House: {this.renderHouseInfo('color', 'house')}</div>
          <h1 className="blank-title">a</h1>
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="answer unique">Max Speed: {this.renderCarInfo('horsepower', 'maxSpeed')}</div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Main from '../components/Main';
import helpers from '../utils/helpers';
import '../App.css';

var cellsArray = [];
for (let i = 0; i < 2500; i++) {
	cellsArray.push(<div id={i} onClick={cellClick} className="grid-cell"></div>);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function cellClick() {
	console.log('hello')
}

var testArr = [];

var one = 1068
var two = 1118
var three = 1168
var four = 1218
var five = 1268

for (let i=0; i<6; i++) {
	testArr.push(one);
	one = one + 1;
}
for (let i=0; i<6; i++) {
	testArr.push(two);
	two = two + 1;
}
for (let i=0; i<6; i++) {
	testArr.push(three);
	three = three + 1;
}
for (let i=0; i<6; i++) {
	testArr.push(four);
	four = four + 1;
}
for (let i=0; i<6; i++) {
	testArr.push(five);
	five = five + 1;
}


class MainContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cells: cellsArray,
			generationNumber: 0
		}

		this.handleNextGeneration = this.handleNextGeneration.bind(this);
	}

	componentWillMount() {

		for (let i = 0; i < 600; i++) {
			var randInt = getRandomInt(0, 2500);
			cellsArray[randInt] = <div id={randInt} className="grid-cell alive"></div>
		}
        
  //       for (let i = 0; i < 7; i++) {
		// 	var randInt = testArr[getRandomInt(0, 25)];
		// 	cellsArray[randInt] = <div id={randInt} className="grid-cell alive"></div>
		// }

	}

	componentDidMount() {

		setInterval(function() {

            var nextGen = helpers.checker(this.state.cells);

			this.setState({
			cells: nextGen,
			generationNumber: this.state.generationNumber + 1
		});
		}.bind(this), 80);
		

	}
	handleNextGeneration() {
		 var nextGen = helpers.checker(this.state.cells);

			this.setState({
			cells: nextGen
		});
	}
	render() {
		return (
          <Main rows={this.state.cells}
          generationNumber={this.state.generationNumber}
          onNextGeneration={this.handleNextGeneration}/>
		)
	}
}

export default MainContainer;


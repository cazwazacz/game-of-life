import React, { Component } from 'react';
import Main from '../components/Main';
import helpers from '../utils/helpers';

var cellsArray = [];
for (let i = 0; i < 2500; i++) {
	cellsArray.push(<div id={i} className="grid-cell"></div>);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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
			cells: cellsArray
		}
	}

	componentWillMount() {
		// for (let i = 0; i < 7; i++) {
		// 	var randInt = getRandomInt(0, 25);
		// 	cellsArray[randInt] = <div id={randInt} className="grid-cell alive"></div>
		// }
        
        for (let i = 0; i < 7; i++) {
			var randInt = testArr[getRandomInt(0, 25)];
			cellsArray[randInt] = <div id={randInt} className="grid-cell alive"></div>
		}

	}

	componentDidMount() {

		setTimeout(function() {

            var nextGen = helpers.checker(this.state.cells);

			this.setState({
			cells: nextGen
		});
		}.bind(this), 2000);

		// var nextGen = helpers.checker(this.state.cells);
		// console.log(nextGen);
		

	}
	render() {
		return (
          <Main rows={this.state.cells}/>
		)
	}
}

export default MainContainer;


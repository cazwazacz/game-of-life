import React from 'react';
import '../App.css';

var cell = <div className="grid-cell"></div>
var cells = [];
for (let i = 0; i < 50; i++) {
	cells.push(cell);
}

var row = <div className="grid-row"> {cells} </div>
var rows = [];
for (let i = 0; i < 50; i++) {
	rows.push(row);
}

function Main (props) {
	return (
      <div>
      <div className="grid-background">
      	{props.rows}
      </div>
      </div>
	)
}

module.exports = Main;
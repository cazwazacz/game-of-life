import React from 'react';

var helpers = {

	checker: function (array) {

        var arrayCopy = array.slice();

		for (let i = 0; i < array.length; i++) {
            
            //neighbours array format is [top-left, top-middle, top-right, middle-right, bottom-right, bottom-middle, bottom-left, middle-left]
            //cell in top left
            if (i === 0) {
            	var neighbours = [array[i + 2499].props.className, array[i + 2450].props.className, array[i + 2451].props.className,
            	array[i + 1].props.className, array[i + 51].props.className, array[i + 50].props.className,
            	array[i + 99].props.className, array[i + 49].props.className];
            //cell in top right
            } else if (i === 49) {
            	var neighbours = [array[2498].props.className, array[2499].props.className, array[2450].props.className,
            	array[0].props.className, array[50].props.className, array[99].props.className,
            	array[98].props.className, array[48].props.className];
            //cell in bottom right
            } else if (i === 2499) {
            	var neighbours = [array[2448].props.className, array[2449].props.className, array[2440].props.className,
            	array[2450].props.className, array[0].props.className, array[49].props.className,
            	array[48].props.className, array[2498].props.className];
            //cell in bottom left
            } else if (i === 2450) {
            	var neighbours = [array[2449].props.className, array[2400].props.className, array[2401].props.className,
            	array[2451].props.className, array[1].props.className, array[0].props.className,
            	array[49].props.className, array[2499].props.className];
            //cell in left edge
            } else if (i % 50 === 0) {
            	var neighbours = [array[i - 1].props.className, array[i - 50].props.className, array[i - 49].props.className,
            	array[i + 1].props.className, array[i + 51].props.className, array[i + 50].props.className,
            	array[i + 99].props.className, array[i + 49].props.className];
            //cell in right edge
            } else if ((i + 1) % 50 === 0) {
            	var neighbours = [array[i - 51].props.className, array[i - 50].props.className, array[i - 99].props.className,
            	array[i - 49].props.className, array[i + 1].props.className, array[i + 50].props.className,
            	array[i + 49].props.className, array[i - 1].props.className];
            //cell in top edge
            } else if (i >= 1 && i <= 48) {
                 var neighbours = [array[i + 2449].props.className, array[i + 2450].props.className, array[i + 2451].props.className,
                 array[i + 1].props.className, array[i + 51].props.className, array[i + 50].props.className,
                 array[i + 49].props.className, array[i - 1].props.className];
            //cell in bottom edge
            } else if (i >= 2451 && i <= 2498) {
            	var neighbours = [array[i - 51].props.className, array[i - 50].props.className, array[i - 49].props.className,
            	array[i + 1].props.className, array[i - 2449].props.className, array[i - 2450].props.className,
            	array[i - 2451].props.className, array[i - 1].props.className];
            //cell in middle
            } else {
            	var neighbours = [array[i - 51].props.className, array[i - 50].props.className, array[i - 49].props.className,
            	array[i + 1].props.className, array[i + 51].props.className, array[i + 50].props.className,
            	array[i + 49].props.className, array[i - 1].props.className];
            }

			var cellId = array[i].props.id

			var aliveSearchCursor = "grid-cell alive";

			if (array[i].props.className === "grid-cell alive") {
				
				var cellId = array[i].props.id
				
				var aliveSearchCursor = "grid-cell alive";
                var aliveNeighbours = neighbours.reduce(function(n, value) {
                  return n + (value === aliveSearchCursor);
                }, 0);
                console.log(cellId + ' has ' + aliveNeighbours + ' alive neighbours')
                if (aliveNeighbours < 2 || aliveNeighbours > 3) {
                	arrayCopy[i] = <div id={i} className="grid-cell"></div>
                	console.log(cellId + ' dies')
                } else {
                	console.log(cellId + ' lives')
                }

			} else { 


                var aliveNeighbours = neighbours.reduce(function(n, value) {
                  return n + (value === aliveSearchCursor);
                }, 0);

                if (aliveNeighbours === 3) {
                	arrayCopy[i] = <div id={i} className="grid-cell alive"></div>
                	console.log(cellId + ' newborn')
                }

			}
		}
        
		return arrayCopy;
	}

};

module.exports = helpers;
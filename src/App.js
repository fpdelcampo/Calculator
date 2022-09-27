import Container from './Components/Container'
import ResultBar from './Components/ResultBar'
import Tile from './Components/Tile'
import TileHolder from './Components/TileHolder'
import Math from 'mathjs'
import React, { useState } from "react";


const tileValues = ['C', '±', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '^', '='];

function App() {
	const [input, setInput] = useState('0');

	return (
		<Container>
			<ResultBar content={input}>
			</ResultBar>
			<TileHolder tiles= {
				tileValues.map((tile, i) => {
					return <Tile key = {i} content={tile} onClick={	
						() => setInput(input+tile)}></Tile>
				})
			}> 
			</TileHolder>
		</Container>
	);
}


export default App;

/*

const resetHandler = () => {
		setCalc({
		  	...calc,
		  	sign: "",
		  	num: 0,
		  	res: 0,
		})}
	}

	const invertHandler = () => {
		setCalc({
			...calc,
			num: calc.num ? calc.num * -1 : 0,
			res: calc.res ? calc.res * -1 : 0,
			sign: "",
		})
	}

	const percentHandler = () => {
		let num = calc.num ? parseFloat(calc.num) : 0;
		let res = calc.res ? parseFloat(calc.res) : 0;
	  
		setCalc({
		  	...calc,
			num: (num /= Math.pow(100, 1)),
			res: (res /= Math.pow(100, 1)),
			sign: "",
		})
	}

	const handler = {
		'C': resetHandler,
		'±': invertHandler,
		'%': percentHandler,
		'=': computeHanlder,
		'.': decimalHandler,
		'+': operationHandler,
		'-': operationHandler,
		'x': operationHandler,
		'%': operationHandler, 
		'^': operationHandler,
		'0': numHandler,
		'1': numHandler,
		'2': numHandler,
		'3': numHandler,
		'4': numHandler,
		'5': numHandler,
		'6': numHandler,
		'7': numHandler,
		'8': numHandler,
		'9': numHandler
	}

*/
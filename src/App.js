import Container from './Components/Container'
import ResultBar from './Components/ResultBar'
import Tile from './Components/Tile'
import TileHolder from './Components/TileHolder'
import React, { useState } from "react";

const math = require('mathjs')
const tileValues = ['C', '±', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '^', '='];
var init = false

function App() {
	
	const [input, setInput] = useState('0');
	function change(t) {
		if(t==='C') {
			init = false
			return setInput('0')
		}
		
		if(t==='=') {
			init=false
			return setInput(math.evaluate(input))
		}
		
		if(t==='±') {
			if(input[0]==='-') {
				return setInput(input.substring(1))
			}
			else {
				return setInput('-'+input)
				}
			}
		}
		
		if(!init) {
			init=true
			return setInput(t)
		}
		else {
			return setInput(input+t)
		}
	}

	return (
		<Container>
			<ResultBar content={input}>
			</ResultBar>
			<TileHolder tiles= {
				tileValues.map((tile, i) => {
					return <Tile key = {i} content={tile} onClick={() => change(tile, init)}></Tile>
				})
			}> 
			</TileHolder>
		</Container>
	);
}

export default App;

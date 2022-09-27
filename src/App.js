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

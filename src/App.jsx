import React from 'react'
import Heading from './components/Heading'
import Info from './components/Info'
import Matrix from './components/Matrix'
import Button from './components/Button'
import Banner from './components/Banner'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


function App() {

	const [cellList, setCellList] = React.useState(() => generateCellList())
	const [win, setWin] = React.useState(false)
	const [rollsCount, setRollsCount] = React.useState(0)

	React.useEffect(() => {
		setWin(cellList.every(cell => cell.on) && cellList.every(cell => cell.value == cellList[0].value))
	}, [cellList])

	const { width, height } = useWindowSize()

	function roll() {

		setCellList(oldCellList => {

			const newCellList = oldCellList.map(cell => {

				const random = Math.floor(Math.random() * 6)
				return cell.on ? cell : { ...cell, value: random }
			})

			return newCellList
		})

		setRollsCount(oldRollsCount => oldRollsCount+1)
	}

	function toggle(cellId) {

		setCellList(oldCellList => {

			oldCellList[cellId].on = !oldCellList[cellId].on
			const newCellList = [...oldCellList]
			return newCellList
		})
	}

	function generateCellList() {

		const arr = [];
		for (let index = 0; index < 10; index++) {

			arr.push({
				id: index,
				on: false,
				value: Math.floor(Math.random() * 10)
			})
		}

		return arr
	}

	function newGame() {

		setCellList(generateCellList())
		setRollsCount(0)
	}

	return (
		<div className="App flex items-center justify-center min-h-screen">
			{win && <Confetti width={width} height={height} />}
			<main className="w-[360px] max-w-full max-h-full bg-slate-900 py-8 px-5">
				<div className="w-full h-full rounded-xl p-8 bg-gray-100 relative">
					<Heading />
					<Info rollsCount={rollsCount} />
					<Matrix cellList={cellList} clickHandler={toggle} />
					<Button clickHandler={roll} label="Roll" />
					{win && <Banner callback={newGame} />}
				</div>
			</main>
		</div>
	)
}

export default App

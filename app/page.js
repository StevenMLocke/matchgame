"use client"
import { useState, useEffect, useRef } from "react";
import { Suspense } from "react"
import { CardGrid } from "./components/CardGrid"
import { Card } from "./components/Card";

export function generateValues(numberOfValues) {
	if (numberOfValues % 4 == 0) {
		const numberOfSets = numberOfValues / 2;

		const arr = []
		const arr2 = []
		while (arr.length < numberOfSets) {
			const r = Math.floor(Math.random() * numberOfSets) + 1;
			if (!arr.some((o) => o.value === r)) {
				arr.push({ id: r, value: r })
			};
		}
		while (arr2.length < numberOfSets) {
			const q = Math.floor(Math.random() * numberOfSets) + 1;
			if (!arr2.some((obj) => obj.value === q)) {
				arr2.push({ id: q * 1000, value: q })
			};
		}
		return [...arr, ...arr2]
	} else {
		throw new Error("Number must be divisible by 4");
	}
}


export default function Game() {
	const [matched, setMatched] = useState([]);
	const [selected, setSelected] = useState([]);
	const [values, setValues] = useState()
	const [playAgain, setPlayAgain] = useState(false)
	const [victory, setVictory] = useState(false)

	const num = 24

	const modalRef = useRef()

	const clickHandler = (id, value) => {
		setSelected(p => [...p, { id, value }])
		if (selected.length == 1) {
			if (selected[0].id !== id) {
				if (selected[0].value == value) {
					if (!matched.some((num) => num == value)) {
						setMatched(p => [...p, value])
					}
				}
				setTimeout(() => setSelected([]), 750)
			} else {
				setSelected([])
			}
		}
	};

	const modalHandler = () => {
		setPlayAgain(p => !p)
		setMatched([])
		setSelected([])
		setVictory(false)
		modalRef.current.close()
	}

	useEffect(() => {
		setValues(generateValues(num))
	}, [playAgain])

	useEffect(() => {
		if (matched.length == num / 2) {
			setVictory(true)
		}
	}, [matched])

	useEffect(() => {
		if (victory) {
			modalRef.current.showModal()
		}
	}, [victory])

	return (
		<>

			<dialog
				ref={modalRef}
				className="modal flex flex-col flex-1 min-w-full min-h-full justify-center items-center backdrop-blur-md"
				onClick={modalHandler}
			>
				<h1 className="text-2xl md:text-9xl">You Win!!</h1>
				<h2 className="hover:cursor-pointer md:text-6xl">Play again!</h2>
			</dialog>

			<main className=" sm:w-[90%] min-h-full flex flex-1 justify-center items-center">
				<Suspense fallback={<p>poo</p>}>
					<CardGrid >
						{values?.map((value) => {
							return (
								<Card
									key={value.id}
									id={value.id}
									value={value.value}
									matched={matched}
									selected={selected}
									clickHandler={clickHandler}
								></Card>
							)
						})}
					</CardGrid>
				</Suspense>
			</main>
		</>
	)
}

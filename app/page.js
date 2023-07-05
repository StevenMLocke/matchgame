"use client"
import { useState, useMemo, useEffect } from "react";
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
	const clickHandler = (id, value) => {
		setSelected(p => [...p, { id, value }])
	};
	const num = 16

	useEffect(() => {
		setValues(generateValues(num))
	}, [])

	return (
		<>
			<main className="m-8 p-8 border-2 border-white w-[90%]">
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
				{/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
			</main>
		</>
	)
}

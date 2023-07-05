"use server"
import { Card } from "@/app/components/Card";

export async function generateCards(numberOfCards, clickhandler) {
	const cards = [];
	if (numberOfCards % 4 == 0) {
		const numberOfSets = numberOfCards / 2;
		for (let i = 0; i < numberOfSets; i++) {
			cards.push(
				<Card
					value={i + 1}
					id={i + 1}
					key={i + 1}
					clickHandler={clickhandler}
				></Card>,
				<Card
					value={i + 1}
					id={(i + 1) * 10000}
					key={(i + 1) * 10000}
				></Card>
			);
		}
		//shuffle function from https://www.slingacademy.com/article/ways-to-shuffle-an-array-in-javascript/
		cards.sort(() => Math.random() - 0.5);

		return cards;
	} else {
		throw new Error("Number must be divisible by 4");
	}
}
import { CardGrid } from "./components/CardGrid"
export default function Home() {
	return (
		<>
			<main className="m-8 p-8 border-2 border-white max-w-[90%]">
				<CardGrid numberOfCards={32}></CardGrid>
			</main>
		</>
	)
}

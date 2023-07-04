import { generateCards } from "../lib/serverfuncs/serverFuncs";

export async function CardGrid({ numberOfCards }) {
	const cards = await generateCards(24);
	return (
		<div className='flex flex-col'>
			<div className='border-4 border-black flex flex-1 flex-wrap justify-center gap-2 p-2'>
				{...cards}
			</div>
			{/* <pre>{JSON.stringify(selectedSet, null, 2)}</pre> */}
		</div>
	);
}

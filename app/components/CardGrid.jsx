"use client";

export function CardGrid({ children }) {
	return (
		<div className='flex flex-col'>
			<div className='border-4 border-black flex flex-1 flex-wrap justify-center gap-2 p-2'>
				{children}
			</div>
		</div>
	);
}

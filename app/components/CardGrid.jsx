"use client";

export function CardGrid({ children }) {
	return (
		<div className='flex grow-0 flex-wrap items-center justify-center gap-2 md:max-w-[90%]'>
			{children}
		</div>
	);
}

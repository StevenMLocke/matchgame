"use client";
export function Card({ value, id, clickHandler, matched, selected }) {
	return (
		<div
			id={id}
			className={`
				 flex grow-0 basis-[calc(25%_-_1.5rem)] min-h-1/6 justify-center items-center border-2 border-black rounded-xl
				${
					matched.some((el) => {
						return el === value;
					})
						? "border-2 border-white"
						: "hover:cursor-pointer"
				}
			`}
			onClick={
				selected.length < 2
					? () => {
							clickHandler(id, value);
					  }
					: () => {
							return;
					  }
			}
		>
			<div>
				<h2 className='text-7xl md:text-5xl lg:text-8xl border-2 border-transparent'>
					{selected.some((o) => {
						return o.id === id;
					}) ||
					matched.some((el) => {
						return el === value;
					})
						? value
						: "? "}
				</h2>
			</div>
		</div>
	);
}

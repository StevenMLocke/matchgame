"use client";
export function Card({ value, id, clickHandler, matched, selected }) {
	return (
		<div
			id={id}
			className='card card-bordered basis-1/5 justify-center items-center border-2 border-black'
			onClick={() => {
				clickHandler(id, value);
			}}
		>
			{selected.some((o) => {
				return o.id === id;
			}) ||
			matched.some((el) => {
				return el === value;
			})
				? value
				: "_"}
			<pre>{JSON.stringify(`ID: ${id}`, null, 2)}</pre>
			<pre>{JSON.stringify(matched, null, 2)}</pre>
			<pre>{JSON.stringify(selected, null, 2)}</pre>
			<pre>{JSON.stringify(selected.length, null, 2)}</pre>
		</div>
	);
}

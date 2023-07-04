"use client";
export function Card({ value, id }) {
	return (
		<div
			id={id}
			className='card card-bordered basis-1/5 justify-center items-center border-2 border-black'
		>
			{true ? value : "_"}
			<pre>{JSON.stringify(`ID: ${id}`, null, 2)}</pre>
		</div>
	);
}

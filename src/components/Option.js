import React from "react";

export default function Option({ changeBoard }) {
	const options = [
		{
			value: 9,
			text: "3x3",
		},
		{
			value: 16,
			text: "4x4",
		},
	];

	return (
		<div className="p-5 justify-between flex gap-2">
			{options.map(({ value, text }, index) => {
				return (
					<button
						className="bg-blue-500 w-full py-5 rounded-md text-white"
						onClick={() => changeBoard(value)}
					>
						{text}
					</button>
				);
			})}
		</div>
	);
}

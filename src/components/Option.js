import React from "react";

export default function Option({ changeBoard, boardOption }) {
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
				const isCurrentOption = boardOption === value;

				return (
					<button
						className="bg-blue-500 w-full py-5 rounded-md text-white disabled:bg-blue-900"
						onClick={() => changeBoard(value)}
						key={index}
						disabled={isCurrentOption}
					>
						{text}
					</button>
				);
			})}
		</div>
	);
}

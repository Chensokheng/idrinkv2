import React, { useState } from "react";
import { GiBeerStein } from "react-icons/gi";
import generateBoard from "../utils/generateBoard";
import Option from "./Option";

export default function Board({ setIsDrink }) {
	const [board, setBoard] = useState(generateBoard());
	const [boardStyle, setBoardStyle] = useState("grid-cols-4");
	const handleSelect = (index) => {
		if (board[index] === 0) {
			const updatedBoard = [...board];
			updatedBoard[index] = -1;
			setBoard(updatedBoard);
		} else {
			setIsDrink(true);
		}
	};

	const changeBoard = (value) => {
		setBoard(generateBoard(value));
		if (value === 16) {
			setBoardStyle("grid-cols-4");
		} else if (value === 9) {
			setBoardStyle("grid-cols-3");
		}
	};

	return (
		<div>
			<Option changeBoard={changeBoard} />
			<div className={`grid  gap-2 p-5 ${boardStyle}`}>
				{board.map((value, index) => {
					return (
						<div
							className="w-full h-36 grid place-content-center"
							key={index}
							onClick={() => handleSelect(index)}
						>
							{value >= 0 && (
								<GiBeerStein className="text-5xl text-yellow-500" />
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}

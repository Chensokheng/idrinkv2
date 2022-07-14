import React, { useState } from "react";
import { GiBeerStein } from "react-icons/gi";
import generateBoard from "../utils/generateBoard";
import Option from "./Option";

const updateBoardStyle = (value) => {
	if (value === 16) {
		return "grid-cols-4";
	} else if (value === 9) {
		return "grid-cols-3";
	}
	return "grid-cols-4";
};

export default function Board({ setIsDrink }) {
	const boardOption =
		parseInt(window.localStorage.getItem("boardOption")) || 16;
	const [board, setBoard] = useState(generateBoard(parseInt(boardOption)));
	const [boardStyle, setBoardStyle] = useState(updateBoardStyle(boardOption));
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
		setBoardStyle(updateBoardStyle(value));
		window.localStorage.setItem("boardOption", value.toString());
	};

	return (
		<div>
			<Option changeBoard={changeBoard} boardOption={boardOption} />
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

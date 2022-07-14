import React, { useState } from "react";
import Board from "./components/Board";
import Drink from "./components/Drink";

export default function App() {
	const [isDrink, setIsDrink] = useState();

	return (
		<div className="bg-slate-800 min-h-screen w-full flex justify-center items-center">
			<div className="w-full">
				{isDrink ? (
					<Drink setIsDrink={setIsDrink} />
				) : (
					<Board setIsDrink={setIsDrink} />
				)}
			</div>
		</div>
	);
}

import React, { useEffect, useState } from "react";
import { GiBeerStein } from "react-icons/gi";
import { FiRotateCcw } from "react-icons/fi";

export default function Drink({ setIsDrink }) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);

	return (
		<div>
			<div className="grid place-content-center p-5">
				<FiRotateCcw
					className="text-4xl text-white"
					onClick={() => setIsDrink(false)}
				/>
			</div>
			<div className="h-85vh w-full grid place-content-center">
				<GiBeerStein
					className="text-5xl text-yellow-500 transition-all duration-1000"
					style={{
						transform: `scale(${animate ? 5 : 1})`,
					}}
				/>
			</div>
		</div>
	);
}

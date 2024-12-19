import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ViteLogo from "@/assets/react.svg?react";
import "@/App";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<ViteLogo />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
					<input
						type="text"
						placeholder="Enter Your Wallet Address (0x...)"
						name={"address"}
						value={count}
						className="bg-white border-2 border-text-200 rounded-lg min-h-[48px] px-2 flex-1 focus:outline-none "
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;

import { useEffect, useState } from "react";
import CharCard from './components/CharCard'

function App() {
	const [chars, setChar] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character')
		.then(response => response.json())
		.then(data => {
			setChar(data.results)
			console.log(data.results);
		});
	}, []);

	return (
		<>
			<header className='header-logo'>
				<img 
					src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" 
					alt="" 
				/>
			</header>

			{/* Main section */}
			<main className="char-list">
				{
					chars
					.map((char) => {
						return(
							<CharCard
								key={char?.url}
								name={char?.name}
								url={char?.url}
							/>
						);
					})
				}			
			</main>
		</>
	);
}

export default App;

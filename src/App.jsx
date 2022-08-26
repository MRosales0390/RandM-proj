import { useEffect, useState } from "react";
import CharCard from './components/CharCard'
import CharModal from './components/CharModal'

function App() {
	const [chars, setChar] = useState([]);
	const [selectedChar, setSelectedChar] = useState("");

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/?page=1')
		.then(response => response.json())
		.then(data => {
			setChar(data.results)
			//console.log(data.results);
		});
	}, []);

	const updateSelectedChar = url => {
		setSelectedChar(url);
	}

	return (
		<>
			{
				selectedChar && <CharModal url={selectedChar} onClose={() => { setSelectedChar(''); }}/>
			}

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
								onClick={() => updateSelectedChar(char?.url)}
							/>
						);
					})
				}			
			</main>
		</>
	);
}

export default App;

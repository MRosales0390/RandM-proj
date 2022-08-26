import { useEffect, useState } from 'react';

export default function CharCard(props) {
    const [char, setChar] = useState({})

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(data => {
            setChar(data)
            //console.log("CardData: ", data);
        })
    }, [props.url]);

    return(
        <article className="char-card" onClick={props.onClick}>
            <header>
                <img 
                    src={char?.image} 
                    alt="Character portrait" 
                />
            </header>
            <footer>
                <p>{char?.name}</p>
            </footer>
        </article>
    );
}
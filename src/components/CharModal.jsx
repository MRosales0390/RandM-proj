import { useEffect, useState } from "react";

export default function CharModal(props) {
    const [char, setChar] = useState({});

    useEffect(() => {
        fetch(props.url)
        .then(response => response.json())
        .then(data => {
            setChar(data);
        })
    }, [props.url]);

    return(
        <section className='char-modal' onClick={props.onClose}>
            <main onClick={(event) => { event.stopPropagation(); }}>
                <header>
                    <img src={char?.image} alt="" />
                </header>
                <h2>{char?.name}</h2>
                <h3>{char?.species}</h3>
                <h3>{char?.gender}</h3>
                <h3>{char?.status}</h3>
                <h3>{char?.location?.name}</h3>
            </main>
        </section>
    );
}
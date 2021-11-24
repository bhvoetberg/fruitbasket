import React, {useState} from 'react';
import './App.css';

// STAPPENPLAN OPDRACHT 1 (alles in App.js)
// -- Let op: We gaan eerst één fruitCounter werkend maken voor we de rest uitschrijven
// -- Welke HTML elementen hebben we nodig?
// [x] Titel met het fruit
// [x] Button met -
// [x] Button met +
// [x] P element met het aantal
// [x] Button met 'Reset'
// -- Hoe gaan we ervoor zorgen dat de hoeveelheid fruit wordt verlaagd/verhoogd? State!
// [x] import useState-methode uit React
// [x] maak een state variabele + state setter functie voor (specifiek!) de aardbei-counter (state initialiseren)
// [x] Een event-listener op beide knoppen zetten (onClick)
//      [x] PLUSBUTTON: de huidige hoeveelheid van aardbeien moet + 1
//      [x] MINBUTTON: de huidige hoeveelheid van aardbeien moet - 1
//      [x] We willen de MINBUTTON disablen als de hoeveelheid aardbeien op 0 staat
// [x] Geef de hoeveelheid aardbeien weer in een <p> element tussen de buttons
// -- Hoe gaan we ervoor zorgen dat de Reset-button alles op 0 zet?
// [x] Schrijf een reset-functie die de state waardes van alle counters (nu nog alleen aardbeien) op 0 zet
// [x ] Een event-listener op de reset-knop die de reset-functie triggert onClick


function App() {
    const [strawberryCounter, setStrawberryCounter] = React.useState(0);

    function resetCounter() {
        setStrawberryCounter(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <article>
                <h2>🍓 Aardbeien</h2>

                <button
                    type="button"
                    disabled={strawberryCounter === 0}
                    onClick={() => setStrawberryCounter(strawberryCounter - 1)}>
                    -
                </button>
                <h3>Aantal: {strawberryCounter}</h3>
                <button type="button"
                        onClick={() => setStrawberryCounter(strawberryCounter + 1)}>
                    +
                </button>


                <button
                    type="button"
                    onClick={() => resetCounter()}>
                    reset
                </button>
            </article>
        </>
    );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import './components/Fruit'
import Fruit from "./components/Fruit";
import InputField from "./components/InputField";

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
    const [bananaCounter, setBananaCounter] = React.useState(0);
    const [appleCounter, setAppleCounter] = React.useState(0);
    const [kiwiCounter, setKiwiCounter] = React.useState(0);

    function resetCounter() {
        setStrawberryCounter(0);
        setBananaCounter(0);
        setAppleCounter(0);
        setKiwiCounter(0);
    }

    return (
        <>
            <form name="fruit-form">
                <h1>Fruitmand bezorgservice</h1>
                <Fruit
                    fruitName="Aardbeien"
                    fruitEmoji="🍓"
                    counter={strawberryCounter}
                    setCounter={setStrawberryCounter}
                />
                <Fruit
                    fruitName="Bananen"
                    fruitEmoji="🍌"
                    counter={bananaCounter}
                    setCounter={setBananaCounter}
                />
                <Fruit
                    fruitName="Appels"
                    fruitEmoji="🍎"
                    counter={appleCounter}
                    setCounter={setAppleCounter}
                />
                <Fruit
                    fruitName="Kiwi's"
                    fruitEmoji="🥝"
                    counter={kiwiCounter}
                    setCounter={setKiwiCounter}
                />

                <button
                    type="button"
                    onClick={() => resetCounter()}
                    className="action-button">
                    Reset
                </button>

                <br/>
                <br/>

                <InputField type="text" name="firstname" displayname="Voornaam:" id="firstname"/>
                <InputField type="text" name="lastname" displayname="Achternaam:" id="lastname"/>
                <InputField type="number" name="age" displayname="Leeftijd:" id="age"/>
                <InputField type="text" name="postalcode" displayname="Postcode:" id="postalcode"/>
                <label htmlFor="Frequentie">Frequentie:
                    <select name="frequency" id="frequency">
                        <option value="weekly">Iedere week</option>
                        <option value="biweekly">Om de week</option>
                        <option value="bimonthly">Iedere maand</option>
                    </select>
                </label>
                <br/>
                <InputField type="radio" name="day-evening" displayname="Overdag" value="day"/>
                <InputField type="radio" name="day-evening" displayname="Avond" value="evening"/>
                <label htmlFor="remarks">Opmerking:
                    <textarea
                        name="remarks"
                        id="remarks"
                        cols="40"
                        rows="5"
                        placeholder="Geef hier aanvullende informatie betreffende de levering"
                    ></textarea>
                </label>

                <label htmlFor="approval">
                    <input
                        type="checkbox"
                        name="approval"
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                    <button type="submit"
                            form="form-data"
                            // value="submit"
                            className="action-button">
                        Verzend
                    </button>
            </form>




            {/*<article>*/}
            {/*    <h2>🍓 Aardbeien</h2>*/}

            {/*    <button*/}
            {/*        type="button"*/}
            {/*        disabled={strawberryCounter === 0}*/}
            {/*        onClick={() => setStrawberryCounter(strawberryCounter - 1)}>*/}
            {/*        -*/}
            {/*    </button>*/}
            {/*    <h3>Aantal: {strawberryCounter}</h3>*/}
            {/*    <button type="button"*/}
            {/*            onClick={() => setStrawberryCounter(strawberryCounter + 1)}>*/}
            {/*        +*/}
            {/*    </button>*/}


            {/*    <button*/}
            {/*        type="button"*/}
            {/*        onClick={() => resetCounter()}>*/}
            {/*        reset*/}
            {/*    </button>*/}
            {/*</article>*/}

        </>
    );
}

export default App;

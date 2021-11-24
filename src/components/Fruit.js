import React from "react";

function Fruit ({fruitName, fruitEmoji, counter, setCounter}) {
    let setClassName = ""
    if (counter > 0) {
       setClassName="colored-button"
    }
    return (
        <article>
            <h2>{fruitEmoji} {fruitName}</h2>
            <section>
                <button
                    type="button"
                    disabled={counter === 0}
                    onClick={() => setCounter(counter - 1)}>
                    -
                </button>
                <h3>Aantal: {counter}</h3>
                <button
                    type="button"
                    onClick={() => setCounter(counter + 1)}
                    className={setClassName}>
                    +
                </button>
            </section>
        </article>
    );
}

export default Fruit;
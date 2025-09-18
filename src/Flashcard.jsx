import { useState } from "react";
import "./Flashcard.css";
function Flashcard({ question, answer }) {
    const [IsfFlipped, setIsFlipped] = useState(false);
    const [Like, setLike] = useState(0);

    function handlFlip() {
        setIsFlipped(!IsfFlipped)
        setLike(Like + 1);

    }

    return (
        <div className="flashcard">

            {IsfFlipped ? <p>{answer}</p> : <p>{question}</p>}
            <button onClick={handlFlip}>Odwróżć kartke</button>
            <p>{Like}</p>



        </div>
    )


}
export default Flashcard;
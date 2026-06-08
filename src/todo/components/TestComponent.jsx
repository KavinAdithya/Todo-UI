import { useEffect, useState } from "react";

function Test() {

    const [count, setCount] = useState(0);

    console.log("Render");

    useEffect(() => {

        console.log("Listener Added");

        window.addEventListener("click", () => {
            console.log("Window Clicked");
        });

    }, []);

    return (
        <>
            <h1>{count}</h1>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </>
    );
}

export default Test;
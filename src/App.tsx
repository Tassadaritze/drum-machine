import { useEffect } from "react";
import Drums from "./Drums";
import './App.css';

function App(): JSX.Element {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [])

    return (
        <div className="App">
            <Drums />
        </div>
    );
}

export default App;

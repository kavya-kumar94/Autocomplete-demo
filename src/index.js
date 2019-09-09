import React from "react";
import { render } from "react-dom";
import Autocomplete from "./autocomplete";
require ('./autocomplete.css');

function App() {
    return (
        <div className="main">
            <h1>Autocomplete Demo</h1>
            <h2>Start typing!</h2>
            <Autocomplete
                suggestions={[
                    "Alligator",
                    "Kavya",
                    "App Academy",
                    "Autocomplete",
                    "Music",
                    "Bask",
                    "Crocodilian",
                    "Death Roll",
                    "Eggs",
                    "Jaws",
                    "Reptile",
                    "Solitary",
                    "Tail",
                    "Wetlands"
                ]}
            />
        </div>
    );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
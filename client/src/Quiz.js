import React from "react";
import "./App.css";

function Quiz(){
    return (
        <div className="App">
            <div className="quiz">
                <div className="question">
                    <h2>Paramaribo, Suriname</h2>
                </div>
                <div className="answers">
                    <div className="answer">
                        <label>17°C</label>
                    </div>
                    <div className="answer">
                        <label>23°C</label>
                    </div>
                    <div className="answer">
                        <label>28°C</label>
                    </div>
                    <div className="answer">
                        <label>31°C</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
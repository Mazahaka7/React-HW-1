import React from "react";
import "./styles.css"
import ReactDOM from "react-dom";
import data from "./data";


function App() {
    return (
        <table border="2" className="table">
            <caption className="table__title">Курс валют</caption>
            <tbody>
                <tr className="table__row">
                    <th>Валюта</th>
                    <th>Курс</th>
                </tr>

                {data.map((element, index) => {
                    return (
                        <tr className="table__row" key={index}>
                            <td >{element.txt}</td>
                            <td>{element.rate}</td>
                        </tr>
                    )
                    })}
                
            </tbody>
        </table>)
}
ReactDOM.render(<App />, document.getElementById("body"));
console.dir(data)
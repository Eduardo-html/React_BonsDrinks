import React, { Component } from "react";
import "./estilo.css";

class Contato extends Component {
    render() {
        return(
        <div>
            <h2>Contatos</h2>
            <div>
                {/* <img src={about} alt=""></img> */}
            </div>
            <div>
                <section>
                    <form>
                        <label > Name: </label>
                        <input type="text" placeholder="XXXX"></input>
                        <label> E-mail: </label>
                        <input type="text" placeholder="XXXX@email.com"></input>
                        <label> Message: </label>
                        <textarea placeholder=" Digite aqui"> </textarea >
                        <button>Enviar</button>
                    </form>
                </section>
            </div>
        </div>
        );
    }
}

export default Contato;
import React, { Component } from "react";
import "./estilo.css";

class Header extends Component {
    render() {
        return(
        <section>
            <ol>
                <li>Drinks</li>
                <li>Sobre nós</li>
                <li>Bons Drinks</li>
                <li>Nosso Time</li>
                <li>Contato</li>
            </ol>
        </section>
        );
    }
}

export default Header;
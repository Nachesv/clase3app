import React from 'react'
import './App.css';

export const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Hermes Gaming Journal</h1>
                    
            <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">
                    Home
                </a>
                <a class="nav-item nav-link" href="#">
                    PC
                </a>
                <a class="nav-item nav-link" href="#">
                    Consolas
                </a>
                <a class="nav-item nav-link" href="#">
                    Tienda
                </a>
                <a class="nav-item nav-link" href="#">
                    Nosotros
                </a>
            </div>
        </nav>
    )
}

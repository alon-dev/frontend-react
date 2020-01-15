import React from 'react';
import './index.css';
import logo from './img/clouds.svg'

export class Header extends React.Component{
    render(){
        return(
            <header style={{gridArea:"header"}}>
                <div className="title"><img className="logo" alt="logo" src={logo}/>Weather Report</div>
                <ul className="navbar">
                    <li className="navItem">
                        <a href="#home">Home</a>
                    </li>
                    <li className="dropdn">
                        <a className="dropbtn" href="javascript:void(0)">Choose Country</a>
                        <div className="dropdn-content">
                            <a href="#">Canada</a>
                            <a href="#">USA</a>
                            <a href="#">Israel</a>
                        </div>
                    </li>

                </ul>
            </header>
        )
    }
}
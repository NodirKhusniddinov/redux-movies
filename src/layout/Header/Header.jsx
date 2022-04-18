import React from 'react';
import './header.css';
import {ReactComponent as Search} from './assets/image/Search.svg'
import {ReactComponent as Circle} from './assets/image/Circle.svg'
import {ReactComponent as Dots} from './assets/image/Dots.svg'
function Header(){
 return <header>
 <div className="navbar">
            <div className='logo'>
             MOVEA
            </div>
            
            <div className='menu-list'>  
                <li>
                    <a href="#Movies">Movies</a>
                </li>
                <li>
                    <a href="#TVshows">TV shows</a>
                </li>
                <li>
                    <a href="#Animations">Animations</a>
                </li>
                
            </div>
            <div className='menu-icons'>  
                <li>
                    <a href="#Search"><Search/></a>
                </li>
                <li>
                    <a href="#Circle"><Circle/></a>
                </li>
                <li>
                    <a href="#Dots"><Dots/></a>
                </li>
            </div>
            
        </div>
 </header>
 
 }
 export {Header}
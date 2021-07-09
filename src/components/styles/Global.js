import { createGlobalStyle } from 'styled-components';
import TransitionStyles from './TransitionStyles';

const GlobalStyle = createGlobalStyle`
.NavbarItems {
    background: #222831;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.0rem;
}

.navbar-logo {
    color: #FFD369;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
}

.fa-terminal {
    margin-left: 0.5rem;
    font-size: 1.6rem;
}

.nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
}


.nav-links {
    color: #EEEEEE;
    text-decoration: none;
    padding: 0.5rem 1rem;
}

.nav-links:hover {
    background-color: #666666;
    border-radius:  4px;
    transition: all 0.2s ease-out;
}

.fa-bars {
    color: #FFD369;
}

.nav-links-mobile {
    display: none;
}

.menu-icon {
    display: none;
}

@media screen and (max-width: 960px) {
    .NavbarItems {
        position: relative;
    }
    
    .nav-menu {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 500px;
        position: absolute;
        top: 90px;
        left: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }

    .nav-menu.active {
        background: #222831;
        left: 0;
        opacity: 1;
        transition: all 0.5s ease;
        z-index: 1;
    }

    .nav-links {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
    }

    .nav-links:hover {
        background-color: #FFD369;
        border-radius: 0;
        color:#222831;
    }

    .navbar-logo {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 50%);
    }

    .menu-icon {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.4rem;
        cursor: pointer;
    }

    .fa-times{
        color: #FFD369;
        font-size: 2rem;
    }

    .nav-links-mobile{
        display: block;
        text-align: center;
        margin: 2rem auto;
        border-radius: 4px;
        width: 80%;
        background: #FFD369;
        text-decoration: none;
        color: #222831;
        font-size: 1.4rem;
        ;
    }

    .nav-links-mobile:hover{
        background: orange;
        color: purple;
        transition: 250ms;
    }

    Button {
        display: none;
    }

    
  ${TransitionStyles};
`;

export default GlobalStyle;

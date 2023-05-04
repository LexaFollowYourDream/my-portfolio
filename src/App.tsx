import React from 'react';
import {Header} from "./components/header/Header";
import {ByMe} from "./components/byMe/ByMe";
import {Skills} from "./components/skills/Skills";
import {Footer} from "./components/footer/Footer";
import {Contacts} from "./components/contacts/Contacts";
import {Projects} from "./components/projects/Projects";
import {DistantWork} from "./components/distantWork/DistantWork";

function App() {
    return (
        <div className="App">
            <Header/>
            <ByMe/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

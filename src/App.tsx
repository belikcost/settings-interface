import React from "react";

import Header from "./components/Header";
import Configuration from "./components/Configuration";
import SitesSettings from "./components/SitesSettings";
import EditorsNavigation from "./components/EditorsNavigation";

import './App.scss';
import SettingsStore from "./domain/SettingsStore";

const SITES = [
    {
        name: "www.google.com",
        domain: "google.com",
        observerClass: ".dfkkfdkfd",
        audioCollection: "Test",
    },
    {
        name: "www.yandex.ru",
        domain: "yandex.ru",
        observerClass: ".dfkkfdkfd",
        audioCollection: "Test2",
    }
];

const AUDIO_COLLECTIONS = ["Test", "Test2"];

const settingsStore = new SettingsStore();

const App = () => {

    return (
        <div className="app">
            <div className="app__main">
                <Header/>
                <Configuration/>
            </div>
            <div className="app__sidebar">
                <EditorsNavigation/>
                <SitesSettings sites={SITES} audioCollections={AUDIO_COLLECTIONS}/>
            </div>
        </div>
    );
};

export default App;
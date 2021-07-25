import React from 'react';
import { Route, Switch, Redirect, BrowserRouter, useHistory } from 'react-router-dom';
import HomeSection from "./components/homeSection/homeSection";
import NavMenu from "./components/navMenu/navMenu";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import ContactForm from "./components/contactForm/contactForm";
import AboutMe from './components/aboutMe/aboutMe';

import './App.css';
import api from "./utils/api";


function App() {
    const [repositories, setRepositories] = React.useState([]);
    const reposForPortfolio = ['react-mesto-auth', 'mesto', 'russian-travel', 'how-to-learn'];
    let reposFromApi = [];

    const anchors = {
        homeSection: 'homeSection',
        projects: 'projects',
        skills: 'skills',
        contactForm: 'contactForm',
    };

    React.useEffect(() => {
        async function fetchData() {
            const userInfo = await api.getRepos();
            return userInfo;
        }
        fetchData()
            .then(data => searchInApi(data, reposForPortfolio))
            .catch(err => console.log(err));
    }, []);

    function searchInApi(rawArr, searches) {
        const res = []
        searches.forEach(it => {
            const item = rawArr.find((x) => x.name === it)
            if (item) {
                res.push(item);
            }
        })
        setRepositories([...res]);
    }

    return (
        <div className="App">
            <div className="page">
                <NavMenu anchor={anchors} />
                <div className="main">
                    <Switch>
                        <Route exact path='/'>
                            <HomeSection anchor={anchors} />
                        </Route>
                        <Route path="/about">
                            <AboutMe />
                        </Route>
                        <Route path="/skills">
                            <Skills anchor={anchors.skills} />
                        </Route>
                        <Route path="/projects">
                            <Projects anchor={anchors.projects} projects={repositories} previewLabels={reposForPortfolio} />
                        </Route>
                        <Route path="/contact">
                            <ContactForm anchor={anchors.contactForm} />
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
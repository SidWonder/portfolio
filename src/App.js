import React from 'react';
import HomeSection from "./components/homeSection/homeSection";
import NavMenu from "./components/navMenu/navMenu";
import Projects from "./components/projects/projects";
import Footer from "./components/footer/footer";
import Skills from "./components/skills/skills";
import ContactForm from "./components/contactForm/contactForm";

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
            .then(data=> searchInApi(data, reposForPortfolio))
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
            <HomeSection anchor={anchors}/>
            <NavMenu anchor={anchors}/>
            <Skills anchor={anchors.skills}/>
            <Projects anchor={anchors.projects} projects = {repositories} previewLabels = {reposForPortfolio}/>
            <ContactForm anchor={anchors.contactForm}/>
            <Footer/>
            </div>
            {/*<PopupSkill />*/}
        </div>
    );
}

export default App;
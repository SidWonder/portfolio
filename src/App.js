import React from 'react';
import HomeSection from "./components/homeSection";
import NavMenu from "./components/navMenu";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Skills from "./components/skills";
import ContactForm from "./components/contactForm";

import './App.css';
import api from "./utils/api";


function App() {
    const [repositories, setRepositories] = React.useState([]);
    const reposForPortfolio = ['react-mesto-auth', 'mesto', 'russian-travel', 'how-to-learn'];
    let reposFromApi = [];

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
            <HomeSection/>
            <NavMenu/>
            <Projects projects = {repositories}/>
            <Skills/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;

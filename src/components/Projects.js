import React from 'react'
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import budgetapp from '../assets/budget-tracker.png';
import MJM from '../assets/MJM.png';
import clearSkies from '../assets/ClearSkies.jpeg';
import calculator from '../assets/calculator.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';

const Projects = () => {
  return (
    <div id="projects">
        <div className='hero m-4'>
            <p className='title'>
                Projects
            </p>
        </div>
        <div className="tile is-ancestor is-vertical">
        
            {/* budget tracker app */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Budget Tracker</p>
                <a className="subtitle" href="https://github.com/mikekeene/Budget-Tracker-App-PWA" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github
                </a>
                <a className="subtitle" href="https://boiling-everglades-78221.herokuapp.com/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={budgetapp} alt={"budgetapp"}/>
                </figure>
                </article>
            </div>
            {/* MJM */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">MJM</p>
                <a className="subtitle" href="https://github.com/jennyk1989/MJM-Task-Master" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github Link
                </a>
                <a className="subtitle" href="https://boiling-everglades-78221.herokuapp.com/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={MJM} alt={"MJM"} />
                </figure>
                </article>
            </div>
            {/* Clear Skies */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Clear Skies</p>
                <a className="subtitle" href="https://github.com/mikekeene/project-one" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github Link
                </a>
                <a className="subtitle" href="https://mikekeene.github.io/project-one/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={clearSkies} alt={"clearSkies"} />
                </figure>
                </article>
            </div>
            {/* Calculator */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Calculator</p>
                <a className="subtitle" href="https://github.com/mikekeene/Calculator" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github Link
                </a>
                <a className="subtitle" href="https://mikekeene.github.io/Calculator/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={calculator} alt={"calculator"} />
                </figure>
                </article>
            </div>
            {/* Weather Dashboard */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Weather Dashboard</p>
                <a className="subtitle" href="https://github.com/mikekeene/Weather-Dashboard" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github Link
                </a>
                <a className="subtitle" href="https://mikekeene.github.io/Weather-Dashboard/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={weatherDashboard} alt={"weatherDashboard"} />
                </figure>
                </article>
            </div>
            {/* Note Taker */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Note Taker</p>
                <a className="subtitle" href="https://github.com/mikekeene/NoteTaker" >
                    <FontAwesomeIcon icon={faLink} className="mr-2"/>
                    Github Link
                </a>
                <a className="subtitle" href="https://mysterious-tor-38630.herokuapp.com/" >
                    <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
                    App
                </a>
                <figure className="image is-4by3">
                    <img src={noteTaker} alt={"noteTaker"} />
                </figure>
                </article>
            </div>
        
        </div>
    </div>
  )
}

export default Projects;
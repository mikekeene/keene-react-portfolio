import React from 'react'
import budgetapp from '../assets/budget-tracker.png';
import MJM from '../assets/MJM.png';
import clearSkies from '../assets/ClearSkies.jpeg';
import calculator from '../assets/calculator.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';

const Projects = () => {
  return (
    <div id="projects">
        <div className="tile is-ancestor">

            {/* budget tracker app */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Budget Tracker</p>
                <a className="subtitle" href="https://github.com/mikekeene/Budget-Tracker-App-PWA" >Link</a>
                <figure className="image is-4by3">
                    <img src={budgetapp} alt={"budgetapp"}/>
                </figure>
                </article>
            </div>
            {/* MJM */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">MJM</p>
                <a className="subtitle" href="https://github.com/jennyk1989/MJM-Task-Master" >Github Link</a>
                <figure className="image is-4by3">
                    <img src={MJM} alt={"MJM"} />
                </figure>
                </article>
            </div>
            {/* Clear Skies */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Clear Skies</p>
                <a className="subtitle" href="https://github.com/mikekeene/project-one" >Github Link</a>
                <figure className="image is-4by3">
                    <img src={clearSkies} alt={"clearSkies"} />
                </figure>
                </article>
            </div>
            {/* Calculator */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Calculator</p>
                <a className="subtitle" href="https://github.com/mikekeene/Calculator" >Github Link</a>
                <figure className="image is-4by3">
                    <img src={calculator} alt={"calculator"} />
                </figure>
                </article>
            </div>
            {/* Weather Dashboard */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Weather Dashboard</p>
                <a className="subtitle" href="https://github.com/mikekeene/Weather-Dashboard" >Github Link</a>
                <figure className="image is-4by3">
                    <img src={weatherDashboard} alt={"weatherDashboard"} />
                </figure>
                </article>
            </div>
            {/* Note Taker */}
            <div className="tile is-parent">
                <article className="tile is-child box">
                <p className="title">Note Taker</p>
                <a className="subtitle" href="https://github.com/mikekeene/NoteTaker" >Github Link</a>
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
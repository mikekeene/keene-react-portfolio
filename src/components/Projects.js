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
        <div class="tile is-ancestor">

            {/* budget tracker app */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Budget Tracker</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={budgetapp} alt={"budgetapp"} />
                </figure>
                </article>
            </div>
            {/* MJM */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">MJM</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={MJM} alt={"MJM"} />
                </figure>
                </article>
            </div>
            {/* Clear Skies */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Clear Skies</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={clearSkies} alt={"clearSkies"} />
                </figure>
                </article>
            </div>
            {/* Calculator */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Calculator</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={calculator} alt={"calculator"} />
                </figure>
                </article>
            </div>
            {/* Weather Dashboard */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Weather Dashboard</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={weatherDashboard} alt={"weatherDashboard"} />
                </figure>
                </article>
            </div>
            {/* Note Taker */}
            <div class="tile is-parent">
                <article class="tile is-child box">
                <p class="title">Note Taker</p>
                <p class="subtitle">React</p>
                <figure class="image is-4by3">
                    <img src={noteTaker} alt={"noteTaker"} />
                </figure>
                </article>
            </div>
        
        </div>
    </div>
  )
}

export default Projects;
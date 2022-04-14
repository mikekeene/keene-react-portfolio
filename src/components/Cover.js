import React from 'react'
//import coverimg from '../assets/cover-image.jpg';
import headshot from '../assets/headshot.jpg';


const Cover = () => {
  return (
    <section className="hero is-danger-light">


      <div class="hero-body">
        <div class="container">
          <div class="columns">
          <div className='column is-6'>
                <img src={headshot} alt="cover" />
            </div>

            <div class="column is-6">
              <h1 class="title is-1 ">Michael Keene </h1>
              <hr class="content-divider" />
              <h2 class="subtitle">Coding Bootcamp Student</h2>
            </div>

            
          </div>
        </div>
      </div>
    

        <div className="hero-foot">
            <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
                <ul>
                    <li className="is-active">
                        <a href='#about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='#contact'>
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href='#resume'>Resume</a>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    </section>
  )
}

export default Cover;
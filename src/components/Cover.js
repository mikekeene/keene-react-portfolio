import React from 'react'
import coverimg from '../assets/cover-image.jpg';
//import headshot from '../assets/headshot.jpg';

const Cover = () => {
  return (
    <section class="hero is-info is-large">

        <div class="hero-body">
            <img src={coverimg} alt={'cover'} />
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
            <div class="container">
                <ul>
                    <li class="is-active">
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
import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact" class="hero is-small is-link">
      <div class="hero-body">
        <p class="title">
          Contact Me
        </p>
        <a class="subtitle" href='http://github.com/mikekeene'>
          <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
          Github
        </a>
        <a class="subtitle" href='mailto:michaelgkeene@gmail.com'>
          <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
          Email
        </a>
      </div>
    </section>
  )
}

export default Contact
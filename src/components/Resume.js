import React from 'react'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <section id="resume" class="hero is-small is-danger">
      <div class="hero-body">
        <p class="title">
          Resume
        </p>
        <a class="subtitle" href='https://drive.google.com/file/d/1B8YI3F1gMNZzLISUn2yc9iIhiOo2NGws/view?usp=sharing'>
          <FontAwesomeIcon icon={faLink} className="mr-2 ml-2"/>
          View
        </a>
      </div>
    </section>
    
            
    
  )
}

export default Resume;
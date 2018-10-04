import * as React from 'react'
import AboutMe from '../components/AboutMe'
import Posts from '../components/Posts'

export default () => (
  <div>
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container" style={{ maxWidth: '35em' }}>
          <h2 className="subtitle">
            Hello there, I'm
            <span className="title is-block no-margin">Björn Tegelund</span>
            and this is my personal website.
          </h2>
          <h2 className="subtitle">
            Check out my&nbsp;
            <a href="#blog-posts" className="is-bold">
              blog
            </a>
            &nbsp;or read more&nbsp;
            <a href="#about-me" className="is-bold">
              about me
            </a>
            .
          </h2>
        </div>
      </div>
    </section>
    <section id="blog-posts" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container" style={{ maxWidth: '35em' }}>
          <Posts />
        </div>
      </div>
    </section>
    <section id="about-me" className="hero is-fullheight">
      <div className="hero-body">
        <div className="container" style={{ maxWidth: '35em' }}>
          <AboutMe />
        </div>
      </div>
    </section>
  </div>
)

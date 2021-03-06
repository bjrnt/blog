import Head from 'next/head'
import AboutMe from './AboutMe'
import { Component } from 'react'
import FormattedDate from './FormattedDate'
import Layout from './Layout'

export default class BlogPostLayout extends Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <Head>
            <title key="title">bjrnt :: {this.props.title}</title>
          </Head>
          <div className="container">
            <div className="columns is-centered">
              <div className="column" style={{ maxWidth: '35rem' }}>
                <div>
                  <h1 className="title has-text-centered">
                    {this.props.title}
                  </h1>
                  <h2 className="subtitle has-text-centered">
                    Written <FormattedDate date={this.props.date} />
                  </h2>
                </div>
                <br />
                <div className="content is-size-5">{this.props.children}</div>
                <br />
                <AboutMe />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

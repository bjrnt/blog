import App, { Container } from 'next/app'
import Head from 'next/head'

import '../styles/bulma.css'
import '../styles/icons.css'

export default class BjrntApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title key="title">bjrnt</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
            key="viewport"
          />
          <meta
            name="Description"
            content="Personal website and blog of Björn Tegelund"
            key="description"
          />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}

import Icon from './Icon'
import Link from 'next/link'

function ContactMethods() {
  return (
    <div className="field is-grouped">
      <div className="control">
        <a
          className="button is-primary is-inverted"
          href="mailto:b.tegelund@gmail.com"
          aria-label="email"
        >
          <Icon icon="mail" />
        </a>
      </div>
      <div className="control">
        <a
          className="button is-primary is-inverted"
          href="https://twitter.com/_bjrnt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="twitter"
        >
          <Icon icon="twitter" />
        </a>
      </div>
      <div className="control">
        <a
          className="button is-primary is-inverted"
          href="https://www.linkedin.com/in/bjorn0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="linkedin"
        >
          <Icon icon="linkedin" />
        </a>
      </div>
      <div className="control">
        <a
          className="button is-primary is-inverted"
          href="https://github.com/bjrnt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="github"
        >
          <Icon icon="github" />
        </a>
      </div>
    </div>
  )
}

function ProfileImage() {
  return (
    <p className="image is-128x128" style={{ marginBottom: '1.5em' }}>
      <img
        src="/static/me.jpg"
        style={{ borderRadius: '10em' }}
        alt="author profile"
      />
    </p>
  )
}

export default function AboutMe() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <ProfileImage />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className="title is-4" style={{ marginBottom: '.5em' }}>
          <Link href="/">
            <a>Björn Tegelund</a>
          </Link>
        </h1>
        <p style={{ maxWidth: '30em' }}>
          I'm a Swedish 🇸🇪 software engineer currently living in Seoul, South
          Korea 🇰🇷. My current interests are core computer science, technical
          management, and distributed systems.
        </p>
        <br />
        <ContactMethods />
      </div>
    </div>
  )
}

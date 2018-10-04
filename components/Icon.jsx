import * as React from 'react'

export default ({ icon }) => (
  <span className="icon" style={{ fontSize: '1.25rem' }}>
    <i className={`icon-${icon}`} aria-hidden="true" />
  </span>
)

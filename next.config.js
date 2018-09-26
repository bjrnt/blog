const withTypescript = require('@zeit/next-typescript')

const withMdx = require('@zeit/next-mdx')({
    options: {}
})

module.exports = withMdx(withTypescript({ pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']}))
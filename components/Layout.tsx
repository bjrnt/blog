import Head from 'next/head'

export default ({ children, date, title }) => 
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <h1>{title}</h1>
        <h2>{date}</h2>
        <div>
            {children}
        </div>
    </div>
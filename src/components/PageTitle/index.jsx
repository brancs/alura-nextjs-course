import Head from 'next/head'

function index({children}) {
  return (
    <Head>
      <title>{children}</title>
    </Head>
  )
}

export default index
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello World </h1>
    <p>
      <Link href="/about">About us </Link>
    </p>
  </Layout>
)

export default IndexPage

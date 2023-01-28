import Head from 'next/head'
import Image from 'next/image'
import Layout from '../layout/Layout'
import Hero from '../components/Hero'
import LatestPost from '../components/LatestPost'
import PopularPost from '../components/Popular'
import CategoryPost from '../components/CategoryPost'

export default function Home() {
  return (
    <Layout>
        <Hero />
        <LatestPost />
        <PopularPost />
        <CategoryPost />
    </Layout>
  )
}

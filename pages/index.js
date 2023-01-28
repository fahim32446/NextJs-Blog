import Head from 'next/head'
import Image from 'next/image'
import Format from '../layout/format';

// compoenents
import Hero from '../components/hero';
import Latest from '../components/latest';
import Popular from '../components/popular';
import Catpost from '../components/catpost';

export default function Home() {
  return (
   <Format className="p-2">
      <Hero></Hero>
      <Latest></Latest>
      <Popular></Popular>
      <Catpost></Catpost>
   </Format>
  )
}

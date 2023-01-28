import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

export default function format( { children }){
    return (
        <div className="mx-auto container p-2">
            <Head>
                <title>Blog</title>
            </Head>

            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}
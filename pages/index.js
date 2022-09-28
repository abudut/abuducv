import Head from "next/head";

import Header from "../components/Header";
import Homep from "../components/Homep";
import About from "../components/About";
import Resume from "../components/Resume";
import Project from "../components/Project";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abudu Touray</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />
      <Homep />
      <About />
      <Resume />
      <Project />
      <Footer/>
    </div>
  );
}

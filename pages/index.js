import Head from "next/head";
import About from "../components/About";
import { Contact } from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projectx";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Matheus Soares | Front End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

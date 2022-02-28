import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Keyboard } from "../components/Keyboard/Keyboard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <Keyboard />;
};

export default Home;

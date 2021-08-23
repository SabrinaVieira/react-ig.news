import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <div>
      <>
        <Head>
          <title>Home | ig.news</title>
        </Head>
        <main className={styles.contentContainer}>
          <section>
            <span>Hey Welcome</span>
            <h1>
              News about <span>world.</span>
            </h1>
            <p>
              get acss to all the publications
              <br />
              <span>for $ 9.90 per month</span>
            </p>
            <SubscribeButton />
          </section>
          <img
            className={styles.hero}
            src="/images/avatar.svg"
            alt="girls coding"
          />
        </main>
      </>
    </div>
  );
}

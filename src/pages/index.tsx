import { GetServerSideProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
};

export default function Home({product}: HomeProps) {
  return (
    <div>
      <>
        <Head>
          <title>Home | ig.news</title>
        </Head>

        <main className={styles.contentContainer}>
          <section>
            <span>👏 Hey Welcome</span>
            <h1>
              News about <span>React</span> world.
            </h1>
            <p>
              get access to all the publications <br />
              <span>for {product.amount} per month</span>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JU0nvIf5W7wkdGbAcSMMuMR",{expand: ["product"]})

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return(
    props: {
      product,
    }
  )
}
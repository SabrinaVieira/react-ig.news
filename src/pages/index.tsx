import { GetStaticProps } from "next";
import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
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
            <SubscribeButton priceId={product.priceId} />
          </section>
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
//Trocar getServerSideProps por getStaticProps =
export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JU0nvIf5W7wkdGbAcSMMuMR");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100), //valor do produto vem em centavos, por isso tem que dividir
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //valor em segundos
  };
};

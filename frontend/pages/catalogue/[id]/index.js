import Head from "next/head";
import { useRouter } from "next/router";
import ItemLayout from "../../../components/ItemLayout";

const cataloge = ({ cataloge }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{`${cataloge.title} | Online Sale | NotARealStore`}</title>
      </Head>
      <ItemLayout
        items={cataloge.items}
        title={cataloge.title}
        desc={cataloge.desc}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const domain =
    process.env.NODE_ENV == "development"
      ? "http://localhost:5001/"
      : "https://notarealstore.herokuapp.com/";
  const responce = await fetch(`${domain}api/catalogue/${context.params.id}`);
  const cataloge = await responce.json();

  return {
    props: {
      cataloge,
    },
  };
};

export default cataloge;

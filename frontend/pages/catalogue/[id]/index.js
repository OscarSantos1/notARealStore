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
  const responce = await fetch(
    `http://localhost:5001/api/catalogue/${context.params.id}`
  );
  const cataloge = await responce.json();

  return {
    props: {
      cataloge,
    },
  };
};

export default cataloge;

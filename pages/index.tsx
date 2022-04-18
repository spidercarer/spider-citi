import type { NextPage } from "next";
import { Loading } from "../components/Loading";

const index: NextPage = () => {
  return <Loading opacity={1} />;
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default index;

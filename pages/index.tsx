import MobileDetect from "mobile-detect";
import type { NextPage } from "next";
import { Loading } from "../components/Loading";

const index: NextPage = () => {
  return <Loading opacity={1} />;
};

export const getServerSideProps = ({ res, req }: { res: any; req: any }) => {
  const md = new MobileDetect(req?.headers[`user-agent`] as string);
  const isBot = md.is(`Bot`);
  if (isBot) {
    res.end(`Fuck off`);
    return {};
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

// index.getInitialProps = ({ res, req, ...props }) => {
//   const md = new MobileDetect(req?.headers[`user-agent`] as string);
//   const isBot = md.is(`Bot`);
//   if (isBot) {
//     res?.end(`Fuck off`);
//     return {};
//   }

//   return {
//     ...props,
//   };
// };

export default index;

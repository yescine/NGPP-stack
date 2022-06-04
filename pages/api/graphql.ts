import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from "micro-cors";

const cors = Cors();
const appoloServer = new ApolloServer({ typeDefs, resolvers });
const startServer = appoloServer.start();

export default cors(async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method==="OPTIONS"){
    res.end()
    return false
  }
  await startServer;
  await appoloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};

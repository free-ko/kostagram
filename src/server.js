require("dotenv").config();

// graphql-yoga에서 GraphQLServer를 불러와야 합니다.
import { GraphQLServer } from "graphql-yoga";

// 서버를 만들어 보겠습니다.
// dotenv config에서 포트를 읽어 오도록 .env 파일에 PORT를 추가 하면 됩니다.
// 모든 설정 값을 env에 추가하는 건 좋은 습관 입니다.
const PORT = process.env.PORT || 4000;

// type 정의와 resolver들이 필요 합니다.
const typeDefs = `
    type Query{
        hello: String!
    }
`;

const resolvers = {
  Query: {
    hello: () => "Hi",
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

// server.start 함수를 추가 하겠습니다.
server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);

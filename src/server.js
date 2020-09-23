require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

// server.express 라고 하면 express 서버에 접근 할 수 있습니다.
// express 서버에서 logger 미들웨어를 사용하겠습니다.
// 사실은 morgan 모듈 입니다.
// 이렇게 미들웨어를 추가 하면 됩니다.
const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);

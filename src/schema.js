// 모든 type들을 정의 해줍니다.
import path from "path";
import { makeExecutableSchema } from "apollo-server";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

// api 폴더의 모든 파일들을 schema 파일에서 한번에 받습니다.
// allTypes라는 변수는 fileLoader 함수의 결과물 입니다.
// **는 모든 폴더를 의미 합니다.
// *.graphql은 모든 .graphql 파일을 의미 합니다.
const allTypes = loadFilesSync(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = loadFilesSync(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(allTypes),
  resolvers: mergeResolvers(allResolvers),
});

export default schema;

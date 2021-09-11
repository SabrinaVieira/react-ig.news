import { Client } from "faunadb";
interface IClient{
  email: string;
}
export const fauna:= new Client({
  secret: process.env.FAUNADB_SECRETY_KEY,
});

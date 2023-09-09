import { Client, Account, Databases } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64fb285b9baa664dbf3c");

const account = new Account(client);
// Create a new account with an email and password
export {account};
export const database = new Databases(client );
import { Client, createClient } from '@libsql/client'

let client: Client

function returnClient(existingClient: Client = client) {
  if (!existingClient) {
    console.log('Creating the client instance')
    client = createClient({
      url: process.env.DATABASE_URL as string,
      authToken: process.env.DATABASE_TOKEN,
    })
    return client
  }
  console.log('Using the existing client instance')
  return existingClient
}

const db = returnClient()

export default db

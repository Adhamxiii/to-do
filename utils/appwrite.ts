import { Client, Databases } from "appwrite";

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6752eba50023fdc7530f'); 

export const databases = new Databases(client)

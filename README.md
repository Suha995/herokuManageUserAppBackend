# Create user-manager frontend app which accesses CRUD operations on a backend API that connects to MongoDB using the MongoDB Driver

Create two projects, (1) a backend that exposes CRUD endpoints to retreive, add, update and delete information from a JSON file, and (2) a create-react-app which uses each endpoint so that the user can manage the information in MongoDB from the frontend.

## :muscle: CHALLENGE: Generate mock users file with faker.js

- create mock data for this project with [faker.js](https://github.com/marak/Faker.js)
- create a JSON file of **20 users** using the faker.js method `faker.helpers.createCard()`
- use this [Datapod code](https://github.com/Entwickler-Club/dpodreact/blob/dev/src/system/controllers/controllerGenerateMockData.ts) as an example of how to do this

## Fill MongoDB database with users from users JSON file

- if you didn't do the above challenge, then download the `users.json` file provided in this project
    - otherwise use the `users.json` file you generated in the above challenge
- import the JSON file into your local MongoDB using `mongoimport`

## Create backend API with CRUD endpoints which access the MongoDB via the MongoDB driver

- use [these instructions](https://onespace.netlify.app/howtos?id=431) as a guide

## Create frontend user-management app which utilizes the CRUD endpoints of the above backend API 

- use [these instructions](https://onespace.netlify.app/howtos?id=433) as a guide

Your finished user-management-app should look something like this:

![grafik](https://user-images.githubusercontent.com/446574/141689422-66fc723b-4603-46bf-9882-eee6e36a937b.png)


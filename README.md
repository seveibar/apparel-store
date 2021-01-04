# Multi-Step Checkout with React, Mongodb, Express, NodeJS and Stripe

A multi-step customer checkout experience using React, Express, Node and the Stripe API.

![image](https://user-images.githubusercontent.com/1910070/103555514-67d83300-4e7e-11eb-8444-5d6a8ae51437.png)

![image](https://user-images.githubusercontent.com/1910070/103555652-96560e00-4e7e-11eb-8c38-5e40ee884f59.png)

![image](https://user-images.githubusercontent.com/1910070/103555540-6e66aa80-4e7e-11eb-96a1-1d5623557d88.png)

![image](https://user-images.githubusercontent.com/1910070/103555583-7fafb700-4e7e-11eb-9242-7e02fe45a01c.png)

![image](https://user-images.githubusercontent.com/1910070/103555614-88a08880-4e7e-11eb-93e1-20363cbc8199.png)

## Getting Started

1. Run `npx lerna bootstrap` to install dependencies
2. Run `npx lerna run start` to start the client and server

> If you aren't already running a local version of mongodb, run `npm run start:database`

## Motivation

This repository was created as part of a timed skill assessment (weekend challenge).

## Technologies Used

- Tailwind
- React
- Mongo (w/ mongoose)
- Express
- Ava
- Stripe

## Getting Started

Clone the repository, then run `npm install` then `npm start`.

To use stripe functionality, you'll need to add the publish and secret key to
a `.env` file.

The start script will automatically start a mongodb instance via docker.

## Project Structure

This project is organized with lerna. Inside of the `packages` directory are
a `client` and `server` directory.

- The `client` is a [Create React App](https://github.com/facebook/create-react-app) that uses [Tailwind CSS](https://tailwindcss.com/)
- The `server` is an [express server](https://expressjs.com/) that uses [mongoose](https://mongoosejs.com/) with [ava tests](https://github.com/avajs/ava)

# Multi-Step Checkout with React, Mongodb, Express, NodeJS and Stripe

Build a multi-step customer checkout experience using React, Express, Node and the Stripe API.

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

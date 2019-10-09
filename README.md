# Sick Picks

A react app that displays Sick Picks taken from the podcast [SyntaxFm](https://syntax.fm).

This app uses data scraped from this repo: https://github.com/trybick/sick-picks-scraper.

## Local Development
To start developing on your local maching you must first forking and cloning this project.

### Prerequisites
To run this project you will either need Node.js and NPM or Docker installed on your system.

### Setup

#### Using Node.js and NPM
Type the commands 
`
npm install
npm start
`
This will run the app on port 3000 or the next available port.

#### Using Docker
Use the `Dockerfile` and the script that prepare the whole application in a seperate container. Now type the command
`
./dev.sh
`
The app will now be running on port 3000.

## Contributing
Thank you for your interest! All types of contributions welcome. **HACK AWAY!** 🔨🔨🔨
- Fork and clone this repository
- Create your branch from the `master` branch
- Run `npm run lint:fix` to ensure correct formatting
- Please open your PR with the `development` branch as the base

### This application uses Netlify Continuous Delivery on the `master` branch

[![Netlify Status](https://api.netlify.com/api/v1/badges/f62444d0-41eb-4f69-911d-b9bf51dd741a/deploy-status)](https://app.netlify.com/sites/sickpicks/deploys)
# BackEnd
## Hosting and ServerEnviroment
https://pantheon.io
https://pantheon.io/docs/guides/environment-configuration

1- Clone or duplicate the wordpress sourcecode from my pantheon. The Duplicator will be needed if your want to cuplicate the project. here is the instruction:
https://www.wpbeginner.com/wp-tutorials/how-to-move-live-wordpress-site-to-local-server/

## Source Code
https://dashboard.pantheon.io/
https://pantheon.io/docs/develop-wordpress
https://enriquechavez.co/json-web-token-authentication-for-wp-rest-api/

# FrontEnd
## Hosting and ServerEnviroment
https://vercel.com/
https://vercel.com/docs/concepts/deployments/overview

## Source Code
https://github.com/MadSamson/wordpress-frontend
README.md

# Integration
1- clone this following repo
https://github.com/MadSamson/wordpress-frontend

2- Install packages
npm install

3- Add an .env file at the Client directory and add your wordpress adress
REACT_APP_API_URL = "ENTER YOUR URL"

## Run the project locally
npm start

## Deploying on Vercel

1- Go to vercel and create an account / log in.
2- Click the Add New button and choose Project.
3- Connect your Github to Vercel
4- Import your repository
5- Select the Client-folder as Root Directory
6- Add environment variables (same as in your .env file)
7- Deploy project

https://vercel.com/guides/deploying-nextjs-with-vercel

# Express.JS API Server Template
## Summary
A reusable template for an Express.js webserver. Can be used to deploy your own APIs quickly using the worlds most popular web framework for Node.js. 

## How to Use 
1. Use the green button at the top right to make your own repository with the same basic files and file structure. 
2. Navigate into the base directory of the folder with your CMD/Terminal.
3. Run the command ``` npm install ```, this will download all the required dependencies.
4. Customise to your hearts content!
5. Run the server with ``` node app ```, it runs on port 3006 by default.

## Dependencies Explanation
1. Express.js - The core part of the repository, this handles the webserver for you.
2. Dotenv - Easy way to use enviroment variables, useful for holding API keys you might need! 
3. Body-Parser - Needed to parse bodys of requests coming in.
4. Express-Session - Handles user session data.
5. Uniqid - Generates a unique number for the session key. 

Technically all you need for a simple web-server is Express.js, but these above dependencies are used frequently so may come in handy. 

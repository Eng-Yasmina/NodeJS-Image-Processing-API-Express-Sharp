# NodeJS Image Processing API Express Sharp
- This project is about building an API that can be used as a library to serve properly scaled versions of the your image.
 Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API handle resizing and serving stored images for you.

# Demo Preview
![resize-images-api.gif](./docs/screenshots/screencapture-localhost-3000-2023-01-21-08_27_53.png)

# Technologies / Tools  
- Typescript
- Express JS
- Jasmine
- Prettier
- Es-lint 
- Sharp

# Scripts
- Install all dependencies: ```npm install```
***(This command will install all dependencies I've used for the project and save them in the ./node_modules folder)***
- Build: ```npm run build```
***(This command will build the typeScript code into JS and save them in the ./dist folder)***
- Start server: ```npm run dev```
# Usage
- The server will listen on port 3000 ```http://localhost:3000/```
- Upload any image (.png / .jpeg / .jpg) to resize it to (500px × 500px) & (300px × 300px) & (200px × 200px) 


# Learn how to build a Nodejs API and how I have developed this Image Processing Web APP
## 1. Set up the server and configure typeScript
- Initialize ```package.json``` :
    ```bash
        npm init
    ```
- Install typeScript to dev Dependencies :  
    ```bash
        npm i --save-dev  typescript
    ```
- Initialize ```tsconfig.json``` : 
    ```bash 
        ./node_modules/.bin/tsc --init
    ```
- Install nodemon and node-ts to watch the ts,json files changes and start the server : 
    ```bash
        npm i nodemon node-ts --save-dev 
    ```
- Write scripts in package.json for nodemon library (dev), compile typeScript code into JS (build) and run the server (start)
    ```json
        "scripts": {
            "dev": "nodemon src/index.ts",
            "build": "tsc",
            "start": "npm run build && node dist/index.js"
        }
    ```
- Install Es-lint + Prettier and configure them
    ```bash
        npm i --save-dev prettier  
        npm i --save-dev eslint  
        npx eslint --init
        npm i eslint-config-prettier eslint-plugin-prettier --save-dev 
    ```
- Write scripts in package.json for formatting and linting
    ```json
        "scripts": {
            "format": "prettier --write src/**/*.ts",
            "lint": "eslint src/**/*.ts",
            "lint:fix": "eslint src/**/*.ts --fix"
        }
    ```
- Install Express for starting the server :
    ```bash
        npm i express
        npm i @types/express --save-dev
    ```

## 2. Resize the uploaded images
- Install Sharp to resize the uploaded images
    ```bash
        npm i sharp
        npm i @types/sharp --save-dev
    ```
- Use sharp to resize the images according to user inputs.
These inputs are filename, height and width and extensions
![sharp-resize.png](./docs/screenshots/Screenshot%202023-01-21%20230500.png)
. the supportes extensions are (PNG or JPG or JPEG)
- Retrieve the stored data from the server and dynamically update the UI of the web app.

# API Route
    ```bash
        .get('/api', controller.create);
    ```


# Endpoint
`/api?w={width}&h={height}&img={imgName}&ext={extension}`

Query parameters :
- `w` : the width of the image in pixels
- `h` : the height of the image in pixels
- `img` : the filename
- `ext` : the extension of the image in ( png or jpeg or  jpg)
### For Example :
```http://localhost:3000/api?w=500&h=500&img=shape&ext=jpg```
```http://localhost:3000/api?w=300&h=300&img=shape&ext=jpg```
```http://localhost:3000/api?w=200&h=200&img=shape&ext=jpg```

# Unit Testing
```npm run test```

```json
    "scripts": {
        "test": "npm run build && jasmine"
    }
```

![unit-testing.png](./docs/screenshots/Screenshot%202023-01-21%20130701.png)

# Table of contents
- [Project Title](#nodejs-image-processing-api-express-sharp)
- [Demo Preview](#demo-preview)
- [Scripts](#scripts)
- [Usage](#usage)
- [Steps to build a Nodejs API](#learn-how-to-build-a-nodejs-api-and-how-i-have-developed-this-image-processing-web-app)
- [API Routes](#api-routes)
- [Endpoints](#endpoints)
- [Unit Testing](#unit-testing)
- [Table of contents](#table-of-contents)

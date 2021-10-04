
# SignIn / SignUp App

This App allows you to SignIn & SignUp as well as managing the registered users in the admin section

## Acknowledgements

 - [Run the app](https://loginapp.salderosa.com)
## Appendix

Start Registering an user either as Admin, checking the box, or as normal user.
After you will be redirected to the protected route where,

If you are Admin you can read your info and the app registered users info


If you are an user you can read only your details.

Both route have the option to logout so you can access back to the homepage
  
## Authors

- [@maidastach](https://www.github.com/maidastach)
- [Salvatore De Rosa](https://www.salderosa.com)
## Deployment

To deploy this project run

```bash
  npm run build && cd frontend && ng build
```

Project will be ready to be deployed from the folder
```bash
  dist
```
 into the root of this project
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

`SESSION_SECRET`

Check the `secure` cookie option into
```bash
  backend/config.js
```
SESSION_OPTIONS.cookie.secure:
```bash
  set TRUE if in production mode
```
```bash
  set FALSE if in development mode
```

  
## Features

- SignUp as Admin or User
- Manage Users Infos
- Route Guards
- Recover Password

  
## Feedback

If you have any feedback, please reach out to us at info@salderosa.com

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Tech Stack

**Client:** Angular, TypeScript

**Server:** Node, Express, MongoDB

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/maidastach/login-register
```

Go to the project directory

```bash
  cd login-register
```

Install dependencies

```bash
  npm install --also=dev
```

```bash
  cd frontend && npm install --also=dev
```

Compile the Backend with Babel

```bash
  npm run build
```

Start the Backend Server

```bash
  npm run serve
```

Start the Angular server with proxy

```bash
  npm start
```

Run the application at
```bash
  http://localhost:4200
```
  

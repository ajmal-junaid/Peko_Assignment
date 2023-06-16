
# Paytm Clone

This project is a clone of the Paytm application, featuring a user-friendly app that allows seamless fund transfers between users. The app is designed to provide a wallet-based system similar to Paytm, ensuring a secure and convenient payment experience.

## Features

- Fund Transfers: Users can easily transfer funds from their wallets to other users within the app.
- Transaction History: The app provides a dedicated page where users can view their fund transfer history, enabling them to track their financial activities.
- Request Payment: Users have the option to request payment from other users, facilitating convenient and prompt fund transfers.
- UI Design in React: The user interface of the app is developed using React, ensuring a responsive and visually appealing design.
- Mongo Transactions: The app utilizes MongoDB for efficient management of transaction-related data.
- Backend in Node.js: The backend of the app is implemented using Node.js, providing a robust and scalable server-side solution.
- 2FA (Email and Authenticator): The app incorporates two-factor authentication, adding an extra layer of security by requiring users to authenticate via email and an authenticator app.
- Login Based Access: The app includes a login system to ensure that only authorized users can access its features and functionalities.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` 
`MONGO_URI_PAYTM`
`YOUR_EMAIL`
`YOUR_PASSWORD`
`YOUR_PASSWORD`
`JWT_SECRET`

PORT: The port number on which the application will run.

MONGO\_URI\_PAYTM: The URL of the MongoDB database to be used.

YOUR\_EMAIL: Your email address for authentication and notifications.

YOUR\_PASSWORD: The password for your email account.

JWT\_SECRET: The secret key for JSON Web Token (JWT) encryption and decryption.




## Installation

Install paytm clone with npm

```bash
cd Peko_Assignment 
  cd frontend
    npm install
  cd backend
    npm install
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/ajmal-junaid/Peko_Assignment.git
```

Go to the project frontend directory

```bash
  cd Peko_Assignment
    cd frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


Go to the project backend directory

```bash
  cd Peko_Assignment
    cd backend
```

Install dependencies

```bash
  npm install
```

setup .env

```bash
  PORT, MONGO_URI_PAYTM, YOUR_EMAIL, YOUR_PASSWORD, YOUR_PASSWORD, JWT_SECRET
```


Start the server

```bash
  npm start
```

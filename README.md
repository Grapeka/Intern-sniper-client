# Intern-sniper-client

This repository contains the frontend code for the platform. The corresponding backend repository can be found at the following link: https://github.com/Grapeka/Intern-sniper-server

The backend repository contains all of the necessary code to build and run the API for the platform. It is built using Node.js and is accessed by the frontend through API calls.

# Project Overview

This project is a platform that allows students, directors, companies, and visitors to browse and interact with various educational programs.

The following features are available to users:

Students

- Register and create a user account
- Login and logout of their account
- View a list of available programs
- View their own profile and update their personal information
- Add or remove programs from their favorite list

Directors

- Login and logout of their account
- View a list of available programs
- Validate companies to allow them to list their programs on the platform
- View a list of validation transactions

Companies

- Register and create a user account
- Login and logout of their account
- View a list of available programs
- View their own profile and update their company information
- Create a new program listing on the platform
- View a list of their own programs

Visitors

- Register and create a user account
- View a list of available programs

# Technologies

The following core technologies were used to develop the this website:

- React: React was used as the JavaScript library for building the user interface.
- TypeScript: TypeScript was used as a typed superset of JavaScript to build the frontend codebase.
- Tailwind CSS: Tailwind CSS was used as the CSS framework for styling the user interface.
- SCSS: SCSS was used as a CSS preprocessor to write and maintain styles for the frontend.

## Getting Started

To get started with the Intern-sniper-client, follow the steps below:

```sh
# Clone the repository to your local machine
git clone https://github.com/Grapeka/Intern-sniper-client.git

# Install the dependencies
yarn install

# Copy the example environment file and update the values as necessary
cp .env.example .env

# Build the project
yarn build

# Start the server
yarn dev
```

You can now access the application at http://127.0.0.1:5173/


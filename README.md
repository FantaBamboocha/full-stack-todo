# Fullstack Todo App

This is a fullstack application for managing tasks (Todo) with features to create, delete, edit, and toggle task status.
  
The entire project is built using TypeScript to ensure type safety and maintainability.

The application is built using the following technologies:

- **Backend**: Express, MongoDB
- **Mobile**: Expo
- **Frontend**: React, Ant Design

## Description

The application allows users to:
- Add new tasks
- Delete tasks
- Toggle task status (completed / not completed)
- Edit task text

## Getting Started

To run the project, make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### 1. Clone this repository

```bash
https://github.com/FantaBamboocha/full-stack-todo.git
   ```
### 2. Run the Server in development mode 
  - Navigate to the server directory:
   ```bash
cd full-stack-todo
cd server
   ```
- Install Dependencies 
```bash
npm install
   ```
- Configure MongoDB:

   - Set up the connection string in the `.env` file
- Start the server
```bash
npm run dev
   ```
### 3. Run the Web app in development mode 
  - Navigate to the web app directory:
```bash
cd full-stack-todo
cd client
   ```
- Install Dependencies 
```bash
npm install
   ```
- Start the web application
```bash
npm run dev
   ```
### 4. Run the Mobile app in development mode 
  - Navigate to the mobile app directory:
   ```bash
cd full-stack-todo
cd mobile
   ```
- Install Dependencies 
```bash
npm install
   ```
- Configure BASE_URL

   - To connect to the server, specify the server's address in the .env file:
```bash
EXPO_PUBLIC_BASE_URL=http://<your_ip>:<server_port>/todo
   ```
- Start the mobile application
```bash
npm run dev
   ```
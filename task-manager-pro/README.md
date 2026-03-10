# Welcome to your Expo app 👋

# Task Manager Pro 

A simple and modern mobile Task Manager application built using React Native and Expo.
The app allows users to manage their daily tasks efficiently with persistent storage and a clean UI.

# Features

* Add new tasks
* Mark tasks as completed
* Delete tasks
* Persistent task storage using AsyncStorage
* Task statistics dashboard (Total / Pending / Completed)
* Floating Action Button (FAB) for adding tasks
* Smooth UI animations
* Empty state UI
* Dark Mode support

## 🛠️ Tech Stack

* React Native
* Expo
* Context API (State Management)
* AsyncStorage (Local Data Persistence)
* Expo Router
* React Native Vector Icons


# Project Structure

```
task-manager-pro
│
├── app
│   ├── (tabs)
│   │   └── index.tsx
│   ├── add-task.tsx
│   └── _layout.tsx
│
├── context
│   └── TaskContext.tsx
│
├── components
├── assets
├── package.json
└── README.md
```

# Installation

Clone the repository:

```
git clone https://github.com/your-username/task-manager-pro.git
```

Navigate into the project folder:

```
cd task-manager-pro
```

Install dependencies:

```
npm install
```

Start the Expo development server:

```
npx expo start
```

Run the app on:

* Android Emulator
* iOS Simulator
* Expo Go Mobile App

# App Functionality

The application uses **React Context API** for global state management.
All tasks are stored locally using **AsyncStorage**, ensuring that tasks remain saved even after the app restarts.

# Learning Objectives

This project demonstrates:

* React Native component architecture
* Global state management with Context API
* Persistent data storage
* Mobile UI/UX best practices
* Expo development workflow

#License

This project is created for learning and internship practice purposes.

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

# Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

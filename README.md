# Notes App

A simple, real-time note-taking application built with Next.js, React, TypeScript, Tailwind CSS, and Appwrite as the backend. Easily add and delete notes, with instant updates across all connected clients.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Live Demo](#live-demo)
- [Contact Me](#contact-me)

## Overview

This project is a minimalistic note-taking app that demonstrates how to use Next.js with Appwrite for real-time CRUD operations. Users can add and delete notes, and changes are reflected instantly for all users thanks to Appwrite's real-time subscriptions.

## Features

- Add new notes
- Delete notes
- Real-time updates (notes sync instantly across clients)
- Responsive and clean UI with Tailwind CSS
- Built with Next.js App Router and TypeScript
- Appwrite backend integration

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Adhamxiii/chat.git
   ```

2. Navigate into the project directory:

   ```bash
   cd chat
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Configure Appwrite:

    - Update the Appwrite endpoint and project ID in utils/appwrite.ts if needed.
    - Ensure you have a database and collection set up in your Appwrite project.

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Usage

- To add a new note, click the "Add Note" button and enter your note text.
- To delete a note, click the "Delete" button next to the note you want to remove.
- Changes made by one user will be reflected instantly for all connected clients.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch ( git checkout -b feature/YourFeature )
3. Commit your changes ( git commit -m 'Add some feature' )
4. Push to the branch ( git push origin feature/YourFeature )
5. Open a pull request

## Live Demo

You can access the live version of animagic [here](https://chat-blue-beta-31.vercel.app/).

### Contact Me

If you have any questions or suggestions regarding the project, feel free to contact me:

- Email: [adhamxiii22](mailto:adhamxiii22@gmail.com)
- LinkedIn: [Adham](https://www.linkedin.com/in/adhamnasser/)
- GitHub: [Adhamxiii](https://github.com/Adhamxiii)
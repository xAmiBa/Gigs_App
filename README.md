# Gigs App

This is a simple React app that displays information about various music gigs. Users can view details about each gig, including the band name, image, description, date and time, and location. Additionally, users can mark gigs as their favorites by clicking the "Add to favourites" button.

## Table of Contents

- [Running the App](#running-the-app)
- [Testing](#testing)
- [Folder Structure](#folder-structure)
- [Styles](#styles)
- [What I Learned](#what-i-learned)
- [Screenshots](#screenshots)

## Running the App

To run the app locally, follow these steps:

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## Testing

The app includes unit tests for the `Gig` component using [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/). To run the tests, use the following command:

```bash
npm test
```

## Folder Structure

- `src/components`: Contains React components, including the main `App` component and the `Gig` component.
- `src`: Contains the main entry point (`main.jsx`) and global styles (`main.css`).
- `tests`: Includes unit tests for the `Gig` component.

## Styles

Global styles are defined in `main.css`, providing a consistent look and feel for the app. Each gig is displayed in a card-like container (`gig-container`), enhancing readability and visual appeal.

## What I Learned

While working on this app, I learned:

- React component structure and composition.
- Writing unit tests using Jest and Testing Library.
- Managing state with React hooks, such as `useState`.
- Styling components using CSS, including hover effects and transitions.

## Screenshots

![App Screenshot](/src/assets/Screenshot%202023-11-19%20at%2011.42.32.png)
--
![App Screenshot](/src/assets/Screenshot%202023-11-19%20at%2011.43.31.png)

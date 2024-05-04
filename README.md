# Snappfood Restaurants List

This project was created for the Snappfood code challenge, where I implemented a restaurant list for Snappfood. Users can explore restaurants and their details through this web application.

## Live Demo

You can check out the **[Live Demo](http://snappfood.gh-masoud.ir/)**, powered by Hamravesh, by visiting this link.

## Main Technologies Used

- **React**: The foundation of the project, allowing for dynamic and interactive user interfaces.
- **TypeScript**: Enhancing code quality and providing static type checking.
- **Redux and Redux Toolkit**: Managing global state and actions efficiently.
- **SASS**: Styling the components using the BEM methodology.
- **Vite**: A fast build tool for bundling and serving the application.

## Key Features

1. **Virtual List**: I've implemented `TanStack Virtual` to ensure efficient rendering of long lists. This results in a smooth user experience, especially when dealing with a large number of restaurants.

2. **Infinite Fetching**: For fetching restaurant data, I've used `RTK Query`. The infinite fetching feature is powered by `Intersection Observer`, which loads more data as the user scrolls down.

3. **Global Store**: `Redux` manages the application's state, making it easy to share data across components.

4. **Lazy Loading for Images**: To optimize performance, I've implemented lazy loading for images. Images load only when they become visible on the screen, enhancing the overall user experience. Additionally, I've added a skeleton animation for restaurant cards during loading.

5. **BEM Methodology for SASS**: Following the `Block Element Modifier (BEM)` methodology ensures consistent and maintainable styling. It prevents class name conflicts and keeps the codebase organized.

6. **Error Handling and 404 Page**: Proper error handling is crucial. I've set up `middleware` in Redux Toolkit to handle errors gracefully. Additionally, I've created a custom 404 page for incorrect routes.

7. **Deployment with Docker**: The project is deployed on Hamravesh using a `Dockerfile` and docker-compose. This ensures consistency across environments.

8. **Geolocation API**: I've integrated the `geolocation API` to retrieve the user's latitude and longitude. This feature could be useful for location-based services.

9. **Code Quality Tools**: `ESLint` helps identify and fix code issues, while `Prettier` ensures consistent formatting and sorted imports.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   <br/>
   `git clone https://github.com/ghmasood/snappfood-code-challenge.git`
   <br/>

2. Install dependencies:
   <br/>
   `yarn install`
   <br/>

3. Start the development server:
   <br/>
   `yarn dev`
   <br/>

4. Open your browser and visit: http://localhost:3000

### Project folder structure:

    .
    ├── public                  # Public Assets
    ├── src                     # Source files
    │   ├── assets                # Styles and other assets that needs to be transpiled at the build time
    │   ├── types                 # Global types
    │   ├── pages(app)            # Next.js File routings/App Directory
    │   └── components            # All Major and Minor Components will place here
    ├── config files            # .env files, docker files, bundler configs, .eslintrc, package.json, tsconfig.json, etc.
    └── README.md

### Component folder structure:

    .
    │   ├── ...
    │   └── components
    |           ├── ExampleComponent                   # ExampleComponent Folder
    |           |       ├── components                 # Sub Components of Example Component
    |           |       ├── componentName.module.scss  # Modular Styles
    |           |       └── index.tsx                  # Main File (only contains imports, hook calls and jsx codes)
    │           ├── ...

## Snapshots:

<table ><tr  >
    <td valign="top" width="33%">
      Home Page
        <img  alt="Home Page" src="https://github.com/ghmasood/snappfood-code-challenge/assets/33165677/c58b6a73-0528-47bb-b431-d2fc0e38979f">
    </td>
    <td valign="top" width="33%">
      Restaurants Page
        <img alt="Restaurants Page" src="https://github.com/ghmasood/snappfood-code-challenge/assets/33165677/b12ab410-22b7-4528-93ec-f8e8266330fb">
    </td>
  <td valign="top" width="33%">
    Restaurants Skeleton
        <img alt="Restaurants Skeleton" src="https://github.com/ghmasood/snappfood-code-challenge/assets/33165677/6ee7a110-ac88-4460-9a8c-39c59059a8b7">
    </td>
  </tr>
  <tr  >
    <td valign="top" width="33%">
      Not found Page
        <img  alt="Not found Page" src="https://github.com/ghmasood/snappfood-code-challenge/assets/33165677/29b49530-7d25-474d-b685-49e3f280d56e">
    </td>

  <td valign="top" width="33%">
    Fallback page
        <img alt="Fallback page" src="https://github.com/ghmasood/snappfood-code-challenge/assets/33165677/e96dd986-e698-4144-9331-536772df00ce">
    </td>
  </tr>

</table>

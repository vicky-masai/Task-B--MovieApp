# Movie Search application

This application allows users to search for movies by title using an external movie API.

## Setting up

Clone the repository or download the source code from the GitHub repository.
Navigate to the root directory of the project in the terminal.
## Run npm install or yarn install to install the project dependencies.

Install this node using npm install | yarn install

## Run npm start or yarn start to start the development server.

Note - before running the application you have to add your api in .env file.

- To run the application on local system, run this command npm start | yarn start

## Using the Application
In the search bar at the top of the page, type in the name of a movie you would like to search for and press enter.

The search results will be displayed in the grid card format, each card contains the title, year of release, and poster of the movie.

If there are no search results, a message will be displayed to indicate that no movies were found.

## Obtaining and Using an API key

The movie search application uses an external movie API to fetch movie information. In order to use this API, you will need to obtain an API key from the provider's website.

Go to the website of the chosen movie API provider => https://www.omdbapi.com/

Register for an account, if necessary.

Follow the instructions provided by the provider to obtain an API key.

Once you have obtained your API key.

## create a .env file in the root directory of the project.

In the .env file, add the following line: REACT_APP_API=your_api.

Replace your_api with the API you obtained from the provider on your mail.

Save the .env file and restart the development server by running npm start or yarn start.

## Testing 

For the testing the app you have to run this command npm test | yarn test

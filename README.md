##  Introduction 👋

This repo has been created as an interview task for From Poland with Dev.
The objective was to implement a UI for the [movie API](http://www.omdbapi.com/).  
The user should be able to search for all titles matching the input. 
The app should display the UI based on the output from API.

## Demo 🚀

[The app is hosted on an S3 bucket](http://movie-app-wpaczula.s3-website-us-east-1.amazonaws.com/)
## Features 👨‍🏫

* CRA for setting up
* React 17
* Typescript
* Styled components
* Prefetched pages and server data cache using react-query
* Optimized images loading
* Responsive
* Fully tested with react-testing-library
* Static testing with eslint
* CI/CD with github actions

## Approach 🛣

I've used CRA and linting config from another project to speed things up. I've implemented only one page and everything is redirected to it on AWS level to gain on time. Same applies to the usage of react-query - the app is simple and redux would be an overkill for me. I've used mapping on the API layer, because the shape of data returned by it was weird - pascal case and strings instead of booleans. Common components like input were created to keep consistency in the further development. I've placed some styled components in a separate files whenever I felt like they make the whole thing less readable, especially when the components contained some logic.

## Quick start 👟

0. Make sure you have git, node and yarn installed
1. Clone the repository
```
git clone https://github.com/WPaczula/movie-app.git
cd movie-app
yarn
```
2. Add `.env.local` file and create an env variable called REACT_APP_API_KEY.  
Use the value generated using http://www.omdbapi.com/
3. Run the application
```
yarn start
```
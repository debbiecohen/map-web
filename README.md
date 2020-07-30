# CTG Locations Web

## Getting started

### Back-end
This React application expects the CTG locations service to run on port 3000 (`http://localhost:3000`).

### Installing dependencies
Don't forget to run `npm install` to install all dependencies.

### (Optional) Setting up your Google Maps API Key
If you don't set your API key, the map will look strange. This won't affect performance or functionality so it's an optional step.

Create a `.env.` file and paste the following content:
```
REACT_APP_API_KEY=your-api-key
```

Replace `your-api-key` with your Google Maps API key. If you are not sure how to get an API key, read this [official tutorial](https://developers.google.com/maps/documentation/embed/get-api-key) from Google.

### Running the application
Run the application on port 3001. 
```
PORT=3001 npm start
```

### You should be good to go!
# Restaurant_Review_Mobile_App
Mobile IOS/Android application which fetches restaurants and reviews in the New York with the help of RESTful api provided by Yelp

This app is developed using React-Native with the help of Yelp-Api to get updated JSON data.

This app has additonal dependencies which you can download by first downloading all the files, then navigate inside the folder using terminal and then hit "npm install" and then "npm start". This will download the dependencies required for this project.

As for the security reasons, I have not included my personal Yelp API key, so, you have to request your personal key from Yelp.com/fusion and this key has to be inserted in the "src/api/yelp.js" file. Inside the "yelp.js" file you can find "Insert your key here" text in front of "Bearer". Please insert key at this location.

This project makes use of reusable react-native components, hooks Rest APIs, etc. You can also change the location from new york to any other location supported by Yelp by changing the value inside the "location" parameter inside useResults.js file.

You can find all the project files in the Master.

Name: Cape Health Capstone Project

Purpose: 
The purpose of this application is to create and store patient data pertaining to their whole name, date of birth, insurance provider, patient identification number and health history. This will be useful in terms of holding details for patients. The information for every patient can be created, updated, and/or deleted for modification purposes. The information will be displayed on a card component, having a home webpage, a webpage to create a patient, & a webpage page to display the patient information and an about webpage. Updating of patient information or deleting of a patient will done on the card component that will be displayed on your “Patient Information” webpage.

Backend Configuration:
Install backend Dependencies:

nodemon = Nodemon is a popular tool that is used for the development of applications based on node.js. It simply restarts the node application whenever it observes the changes in the file present in the working directory of your project

mongoose = Mongoose is a JavaScript object-oriented programming library that creates a connection between MongoDB and the Node.js JavaScript runtime environments

express = Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. I

cors = Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.


command: npm install mongoose cors express nodemon


*insert screeshots of output below*



Creation of Client and Server Folder
![Screenshot of Client & Server updated ](client/src/components/images/Screenshot%20step%20dos.png)

Node.js command installed/ pattient added to database
Installed backend dependencies
![Screenshot of Install backend Dependencies](client/src/components/images/Screenshot%20(1).png)

Multipe Patients added to Database on Thunderclient
![Patients added on Thunder Client](client/src/components/images/Screenshot%20(3).png)

Add info such as: Name, Date of Birth, Insurance Provider, Patient Identification and Health history.
![Click Here to add information on new patient](client/src/components/images/Screenshot%20(6).png)

Clear process of adding all of patient info to database
![Screenshot of Upating Patient Information](client/src/components/images/Screenshot%20(4).png)


Multiple patients info updated
![Screenshot of updated information of patient](client/src/components/images/Screenshot%20(5).png)


Deleting a patient from database
![Screenshot of removal of a patient](client/src/components/images/Screenshot%20patient%20sucessfully%20deleted%20.png)



1. Split terminal

Navigate to Client folder on command line in terminal window

    command: cd client

Install react and front end dependencies

Create Client Folder. 

command to install REACT: npx create-react-app .

install react router for URLS and CRUD ops: 
commnad: npm install react-router-dom@6

install MaterialUI Library to render images
command: npm install @mui/material @emotion/react @emotion/styled

then search for icons after download in search bar on smae page:
icons command: 
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

or npm install @mui/icons material

install axios: 

    npm install axios

then npm start on command line

Screenshots posted below output after Front End Dependencies


Creating of collection & Database
![Alt text](client/src/components/images/Screenshot%20step%20uno.png)

Split Terminal/Installed Front end dependencies
![Testing URL Codes](client/src/components/images/Screenshot%20(testing%20url%20codes).png)

About Cape Health Webpage.
![About Cape Health](client/src/components/images/Screenshot%20(9).png)

Output of Webpage
![Webpage](client/src/components/images/output%20of%20webpage.png)

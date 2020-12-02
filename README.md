# Ohm Logger
 
 ## Description
 Ohm Logger is a web app designed to help users track their meditation sessions length and frequency. 

Backend respository: (https://github.com/Qwerter49/Ohm-Logger-Backend)
<br>[Demo Video]()

## How to Set Up
1. Clone down this repo and the backend to your local machine<br>
2. run `npm install` in the front and backend <br>
4. run `npm run start` in the backend repo <br>
5. run `npm run start` in the frontend repo <br>
6. Ohm Logger is now up and running!<br>

## How to Use
1. Click `Continue as Guest` to get past the login screen <br>
2. The first page you will be taken to is the meditation home page. Simply click on the timer button when you start meditating! <br>
3. If you need to pause your session for any reason, just click the timer again <br><br>
![Highlight and Save](https://media.giphy.com/media/XvENrZxERfG4ePYIgr/giphy.gif)<br><br>
4. If you need to reset the timer, hit reset<br>
5. Once finished with your meditation session, click `submit` to save it to your account <br>
6. Click on the calandar tab on the left to view past sessions<br>

## Built With
Frontend: React, Bootstrap 4 <br>
Backend: Node, Express, Objection for replationships. 

## Challenges

This was my first big project using Node React and Bootstrap, all of which I learned a great deal about during the course of making this app. I would do just about everything differently if I were to make this again.

## Known Bugs
 - Creat new user route is currently down. If you do not have an account, please continue as guest
 - Guests cannot save their results, so the calandar will only have example sessions
 - Scolling on the calandar tab does not look amazing

## Future Implementation

- Allow new users to be created
- Have sessions reflect in the calandar tab
- Integrate PoseNet to track users movement using camera during sessions. Scoring each session by amount of movement. 

   

If you'd like to collaborate on this project, please email me: jay@joliver.dev

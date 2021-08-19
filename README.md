# ✨AWS-pinpoint-service-API✨

### A service to send SMS!

### How to use this?
Just pass time and day to this ```https://aws-pinpoint-service-aditi.herokuapp.com/?time=[time]&day=[day]``` api and the sms will be sent to the destination number


### How do I set it up in my PC?
- Go to and create your project (you will need the project id)
- Add the number from which you want to send SMS (AWS allows only 5 numbers to be added for free)
- Fork the project
- Clone it ```git clone ```
- Create an AWS Free tier account
- Create an IAM User
- Get AccessId and Security key
- Choose Your region
  - While Choosing area Do checkout at which location the pinpoint service it available<br>For instance, pinpoint service is not available for mumbai
- On your terminal run ```npm init``` this will install all the packages
  - If it doesn't Run ```npm i express aws-sdk```
- Run the command ``` node app.js ``` OR ```npm run```
- Now you can navigate to http://localhost:3000
- Type in your time,day and destination number and Voila!! SMS has been sent


### How can I use it in my project?





# ✨AWS-pinpoint-service-API✨

### A service to send SMS!

### How to use this?
Just pass time and date to this ```https://aws-pinpoint-service-aditi.herokuapp.com/?time=[time]&date=[date]``` api and the sms will be sent to the destination number


### How do I set it up in my PC?
**STEP 1**
- Go to https://aws.amazon.com/console/
- Create an AWS Free tier account
- Create an IAM User
- Get AccessId and Security key
- Choose Your region
  - While Choosing area Do checkout at which location the pinpoint service it available<br>For instance, pinpoint service is not available for mumbai
- Search for pinpoint and create your project (you will need the project id)
- Add the number from which you want to send SMS and the destination number to your sandbox(AWS allows only 5 numbers to be added for free)


**STEP 2**
- Fork the project
- Clone it ```git clone https://github.com/Aditi-Singh16/AWS-pinpoint-searvice.git```
- Change .env.example to .env and add your credentials
- On your terminal run ```npm init``` this will install all the packages
  - If it doesn't Run ```npm i express aws-sdk```
- Run the command ``` node app.js ``` OR ```npm run```
- Now you can navigate to http://localhost:3000
- Type in your time and date number and Voila!! SMS has been sent


### How can I use it in my project?
Let's make an app to send appointment confirmation to patients.
1. Clone the Repo 
```
git clone https://github.com/Aditi-Singh16/Doctors-Appointment-SMS-Sender-App.git
```
2. You can find the code at https://github.com/Aditi-Singh16/Doctors-Appointment-SMS-Sender-App.git
3. Run ```flutter pub get```
4. Then ```flutter run```
5. And you are good to go<br>
<b>The App UI is:</b>
<p float="left">
  <img src="https://user-images.githubusercontent.com/74586135/130029771-8b8e2d60-13b9-4ed9-8750-a3192e246927.jpeg" width="190" height="360">
  <img src="https://user-images.githubusercontent.com/74586135/130029798-d8c07868-eefb-422f-b443-29ff0466b844.jpeg" width="190" height="360">
</p>











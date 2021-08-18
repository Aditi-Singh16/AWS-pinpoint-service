const express = require('express');
const app = express();
require('dotenv').config();
var AWS = require('aws-sdk');

//region and IAM user key and Id
const config = {
    accessKeyId: process.env.AWS_SECRET_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "ap-southeast-1"
}
var originationNumber = "9833589076"; //number you have added to your pinpoint project (only 5 numbers are free)
var destinationNumber = "+919833589076"; //destination number must be in E.164 format



app.get('/', (req, res) => {
    var time = req.query.time;//fetch time
    var day = req.query.day;//fetch day
    var message = "Dear" + destinationNumber + "Your appointment has been confirmed for " + day + " at " + time; //Message Template
    var applicationId = "c94acd5515384da987a9578f9fe96659";
    var messageType = "TRANSACTIONAL"; //message type


    if (time == '' || day == '') {
        res.end(JSON.stringify({ error: "Please specify time and day" }))
    } else {
        AWS.config.update(config);

        //Create a new Pinpoint object.
        var pinpoint = new AWS.Pinpoint();

        // Specify the parameters to pass to the API.
        var params = {
            ApplicationId: applicationId,
            MessageRequest: {
                Addresses: {
                    [destinationNumber]: {
                        ChannelType: 'SMS'
                    }
                },
                MessageConfiguration: {
                    SMSMessage: {
                        Body: message,
                        MessageType: messageType,
                        OriginationNumber: originationNumber
                    }
                }
            }
        };

        //send message
        pinpoint.sendMessages(params, function (err, data) {
            if (err) {
                console.log(err.message);
                //send error message
                res.end(JSON.stringify({ error: err.message }))
            } else {
                console.log("Message sent! "
                    + data['MessageResponse']['Result'][destinationNumber]['StatusMessage']);
                //send success message
                res.end(JSON.stringify({ Message: data['MessageResponse']['Result'][destinationNumber]['StatusMessage'] }));
            }
        });
    }
})



// service working on the following port
app.listen(process.env.PORT || 3000, function () {
    console.log('listening to port 3000 go to http://localhost:3000/')
});
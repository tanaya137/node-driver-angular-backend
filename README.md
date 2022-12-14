# node-driver-angular-backend
This is the driver backend app. The driver front end (angular) app and the instrument simulator app is hosted separately.

INSTALLATION:
1.	Download node from the web: https://nodejs.org/en/download/ and install.
2.	Open command prompt and install npm in your system globally, next enter the following commands:<br />
•	npm i<br />
•	npm i -g concurrently<br />
•	npm install -g @angular/cli<br />
•	npm start<br />


ALGORITHM:
1.	The instrument and driver use MQTT protocol for the data transfer and monitoring. The data flow diagram below well explains the overall workflow.
2.	In this project the instrument is continuously publishing the data to the public MQTT broker.
3.	The device has subscribed to the instrument published data through the broker.
4.	To demonstrate this, this backend app is able to accept commands (S, SI, SIR) from angular based front end app and revert with the correct data / data stream as required.   

 
 <img width="493" alt="Driver-insrument-block_Dig" src="https://user-images.githubusercontent.com/53856363/183771555-fe4cf56c-45bf-4825-9fd0-556b8af09e58.png">

# node-driver-angular-backend

INSTALLATION:
1.	Download node from the web: https://nodejs.org/en/download/ and install.
2.	Open command prompt and install npm in your system globally, next enter the following commands:<br />
•	npm i<br />
•	npm i -g concurrently<br />
•	npm install -g @angular/cli<br />
•	npm start<br />


ALGORITHM:
1.	The instrument and driver use MQTT protocol for the data transfer and monitoring. The data flow diagram below well explains the overall workflow.
2.	In this project the instrument is continuously publishing the data to the broker.
3.	The device has subscribed to the instrument published data through the broker.
4.	On sending the command through the Driver it will show the respective value.
5.	To demonstrate we have taken the random value generator function and with the probability it is showing the weights

WEIGHTS:

a)	Stable weight – 80%<br />
b)	Command not executable – 10%<br />
c)	Balance in overload range – 5%<br />
d)	Balance in underload range – 5%<br />
 
 <img width="493" alt="Driver-insrument-block_Dig" src="https://user-images.githubusercontent.com/53856363/183771555-fe4cf56c-45bf-4825-9fd0-556b8af09e58.png">

# udp-learning-space
This is a UDP server that demonstrates how transport layer works using netcat protocol.

## Tech Stack 
node:dgram => This is a core node module that provides an implementation of UDP datagram sockets.
> node documentation: https://nodejs.org/api/dgram.html

## Usage 
- Clone the github repo onto your local machine using: `git clone https://github.com/backendbro/udp-learning-space`
  > No external dependencies were installed for this project. However, you can install Nodemon to watch your server.
- Run the application using the following command: `npm run start`
  ![udp-start-server](https://github.com/backendbro/udp-learning-space/assets/85031254/23fd151f-a738-480f-9589-961641257e0b)
- Use the command provided to send data to the UDP server (application): `echo "Hello, I am backendbro. I am love backend engineering" | nc -w1 -u 127.0.0.1 8081
  ![udp-echo-server](https://github.com/backendbro/udp-learning-space/assets/85031254/cf043f0c-e378-4384-bf22-3fff2e0fff9d)
- Return to the application's terminal to view the response
  ![udp-server-response](https://github.com/backendbro/udp-learning-space/assets/85031254/9b1b13c3-81b9-4e80-94c5-4c251d860a25)

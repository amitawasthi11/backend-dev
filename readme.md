# Backend Basics

This repository contains my backend development learning journey.

http headers  :: 
An HTTP header is extra information sent along with an HTTP request or response.

Think of it like a courier package:

Body = the actual item inside the package
Headers = information written on the package (sender, receiver, priority, etc.)

Example:

GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer abc123
Content-Type: application/json

Here:

Host tells which website we're requesting.
Authorization contains authentication information.
Content-Type tells the format of the data.
Request Headers

Sent by the client (browser/frontend) to the server.

Example:

POST /login HTTP/1.1
Host: myapp.com
Content-Type: application/json

{
  "email":"amit@gmail.com",
  "password":"123456"
}
import { Controller, Get, Header } from '@nestjs/common';

@Controller() // Base route for this controller (e.g., http://localhost:3000/)
export class BaseController {
  @Get() // Handles GET requests to "/"
  @Header('Content-Type', 'text/html')
  getApiManual(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to NestJS API Made By Himal Fullel </title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
            line-height: 1.6;
          }
          header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
          }
          main {
            padding: 20px;
            max-width: 800px;
            margin: auto;
          }
          h1 {
            color: #444;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            background: #fff;
            margin: 10px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          a {
            text-decoration: none;
            color: #007bff;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <header>
          <h1>Welcome to NestJS API Made by Himal Fullel</h1>
        </header>
        <main>
          <p>Explore the following useful routes to interact with the API:</p>
          <ul>
            <li>
              <strong>GET</strong> <a href="/">/</a> - Displays this API manual.
            </li>
            <li>
              <strong>GET</strong> <a href="/example/greet?name=YourName">/example/greet?name=YourName</a> - Greets you with a personalized message.
            </li>
            <li>
              <strong>GET</strong> <a href="/example/user/123">/example/user/:id</a> - Fetches details for a specific user by ID.
            </li>
            <li>
              <strong>POST</strong> <code>/auth/signup</code> - Registers a new user. Provide the required details in the body.
            </li>
            <li>
              <strong>POST</strong> <code>/auth/signin</code> - Logs in a user and returns an access token.
            </li>
          </ul>
          <p><em>Tip:</em> Use tools like <a href="https://www.postman.com/" target="_blank">Postman</a> or <a href="https://insomnia.rest/" target="_blank">Insomnia</a> to interact with the endpoints.</p>
        </main>
      </body>
      </html>
    `;
  }
}

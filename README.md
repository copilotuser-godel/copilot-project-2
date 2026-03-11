This is a simple Task Management application built with GitHub Copilot. It utilizes .NET 10, React, Entity Framework.
It consists of 4 pages: Main, Admin Panel, Contact, About. 

Features on the main page:
- adding tasks
- removing tasking
- marking tasks as done
- listing all of tasks

Features on the admin panel:
- Dashboard Overview
- completion progress
- tasks summary

 
The project was created using Visual Studio Code with GitHub Copilot working on a Claude Haiku 4.5 model


Prompts used to create a project:
~ create a simple .net 10 + react application for task management

	Result: Copilot has successfully created .NET backend API in "backend" that contains:
		- Program.cs with predefined WebApplication builder and configured services
		- added EntityFramework package with configured DbContext in InMemory model
		- configured CORS
		- TaskController with HTTP methods for CRUD operations
		- TaskItem class as a model
		- Swagger
		
		Copilot has also created frontend React app in "frontend" that contains:
		- project structure with main page written in TypeScript in components folder
		- taskApi service with Dto interfaces
		- async promises for API calls
		- effective visual styling



After that both projects needed to be build, packages to be installed and started

~ Add admin layout

	Result: Agent successfully added admin page with impressive dashboard

~ Fix error in App.tsx

	Result: After creating an admin page an error has occurred. After this command the error was fixed.

~ Add contact info page

	Result: Added React Router with configured routes, added contact info page

~ Add about page

	Result: Added about page with auto generated text


Observations:

  The project at first couldn't start. It needed a few small changed in Program.cs file on backend and package.json on frontend.
  After execution of following commands Copilot was asked to fix a few errors. It managed to repair them successfully.

Insights:

  An AI agent was highly effective in generating a backend + frontend application with basic functionalities.
  The project needed a few manual fixes. The result is impressive with little time consumption.


To run backend use command line and type (in backend folder):

~ dotnet run

To run frontend use command line and type (in frontend folder):

~ npm run dev

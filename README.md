
🔊 Real-Time Text-to-Speech Conversion

Serverless Cloud Computing Project

A serverless text-to-speech accessibility tool designed to help people with reading difficulties or visual impairments access text-based information through lifelike voice output.
The application converts user-provided text into an audio file using cloud-based TTS services and delivers it in real time.


---

🌍 Real-World Problem

Many users face accessibility barriers when consuming text-heavy web content due to:

Visual impairments

Reading difficulties

Learning disabilities


This project addresses web accessibility by transforming text into natural-sounding speech that users can listen to anytime.


---

🎯 Project Scope

Single-developer friendly

Fully serverless architecture

Pay-per-use model (remains within free tier during development)

Scalable, cost-efficient, and cloud-native



---

🛠️ Tech Stack & Cloud Services

☁️ Cloud Services

Text-to-Speech API:

Amazon Polly or Azure AI Speech


Serverless Functions:

AWS Lambda or Azure Functions


Storage:

Amazon S3 or Azure Blob Storage



💻 Application Stack

Frontend: Angular (Standalone Architecture)

Backend Logic: Serverless Functions

Hosting: Free static hosting platform



---

✨ Key Features

🔤 Real-Time Text-to-Speech Conversion

🎙️ Natural, Lifelike Voice Output

♿ Accessibility-Focused Design

☁️ Serverless Architecture (No Dedicated Servers)

📁 Cloud Storage for Generated Audio Files

⚡ Fast Response & Scalable Performance



---

🧠 How It Works

1. User enters text in the web interface


2. Text is sent to a serverless function


3. Cloud TTS service converts text to speech


4. Generated audio file is stored in cloud storage


5. Audio is returned and played for the user




---

📂 Project Structure

AngularPollyApp/
├── src/
│   ├── app/
│   │   ├── components/      # UI components
│   │   ├── services/        # API & TTS service calls
│   │   └── app.component.ts
│   ├── assets/              # Static assets
│   └── styles.scss          # Global styles
├── angular.json
├── package.json
└── README.md


---

🚀 Development Server

To start the local development server:

ng serve

Open your browser and navigate to:

http://localhost:4200/

The application will automatically reload on source file changes.


---

🧩 Code Scaffolding

Generate a new component using Angular CLI:

ng generate component component-name

To view all available schematics:

ng generate --help


---

🏗️ Build

To build the project:

ng build

Build artifacts will be stored in the dist/ directory.
The production build is optimized for performance and speed.


---

🧪 Running Unit Tests

Run unit tests using Karma:

ng test


---

🔁 Running End-to-End Tests

ng e2e

Angular CLI does not include an e2e framework by default.
You may integrate tools like Cypress or Playwright.


---

🔗 Output site

https://angular-polly-app.onrender.com


---

👤 Author

Dnyaneshwar Nikam

🔗 LinkedIn:
https://www.linkedin.com/in/dnyaneshwar-haridas-nikam


---

📌 Final Topic

Real-Time Text-to-Speech Conversion using Serverless Cloud Computing


🚀 AWS Serverless Cloud Resume Challenge
Project Overview
This project is a full-stack, serverless web application built on Amazon Web Services (AWS). It hosts a professional DevOps-focused resume with a dynamic visitor counter. The project demonstrates proficiency in cloud architecture, infrastructure security, and serverless computing.

🏗️ System Architecture
The application is built using a completely serverless stack to ensure high availability, global performance, and zero cost under the AWS Free Tier.

Frontend Hosting: Amazon S3 (Simple Storage Service) stores the static assets (HTML, CSS, JS).

Content Delivery: Amazon CloudFront serves as the CDN, using Origin Access Control (OAC) to securely fetch content from the private S3 bucket.

Security: Implemented TLS 1.3 and custom S3 Bucket Policies to ensure the principle of least privilege.

API Layer: Amazon API Gateway (REST API) acts as the entry point for the frontend to communicate with the backend.

Compute: AWS Lambda (Python 3.12) executes the backend logic to process visitor data.

Database: Amazon DynamoDB provides a NoSQL persistent data store for the visitor count.

🛠️ Technologies Used
Cloud: AWS (S3, CloudFront, Lambda, API Gateway, DynamoDB, IAM)

Frontend: HTML5, CSS3, JavaScript (Fetch API)

Backend: Python 3.12 (Boto3 SDK)

DevOps: Version Control (Git/GitHub), Security Hardening (OAC, CORS)

⚡ Features & Implementation Details
1. Secure Static Hosting
Unlike standard S3 website hosting which requires a public bucket, I implemented CloudFront with Origin Access Control (OAC). This ensures that the S3 bucket remains private and can only be accessed via the CloudFront distribution, protecting the origin from direct attacks.

2. Serverless Visitor Counter
The visitor counter is a microservice built with Lambda.

When a user loads the page, JavaScript triggers an asynchronous GET request to API Gateway.

The Lambda function retrieves the current count from DynamoDB, increments it by 1, updates the database, and returns the new value.

CORS (Cross-Origin Resource Sharing) was configured to allow only specific headers and methods, preventing unauthorized domain requests.

🧩 Challenges & Troubleshooting
A major part of this project involved debugging complex cloud configuration issues:

The S3 "Access Denied" Bug: Solved the XML error issue by identifying a mismatch between the CloudFront Distribution ID and the S3 Bucket Policy. I successfully reconfigured the Origin Access Control (OAC) settings and performed Cache Invalidations to force update the CDN.

Schema Initialization: Resolved Lambda execution errors by manually initializing the DynamoDB table with a primary key (id: 1) and a starting attribute (visitors: 0).

API Integration: Debugged frontend-to-backend communication by implementing custom headers in the Lambda response to satisfy CORS requirements.

📖 Project Setup Steps
S3: Create bucket and upload index.html, style.css, and script.js.

DynamoDB: Create cloud-resume-stats table with id as partition key.

Lambda: Create Python function with boto3 to increment the visitors attribute.

IAM: Attach AmazonDynamoDBFullAccess policy to the Lambda execution role.

API Gateway: Create a REST API with a /visit resource and link it to Lambda.

CloudFront: Create a distribution, set S3 as origin, and enable OAC.

Invalidation: Run /* invalidation to clear cached errors.

👤 Author
Ridham Pokiya DevOps Engineer & Cloud Enthusiast

# ResidentPro (DDAC-WebApplication)

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen.svg)
![Terraform](https://img.shields.io/badge/Infrastructure-Terraform-purple.svg)
![AWS](https://img.shields.io/badge/Cloud-AWS-orange.svg)

## 📖 Project Overview

**ResidentPro** is a modern, cloud-native web application designed to streamline residential management operations. This project demonstrates a comprehensive implementation of a distributed system using a secure 3-tier architecture on Amazon Web Services (AWS).

It separates concerns effectively with a dynamic **Next.js** frontend and a high-performance **ASP.NET Core** backend, all orchestrated via **Terraform** for reliable and reproducible infrastructure deployment.

---

## 🏗️ Architecture

The application utilizes a highly available and secure architecture on AWS:

-   **Frontend Layer**: Hosted on EC2 instances within Public Subnets, managed by an Auto Scaling Group and exposed via an Application Load Balancer (ALB) and CloudFront.
-   **API Layer**: Powered by ASP.NET Core, running on EC2 instances in Private Subnets to ensure isolation from direct internet access.
-   **Data Layer**: A MySQL database (RDS) situated in secured Private Subnets, accessible only by the API layer.
-   **Security**: Integrated with AWS WAF (Web Application Firewall), GuardDuty, and Security Hub for real-time threat detection and compliance.

---

## 🚀 Technologies Used

### Frontend (`/client`)
-   **Framework**: [Next.js](https://nextjs.org/) (React 19)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **Components**: Radix UI, Lucide React, Sonner
-   **Motion**: Framer Motion
-   **Utilities**: `axios`, `date-fns`, `jspdf` (Reporting), `@stripe/react-stripe-js` (Payments)

### Backend (`/server`)
-   **Framework**: ASP.NET Core 9.0 Web API
-   **Language**: C#
-   **Database ORM**: Entity Framework Core 8 with Pomelo MySQL
-   **Authentication**: JWT Bearer Authentication
-   **Payments**: Stripe.net SDK
-   **Documentation**: Swagger / Swashbuckle

### Infrastructure & DevOps
-   **Cloud Provider**: AWS (Amazon Web Services)
-   **IaC**: Terraform (v1.0+)
-   **Containerization**: Docker
-   **Networking**: VPC, NAT Gateways, Public/Private Subnets, Route53
-   **Security**: Security Groups, WAF, IAM Roles, Secrets Manager

---

## ✨ Key Features

-   **Secure User Authentication**: Robust login and registration system using JWT.
-   **Responsive Dashboard**: A beautiful, responsive administrative interface built with modern UI components.
-   **Payment Integration**: Seamless payment processing using Stripe.
-   **Automated Reporting**: Generation of PDF reports and invoices directly from the client.
-   **High Availability**: Auto-scaling groups ensure the application handles traffic spikes gracefully.
-   **End-to-End Security**: SSL/TLS encryption via ACM and CloudFront, with strict network isolation.

---

## 🛠️ Getting Started

### Prerequisites
-   [Node.js](https://nodejs.org/) (v18 or later)
-   [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
-   [Terraform CLI](https://www.terraform.io/)
-   [AWS CLI](https://aws.amazon.com/cli/) (Configured with credentials)
-   [Docker](https://www.docker.com/) (Optional, for containerized runs)

### 1. Backend Setup
Navigate to the server directory and start the API:
```bash
cd server
dotnet restore
dotnet run
```
The API will be available at `http://localhost:5000` (or configured port).

### 2. Frontend Setup
Navigate to the client directory and start the development server:
```bash
cd client
npm install
npm run dev
```
Access the application at `http://localhost:3000`.

### 3. Infrastructure Deployment (AWS)
Deploy the full cloud infrastructure using Terraform:

1.  Navigate to the `terraform` directory:
    ```bash
    cd terraform
    ```
2.  Initialize the project:
    ```bash
    terraform init
    ```
3.  Preview the deployment plan:
    ```bash
    terraform plan
    ```
4.  Apply the changes to AWS:
    ```bash
    terraform apply
    ```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

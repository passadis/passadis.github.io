import {MapPinIcon} from "@heroicons/react/24/solid";
import {BuildingOfficeIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {GithubIcon, LinkedInIcon} from "./components/utils";
import moment from "moment";

const config = {
    profile: {
        username: "passadis",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Athens"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.unisystems.gr/",
                data: {
                    text: "Company",
                    value: "Unisystems"
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/passadis",
                data: {
                    text: "GitHub",
                    value: "passadis"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            
            {
                link: "https://www.linkedin.com/in/kpassad/",
                data: {
                    text: "LinkedIn",
                    value: "Konstantinos Passadis"
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },

            {
                link: null,
                data: {
                    text: "Website",
                    value: "https://cloudblogger.eu"
                },
                icon: (<GlobeAltIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:passadis@outlook.com",
                data: {
                    text: "Email",
                    value: "passadis@outlook.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["Azure", "Terraform", "AWS", "GCP", "Kubernetes", "NodeJS", "React.js", "SQL", "Git", "DevOps", "CSS", "Python"],
        experience: [
            {
                period: "2000 - Today",
                position: "IT Professional",
                institution: ""
            },
        ],
        eduction: [
            {
                period: "1977 - Today",
                position: "Learner",
                institution: "Life"
            },

        ],
        tryProjects: [
            {
                image: "Semantick.png",
                link: "https://www.cloudblogger.eu/2023/10/18/semantic-kernel-container-apps-with-react-and-python/",
                title: "SEMANTIC KERNEL: CONTAINER APPS WITH REACT AND PYTHON",
                description: "Build your custom AI Solution integrating Semantic Kernel into your Azure Container Apps.",
                date: moment(new Date("2023-10-18"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "Python", "React", "Azure", "Azure Container Apps", "Azure Open AI", "Azure Functions", "Azure Storage", "Azure Web App"]
            },
            {
                image: "vision-ai.png",
                link: "https://www.cloudblogger.eu/2023/10/06/azure-vision-ai-object-detection-web-app-with-docker-and-container-registry//",
                title: "Azure Vision AI – Object Detection Web App with Docker and Container Registry",
                description: "Build a Python Container Image and Deploy via Azure Container Registry to Azure Web Apps for Object Detection. Terraform Docker, and Scripts.",
                date: moment(new Date("2023-10-06"), "YYYYMMDD").fromNow(),
                techStack: ["Python", "Docker", "HTML", "Terraform", "Azure Vision AI", "Azure Container Registry", "Azure Web App"]
            },
            {
                image: "SearchDesign.png",
                link: "https://www.cloudblogger.eu/2023/10/18/semantic-kernel-container-apps-with-react-and-python/",
                title: "Identity System with Azure SQL and Azure Web Apps",
                description: "Create a custom User Registration and Login System with Azure SQL and Web Apps API.",
                date: moment(new Date("2023-12-23"), "YYYYMMDD").fromNow(),
                techStack: ["Azure", "React", "Azure Web Apps", "Azure Container Registry", "Azure SQL", "Azure Storage"]
            },
            {
                image: "cosmosdbgraph.png",
                link: "https://www.cloudblogger.eu/2023/03/06/import-ad-users-from-html-form-using-cosmosdb-and-azure-functions/",
                title: "Import AD Users from HTML Form using CosmosDB and Azure Functions",
                description: "We can import Users from HTML into Cosmos DB with an HTTP Trigger, Azure Functions and DevOps! Just give them the URL to enter simple details like First Name , Last Name and a nickname.",
                date: moment(new Date("2023-03-06"), "YYYYMMDD").fromNow(),
                techStack: ["Azure", "HTML", "CSS", "Dotnet", "Powershell","NodeJS"]
            },
            {
                image: "keyvault.png",
                link: "https://www.cloudblogger.eu/2023/12/13/azure-key-vaultsecuring-your-digital-assets/",
                title: "Azure Key Vault:Securing Your Digital Assets",
                description: "Unveiling the Power of Azure Key Vault with PIN Authentication and Username – Password Matching.",
                date: moment(new Date("2022-11-03"), "YYYYMMDD").fromNow(),
                techStack: ["Azure","Python", "HTML", "CSS", "Azure Key Vault", "Azure Web Apps"]
            },
            {
                image: "gptapi.png",
                link: "https://www.cloudblogger.eu/2023/12/30/azure-container-apps-apis-redis-cache-and-microservices-with-openai-chat-completions/",
                title: "Azure Container Apps: APIs, Redis Cache and Microservices with OpenAI Chat Completions",
                description: "Build your API Endpoints and serve your Web Apps with the power of Container Apps.",
                date: moment(new Date("2023-12-30"), "YYYYMMDD").fromNow(),
                techStack: ["Azure", "Python", "HTML", "Docker", "Azure Container Apps", "Open AI"]
            },
            /*{
                image: "react-tailwindcss-select.png",
                link: "https://demo-react-tailwindcss-select.vercel.app/",
                title: "Demo of react-tailwindcss-select",
                description: "This project allows you to test the different options available in my react-tailwindcss-select package.",
                date: moment(new Date("2022-07-13"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "satis-backoffice.png",
                link: "https://backoffice.satis-universe.com/",
                title: "Satis backoffice",
                description: "This project is a client survey application for microfinance institutions..",
                date: moment(new Date("2022-04-13"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "JavaScript", "React", "PHP", "Laravel", "Tailwindcss"]
            },*/
        ]
    }
};

export default config
# IBM Certification Data App with ChatGPT AI

![logo IBM](https://github.com/JuanPabloMontoya271/IBM-Analytics-Server/assets/47407743/d4e6cb92-c2eb-4e05-9bdf-323f5b8272c0)


## Introduction

Welcome to the IBM Certification Data App repository! This Express application is designed to receive a CSV file containing certification data and utilizes ChatGPT AI to help users make queries in natural language to extract valuable insights from the data. The app integrates with Redis for caching, Docker for containerization, Nginx for reverse proxy, and MySQL for managing data storage.

## Features

- **CSV Data Import**: Upload a CSV file containing certification data to populate the database.
- **ChatGPT AI Integration**: Utilize the power of ChatGPT AI to interact with the data and make queries using natural language.
- **Data Querying**: Ask the AI questions about certifications, candidates, or any relevant information to get instant responses.
- **Redis Caching**: Implement Redis for caching frequently accessed data and reducing response times.
- **Dockerized Deployment**: Package the app and its dependencies in Docker containers for seamless deployment and scalability.
- **Nginx Reverse Proxy**: Use Nginx as a reverse proxy server to improve performance and security.
- **MySQL Database**: Manage data storage and retrieval through the MySQL database.

## How to Use

1. Clone the repository to your local machine.
2. Set up Redis, MySQL, and Nginx as per the provided documentation and configurations.
3. Build the Docker containers using the provided Dockerfile.
4. Start the application using `docker-compose`.
5. Access the app through the configured Nginx reverse proxy URL.
6. Upload the CSV file with certification data to populate the database.
7. Interact with ChatGPT AI to make natural language queries and retrieve relevant information.

## Requirements

- Node.js with NPM
- Express
- Redis server
- Docker
- Nginx
- MySQL

## Contributing

Contributions to the IBM Certification Data App are welcome! If you have ideas for improvements or want to add new features, feel free to open an issue or create a pull request. Let's collaborate to enhance this powerful tool and make it even more valuable for data analysis.

## Credits

This app was developed in collaboration with the IBM team and powered by OpenAI's ChatGPT AI model. Special thanks to all contributors for their efforts in creating this useful application.

## License

The IBM Certification Data App is licensed under the [MIT License](LICENSE). Feel free to use the code and customize it according to your needs.

Let's make data analysis smarter and easier with the IBM Certification Data App and ChatGPT AI!

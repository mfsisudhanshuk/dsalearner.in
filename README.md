# Data Structures Learning Platform

This project is a web application for learning data structures interactively. It features visualizations of various data structures, starting with a linked list implementation.

## Features

- Interactive linked list visualization
- Add and remove nodes from the linked list
- Visual representation of node addition process

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment to Vercel. When changes are pushed to the `main` branch, the following steps are automatically executed:

1. The code is checked out
2. Node.js is set up
3. Dependencies are installed
4. Tests are run (make sure to add tests to your project)
5. The project is deployed to Vercel

### Setting up Vercel Deployment

To set up the Vercel deployment, you need to add the following secrets to your GitHub repository:

- `VERCEL_TOKEN`: Your Vercel authentication token
- `VERCEL_ORG_ID`: Your Vercel organization ID
- `VERCEL_PROJECT_ID`: Your Vercel project ID

You can obtain these values from your Vercel account settings and project settings.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

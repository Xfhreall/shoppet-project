This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/pit-intrivia/intrivia-fe-2025.git
```

2. Set up the environment variables by copying .env.example

```bash
cp .env.example .env
```

3. Install the required the dependencies
```bash
pnpm install
```

4. Run the development server
```bash
pnpm dev
```
5. Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Architecture

The project is structured using a feature-based approach to ensure scalability, modularity, and maintainability. The `src` directory is organized into three main sections:

- **`app`**: Contains global application-level components, pages, layouts, and configurations, including the main entry point for pages and global styles.
- **`features`**: Houses feature-specific modules, where each module includes its own actions, services, components, containers, and types to encapsulate functionality and logic for that feature.
- **`shared`**: Includes reusable components, hooks, libraries, and utilities that are shared across different features and pages, promoting consistency and code reusability.

### Contributing

1. Make sure to run husky prepare command
```bash
pnpm prepare
```

2. You can start contributing by reading [CONVENTION](./CONVENTION.md) for commit convention

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

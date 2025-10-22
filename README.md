# ECTickets Resources Center

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![Nextra](https://img.shields.io/badge/Nextra-4.x-blue?logo=markdown)](https://nextra.site/)
[![Mantine](https://img.shields.io/badge/Mantine-8.x-purple?logo=react)](https://mantine.dev/)

The official documentation site for ECTickets, providing comprehensive guides for attendees and organizers. Built with Nextra (Next.js-based docs framework) and Mantine UI for a modern, responsive experience. This repo hosts the source for [resource.ectickets.com](https://resource.ectickets.com).

## Overview

ECTickets Resources is a user-centric documentation hub covering:

- **Attendee Guides**: From account setup to check-in and refunds.
- **Organizer Tutorials**: Event creation workflows, dashboard navigation, and pricing.
- **Reference Pages**: Glossaries, branding assets, and feedback channels.
- **Support**: FAQs, bug reporting, and feature requests.

As a newly launched platform, we're open to contributions — help us improve!

## Prerequisites

- Node.js ≥20.x
- Yarn

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/ltobywongl/ectickets-resource.git
   cd ectickets-resource
   ```

2. Install dependencies:
   ```
   yarn install
   ```

## Development

Run the local server:

```
yarn dev
```

- Access at `http://localhost:3333`.
- Edits to MDX files hot-reload automatically.

## Building for Production

Build the static site:

```
yarn build
```

Preview the build:

```
yarn start
```

Deploy to Vercel

## Contributing

We welcome improvements! As a new platform, your input is gold.

1. Fork the repo.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Add MDX pages or fixes—follow existing style (e.g., use Callouts, Steps).
4. Commit: `git commit -m "Add new page: XYZ"`.
5. Push & PR: Target `main`; include screenshots for visual changes.

Guidelines:

- Keep language clear, concise.
- Use Mantine components for UI (e.g., Alert, Table).
- Test on mobile/desktop.

## License

This project is licensed under the MIT License—see [LICENSE](LICENSE) for details.

## Contact

- **Support**: [info@ectickets.com](mailto:info@ectickets.com)
- **GitHub Issues**: For repo-specific bugs.
- **Main Site**: [www.ectickets.com](https://www.ectickets.com)

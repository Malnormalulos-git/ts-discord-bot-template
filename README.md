# TypeScript Discord Bot Template
## Installation

To use this bot template, you'll need to install [Node.js](https://nodejs.org/en) (version 16 or higher). To check if you already have Node installed on your machine, run `node -v`.

1. Clone or download the repository:
```bash
git clone https://github.com/Malnormalulos-git/ts-discord-bot-template
```

2. Install dependencies:
```bash
cd ts-discord-bot-template
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file and add your bot's token and client ID:
```
TOKEN=your_bot_token_here
CLIENT_ID=your_bot_client_id_here
```

## Environment Variables

You can see the environment configuration example in `.env.example`. The following variables are required:

- `TOKEN` - Your Discord bot token (get it from [Discord Developer Portal](https://discord.com/developers/applications))
- `CLIENT_ID` - Your bot's client ID (also from Discord Developer Portal)

## Scripts
`npm run dev` - Start the development server with hot reload using tsx

`npm run lint` - Run ESLint to check for code style and quality issues

`npm run lint:fix` - Run ESLint and automatically fix fixable issues

`npm run build` - Compile TypeScript files to JavaScript in the `dist` directory

`npm run start` - Start the bot using the compiled JavaScript files

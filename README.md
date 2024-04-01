# Side Quests Bot

This bot automates the process of clearing tasks in the Side Quests game. It fetches the tasks assigned to the user and clears them automatically.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dante4rt/side-quests-bot.git
   ```

2. Install dependencies:
   ```sh
   cd side-quests-bot
   npm install
   ```

## Usage

1. Obtain your Bearer token:

   - Open your browser's developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").
   - Go to the "Network" tab.
   - Navigate to the Side Quests game and look for a request with the authorization header.
   - Copy the value after the word "Bearer".

2. Set up environment variables:

   - Create a `.env` file in the root directory of the project.
   - Add your Bearer token to the `.env` file:
     ```
     TOKEN=your_bearer_token_here
     ```

3. Run the bot:
   ```sh
   npm start
   ```

## How to Obtain Bearer Token

To obtain the Bearer token required for authentication, follow these steps:

1. Open the Side Quests game in your browser.

2. Open the developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").

3. Go to the "Network" tab.

4. Perform any action in the game that requires authentication (e.g., loading your profile).

5. Look for a request in the Network tab that has an "Authorization" header.

6. Copy the value after the word "Bearer" in the Authorization header.

7. Paste this value as your Bearer token in the `.env` file.

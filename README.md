# WoW Basic Lookup

An app leveraging React and Laravel to deliver a simple solution: looking up a WoW character's info from their most recent parse!

## Setup
0. Enter `cp .env.example .env` in the CLI, then edit `.env` by pasting `WLOG_API_KEY=""` and filling it in with your Warcraft Logs API Client Key
1. `composer install`
2. `yarn && yarn run dev` 
3. `php artisan key:generate`
4. `php artisan serve`
5. Open your browser and visit `localhost:8000`
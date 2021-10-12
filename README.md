# WoW Basic Lookup

An app leveraging React and Laravel to deliver a simple solution: looking up a WoW character's info from their most recent parse!

## Setup
0. `cp .env.example .env`, then edit `.env` by setting `WLOG_API_KEY=` your Warcraft Logs API Client Key
1. `composer install`
2. `yarn && yarn run dev`
3. `php artisan serve`
4. Open your browser and visit `localhost:8000`
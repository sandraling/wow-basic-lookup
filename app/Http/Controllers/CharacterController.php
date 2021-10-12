<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

class CharacterController extends Controller
{
    public function lookup($characterName, $realm, $region)
    {
        $client = new Client();
        $api_key = config('services.wlog.key');
        $service_url = sprintf('https://www.warcraftlogs.com:443/v1/parses/character/%s/%s/%s', $characterName, $realm, $region);
        
        try { 
            $response = $client->request('GET', $service_url, [
                'query' => [
                    'includeCombatantInfo' => 'true',
                    'api_key' => $api_key
                ]
            ]); 
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            return $e->getResponse()->getBody()->getContents();
        }

        $parses = json_decode($response->getBody(), true);

        forEach($parses as $key => $row) {
            $startTime[$key] = $row['startTime'];
        }
        array_multisort($startTime, SORT_ASC, $parses);

        return response()->json(array_pop($parses));
    }
    
}

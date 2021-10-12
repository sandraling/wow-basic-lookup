import * as React from "react";
import axios from "axios";
import { 
    RegionOptions, 
    CharacterDataType,
    characterLookupReducerStateType,
    characterLookupReducerActionType,
    CharacterLookupAPIResponseType
} from "../../data/wow";
import {
    mopremeCharacterInfo
} from "../../data/placeholderData";

import { SearchBar } from "./SearchBar";
import { CharacterInfo } from "./CharacterInfo";
import Container from "@mui/material/Container";

const characterLookupReducerinitialState: characterLookupReducerStateType = {
    characterName: "",
    realm: "",
    region: RegionOptions[1],
    regionInputValue: "",
    characterData: mopremeCharacterInfo,
    loading: false,
    error: ""
}

const characterLookupReducer = (
    state: characterLookupReducerStateType, 
    action: characterLookupReducerActionType ) => {
    switch (action.type) {
        case "set":
            return { ...state, ...action.value};
        case "reset":
            return characterLookupReducerinitialState;
        default:
            return { ...state, error: "Oh no, something went wrong..."};
    }
}

const treatUserInput = (input: string) => {
    return input.toLowerCase().replace(/\s/g, "");
}

export const CharacterLookup = () => {
    const [state, dispatch] = React.useReducer(characterLookupReducer, characterLookupReducerinitialState);

    const fetchCharacter = () => {
        console.log(`/api/character/${treatUserInput(state.characterName)}` +
        `/${treatUserInput(state.realm)}` + 
        `/${state.region 
            ? treatUserInput(state.region.value) 
            : ""}`);
        axios
            .get<CharacterLookupAPIResponseType>(
                `/api/character/${treatUserInput(state.characterName)}` +
                `/${treatUserInput(state.realm)}` + 
                `/${state.region 
                    ? treatUserInput(state.region.value) 
                    : ""}`)
            .then(( res ) => {
                const { data } = res;
                if ("status" in data) {
                    dispatch({ type: "set", value: { 
                        error: "We couldn't find this character!",
                        loading: false
                    }});
                } else {
                    dispatch({ type: "set", value: { 
                        error: "",
                        characterData: data as CharacterDataType,
                        loading: false
                    }});
                }
            })
            .catch((e) => {
                dispatch({ 
                    type: "set", 
                    value: { 
                        error: "We couldn't find this character!",
                        loading: false
                }});
            });
    };

    /* Styling Portion */
    return (
        <Container sx={{ 
                width: '100%', 
                minWidth: '80vw',
                margin: 'auto'
            }}>
            <SearchBar state={state} dispatch={dispatch} fetchCharacter={fetchCharacter} />
            <CharacterInfo characterData={state.characterData} />
        </Container>
    );
};

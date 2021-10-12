import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LoadingButton from "@mui/lab/LoadingButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import { 
    RegionType, 
    RegionOptions, 
    CharacterDataType,
    characterLookupReducerStateType,
    characterLookupReducerActionType,
    characterLookupReducerActionValueType
} from "../../data/wow";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const SearchBar = ( props: {
    state: characterLookupReducerStateType, 
    dispatch: React.Dispatch<characterLookupReducerActionType>,
    fetchCharacter: () => void
}) => {
    const { state, dispatch, fetchCharacter } = props;
    const { characterName, realm, region, regionInputValue, loading } = state;

    return (
        <Box sx={{ padding: '1em 0', margin: '1em 0' }}>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField 
                            sx={{ width: '100%' }}
                            id="character-name-input"
                            label="Character Name" 
                            variant="outlined" 
                            value={characterName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch({
                                    type: "set",
                                    value: {
                                        characterName: e.target.value
                                    }
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Autocomplete
                            id="region-input"
                            options={RegionOptions}
                            value={region}
                            onChange={(event: any, newValue: RegionType | null) =>
                                dispatch({
                                    type: "set",
                                    value: { region: newValue }
                                })
                            }
                            inputValue={regionInputValue}
                            onInputChange={(event, newInputValue) => {
                                dispatch({
                                    type: "set",
                                    value: {
                                        regionInputValue: newInputValue
                                    }
                                })
                            }}
                            renderInput={(params) => <TextField {...params} label="Region" />}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField 
                            sx={{ width: '100%' }}
                            id="realm-input"
                            label="Realm" 
                            variant="outlined" 
                            value={realm}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                                dispatch({
                                    type: "set",
                                    value: {
                                        realm: e.target.value
                                    }
                                })
                            }
                        />
                    </Grid>
                    <Grid item xs={12} md={1}>
                        <LoadingButton 
                            sx={{ height: '100%', width: '100%' }}
                            className="character-lookup__form-submit"
                            variant="contained"
                            color={state.error ? "error" : "secondary"}
                            type="submit"
                            size="large"
                            loading={loading}
                            onClick={() => {
                                dispatch({
                                    type: "set",
                                    value: {
                                        loading: true
                                    }
                                })
                                fetchCharacter();
                            }}
                        >
                            {state.error
                                ? <ClearIcon fontSize="large" /> 
                                : <SearchIcon fontSize="large" /> }
                        </LoadingButton>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

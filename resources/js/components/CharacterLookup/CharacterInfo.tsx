import * as React from "react";
import Grid from '@mui/material/Grid';
import { CharacterDataType } from "resources/js/data/wow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Stack from "@mui/material/Stack";

export const CharacterInfo = ( props: {
    characterData: CharacterDataType | null
}) => {
    if (!props.characterData) return <BlankCharacterInfo />;

    const characterData = props.characterData as CharacterDataType;
    const {
        characterName,
        spec,
        gear,
        talents
    } = characterData;
    // class property omitted due to clash with react syntax
    const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};

    return (
        <Box className={`character-info__container`}>
            <Grid container spacing={1}>
                
                <Grid item xs={12}>
                    <Typography variant="h3" component="div">
                        {characterName}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {characterData.class} - {characterData.spec}
                    </Typography>
                </Grid>

                <Grid item xs={12} container 
                    className="character-info__talent">
                    <Stack direction="row" spacing={1} sx={{ maxWidth: '95%' }}>
                        {talents.map((talent, i) => 
                            <div key={`talent-${i}`}>
                                <a href={`https://www.wowhead.com/spell=${talent.id}`}>
                                    <img 
                                        className="character-info__talent-icon"
                                        src={`https://assets.rpglogs.com/img/warcraft/abilities/${talent.icon}`}
                                        alt={talent.name} />
                                </a>
                            </div>
                        )}
                    </Stack>
                </Grid>

                <Grid item xs={12} container spacing={1}
                    className="character-info__gear">
                    {gear.map((gear, i) => 
                        gear.id === 0 ? null 
                        : <Grid 
                            item xs={6} container
                            className="character-info__gear"
                            key={`character-info__gear--${i}`}>
                            <a href={`https://www.wowhead.com/item=${gear.id}`}>
                                <img 
                                    className="character-info__gear-icon"
                                    src={`https://assets.rpglogs.com/img/warcraft/abilities/${gear.icon}`} />
                            </a>
                            <Typography 
                                variant="subtitle1" 
                                component="div" 
                                className={`character-info__gear-name--${gear.quality}`}  
                                sx={{ flexGrow: 1 }}>
                                {gear.name}
                            </Typography>
                            <Typography 
                                variant="body1">
                                {gear.itemLevel}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Box>
    )
}

const BlankCharacterInfo = () => (
    <div>
        <h1></h1>
    </div>
)
export type characterLookupReducerStateType = {
    characterName: string;
    realm: string;
    region: RegionType|null;
    regionInputValue: string;
    characterData: CharacterDataType|null;
    loading: boolean;
    error: string;
}

export type characterLookupReducerActionValueType = {
    characterName?: string;
    realm?: string;
    region?: RegionType|null;
    regionInputValue?: string;
    characterData?: CharacterDataType|null;
    loading?: boolean;
    error?: string;
}

export type characterLookupReducerActionType = 
    | { type: "set"; value: characterLookupReducerActionValueType }
    | { type: "reset" };

export type RegionType = {
    label: string; 
    value: string; 
};

export const RegionOptions = [
    { label: 'CN', value: 'cn' },
    { label: 'US', value: 'us' },
    { label: 'EU', value: 'eu' },
    { label: 'KR', value: 'kr' },
    { label: 'TW', value: 'tw' },
];

export type CharacterLookupAPIResponseType = {
    status: number;
    error: string;
} | CharacterDataType


export type CharacterDataType = {
    encounterID: number;
    encounterName: string;
    class: string;
    spec: string;
    rank: number;
    outOf: number;
    duration: number;
    startTime: number;
    reportID: string;
    fightID: number;
    difficulty: number;
    characterID: number;
    characterName: string;
    server: string;
    percentile: number;
    ilvlKeyOrPatch: number;
    talents: TalentType[];
    gear: GearType[];
    soulbindPowers: SoulbindPowerType[];
    conduitPowers: ConduitPowerType[];
    legendaryEffects: LegendaryEffectsType[];
    total: number;
    estimated?: boolean;
};

type TalentType = {
    name: string;
    id: number;
    icon: string;
};

type GearType = {
    name: string;
    quality: string;
    id: number;
    icon: string;
    itemLevel: string;
    permanentEnchant?: string;
    temporaryEnchant?: string;
    bonusIDs?: string[];
    gems?: GemType[];
};

type GemType = {
    id: string;
    itemLevel: string
};

type SoulbindPowerType = {
    name: string;
    id: number;
    icon: string;
};

type ConduitPowerType = {
    name: string;
    id: number;
    icon: string
};

type LegendaryEffectsType = {
    name: string;
    id: number;
    icon: string;
};
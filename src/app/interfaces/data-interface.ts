export interface Fighter {
        name: string;
        surname: string;
    }

    export interface Match {
        time: string;
        image: string;
        fighters: Fighter[];
    }

    export interface Main {
        title: string[];
        description: string;
        matches: Match[];
    }
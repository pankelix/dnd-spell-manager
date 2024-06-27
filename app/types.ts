export type Spells = Spell[]

export interface Spell {
    higher_level: string[];
    index: string;
    name: string;
    desc: string[];
    range: string;
    components: string[];
    material?: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    school: {
        index: string;
        name: string;
        url: string;
    };
    classes: {
        index: string;
        name: string;
        url: string;
    }[];
    subclasses: {
        index: string;
        name: string;
        url: string;
    }[];
    url: string;
}
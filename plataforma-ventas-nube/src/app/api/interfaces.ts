

export interface Model {
    name?: string;
    associate?: (models: Record<string, Model>) => void;
}


export type Database = Record<string, Model>;
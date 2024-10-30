


export interface _Model {
    name?: string;
    associate?: (models: Record<string, _Model>) => void;
    
}



export type Database = Record<string, _Model>;
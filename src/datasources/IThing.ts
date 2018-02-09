export interface IThingTag {
    value: string;
    [key: string]: any;
}

export interface IThing {
    id: string;
    tags: {
        [key: string]: IThingTag;
    };
    [key: string]: any;
}

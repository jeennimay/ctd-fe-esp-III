export type Comic = {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    oldPrice: number;
    price: number;
    stock: number;
    characters: Characters;
    description: string;
};

export type Character = {
    id: number;
    name: string
    description: string
    modified: string
    thumbnail: {
        path: string
        extension: string
    },
    resourceURI: string
    comics: {
        available: number
        collectionURI: string
        items:
            {
                resourceURI: string
                name: string
            }[],
        returned: number
    },
    series: {
        available: number,
        collectionURI: string,
        items: 
            {
                resourceURI: string,
                name: string
            }[],
        returned: number
    },
    stories: {
        available: number,
        collectionURI: string,
        items:
            {
                resourceURI: string,
                name: string,
                type: string
            }[],
        returned: number
    },
    events: {
        available: number,
        collectionURI: string,
        items:
            {
                resourceURI: string,
                name: string
            }[],
        returned: number
    },
    urls:
        {
            type: string
            url: string
        }[],
}

export type Characters = {
    available: number;
    returned: number;
    collectionURI: string;
    items:
        {
            resourceURI: string;
            name: string;
            role: string;
        }[],
};
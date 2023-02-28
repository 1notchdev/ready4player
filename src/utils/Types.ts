export type Game = {
    name: string;
    image: string;
    salePrice: number;
    price: number;
    sale: string;
    tags: string[];
};

export type Article = {
    name: string;
    image: string;
    description: string;
    posted_at: string;
}

export type GameFormData = {
    email: string;
    firstname: string;
    lastname: string;
    company: string;
    website: string;
    title: string;
    description: string;
    video: string;
    files: File[];
}
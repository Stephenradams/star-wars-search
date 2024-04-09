
export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
};

export type Character = {
    id: string;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    url: string;
    homeworld: string;
};

export type Starship = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    url: string;
};

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    url: string;
};

export type FilmDetails = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: Character[];
    starships: Starship[];
    planets: Planet[];
};

export type PersonDetails = {
    name: string;
    height: string;
    mass: string;
    hair_color: string
};

export type StarshipDetails = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
};

export type Species = { 
    name: string;
    classification: string;
    designation: string;
    average_height: string;
    average_lifespan: string;
    eye_colors: string;
    hair_colors: string;
    url: string;
};


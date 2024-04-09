import { Film } from './definitions';
export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
};

export type Character = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
};

export type Starship = {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
};

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
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
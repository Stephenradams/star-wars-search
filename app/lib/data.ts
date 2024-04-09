export async function getPlanets() {
  const response = await fetch("https://swapi.dev/api/planets/");
  const data = await response.json();
  return data.results;
}
export async function getPeople() {
  const response = await fetch("https://swapi.dev/api/people/");
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
export async function getStarships() {
  const response = await fetch("https://swapi.dev/api/starships/");
  const data = await response.json();
  console.log(data.results);
  return data.results;
}
export async function getVehicles() {
  const response = await fetch("https://swapi.dev/api/vehicles/");
  const data = await response.json();
  return data.results;
}
export async function getSpecies() {
  const response = await fetch("https://swapi.dev/api/species/");
  const data = await response.json();
  return data.results;
}
export async function getFilms() {
  const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
  return data.results;
}

export async function getFilm(id: string) {
  const response = await fetch(`https://swapi.dev/api/films/${id}/`);
  const data = await response.json();
  return data;
}

export async function getPerson(id: string) {
  const response = await fetch(`https://swapi.dev/api/people/${id}/`);
  const data = await response.json();
  return data;
}

export async function getPlanet(id: string) {
  const response = await fetch(`https://swapi.dev/api/planets/${id}/`);
  const data = await response.json();
  return data;
}

export async function getStarship(id: string) { 
  const response = await fetch(`https://swapi.dev/api/starships/${id}/`);
  const data = await response.json();
  return data;
}

export async function getVehicle(id: string) {
  const response = await fetch(`https://swapi.dev/api/vehicles/${id}/`);
  const data = await response.json();
  return data;
}

export async function getSpecie(id: string) {
  const response = await fetch(`https://swapi.dev/api/species/${id}/`);
  const data = await response.json();
  return data;
}

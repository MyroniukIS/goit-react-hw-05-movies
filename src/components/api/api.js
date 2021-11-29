const KEY = '98387aa57f28e0e3eee6fec2a9b53ef3';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchApiTrending(page) {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`).then(response => {
    return response.json();
  });
}

export function fetchApiDetails(id) {
  return fetch(`${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US-ru`).then(
    response => {
      return response.json();
    },
  );
}

export function fetchApiSearch(query, page) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US-ru&query=${query}&page=1&include_adult=false`,
  ).then(response => {
    return response.json();
  });
}

export function fetchApiCast(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${KEY}&language=en-US-ru`,
  ).then(response => {
    return response.json();
  });
}
export function fetchApiReviews(id, page = 1) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=${page}`,
  ).then(response => response.json());
}

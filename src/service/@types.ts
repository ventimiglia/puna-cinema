export type RawMoviesResponse = {
  page:          number;
  results?:       RawResult[];
  total_pages:   number;
  total_results: number;
}

export type RawResult = {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export type RawMovieDetails = {
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface Genre {
  id:   number;
  name: string;
}

export type Movie = {
  id: number;
  title: string;
  poster: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  voteCount: number;
  popularity: number;
};

export type MovieDetails = {
  id: number;
  title: string;
  overview: string;
  backgropPath: string;
  budget: number;
  homepage: string;
  releaseDate: string;
  runtime: number;
  voteAverage: number;
  voteCount: number;
}

export const enum FilterBy {
  POPULAR = "popular",
  VOTE_AVERAGE = "top_rated",
  RELEASE_DATE = "now_playing",
}

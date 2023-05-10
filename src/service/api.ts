import { RawMovieDetails, RawMoviesResponse } from "./@types";

const apiService = () => {
  return {
    get: async <T>(pathname: string, query: any = ""): Promise<T> => {
      const baseUrl = process.env.NEXT_PUBLIC_URL_API_BASE;

      const url = new URL(`${baseUrl}/3${pathname}`);

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      };

      if (!!query) {
        Object.entries(query).forEach(([key, value]) => {
          url.searchParams.append(key, value as string);
        });
      }

      const response = await fetch(url.toString(), options);

      if (!response.ok) {
        throw new Error(`Fetch failed with status ${response.status}`);
      }
      const data = await response.json();
      return data as T;
    },
  };
};

export const getMoviesByName = async (name: string, page: number) => {
  const response = await apiService().get<RawMoviesResponse>("/search/movie", {
    query: name,
    page: page,
  });
  return response;
};

export const getMovieById = async (id: number | null) => {
  const response = await apiService().get<RawMovieDetails>(`/movie/${id}`);
  return response;
};

export const getMoviesByFilter = async (
  filter: string | null,
  page: number
) => {
  const response = await apiService().get<RawMoviesResponse>(
    `/movie/${filter}`,
    {
      page: page,
    }
  );

  return response;
};

export const getMovies = async (search: string, page: number) => {
  const response = await apiService().get<RawMoviesResponse>(search, {
    page: page,
  })
  return response;
}
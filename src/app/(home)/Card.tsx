import React from "react";
import { CardContent, CardTitle, CardContainer, Overview } from "../styles";
import cx from "classnames";
import Image from "next/image";
import { FilterBy, RawResult } from "@/service/@types";

type Props = {
  movie: RawResult;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  filterApplied: FilterBy | null;
};

const Card = ({ movie, onClick, filterApplied }: Props) => (
  <CardContainer onClick={onClick}>
    <Image
      src={
        movie.poster_path
          ? `${process.env.NEXT_PUBLIC_URL_API_POSTER_BASE}/t/p/w500${movie.poster_path}`
          : "/poster.jpg"
      }
      alt={movie.title}
      width={120}
      height={150}
      className="rounded-2xl w-auto h-auto"
    />
    <CardContent>
      <div className="grid col-span-2 md:col-span-3 md:border-r-2 md:border-white md:pr-4">
        <CardTitle>{movie.title}</CardTitle>
        <Overview>{movie.overview}</Overview>
      </div>
      <div className="grid col-span-2 md:col-span-1 content-between">
        <span
          className={cx({
            "text-lime-500": filterApplied === FilterBy.POPULAR,
          })}
        >
          <b>Popularity: </b>
          <p>{movie.popularity}</p>
        </span>
        <span
          className={cx({
            "text-lime-500": filterApplied === FilterBy.VOTE_AVERAGE,
          })}
        >
          <b>Vote Average: </b>
          <p>{movie.vote_average}</p>
        </span>
        <span
          className={cx({
            "text-lime-500": filterApplied === FilterBy.RELEASE_DATE,
          })}
        >
          <b>Release Date: </b>
          <p>{!!movie?.release_date && movie.release_date.toLocaleString()}</p>
        </span>
      </div>
    </CardContent>
  </CardContainer>
);

export default Card;

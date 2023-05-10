import { ModalOverview, ModalPill, ModalText, ModalTitle } from "@/app/styles";
import Modal from "@/components/Modal";
import { MovieDetails, RawMovieDetails } from "@/service/@types";

type Props = {
  modalOpen: boolean;
  handleCloseModal: () => void;
  movie: RawMovieDetails;
  children: React.ReactNode;
};

export const HomeModal = ({
  modalOpen,
  handleCloseModal,
  movie,
  children
}: Props) => (
  <Modal
    isOpen={modalOpen}
    onClose={handleCloseModal}
    backgroundimage={movie.backdrop_path}
  >
    <div className="flex gap-2 md:gap-8 justify-center items-center mb-4">
      <ModalTitle>{movie.title}</ModalTitle>
      {children}
    </div>
    <ModalOverview>{movie.overview}</ModalOverview>
    <div className="flex items-center mb-4">
      {movie.genres.map((genre) => (
        <ModalPill key={genre.id}>{genre.name}</ModalPill>
      ))}
    </div>
    <b>Vote Avergage: </b>
    <ModalText>{movie.vote_average}</ModalText>
    <b>Budget: </b>
    <ModalText>{movie.budget}</ModalText>
    <b>Homepage: </b>
    <a href={movie.homepage} target="_blank">
      {movie.homepage}
    </a>
  </Modal>
);

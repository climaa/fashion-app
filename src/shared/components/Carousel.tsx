import useMovieList from "@api/discoverMovies";

const Carousel: React.FC<{ text: string }> = ({ text }) => {
  const { data, isLoading } = useMovieList();
  console.log(data)
  return <div>{text}</div>;
};

export default Carousel;

import HomeClient from "./(home)/Home";

export const metadata = {
  title: "Puna Cinema",
  description: "The new list of movies",
};

export default async function Home() {
  return <HomeClient />;
}

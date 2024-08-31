import ImageSlider from "../components/ImageSlider";
import SearchBar from "../components/SearchBar";

export default function Spara() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 ">
      <h1>SPÅRA DINA PAKET</h1>
      <SearchBar />
      <section>
        Alla leveransföretag fungerar smidigt på vår spårningssida. Du kan enkelt följa ditt paket i
        realtid, oavsett företag.
      </section>
      <ImageSlider />
    </div>
  );
}

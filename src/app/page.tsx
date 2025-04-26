import CardBanner from "@/components/card/CardBanner";
import Dropdow from "@/components/dropdowm/Dropdowm";
import  Search  from "@/components/inputs/Search";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex flex-col items-stretch w-full min-h-36">
        <h1 className={ "flex items-baseline justify-center h-25 text-3xl text-[#CECECE] pt-2"}>
          Movie review
        </h1>
        <div className="flex justify-between pl-5 pr-5 pt-2 pb-2 bg-[rgb(17,16,16,0.75)] h-11">
          <Search/>
          <Dropdow/>
        </div>
      </header>

      <main className="flex flex-1 bg-[#F5F5DC] p-10">
        <div className="flex flex-wrap justify-around gap-5">
          <CardBanner
            src= "https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg"
            alt= "galaxia"
            titulo= "Andromeda"
            genero= "SIFI"
            direcao="Ddd"
            avaliacao= "Avaliação"
            ano="1980"
          />
          <CardBanner
            src= "https://cdn.pixabay.com/photo/2014/02/24/18/20/bandit-273813_1280.jpg"
            alt= "Wanted"
            titulo= "Wanted"
            genero= "SIFI"
            direcao="Ddd"
            avaliacao= "Avaliação"
            ano="2021"
          />
        </div>
      </main>
    </div>
  );
}

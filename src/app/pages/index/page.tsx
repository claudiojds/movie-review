import CardBanner from "@/app/components/card/CardBanner";


export default function Index () {
    return(
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
    );
};
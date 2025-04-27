import Search from "../inputs/Search";
import Dropdowm from "../dropdowm/Dropdowm";

export default function Cabecalho() {
  return (
    <header className="flex flex-col w-full min-h-80">
      <h1 className={"flex items-baseline justify-center h-25 text-5xl text-[rgba(97,92,92,0.75)] pt-2"}>
        Filmes para assistir
      </h1>
      <div className="flex mt-auto justify-between items-center pl-5 pr-5 pt-2 pb-2 bg-[rgb(17,16,16,0.75)] h-20">
        <Search />
        <Dropdowm />
      </div>
    </header>
  );
}

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  direcao: string;
  ano: string;
  avaliacao: string;
};

export default function CardBanner({ src, alt, titulo, genero, direcao, ano, avaliacao }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-110 w-60 rounded-lg shadow-md hover:shadow-[rgb(17,16,16,0.75)]">
      <div className="border h-67 w-50 relative">
        <Image 
          src={src} alt={alt} 
          layout="fill"
        />
        <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-gradient-to-b to-zinc-600 h-10">
          <p>{avaliacao}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <strong className="py-1">{titulo}</strong>
        <div className="flex flex-col w-50">
          <p>Gênero: {genero}</p>
          <p>Direção: {direcao}</p>
          <p>Ano: {ano}</p>
          <p>Avaliação: {avaliacao}</p>
        </div>
      </div>
    </div>
  );
}
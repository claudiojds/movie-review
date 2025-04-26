import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  titulo: string;
  genero: string;
  avaliacao: string;
};

export default function CardMovie({ src, alt, titulo, genero, avaliacao}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center h-65 w-50">
      <div className="w-full h-full relative">
        <Image 
            src={src} alt={alt} 
            layout="fill"
            // objectFit="cover" // Garante que a imagem não distorça, mas ocupe o espaço
            // width={200} height={200} 
        />
         <div className="
         flex flex-col justify-center items-center absolute bottom-0 
         left-0 w-full bg-gradient-to-t from-gray-450 to-zinc-900 h-15"
         >
         </div>
      </div>
      <div className="flex flex-col justify-center items-center absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-450 to-zinc-900 h-15">
        <strong>{titulo}</strong>
        <div className="flex flex-col">
        <p>Genero: {genero}</p>
        <p>Avaliação: {avaliacao}</p>
        </div>
      </div>
    </div>
  );
}

import Index from "./pages/index/page";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-1 bg-[#F5F5DC] p-10">
        <Index/>
      </main>
    </div>
  );
}

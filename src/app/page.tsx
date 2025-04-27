import Index from "./pages/index/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex flex-1 h-full bg-[#F5F5DC] p-5">
        <Index/>
      </main>
    </div>
  );
}

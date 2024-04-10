import Landing from "./components/homepage/Landing";
import RecentScans from "./components/homepage/RecentScans";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Landing />
      <RecentScans />
    </main>
  );
}

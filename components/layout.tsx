import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-4 px-4 h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}

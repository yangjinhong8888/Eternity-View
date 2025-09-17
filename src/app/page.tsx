import Header from "@/components/app/layout/header/Header";
import Footer from "@/components/app/layout/footer/Footer";

export default function Home() {
  return (
      <div className="relative">
        <Header />
        <div className="h-screen p-20 grid place-items-center">
          HomePage
        </div>
        <Footer className="absolute bottom-0 h-10 px-52 flex justify-center items-center">
          本站仅供学习参考，请勿用于商业用途。
        </Footer>
      </div>
  );
}

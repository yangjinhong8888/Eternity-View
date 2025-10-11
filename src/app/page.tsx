import Header from "@/components/app/layout/header/Header"
import Footer from "@/components/app/layout/footer/Footer"

export default function Home() {
  return (
    <div className={"relative"}>
      <Header />
      <div className={"grid h-screen place-items-center bg-random2 p-20"}>
        HomePage
      </div>
      <Footer
        className={
          "absolute bottom-0 flex h-10 items-center justify-center px-52"
        }
      >
        本站仅供学习参考，请勿用于商业用途。
      </Footer>
    </div>
  )
}

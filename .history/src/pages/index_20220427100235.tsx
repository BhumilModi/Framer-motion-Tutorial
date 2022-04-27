import BottleContainer from "@components/BottleContainer";
import Header from "@components/Header";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
      </main>
    </div>
  );
}

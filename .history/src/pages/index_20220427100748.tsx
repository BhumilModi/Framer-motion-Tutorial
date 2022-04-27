import BottleContainer from "@components/BottleContainer";
import Header from "@components/Header";
import LeafContainer from "@components/LeafContainer";
import TextContainer from "@components/TextContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TextContainer />
        <BottleContainer />
        <LeafContainer />
      </main>
    </div>
  );
}

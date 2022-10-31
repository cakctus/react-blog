import FirstSection from "./Sections/First/FirstSection"
import LatestSection from "./Sections/Latest/LatestSection"
import Container from "./Sections/Container/Container"
import Background from "./Sections/Background/Background"
import PopularList from "./Sections/Popular/PopularList"
import Last from "./Sections/Last/Last"

type Props = {}

const Main = (props: Props) => {
  return (
    <>
      <FirstSection />
      <LatestSection />
      <Container />
      <Background />
      <PopularList />
      <Last />
    </>
  )
}

export default Main

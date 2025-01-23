import { HiddenNavProvider } from "@/context/hiddenNav/HiddenNavProvider";
import Header from "./Header";
import HiddenNav from "./HiddenNav";

export default function NavBar() {
  return (
    <HiddenNavProvider>
      <Header />
      <HiddenNav />
    </HiddenNavProvider>
  );
}

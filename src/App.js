import React from "react";
import { useSelector } from "react-redux";

import Menubar from "./components/Menubar";
import PhotoLibrary from "./pages/PhotoLibrary";
import Layouts from "./pages/Layouts";
import BookFormat from "./pages/BookFormat";

function App() {
  const tab = useSelector((state) => state.tab.value);
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4 bg-white">
      <Menubar />
      {tab === 0 ? <PhotoLibrary /> : tab === 1 ? <Layouts /> : <BookFormat />}
    </div>
  );
}

export default App;

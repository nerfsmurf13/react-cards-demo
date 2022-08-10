import { Routes, Route } from "react-router-dom";
import AllCardsPage from "./pages/AllCards";
import FavoritesCardsPage from "./pages/Favorites";
import NewCardPage from "./pages/NewCard";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<AllCardsPage />} />
        <Route path="/new" element={<NewCardPage />} />
        <Route path="/favs" element={<FavoritesCardsPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { PanelPage, AboutPage, DiscoverPage, AccountPage, PreferencesPage, NotFoundPage } from "@/pages";

export const Router = () => {
  return(
    <Routes>
      <Route path='/' element={<PanelPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/discover' element={<DiscoverPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/preferences' element={<PreferencesPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
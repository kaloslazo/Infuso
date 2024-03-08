import { Navigate, Route, Routes } from "react-router-dom";
import { PanelPage, AboutPage, DiscoverPage, AccountPage, PreferencesPage, NotFoundPage, StarredPage, ReadLaterPage, LibraryPage } from "@/pages";

export const Router = () => {
  return(
    <Routes>
      {/* Redirect */}
      <Route path='/' element={<Navigate to='/feed' replace />} />

      {/* Sidebar | globals  */}
      <Route path='/feed' element={<PanelPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/discover' element={<DiscoverPage />} />
      <Route path='/library' element={<LibraryPage />} />
      <Route path='/account' element={<AccountPage />} />
      <Route path='/preferences' element={<PreferencesPage />} />

      {/* Auxiliar sidebar | specific */}
      <Route path='/feed/starred' element={<StarredPage />} />
      <Route path='/feed/read-later' element={<ReadLaterPage />} />
      
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};
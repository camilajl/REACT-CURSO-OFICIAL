import { Route, Routes } from "react-router-dom"

import { LoginPage } from "../auth/pages"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"



export const AppRouter = () => {
  return (
    <>
        <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        {/* <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPages />} /> */}
        <Route path='login' element={<LoginPage />} />
        <Route path='/*' element={<HeroesRoutes/>} />
        {/* <Route path='/*' element={<Navigate to='/marvel' />} /> */}
    </Routes>
    </>
  )
}

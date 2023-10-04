import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from '../../ui/components'
import { MarvelPage,  DcPages, Search, Hero } from "../../heroes/pages"


export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <div>
    <Routes className='container'>
    {/* <Route path='/' element={<HomePage />} /> */}
        <Route path='marvel' element={<MarvelPage />} />
        <Route path='dc' element={<DcPages />} />

        <Route path='search' element={<Search />} />
        <Route path='hero/:id' element={<Hero />} />
       
        <Route path='/*' element={<Navigate to='/marvel' />} />
    </Routes>
    </div>
     
    </>
  )
}

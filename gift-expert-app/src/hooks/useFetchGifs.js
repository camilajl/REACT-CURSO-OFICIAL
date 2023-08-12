import { useEffect, useState} from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }
//***useEffect ---> sirve para disparar un efecto solo en una parte especifica, ayuda evitar loops y re render o refetch
    useEffect (() => { //2 argumentos 1. el efecto(funcion) 2.dependencias(condiciones bajo las cuales quiero volver a ejecutar el callbac)
        getImages();
    },) //si no pongo dependencias el hoo solo se eejcuta una vez


  return {
    images: images,
    isLoading
  }
}

import React, { ChangeEvent, FormEvent, useState } from "react";

import { Container } from "./styles";
import api from '../../../services/api'
import Input from "../../Input";
import Dropdown from "../../Dropdown";
import { useHistory } from "react-router-dom";


const CreateProduct: React.FC = () => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ type, setType ] = useState('Tipo')
  const [ price, setPrice ] = useState('')
  const [ images, setImages ] = useState<File[]>([])
  const [ previewImages, setPreviewImages ] = useState<string[]>([])

  const history = useHistory()
  
  function handleSelectImages(event: ChangeEvent<HTMLInputElement>){
    if(!event.target.files){
      return
    }
    const selectedImages = Array.from(event.target.files)
    setImages(selectedImages)
    
    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })

    setPreviewImages(selectedImagesPreview)
  }

  async function handleSubmit(event: FormEvent){
    event.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('description', description)
    data.append('type', type)
    data.append('price', String(price))
    
    images.forEach(image =>{
      data.append('images', image)
    })  
    await api.post('products', data)
    history.push('/menu')
  }

  return (
    <Container>
      <h1>CreateProduct</h1>

      <form onSubmit={handleSubmit}>
          <Input state={setName} placeholder="Nome" />
          <Input max={300} type="longText" state={setDescription} placeholder="Descrição" />

          <div className="row">
            <Input state={setPrice} placeholder="Preço"/>
            <Dropdown title={type}>
              <div onClick={() => setType('bebidasquentes')}>Bebidas Quentes</div>
              <div onClick={() => setType('bebidasfrias')}>Bebidas Frias</div>
              <div onClick={() => setType('lanches')}>Lanches</div>
              <div onClick={() => setType('salgados')}>Salgados</div>
            </Dropdown>
          </div>
        <div className="ImageBlock">
          <h1>Fotos</h1>

          <input multiple onChange={handleSelectImages} type="file" id="imageFile"/>

          <div className="imagesContainer">
            <label htmlFor="imageFile" className="previewImage">+</label>  
            
            {previewImages.map(image => {
              return(
                <img  className="previewImage" key={image} src={image}/>
              )
            })}

          </div>

        </div>

        <button className="submitButton" type="submit">Enviar</button>
      </form>
    </Container>
  );
};

export default CreateProduct;

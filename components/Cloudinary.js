import  {useState} from 'react';
import Axios from 'axios'
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

function Cloudinary(props) {
    // handles cloudinary upload and providing the link for a parent component
    
    const pictureUpload=(event, imageSelected)=> {
        console.log(event.target, imageSelected)
       const formData= new FormData();
       formData.append('file', imageSelected);
       console.log(publicRuntimeConfig.cloudPreset)
       formData.append('upload_preset', publicRuntimeConfig.cloudPreset);
       Axios.post(
           "https://api.cloudinary.com/v1_1/"+publicRuntimeConfig.cloudName+"/image/upload",
           formData
       )
       .then(response=>{
        
        console.log(response.data.url)
        console.log(event.target.parentElement.previousSibling.value)
        event.target.value="";  
        props.getImgUrl(response.data.url);
        })
        .catch(e=>{console.log(e, 'Fail to upload image')})
    }

    return(
        <div className="w-full flex flex-col justify-center items-center " >
            <input type='file' id="selectImage" hidden className='w-full border-0 m-2 rounded-md' onChange={(event)=>{pictureUpload(event, event.target.files[0])}}/>
            <div className="w-full m-3 p-1 text-sm border text-center rounded-lg navbar__item" onClick={()=>{document.getElementById("selectImage").click()}}>Upload file</div>
        </div>
    )
}

export default Cloudinary;

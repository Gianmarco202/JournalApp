
import { fileUpload } from "../../src/helpers/fileUpload";
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'ditdkpvhj',
    api_key: '767928626489631',
    api_secret: 'QtPGr-UHpBezxBHaa1owdyR8LyU',
    secure: true 
});

jest.useRealTimers();

describe('Pruebas en fileUpload', () => {

    test('debe de subir el archivo correctamente a cloudinary', async() => {
        const imageUrl= 'https://www.shutterstock.com/image-photo/lit-light-bulb-on-mossy-260nw-2256258745.jpg';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        
        const url = await fileUpload(file)
        expect(typeof url).toBe('string')
  
        const segment = url.split('/');
        const imageId = segment[segment.length - 1 ].replace('.jpg','');

        const cloudResp = await cloudinary.api.delete_resources(['journal/' + imageId], {
            resource_type: 'image'
        });
        console.log({cloudResp})
    });

    test('debe retornar null',async () => { 
        const file = new File([], 'foto.jpg');
        
        const url = await fileUpload(file)
        expect(url).toBe(null)

  
    })
})
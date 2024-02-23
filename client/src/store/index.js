import {proxy} from 'valtio';

const state = proxy({
intro:true,
color:'#EFBD48',
btncolor:'#EFBD48',
isLogoTexture:true,
isFullTexture:false,
logoDecal:'./shirtgoat.png',
fullDecal:'./shirtgoat.png'
});

export default state;
/**
 * @description asynchronous function to get the images from the app endpoint
 */
/* Dynamically update the UI of my app.*/
//Retrieve the stored resized images from the server.
const updateUI = () => {
    document.querySelector('.bromo__gallery__content__image').innerHTML = '<img src="http://localhost:3000/api?w=500&h=500&img=shape&ext=jpg" alt="resize_img_500_500"/>';
    document.querySelector('.imageb').innerHTML = '<img src="http://localhost:3000/api?w=300&h=300&img=shape&ext=jpg" alt="resize_img_300_300"/>';
    document.querySelector('.imagec').innerHTML = '<img src="http://localhost:3000/api?w=200&h=200&img=shape&ext=jpg" alt="resize_img_200_200"/>';
    document.querySelector('.bromo__gallery__container').style.display = 'block';
}
updateUI();






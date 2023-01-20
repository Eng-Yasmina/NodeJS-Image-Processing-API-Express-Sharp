/**
 * Define Global Variables
 */

const form = document.getElementById('form');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');
const goHome = document.getElementById('goHome');



/**
 * End Global Variables
 * Starts Helper Functions
 */

/**
 * @description displays an err msg if the user didn't upload any file before submitting
 */
const noFileErrMsg = () => {
    error.style.display = 'block';
    setTimeout(() => {
        error.style.display = 'none'
    }, 2000);
}

/**
 * @description displays an err msg if the the uploaded file is not an image
 */
const notImageErrMsg = () => {
    error2.style.display = 'block';
    setTimeout(() => {
        error2.style.display = 'none'
    }, 2000);
}

/**
 * @description Fade out Effect
 */
function fadeOutEffect(element ='') {
    const fadeElement = document.querySelector(element);
    const fadeEffect = setInterval(function () {
        if (!fadeElement.style.opacity) {
            fadeElement.style.opacity = 1;
        }
        if (fadeElement.style.opacity > 0) {
            fadeElement.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}


/**
 * End Helper Functions
 * Starts Main Functions
 */

/**
 * 
 * @description validates uplaoding a file before clicking submit and validates that the uploaded file is an image
 */
const validateForm = (e) => {
    // to prevent the default action refreshing the page after submitting
    e.preventDefault();
    // thumbnail is a local variable because i want to get it's value and validate it after the user hit generate
    const thumbnail = document.getElementById('thumbnail').value;
    // validates uplaoding a file before clicking submit
    if (thumbnail) {
        //validates that the uploaded file is an image
        console.log(thumbnail);
        // split the thumbnail file path and get the extension
        const thumbnailArr = thumbnail.split('.');
        const extension = thumbnailArr.pop();
        console.log(extension);
        const expectedExtensions = ['jpg', 'jpeg', 'png'];
        // make sure that the entered image's extension is 'jpg' or 'jpej' or 'png'
        if (expectedExtensions.includes(extension)) {
            const formData = new FormData(form);
            //post the image to the server then retrieve the resized one then dynamically update the UI
            postImage('/api/resizedImages', formData).then(() => {
                retrieveData();
            }).then(() => {
                setTimeout(() => {
                    updateUI();
                }, 2000);
            });
            return true; 
        } else {
            // throw error
            notImageErrMsg();
        }
        return true;
    } else {
        noFileErrMsg();
    }
}

/**
 * @description async fn to POST the uploaded image in server
 */
const postImage = async (url = '', data) => {
    await fetch(url, {
        method: 'POST',
        body: data
    });
    fadeOutEffect('.promo__logo');
    fadeOutEffect('.social');
    fadeOutEffect('.promo__description');
};


/**
 * @description asynchronous function to fetch the images from the app endpoints and to check the status before retrieving them.
 */
const retrieveData = async () => {
    const request = await fetch('/api/resizedImages/500_500', { method: 'GET' });
    try {
        if (request.status === 200) {
            console.log(request.status);
        }
    } catch (error) {
        console.log(error);
    }
}

/* Dynamically update the UI of my app.*/
//Retrieve the stored resized images from the server.
const updateUI = () => {
    document.querySelector('.promo__main').style.display = 'none';
    document.querySelector('.promo__logo').style.display = 'none';
    document.querySelector('.bromo__gallery__content__image').innerHTML = '<img src="http://localhost:3000/api/resizedImages/500_500" alt="resize_img_500_500"/>';
    document.querySelector('.imageb').innerHTML = '<img src="http://localhost:3000/api/resizedImages/300_300" alt="resize_img_300_300"/>';
    document.querySelector('.imagec').innerHTML = '<img src="http://localhost:3000/api/resizedImages/200_200" alt="resize_img_200_200"/>';
    document.querySelector('.bromo__gallery__container').style.display = 'block';
}

const homePage = () => {
    window.location.reload();
}

/**
 * End Main Functions
 * Begins Events
 */
form.addEventListener('submit', validateForm);
goHome.addEventListener('click', homePage);



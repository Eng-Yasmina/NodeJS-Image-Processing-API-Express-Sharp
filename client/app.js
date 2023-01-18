/**
 * Define Global Variables
 */
const form = document.getElementById('form');
const error = document.getElementById('error');
const error2 = document.getElementById('error2');


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
 * End Helper Functions
 * Starts Main Functions
 */

/**
 * 
 * @description validates uplaoding a file before clicking submit and validates that the uploaded file is an image
 */
const validateForm = (e) => {
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
            return true;
        } else {
            // to prevent the action of going to the gallery page
            e.preventDefault();
            // throw error
            notImageErrMsg();
        }
        return true;
    } else {
        e.preventDefault();
        noFileErrMsg();
    }
}

/**
 * End Main Functions
 * Begins Events
 */
form.addEventListener('submit', validateForm);



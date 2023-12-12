const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userID = 'u123'
const user = {
    name: 'Mert',
    age: 23,
    hobbies: ['Sports', 'Music']
};


storeBtn.addEventListener('click', () => {
    sessionStorage.setItem('uid', userID);
    localStorage.setItem('user', JSON.stringify(user));
});

retrBtn.addEventListener('click', () => {
    const extractedID = sessionStorage.getItem('uid');
    const extractedUser = JSON.parse(localStorage.getItem('user'));
    if (extractedID) {
        console.log(`Got the id - ${extractedID}`);
        console.log(extractedUser);
    } else {
        console.log('Could not find id');
    }
});
const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userID = 'u123'
    document.cookie = `uid=${userID}`;
});

retrBtn.addEventListener('click', () => {
    console.log(document.cookie);
});
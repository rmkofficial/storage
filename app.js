const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
    const userID = 'u123'
    const user = {
        name: 'Mert',
        age: 23,
        hobbies: ['Sports', 'Music']
    };
    document.cookie = `uid=${userID}`;
    document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener('click', () => {
    const cookieData = document.cookie.split(';');
    cookieData.map(i => console.log(i.trim()));
}); 
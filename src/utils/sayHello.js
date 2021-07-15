const arrHello = ['Салам алейкум', 'Hello', 'Ahlan wa sahlan', 'Marhaba', 'Hola', 'Прывитанне', 'Здравейте', 'Jo napot', 'Chao', 'Aloha', 'Hallo', 'Geia sou', 'Гамарджоба', 'Shalom', 'Selamat', 'Godan daginn', 'Buenas dias', 'Buon giorno', 'Ave', 'Lab dien, sveiki', 'Sveikas', 'Guten Tag', 'Goddag', 'Dzien dobry', 'Ola', 'Buna', 'Здраво', 'Dobry den', 'Sawatdi', 'Merhaba', 'Салам алейкум', 'Привіт', 'Paivaa', 'Bonjour', 'Namaste', 'Zdravo', 'Dobry den', 'God dag', 'Saluton', 'Tervist', 'Konnichi wa'];

function sayHello(arr){
    const maxIndex = arr.length - 1;
    const indexOfHello = Math.floor(Math.random() * maxIndex);
    return arr[indexOfHello]
}

export const HELLO = sayHello(arrHello);

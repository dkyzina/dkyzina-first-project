function gameOne() {
    let month = prompt('введите номер месяца');
    if (month >= 1 && month <= 2 || month == 12) {
        alert('Зима');
    } else if (month >= 3 && month <= 5) {
        alert('Весна');
    } else if (month >= 6 && month <= 8) {
        alert('Лето');
    } else if (month >= 9 && month <= 11) {
        alert('Осень');
    } else {
        alert('Нет такого месяца');
    }
}


function gameTwo() {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let mixedList = list.sort(() => Math.random() - 0.5);
    alert(mixedList);

    const askOne = prompt('Чему равнялся первый элемент массива?');
    const askTwo = prompt('Чему равнялся последний элемент массива?');

    if (askOne == mixedList[0] && askTwo == mixedList[6]) {
        alert('Молодец!')
    } else if (askOne == mixedList[0] || askTwo == mixedList[6]) {
        alert('Вы были близки к победе!')
    } else {
        alert('Неверно')
    }
}

const gameThree = () => {

    const state = {
        question: 'Не лает, не кусается, и точно так же называется.',
        answer: '@',
        tip: ['Подсказка 1: это живет на клавиатуре', 'Подсказка 2: есть в каждом email']
    }
    let userAnswer = prompt(state.question);

    for ( let tryNumber = 0; tryNumber < 3; tryNumber++){
        if (userAnswer == state.answer){
                 alert('Молодец, угадал!');
                 break
        } else if (tryNumber <2) {
            userAnswer = prompt(state.tip[tryNumber]);
        } else {
            alert('Попыток больше нет. Ответ: @')
            break
        }
    }
}




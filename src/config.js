
//Опрос (вопросы и ответы) ("answer" - свой вариант)

export const quiz = [
    {
        question:'Будете ли вы на свадьбе?',
        options: ['Да', 'Нет']
    },
    {
        question: 'Какие обязательные блюда вы хотели бы увидеть на свадебном банкете?',
        options: ['Нет предпочтений', 'answer']

    },
    {
        question: 'Есть ли у вас какие-либо пищевые аллергии или диетические ограничения, о которых мы должны знать при подготовке меню?',
        options: ['Нет', 'answer']
    },
    {
        question: 'Какие у вас предпочтения по алкоголю?',
        options: ['Шампанское', 'Вино', 'Водка', 'Коньяк', 'answer']
    },
]

//Ответы на вопросы

export const questionsAndAnswers = [
    ['Будет ли дресс-код?', 'Мы будем рады, если девушки выберут вечерние или коктейльные платья в пастельных тонах, а мужчины — костюм.'],
    ['Нужно ли дарить цветы?', 'Просим вас не дарить цветы, так как на следующий день мы улетаем в свадебное путешествие и не успеем насладиться красивыми букетами.'],
    ['Какие подарки предпочтительны?', 'Мы составили wish-лист подарков, которые были бы нам особенно приятны или полезны. Но мы будем рады и сюрпризам, а также поздравлениям в конвертах.'],
]
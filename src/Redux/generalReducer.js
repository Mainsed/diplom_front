const initialState = {
  language: 1,
  partnersEmploymentInfo: [
    {
      name: 'Extrums',
      link: 'https://extrums.com/',
      headerText: [`Ищешь место, где получить практический опыт в направлении Front-end (React.js) или Back-end (Node.js) с персональным ментором, стипендией и возможностью получить оффер по окончании стажировки?`],
      mainText: ['Тогда компания Extrums (https://jobs.dou.ua/companies/extrums/) приглашает тебя на 3-х месячную оплачиваемую стажировку. Мы предлагаем тебе все то, что перечислено ниже и даже больше — работу над реальными кейсами.',
        'Вот что мы предлагаем нашим будущим сотрудникам 😏',
        '▪️гибкий график работы, оплачиваемый отпуск и больничный, выходные на все государственные праздники;',
        '▪️возможность работать удаленно;',
        '▪️регулярные корпоративы;',
        '▪️компенсация за обучающие курсы, английский язык, занятия спортом;',
        '▪️комфортные условия работы — офис со всеми удобствами  в самом центре города на проспекте Маяковского;',
        '▪️денежные бонусы за присоединение к компании;',
        '▪️оплачиваемые программы стажировок.']
    },
    {
      name: 'Computools',
      link: 'https://computools.com/',
      headerText: [``],
      mainText: [`Компания Computools предлагает студентам широкие возможности развития:.`,
        `▪️Стажировка.`,
        `▪️Пассивная стажировка.`,
        `▪️Практика.`,
        `▪️Обучение английским с техническим обучением.`,
        `Прилагаем документ, в котором вы детальнее сможете ознакомиться со всеми видами сотрудничества.`,
        `Просим заполнить небольшую анкету, чтобы команда Computools могла с вами связаться и предложить вам наиболее подходящий вариант!`,
        `https://docs.google.com/forms/d/e/1FAIpQLSeOGutSFnuatzJ9-GZpvlyDEKrV057t2i4q8uF4W2dMTOx-yw/viewform`]
    }
  ],
  employmentMaterials: [
    {
      info: 'Зустріч з представниками фірм Computools, Extrums, GroupBWT, Natife',
      link: 'https://youtu.be/LVw3gPTrmLA'
    }
  ],
  faqList: [
    {
      id: '1',
      question: 'question test1',
      answear: 'answear test1'
    },
    {
      id: '2',
      question: 'question test2',
      answear: 'answear test2'
    },
    {
      id: '3',
      question: 'question test3',
      answear: 'answear test3'
    },
    {
      id: '4',
      question: 'question test4',
      answear: 'answear test4'
    },
  ]
};

const SET_LANGUAGE = 'SET_LANGUAGE';

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return {
        ...state,
        ...action.data
      };
    }
    default:
      return state;
  }
}

export const setLanguage = (language) => {
  return { type: SET_LANGUAGE, data: { language } }
}

export const getUserData = () => async dispatch => {
  //const resp = 
  // if (resp.data.resultCode === 0) {
  //     const {id, login, email} = resp.data.data;
  //     dispatch(setUserData(id, email, login, true));
  // }
}

export default generalReducer;
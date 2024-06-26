import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice.js';

/*Оголошення константи rootReducer і ініціалізація її результатом виклику combineReducers.
Цей ред'юсер буде об'єднувати всі інші ред'юсери.
combineReducers: Функція, яка приймає об'єкт, де ключі відповідають різним частинам стану,
а значення - це ред'юсери, які відповідають за ці частини.*/
const rootReducer = combineReducers({
  /*Визначає частину стану contacts, яка буде оброблятися contactsReducer. Обробник ми отримуємо з відповідного слайсера,
який ми імпортуємо.*/
  contacts: contactsReducer,
  /*Визначає частину стану filters, яка буде оброблятися filtersReducer. Обробник ми отримуємо з відповідного слайсера,
який ми імпортуємо..*/
  filters: filtersReducer,
});
/*Оголошення і експорт константи store, яка ініціалізується результатом виклику configureStore.
Це створює новий Redux store.
export: Дозволяє використовувати store в інших файлах.*/
export const store = configureStore({
  /*Передача rootReducer як основного ред'юсера для створення стора. 
Це означає, що об'єднаний ред'юсер буде відповідати за обробку всього стану додатка.*/
  reducer: rootReducer,
});

/* Питання. Чому в стор можна передавати тільки один редюсер? Чому ми використовуємо додаткову змінну,
яка поєднує два окремих редюсера?*/
/*Відповідь. У Redux store може бути тільки один "кореневий" ред'юсер. Однак, ваш додаток часто має різні частини стану,
які повинні оброблятися різними ред'юсерами. Це робить код більш організованим і легшим для підтримки.
Щоб об'єднати кілька ред'юсерів в один кореневий ред'юсер, ми використовуємо функцію combineReducers від Redux Toolkit 
(або від основного Redux, якщо ви не використовуєте Toolkit). */

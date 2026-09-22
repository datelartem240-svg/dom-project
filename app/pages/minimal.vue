<script setup lang="ts">
const { t } = useI18n();
useHead({
  title: t("pages.minimal.meta.title"),
  meta: [{ name: "description", content: t("pages.minimal.meta.description") }],
});
useSeoMeta({
  title: t("pages.minimal.meta.title"),
  description: t("pages.minimal.meta.description"),
});
definePageMeta({
  layout: "fullscreen",
});


/////////////////////////////////////////////

type MenuItem = 
  | {type: "section"; title: string}
  | {type: "link", to: string; label: string};

type MenuBlock = 
  | {type: "restart"}
  | {type: "item"; item: MenuItem};

const menu: MenuBlock[] = [
  {type: "restart"},
  {type: "item", item: {type: "section", title: "МЕНЮ | ВСЕЛЕННАЯ МУЖЕСТВА"}},
  {type: "item", id: "men_chapter_1_link_1", item: {type: "link", to: "/", label: "Пост, который ты должен прочесть первым. В нем ключевая идея нашего сообщества - Мужчина свободный."}},

  {type: "restart"},
  {type: "item", item: {type: "section", title: "База альфы"}},
  {type: "item", id: "men_chapter_2_link_1", item: {type: "link", to: "/", label: "Философия двух вселенных. Про твою гибкость и умение выжимать максимум из ситуативной реальности"}}, 
  {type: "item", id: "men_chapter_2_link_2", item: {type: "link", to: "/", label: "Кому и что мужчина должен на самом деле? О хаосе рожденном в свободе, и первом законе этого мира. Часть 1. Часть 2."}}, 
  {type: "item", id: "men_chapter_2_link_3", item: {type: "link", to: "/", label: "4 этапа реализации себя с женщинами. Мужественность. Часть 1. Часть 2."}},
  {type: "item", id: "men_chapter_2_link_4", item: {type: "link", to: "/", label: "Кто ты? Мужчина или заложник чужих стереотипов?. Часть 1. Часть 2."}},
  {type: "item", id: "men_chapter_2_link_5", item: {type: "link", to: "/", label: "Может ли мужчина ярко одеваться и носить длинные волосы?"}},
  {type: "item", id: "men_chapter_2_link_6", item: {type: "link", to: "/", label: "Твоя главная опора уже есть в тебе"}},
  {type: "item", id: "men_chapter_2_link_7", item: {type: "link", to: "/", label: "Жизнь с позиции силы"}},
  {type: "item", id: "men_chapter_2_link_8", item: {type: "link", to: "/", label: "О двух китах, на которых стоит «позиция силы»"}},
  {type: "item", id: "men_chapter_2_link_9", item: {type: "link", to: "/", label: "Тревожность убивает в тебе мужчину"}},
  {type: "item", id: "men_chapter_2_link_10", item: {type: "link", to: "/", label: "Не завышай значимость ничего"}},
  {type: "item", id: "men_chapter_2_link_11", item: {type: "link", to: "/", label: "Здоровый похуизм укрепляет организм"}},
  {type: "item", id: "men_chapter_2_link_12", item: {type: "link", to: "/", label: "Современная женщина - это тот мужчина, которого мы проебали"}},
  {type: "item", id: "men_chapter_2_link_13", item: {type: "link", to: "/", label: "Карты, деньги и 5 простых выводов от Madness."}},
  {type: "item", id: "men_chapter_2_link_14", item: {type: "link", to: "/", label: "Не проеби свои золотые годы"}},
  {type: "item", id: "men_chapter_2_link_15", item: {type: "link", to: "/", label: "Про изначальную цель моего канала и что из этого вышло"}},
  {type: "item", id: "men_chapter_2_link_16", item: {type: "link", to: "/", label: "Когда всё против тебя, но ты против всех"}},
  {type: "item", id: "men_chapter_2_link_17", item: {type: "link", to: "/", label: "Спасение внутри каждого из нас"}},
  {type: "item", id: "men_chapter_2_link_18", item: {type: "link", to: "/", label: "Это и есть то, за чем ты сюда пришёл | Осознанность"}},
  {type: "item", id: "men_chapter_2_link_19", item: {type: "link", to: "/", label: "Живи, мой дорогой мужчина. Просто живи"}},
  {type: "item", id: "men_chapter_2_link_20", item: {type: "link", to: "/", label: "Точка слома мужчины | Моменты, когда мужчина теряет себя"}},
  {type: "item", id: "men_chapter_2_link_21", item: {type: "link", to: "/", label: "Принять решение - это и есть стать мужчиной"}},
  {type: "item", id: "men_chapter_2_link_22", item: {type: "link", to: "/", label: "Отец внутри тебя"}},
  {type: "item", id: "men_chapter_2_link_23", item: {type: "link", to: "/", label: "Хищник охотится в хаосе"}},
  {type: "item", id: "men_chapter_2_link_24", item: {type: "link", to: "/", label: "Навигатор внутри тебя"}},
  {type: "item", id: "men_chapter_2_link_25", item: {type: "link", to: "/", label: "Когда рост ощущается как предательство себя"}},
  {type: "item", id: "men_chapter_2_link_26", item: {type: "link", to: "/", label: "Со мной такого точно не произойдет"}},
  {type: "item", id: "men_chapter_2_link_27", item: {type: "link", to: "/", label: "Степашко-откат | О том, как закрепить в себе позицию силы"}},
  {type: "item", id: "men_chapter_2_link_28", item: {type: "link", to: "/", label: "Иллюзия мужественности | Вся жизнь ради женщин (это в любовь к себе)"}},
  {type: "item", id: "men_chapter_2_link_29", item: {type: "link", to: "/", label: "Самоидентификация | Почему внутри пусто"}},
  {type: "item", id: "men_chapter_2_link_30", item: {type: "link", to: "/", label: "Эффективность - основа внутреннего стержня"}},
  {type: "item", id: "men_chapter_2_link_31", item: {type: "link", to: "/", label: "Время лечит. Так ли это?"}},
  {type: "item", id: "men_chapter_2_link_32", item: {type: "link", to: "/", label: "Прости своих родителей"}},
  {type: "item", id: "men_chapter_2_link_33", item: {type: "link", to: "/", label: "Пока одни ноют, другие делают"}},
  {type: "item", id: "men_chapter_2_link_34", item: {type: "link", to: "/", label: "Подборка базовой литературы для мужчины"}},

  {type: "restart"},
  {type: "item", item: {type: "section", title: "Формируем внутренний стержень:"}},
  {type: "item", id: "men_chapter_3_link_1", item: {type: "link", to: "/", label: "Принципы и база мужского стержня. Про путь из мальчика в мужчину. Часть 1. Часть 2."}},
  {type: "item", id: "men_chapter_3_link_2", item: {type: "link", to: "/", label: "Дрочка твой враг. Побеждаем порнозависимость и укрепляем либидо. Рекомендации и приемы. Тема на форуме."}},
  {type: "item", id: "men_chapter_3_link_3", item: {type: "link", to: "/", label: "Установи свой кодекс, или тебя прогнут под чужой."}},
  {type: "item", id: "men_chapter_3_link_4", item: {type: "link", to: "/", label: "Что не так с мужчинами, которые росли без отца?"}},
  {type: "item", id: "men_chapter_3_link_5", item: {type: "link", to: "/", label: "Всем на тебя похуй. В чем секретный смысл этого утверждения?"}},
  {type: "item", id: "men_chapter_3_link_6", item: {type: "link", to: "/", label: "Твой путь и твоя цель"}},
  {type: "item", id: "men_chapter_3_link_7", item: {type: "link", to: "/", label: "Как найти именно свою цель и отличить её от навязанной?"}},
  {type: "item", id: "men_chapter_3_link_8", item: {type: "link", to: "/", label: "4 правила личной эффективности | Цели, приоритеты, распорядок и задачи на день"}},
  {type: "item", id: "men_chapter_3_link_9", item: {type: "link", to: "/", label: "Бросай своё болото"}},
  {type: "item", id: "men_chapter_3_link_10", item: {type: "link", to: "/", label: "Разреши себе ошибаться"}},
  {type: "item", id: "men_chapter_3_link_11", item: {type: "link", to: "/", label: "Украшает ли мужчину скромность?"}},
  {type: "item", id: "men_chapter_3_link_12", item: {type: "link", to: "/", label: "Кто управляет твоими эмоциями, тот управляет тобой"}},
  {type: "item", id: "men_chapter_3_link_13", item: {type: "link", to: "/", label: "Как контролировать свои эмоции в конфликте?"}},
  {type: "item", id: "men_chapter_3_link_14", item: {type: "link", to: "/", label: "Никогда и никому не позволяй садиться себе на шею"}},
  {type: "item", id: "men_chapter_3_link_15", item: {type: "link", to: "/", label: "Одиночка - это аутсайдер. Сила в коллективе"}},
  {type: "item", id: "men_chapter_3_link_16", item: {type: "link", to: "/", label: "Про «дружескую» агрессию и желание доминировать"}},
  {type: "item", id: "men_chapter_3_link_17", item: {type: "link", to: "/", label: "Стань лучшей версией себя!"}},
  {type: "item", id: "men_chapter_3_link_18", item: {type: "link", to: "/", label: "Любить себя не означает принять себя любым"}},
  {type: "item", id: "men_chapter_3_link_19", item: {type: "link", to: "/", label: "Любовь к себе, личные границы и конфликты с женщинами"}},
  {type: "item", id: "men_chapter_3_link_20", item: {type: "link", to: "/", label: "Нормально ли мужчине любить себя?"}},
  {type: "item", id: "men_chapter_3_link_21", item: {type: "link", to: "/", label: "Альфа всегда в первую очередь выбирает себя"}},
  {type: "item", id: "men_chapter_3_link_22", item: {type: "link", to: "/", label: "Ты предназначен для большего"}},
  {type: "item", id: "men_chapter_3_link_23", item: {type: "link", to: "/", label: "Семья или жизнь в соло?"}},
  {type: "item", id: "men_chapter_3_link_24", item: {type: "link", to: "/", label: "Альтруизм, как основное качество омеги"}},
  {type: "item", id: "men_chapter_3_link_25", item: {type: "link", to: "/", label: "Ты не можешь быть альфой, если выглядишь как омега"}},
  {type: "item", id: "men_chapter_3_link_26", item: {type: "link", to: "/", label: "Какой смысл несет в себе фраза: «начни уважать себя»?"}},
  {type: "item", id: "men_chapter_3_link_27", item: {type: "link", to: "/", label: "За удобство не платят уважением"}},
  {type: "item", id: "men_chapter_3_link_28", item: {type: "link", to: "/", label: "Умеешь зарабатывать, но не умеешь копить? Ты проиграл!"}},
  {type: "item", id: "men_chapter_3_link_29", item: {type: "link", to: "/", label: "Мы недооцениваем важность отдыха"}},
  {type: "item", id: "men_chapter_3_link_30", item: {type: "link", to: "/", label: "«Найди любимое дело» самая продаваемая ложь"}},
  {type: "item", id: "men_chapter_3_link_31", item: {type: "link", to: "/", label: "Быстро делай, мало думай"}},
  {type: "item", id: "men_chapter_3_link_32", item: {type: "link", to: "/", label: "Теория сосет, только практика"}},
  {type: "item", id: "men_chapter_3_link_33", item: {type: "link", to: "/", label: "Быть мужчиной - удача"}},
  {type: "item", id: "men_chapter_3_link_34", item: {type: "link", to: "/", label: "С чего мужчина собирает себя заново"}},
  {type: "item", id: "men_chapter_3_link_35", item: {type: "link", to: "/", label: "У меня ничего не получается"}},
  {type: "item", id: "men_chapter_3_link_36", item: {type: "link", to: "/", label: "Замедленность - твоё тайное оружие"}},
  {type: "item", id: "men_chapter_3_link_37", item: {type: "link", to: "/", label: "Развитие, которое убивает"}},
  {type: "item", id: "men_chapter_3_link_38", item: {type: "link", to: "/", label: "Признание - твоя скрытая потребность"}},
  {type: "item", id: "men_chapter_3_link_39", item: {type: "link", to: "/", label: "Наш общий враг - инфантилизм"}},
  {type: "item", id: "men_chapter_3_link_40", item: {type: "link", to: "/", label: "Пора завершить начатое"}},
  {type: "item", id: "men_chapter_3_link_41", item: {type: "link", to: "/", label: "Почему ты сливаешься на полпути"}},
  {type: "item", id: "men_chapter_3_link_42", item: {type: "link", to: "/", label: "Отзеркаливание | Заставь уважать себя"}},
  {type: "item", id: "men_chapter_3_link_43", item: {type: "link", to: "/", label: "Самое ублюдское качество для мужчины"}},
  {type: "item", id: "men_chapter_3_link_44", item: {type: "link", to: "/", label: "Быстрые деньги или быстрая смерть? | О правильности рисков и успешном успехе"}},
  {type: "item", id: "men_chapter_3_link_45", item: {type: "link", to: "/", label: "Инвестируй в людей"}},
  {type: "item", id: "men_chapter_3_link_46", item: {type: "link", to: "/", label: "Сила не любит шума | О том, как на самом деле ведет себя сильный мужчина"}},
  {type: "item", id: "men_chapter_3_link_47", item: {type: "link", to: "/", label: "Не жди от мира справедливости"}},
  {type: "item", id: "men_chapter_3_link_48", item: {type: "link", to: "/", label: "Чужое настроение - не твоя вина"}},
  {type: "item", id: "men_chapter_3_link_49", item: {type: "link", to: "/", label: "Не бойся выглядеть глупо. Бойся не быть собой"}},
  {type: "item", id: "men_chapter_3_link_50", item: {type: "link", to: "/", label: "Ты вынужден стать неудобным"}},
  {type: "item", id: "men_chapter_3_link_51", item: {type: "link", to: "/", label: "Убийцы мужества: самые вредные убеждения"}},
  {type: "item", id: "men_chapter_3_link_52", item: {type: "link", to: "/", label: "Лудомания — зло!"}},
  {type: "item", id: "men_chapter_3_link_53", item: {type: "link", to: "/", label: "Создай себе финансовую опору"}},
  {type: "item", id: "men_chapter_3_link_54", item: {type: "link", to: "/", label: "Безопасность, которой не существует | Умей постоять за себя"}},
  {type: "item", id: "men_chapter_3_link_55", item: {type: "link", to: "/", label: "Комплексы, которые тебе навязали | Упражнение для поднятия самооценки"}},
  {type: "item", id: "men_chapter_3_link_56", item: {type: "link", to: "/", label: "Ты создал свою крепость из слабости"}},
  {type: "item", id: "men_chapter_3_link_57", item: {type: "link", to: "/", label: "Отдели себя от толпы"}},
  {type: "item", id: "men_chapter_3_link_58", item: {type: "link", to: "/", label: "Успех неизбежен"}},
  {type: "item", id: "men_chapter_3_link_59", item: {type: "link", to: "/", label: "Один час в день на развитие"}},
  {type: "item", id: "men_chapter_3_link_60", item: {type: "link", to: "/", label: "Доброта без личных границ — это слабость"}},


  {type: "restart"},
  {type: "item", item: {type: "section", title: "Вот что будет, если ты применишь эти знания:"}},
  {type: "item", id: "men_chapter_4_link_1", item: {type: "link", to: "/", label: "Я начал уважать себя и вот что получилось"}},
  {type: "item", id: "men_chapter_4_link_2", item: {type: "link", to: "/", label: "Всё начинается с твоей головы"}},
  {type: "item", id: "men_chapter_4_link_3", item: {type: "link", to: "/", label: "Первым делом верни себе себя"}},
  {type: "item", id: "men_chapter_4_link_4", item: {type: "link", to: "/", label: "Страх убивает в тебе тебя | Откровение подписчика"}},

  {type: "restart"},
  {type: "item", item: {type: "section", title: "Аудио подкасты:"}},
  {type: "item", id: "men_chapter_5_link_1", item: {type: "link", to: "/", label: "Как понять, куда мне идти сейчас? Как определить для себя цель и именно свой уникальный путь? Слушать."}},
  {type: "item", id: "men_chapter_5_link_2", item: {type: "link", to: "/", label: "Как создать в себе опору и самому стать для себя тем, на кого ты всегда можешь положиться? Слушать."}},
  {type: "item", id: "men_chapter_5_link_3", item: {type: "link", to: "/", label: "Страх перед женщиной. Почему мы боимся и что с этим делать? Слушать."}},
  {type: "item", id: "men_chapter_5_link_4", item: {type: "link", to: "/", label: "Лекция по работе с убеждениями. Что мешает тебе быть уверенным, много зарабатывать и ебать самых красивых женщин? | Слушать"}},
  {type: "item", id: "men_chapter_5_link_5", item: {type: "link", to: "/", label: "Лекция по ЛМР. Что делать, когда в самый последний момент девушка говорит, что секса не будет? | Слушать"}},
  {type: "item", id: "men_chapter_5_link_6", item: {type: "link", to: "/", label: "Лекция: как правильно ставить цели, чтобы реально их достигать | Слушать"}},
  
  {type: "restart"},
  {type: "item", item: {type: "section", title: "Прямые эфиры:"}},
  {type: "item", id: "men_chapter_6_link_1", item: {type: "link", to: "/", label: "Как сделать так, чтобы уже первое свидание закончилось сексом? 5 шагов, которые ты должен сделать и всё, что ты должен учесть. Рациональное и инстинктивное. Комфорт и твоя ценность. Секреты секстинга и правильных касаний. Слушать."}},
  {type: "item", id: "men_chapter_6_link_2", item: {type: "link", to: "/", label: "Разбираем вопросы подписчиков в прямом эфире. Уроки мужества от Мэда, Кардинала, Спейса, Ацтека, Картера и других админов. Слушать."}},
  {type: "item", id: "men_chapter_6_link_3", item: {type: "link", to: "/", label: "Тайна 18+ от 24.04.25. Грязные истории соблазнения от админов. Чистый опыт и практика. После этого эфира ты посмотришь на девушек иначе. Слушать."}},
  {type: "item", id: "men_chapter_6_link_4", item: {type: "link", to: "/", label: "Как раскрыть свой потенциал даже если его нет? Меняем твои убеждения с помощью НЛП. Вера в себя. Деньги. Женщины. Успех. Слушать."}},
  {type: "item", id: "men_chapter_6_link_5", item: {type: "link", to: "/", label: "Запись эфира от 07.04.25 Ответы на вопросы с Мэдом, Дедом и Харакири. Список вопросов по ссылке. Слушать."}},
  {type: "item", id: "men_chapter_6_link_6", item: {type: "link", to: "/", label: "Прокрастинация. Когда знаешь, что нужно делать, но почему-то не делаешь. В чем причина? Как действовать? Изучаем со стороны здоровья и психологии. Слушать."}},
  {type: "item", id: "men_chapter_6_link_7", item: {type: "link", to: "/", label: "Запись эфира от 10.11.25 Ответы на вопросы с Дедом, Зауром и Александром. Список вопросов по ссылке (конфликты, поиск себя, женщины, приоритеты). Слушать."}},
  {type: "item", id: "men_chapter_6_link_8", item: {type: "link", to: "/", label: "Запись эфира от 27.11.25 Ответы на вопросы с Мэдом, Зауром, Артуром и Александром. Список вопросов по ссылке (источники мотивации, саморефлексия, флирт с девушками). Слушать."}},
  
  {type: "restart"},
  {type: "item", item: {type: "section", title: "Здоровье:"}},
  {type: "item", item: {type: "subtitle", subtitle: "Анализы:"}},
  {type: "item", id: "men_chapter_7_1_link_1", item: {type: "link", to: "/", label: "Основа основ | Базовые анализы."}},

  {type: "restart"},
  {type: "item", item: {type: "subtitle", subtitle: "Гормоны и нейромедиаторы:"}},
  {type: "item", id: "men_chapter_7_2_link_1", item: {type: "link", to: "/", label: "Твой главный враг и лучший друг | Дофамин"}},
  {type: "item", id: "men_chapter_7_2_link_2", item: {type: "link", to: "/", label: "Как вернуть вкус к жизни | Дофаминовый детокс + конкурс"}},
  {type: "item", id: "men_chapter_7_2_link_3", item: {type: "link", to: "/", label: "Как начать жить полноценно | Борьба с тревожностью."}},
  {type: "item", id: "men_chapter_7_2_link_4", item: {type: "link", to: "/", label: "Причина всех твоих проблем - кортизол? | Гормон стресса"}},
  {type: "item", id: "men_chapter_7_2_link_5", item: {type: "link", to: "/", label: "Лучший способ снизить кортизол"}},
  {type: "item", id: "men_chapter_7_2_link_6", item: {type: "link", to: "/", label: "Как повысить тестостерон | Питание. Часть 1. Часть 2."}},
  {type: "item", id: "men_chapter_7_2_link_7", item: {type: "link", to: "/", label: "Главный нейромедиатор альфы | Серотонин"}},
  {type: "item", id: "men_chapter_7_2_link_8", item: {type: "link", to: "/", label: "Серотонин как прокачать мозг на уверенность"}},
  {type: "item", id: "men_chapter_7_2_link_9", item: {type: "link", to: "/", label: "Как поднять серотонин"}},
  {type: "item", id: "men_chapter_7_2_link_10", item: {type: "link", to: "/", label: "Убийца современных мужчин | Пролактин"}},
  {type: "item", id: "men_chapter_7_2_link_11", item: {type: "link", to: "/", label: "Окситоцин: как привязать девушку знанием физиологии"}},
  {type: "restart"},
  {type: "item", item: {type: "subtitle", subtitle: "Бады:"}},
  {type: "item",id: "men_chapter_7_3_link_1", item: {type: "link", to: "/", label: "Плыви по течению степашка | Бады и витамины - обман"}},
  {type: "item",id: "men_chapter_7_3_link_2", item: {type: "link", to: "/", label: "Список базовых бадов и витаминов"}},
  {type: "item",id: "men_chapter_7_3_link_3", item: {type: "link", to: "/", label: "Сон, ум, тестостерон | Лучший ночной комплекс"}},
  {type: "item",id: "men_chapter_7_3_link_4", item: {type: "link", to: "/", label: "Список базовых бадов и витаминов"}},
  {type: "item",id: "men_chapter_7_3_link_5", item: {type: "link", to: "/", label: "Как разъебать эту осень | 3 топовых рекомендации от врача"}},
  {type: "item",id: "men_chapter_7_3_link_6", item: {type: "link", to: "/", label: "Сильный иммунитет, ясная голова и твёрдая эрекция | Осенний набор прихватчика"}},
  {type: "item",id: "men_chapter_7_3_link_7", item: {type: "link", to: "/", label: "Лучшая подборка добавок на весну 2025"}},
  {type: "item",id: "men_chapter_7_3_link_8", item: {type: "link", to: "/", label: "Что пить чтобы получать максимум от жизни | Бады на зиму"}},
  {type: "restart"},
  {type: "item", item: {type: "subtitle", subtitle: "Рекомендации по здоровью:"}},
  {type: "item", id: "men_chapter_7_4_link_1", item: {type: "link", to: "/", label: "Гипергидроз. Как сделать так, чтобы ноги всегда были свежими и никогда не имели неприятного запаха? | Проверенное средство от врача"}},
  {type: "item", id: "men_chapter_7_4_link_2", item: {type: "link", to: "/", label: "Как пахнуть здоровым самцом и не вонять | Топ дезодорантов"}},
  {type: "item", id: "men_chapter_7_4_link_3", item: {type: "link", to: "/", label: "Осанка | Теория и проверенные упражнения"}},
  {type: "item", id: "men_chapter_7_4_link_4", item: {type: "link", to: "/", label: "Причина твоих неудач | Запах изо рта"}},
  {type: "item", id: "men_chapter_7_4_link_5", item: {type: "link", to: "/", label: "Совместимы ли прыщи с моделью альфы? | Борьба с акне"}},
  {type: "item", id: "men_chapter_7_4_link_6", item: {type: "link", to: "/", label: "Прыщи. Как ухаживать за собой?"}},
  {type: "item", id: "men_chapter_7_4_link_7", item: {type: "link", to: "/", label: "Как быстро выздороветь от простуды"}},
  {type: "item", id: "men_chapter_7_4_link_8", item: {type: "link", to: "/", label: "Что пить чтобы получать максимум от жизни | Бады на зиму"}},
  {type: "restart"},
  {type: "item", item: {type: "subtitle", subtitle: "Рекомендации по здоровью:"}},
  {type: "item", id: "men_chapter_7_5_link_1", item: {type: "link", to: "/", label: "Гипергидроз. Как сделать так, чтобы ноги всегда были свежими и никогда не имели неприятного апаха? | Проверенное средство от врача"}},
  {type: "item", id: "men_chapter_7_5_link_2", item: {type: "link", to: "/", label: "Как пахнуть здоровым самцом и не вонять | Топ дезодорантов"}},
  {type: "item", id: "men_chapter_7_5_link_3", item: {type: "link", to: "/", label: "Осанка | Теория и проверенные упражнения"}},
  {type: "item", id: "men_chapter_7_5_link_4", item: {type: "link", to: "/", label: "Причина твоих неудач | Запах изо рта"}},
  {type: "item", id: "men_chapter_7_5_link_5", item: {type: "link", to: "/", label: "Совместимы ли прыщи с моделью альфы? | Борьба с акне"}},
  {type: "item", id: "men_chapter_7_5_link_6", item: {type: "link", to: "/", label: "Прыщи. Как ухаживать за собой?"}},
  {type: "item", id: "men_chapter_7_5_link_7", item: {type: "link", to: "/", label: "Как быстро выздороветь от простуды"}},
  {type: "item", id: "men_chapter_7_5_link_8", item: {type: "link", to: "/", label: "Ночные хищники: как выжить на сменах и не перегорать"}},
  {type: "item", id: "men_chapter_7_5_link_9", item: {type: "link", to: "/", label: "Идеальный день подписчика приватки | Образ жизни"}},
  {type: "item", id: "men_chapter_7_5_link_10", item: {type: "link", to: "/", label: "Сила, тепло, энергия и либидо | Зимний рацион самца"}},
  {type: "item", id: "men_chapter_7_5_link_11", item: {type: "link", to: "/", label: "Гайд на презервативы"}},
  {type: "item", id: "men_chapter_7_5_link_12", item: {type: "link", to: "/", label: "Курение - как ты тушишь свою силу | Вред"}},
  {type: "item", id: "men_chapter_7_5_link_13", item: {type: "link", to: "/", label: "Как бросить курить самое действенное и краткое пособие"}},
  {type: "item", id: "men_chapter_7_5_link_14", item: {type: "link", to: "/", label: "Интимная гигиена мужчины: как правильно ухаживать за своей мощью"}},
  {type: "item", id: "men_chapter_7_5_link_15", item: {type: "link", to: "/", label: "Почему у современных мужчин проблемы с эрекцией | Век дофаминовой импотенции"}},
  {type: "item", id: "men_chapter_7_5_link_16", item: {type: "link", to: "/", label: "Борода, волосы, миноксидил - полная инструкция | Сделай себя бородатым (гайд, фишки, отзывы)."}},
  {type: "item", id: "men_chapter_7_5_link_17", item: {type: "link", to: "/", label: "Как ухаживать за бородой"}},
  {type: "item", id: "men_chapter_7_5_link_18", item: {type: "link", to: "/", label: "Сон мужчины | Как спать так, чтобы была энергия и силы на всё"}},
  {type: "item", id: "men_chapter_7_5_link_19", item: {type: "link", to: "/", label: "Как не быть скуфом | Лучшие мужские привычки"}},
  {type: "item", id: "men_chapter_7_5_link_20", item: {type: "link", to: "/", label: "Как прокачать стояк | Упражнение кегеля + челлендж"}},
  {type: "item", id: "men_chapter_7_5_link_21", item: {type: "link", to: "/", label: "Большое потребление белка основа твоей мужественности"}},
  {type: "restart"},
  {type: "item", item: {type: "subtitle", subtitle: "Либидо:"}},
  {type: "item", id: "men_chapter_7_6_link_1", item: {type: "link", to: "/", label: "Секс - базовая потребность мужчины"}},
  {type: "item", id: "men_chapter_7_6_link_2", item: {type: "link", to: "/", label: "Сколько нужно секса здоровому мужчине?"}},
  {type: "item", id: "men_chapter_7_6_link_3", item: {type: "link", to: "/", label: "Не хочется секса, что делать? | Либидо"}},
  {type: "item", id: "men_chapter_7_6_link_4", item: {type: "link", to: "/", label: "Либидо и психика: как они связаны"}},
  {type: "item", id: "men_chapter_7_6_link_5", item: {type: "link", to: "/", label: "Лучшее упражнение для мужчин | Как повысить либидо"}},

  {type: "restart"},
  {type: "item", item: {type: "section", title: "Стиль | Внешний вид:"}},
  {type: "item",id: "men_chapter_8_link_1", item: {type: "link", to: "/", label: "Цветотип. Бот для определения твоего идеального сочетания в цветах"}},
  {type: "item",id: "men_chapter_8_link_2", item: {type: "link", to: "/", label: "Правильный уход за обувью"}},
  {type: "item",id: "men_chapter_8_link_3", item: {type: "link", to: "/", label: "Как ухаживать за обувью зимой"}},
  {type: "item",id: "men_chapter_8_link_4", item: {type: "link", to: "/", label: "Правильный уход за одеждой"}},
  {type: "item",id: "men_chapter_8_link_5", item: {type: "link", to: "/", label: "Зимний стиль альфа-ебаря. 2024-2025"}},
  {type: "item",id: "men_chapter_8_link_6", item: {type: "link", to: "/", label: "Как выбрать часы? Советы стилиста"}},
  {type: "item",id: "men_chapter_8_link_7", item: {type: "link", to: "/", label: "Стиль: urban explorer весна 2025"}},
  {type: "item",id: "men_chapter_8_link_8", item: {type: "link", to: "/", label: "Летний стиль 2025: как выглядеть дорого и непринуждённо"}},
  {type: "item",id: "men_chapter_8_link_9", item: {type: "link", to: "/", label: "Приказ No1: переход на осеннюю экипировку"}},
  {type: "item",id: "men_chapter_8_link_10", item: {type: "link", to: "/", label: "Универсальная капсула на лето | База и стиль"}},
  {type: "item",id: "men_chapter_8_link_11", item: {type: "link", to: "/", label: "Весенняя капсула подписчика приватки"}},

  {type: "restart"},
  {type: "item", item: {type: "section", title: "Живой опыт | Это поможет тебе в жизни:"}},
  {type: "item", id: "men_chapter_9_link_1", item: {type: "link", to: "/", label: "Как вести себя в конфликтной ситуации с алко-быдлом? Разбираем с подписчиками."}},
  {type: "item", id: "men_chapter_9_link_2", item: {type: "link", to: "/", label: "Синдром собственника. Миф или реальная проблема?"}},
];


const getNumber = (index: number) => {
  let start = 0;
  for (let i = index; i >= 0; i--) {
    if (menu[i]?.type === "restart") {
      start = i + 1; 
      break;
    }
  }

  let n = 0;
  for (let i = start; i <= index; i++) {
    if (menu[i]?.type === "item" && menu[i].item.type === "link") {
      n++;
    }
  }
  return n;
};

/////////////////////////////////////////////


</script>
<template>
  <!--

    Page is intended to be removed for your own project.

   -->
  <div class="p-3">
    <h1 class="text-4xl dark:text-white">{{ $t("pages.minimal.title") }}</h1>
    <main class="mt-4 text-slate-500 dark:text-slate-400 [&>*]:mb-4">


      <template v-for="(block, i) in menu" :key="i">

        <template v-if="block.type === 'item' && block.item.type === 'section'">
          <h2 class="mt-4 mb-2 text-slate-900 dark:text-white text-2xl font-bold">
            {{block.item.title}}
          </h2>
        </template>

        <template v-if="block.type === 'item' && block.item.type === 'subtitle'">
          <h3 class="dark:text-white">
            {{block.item.subtitle}}
          </h3>
        </template>

        <template v-else-if="block.type === 'item' && block.item.type === 'link'">
          <NuxtLink :to="`/#${block.id.replace('link', 'post')}`" class="block mb-2 hover:underline">
            {{getNumber(i)}}. {{block.item.label}}
          </NuxtLink>
        </template>

      </template>


    </main>
  </div>


  <!--<NuxtLink v-for="index in 1" :key="index" to="/">
        {{ $t("pages.minimal.p") }}
      </NuxtLink> -->

</template>












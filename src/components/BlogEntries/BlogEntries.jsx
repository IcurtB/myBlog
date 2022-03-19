import React from "react";
import BlogEntry from "./BlogItem";



const arrayForBlogEntry = [
    {
        id:0,
        title: "Координаты чудес. Как сверхновые осветили путь к современной астрофизике",
        titleDesc: "Координаты чудес. Как сверхновые осветили путь к современной астрофизике",
        date: "Зачем архитектору Pet project?",
        desc:"Около 10 лет назад я вторично начал вести блог в «Живом журнале» (и вел его около полутора лет).Там я пробовал писать, в том числе, на научно-популярные, философские и религиозные темы и, в частности, о высоком Средневековье(в тот период я читал и перечитывал Жака ле Гоффа, Анри де Любака, Нормана Дэвиса и Йохана Хёйзингу).",
        countComments:'0',
        imageUrl:"https://habrastorage.org/getpro/habr/upload_files/393/586/360/3935863609416855fa2234ecc2d38a2f.jpg",
    },
    {
        id: 1,
        title: "Зачем архитектору Pet project?",
        titleDesc: "Анализ и проектирование систем Управление проектами DIY или Сделай сам",
        date: "14-02-2022",
        desc:"Эта статья – о Pet project, собственных проектах, которыми многие из нас занимаются в свободное время.Поговорим о том, нужны ли такие увлечения архитектору и как Pet project может помочь в работе.Также я расскажу о своих проектах и опыте, который я с их помощью получил.Добро пожаловать под кат!",
        countComments:'3',
        imageUrl:"https://habrastorage.org/getpro/habr/upload_files/34d/fe3/296/34dfe3296f3906fa75f1921752e6e9d8.jpg",
    },
    {
        id: 2,
        title: 'Моделирование упаковки с использованием API SolidWorks',
        titleDesc: "Одна из задач, встречающаяся при разработке новых изделий – это задача компоновки их упаковки.",
        date: "14-03-2022",
        desc:"В качестве иллюстрации этого утверждения приведем пример, в котором с такой задачей столкнулись даже IT-специалисты. Как раз на момент написания этой статьи программисты одного из подразделений ООО «Специальный технологический центр» занимались подбором комплектующих для комплекса радиоэлектронной аппаратуры, в состав которого входили серверы и автоматизированные рабочие места.",
        countComments:'10',
        imageUrl:"https://habrastorage.org/r/w1560/webt/iq/i5/oa/iqi5oac8qnnojmkastlgu4mdhja.jpeg",
    },
]
const BlogEntries = () => {
    let array = arrayForBlogEntry.map(content =>
        <BlogEntry
            key={content.id}
            title={content.title}
            titleDesc={content.titleDesc}
            date={content.date}
            countComments={content.countComments}
            imageUrl={content.imageUrl}/>
    )
    return (
        <div className="w3-col l8 s12">
            {array}
        </div>


    )
}
export default BlogEntries;
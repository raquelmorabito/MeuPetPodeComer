let dados = [
    {
        titulo: "Uva para os Caes 🐶" ,
        descrição: "❌Cachorros não devem comer uvas. As uvas, podem causar insuficiência renal aguda em cães. Mesmo pequenas quantidades podem ser perigosas e levar a sintomas como vômito, diarreia, fraqueza e até mesmo falência renal. A causa exata do envenenamento por uva não é completamente compreendida, mas é melhor evitá-las completamente.",
        link:  "https://www.purina.pt/artigos/caes/alimentacao/o-que-podem-comer/uvas#:~:text=ou%20uvas%20passas%3F-,N%C3%A3o%2C%20os%20c%C3%A3es%20n%C3%A3o%20podem%20comer%20uvas%20ou%20passas%20(que,mais%20graves%20do%20que%20outros.",
        tags: "cachorro cão uva insuficiencia renal vômito diarreia fraqueza toxicidade"
    },
    {
        titulo: "Uva para os Gato 🐱" ,
        descrição: "❌Gatos não devem comer uvas. As uvas podem ser tóxicas para gatos, causando sintomas como vômito, diarreia, dor abdominal e problemas renais. ",
        link: "https://www.animalife.pt/pt/dica/83/quais-os-alimentos-proibidos-para-gatos?category=38#:~:text=Uvas%20e%20passas%20%2D%20N%C3%A3o%20se,n%C3%A3o%20ser%20uma%20doen%C3%A7a%20sintom%C3%A1tica.",
        tags: "gatos uva toxicidade vômito diarreia dor abdominal problemas renais "
    },
    {
        titulo: "Leite para os Caes 🐶" ,
        descrição: "❌Leite não é ideal para a maioria dos cães. Muitos cães são intolerantes à lactose, o que significa que eles não conseguem digerir a lactose no leite. Isso pode levar a problemas digestivos como diarreia e dor abdominal. Embora um pouco de leite não cause grandes problemas na maioria dos cães, é melhor evitá-lo e fornecer alternativas adequadas para hidratação e nutrição.",
        link: "https://www.petz.com.br/blog/cachorros/alimentacao/cachorro-pode-tomar-leite/",
        tags: "cachorro intolerancia lactose diarreia"
    },
    {
        titulo: "Leite para os Gato 🐱" ,
        descrição: "❌Muitos gatos são intolerantes à lactose e não devem beber leite. O leite pode causar problemas digestivos, como vômito e diarreia, em gatos que não conseguem digerir a lactose. ",
        link: "https://www.petz.com.br/blog/nutricao/gato-pode-beber-leite/#:~:text=Mesmo%20que%20o%20pet%20n%C3%A3o,%2C%20%C3%A9%20melhor%20evit%C3%A1%2Dlo.",
        tags: "gatos intolerancia lactose diarreia vômito"
    },
    {
        titulo: "Café para os Caes 🐶" ,
        descrição: "❌Café não é seguro para cães. A cafeína é tóxica para eles e pode causar sintomas graves como agitação, aumento da frequência cardíaca, tremores musculares e até convulsões. Se um cão consumir café, é importante procurar um veterinário imediatamente.",
        link: "https://www.petz.com.br/blog/cachorros/cachorro-pode-tomar-cafe/",
        tags: "cachorro toxicidade agitação aumento frequencia cardiaca tremores convulsões"
    },
    {
        titulo: "Café  para os Gato 🐱" ,
        descrição: "❌Gatos devem evitar o café. A cafeína é tóxica para eles e pode causar sintomas como hiperatividade, tremores, vômito e problemas díacos. Qualquer exposição ao café deve ser tratada com seriedade e um veterinário deve ser consultado se houver ingestão.",
        link: "https://www.petz.com.br/blog/nutricao/gato-pode-tomar-cafe/",
        tags: "gatos toxicidade hiperatividade tremores vômitos problemas cardiacos"
    },
    {
        titulo: "Cenoura para os Caes 🐶" ,
        descrição: "✅Cenouras são seguras para cães e podem ser uma ótima opção de petisco saudável. Elas são baixas em calorias e ricas em fibras e vitaminas. Certifique-se de oferecer as cenouras em pedaços pequenos para evitar riscos de engasgo.",
        link: "https://www.petz.com.br/blog/cachorros/alimentacao/cachorro-pode-comer-cenoura/",
        tags: "cachorro seguro segura petisco saudável vitaminas fribras"
    },
    {
        titulo: "Cenoura para os Gato 🐱" ,
        descrição: "✅Cenouras não são tóxicas para gatos e podem ser oferecidas em pequenas quantidades. ",
        link: "https://www.petz.com.br/blog/pets/gatos/gato-pode-comer-cenoura-crua/#:~:text=O%20gato%20pode%20comer%20cenoura%2C%20mas%20tome%20cuidado%20com%20os,gato%20pode%20comer%20cenoura%20crua.",
        tags: "gatos  cenouras ocasionalmente"
    },
    {
        titulo: "Banana para os Caes 🐶" ,
        descrição: "✅Bananas são seguras para cães e podem ser um petisco nutritivo. Elas são ricas em potássio, fibras e vitaminas. No entanto, devem ser oferecidas com moderação devido ao seu teor de açúcar.",
        link: "https://www.purina.pt/artigos/caes/alimentacao/o-que-podem-comer/banana#:~:text=podem%20comer%20bananas%3F-,Sim.,com%20o%20seu%20m%C3%A9dico%20veterin%C3%A1rio.",
        tags: "cachorro nutritivo petisco potássio fibras vitaminas moderação"
    },
    {
        titulo: "Banana para os Gato 🐱" ,
        descrição: "✅Bananas não são tóxicas para gatos e podem ser oferecidas em pequenas quantidades. Elas não são uma parte essencial da dieta felina e devem ser dadas ocasionalmente.  ",
        link: "https://doutorpet.com/gato-pode-comer-banana/#:~:text=Os%20gatos%20podem%20comer%20banana%20em%20pequenas%20quantidades%2C%20desde%20que,por%20alimentos%20pr%C3%B3prios%20para%20felinos.",
        tags: "gatos ocasionalmente"
    },
    {
        titulo: "Maçã para os Caes 🐶" ,
        descrição: "✅Maçãs são seguras para cães e podem ser uma excelente fonte de vitaminas e fibras. No entanto, as sementes e o núcleo devem ser removidos, pois contêm cianeto, que é tóxico para os cães.",
        link: "https://www.purina.pt/artigos/caes/alimentacao/o-que-podem-comer/maca#:~:text=O%20meu%20c%C3%A3o%20pode%20comer,os%20sabores%20e%20as%20texturas.",
        tags: "cachorro vitaminas fibras cianeto toxicidade"
    },
    {
        titulo: "Maçã para os Gato 🐱" ,
        descrição: "✅Maçãs não são tóxicas para gatos e podem ser oferecidas ocasionalmente. No entanto, gatos não têm interesse natural em frutas e sua dieta deve focar principalmente em proteínas animais. Remova sementes e o núcleo antes de oferecer maçãs aos gatos. ",
        link: "https://www.petz.com.br/blog/nutricao/gato-pode-comer-maca/",
        tags: "gatos ocasionalmente"
    },
];
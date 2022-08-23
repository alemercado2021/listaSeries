const listaSeries= [
    {
        premio: "&#129351",
        id: "1",
        name: "Game of thrones",
        año: "2011",
        temporadas: "8",
        calificacion: "10",
    },
    {
        premio: "&#129352",
        id: "2",
        name: "Sons of anarchy",
        año: "2011",
        temporadas: "8",
        calificacion: "10",
    },
    {
        premio: "&#129353",
        id: "3",
        name: "Breaking bad",
        año: "2008",
        temporadas: "5",
        calificacion: "9",
    },
    {
        premio:"",
        id: "4",
        name: "How I meet your mother",
        año: "2005",
        temporadas: "9",
        calificacion: "9",
    },
    {
        premio:"",
        id: "5",
        name: "The office",
        año: "2005",
        temporadas: "9",
        calificacion: "9",
    },
    {
        premio:"",
        id: "6",
        name: "The Witcher",
        año: "2019",
        temporadas: "2",
        calificacion: "9",
    },
    {
        premio:"",
        id: "7",
        name: "The last dance",
        año: "2020",
        temporadas: "1",
        calificacion: "9",
    },
    {
        premio:"",
        id: "8",
        name: "Vikings",
        año: "2013",
        temporadas: "6",
        calificacion: "8",
    },
    {
        premio:"",
        id: "9",
        name: "Moonknight",
        año: "2022",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "10",
        name: "Loki",
        año: "2021",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "11",
        name: "Wanda vision",
        año: "2021",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "12",
        name: "Dr.House",
        año: "2004",
        temporadas: "8",
        calificacion: "8",
    },
    {
        premio:"",
        id: "13",
        name: "Mindhunter",
        año: "2017",
        temporadas: "2",
        calificacion: "8",
    },
    {
        premio:"",
        id: "14",
        name: "Peaky blinders",
        año: "2013",
        temporadas: "6",
        calificacion: "8",
    },
    {
        premio:"",
        id: "15",
        name: "Demon slayer",
        año: "2019",
        temporadas: "2",
        calificacion: "8",
    },
    {
        premio:"",
        id: "16",
        name: "Jujutsu Kaisen",
        año: "2020",
        temporadas: "2",
        calificacion: "8",
    },
    {
        premio:"",
        id: "17",
        name: "Brooklyn 99",
        año: "2013",
        temporadas: "8",
        calificacion: "8",
    },
    {
        premio:"",
        id: "18",
        name: "Friends",
        año: "1994",
        temporadas: "10",
        calificacion: "8",
    },
    {
        premio:"",
        id: "19",
        name: "Glee",
        año: "2009",
        temporadas: "6",
        calificacion: "8",
    },
    {
        premio:"",
        id: "20",
        name: "Hawkeye",
        año: "2021",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "21",
        name: "Atack on titan",
        año: "2013",
        temporadas: "3",
        calificacion: "8",
    },
    {
        premio:"",
        id: "22",
        name: "Falcon and the winter soldier",
        año: "2021",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "23",
        name: "Chernobyl",
        año: "2019",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "24",
        name: "Gambito de dama",
        año: "2020",
        temporadas: "1",
        calificacion: "8",
    },
    {
        premio:"",
        id: "25",
        name: "Sherlock",
        año: "2010",
        temporadas: "4",
        calificacion: "8",
    },
    {
        premio:"",
        id: "26",
        name: "The Crown",
        año: "2016",
        temporadas: "4",
        calificacion: "7",
    },
    {
        premio:"",
        id: "27",
        name: "Ranking of Kings",
        año: "2021",
        temporadas: "1",
        calificacion: "7",
    },
    {
        premio:"",
        id: "28",
        name: "Euphoria",
        año: "2019",
        temporadas: "2",
        calificacion: "7",
    },
    {
        premio:"",
        id: "29",
        name: "Invencible",
        año: "2021",
        temporadas: "1",
        calificacion: "7",
    },
    {
        premio:"",
        id: "30",
        name: "Narcos",
        año: "2015",
        temporadas: "3",
        calificacion: "7",
    },
    {
        premio:"",
        id: "31",
        name: "Black Mirror",
        año: "2011",
        temporadas: "5",
        calificacion: "7",
    },
    {
        premio:"",
        id: "32",
        name: "Time to winning",
        año: "2022",
        temporadas: "1",
        calificacion: "7",
    },
    {
        premio:"",
        id: "33",
        name: "(Des)encanto",
        año: "2018",
        temporadas: "4",
        calificacion: "7",
    },
    {
        premio:"",
        id: "34",
        name: "Sex Education",
        año: "2019",
        temporadas: "2",
        calificacion: "7",
    },
    {
        premio:"",
        id: "35",
        name: "13 Reasons Why",
        año: "2017",
        temporadas: "4",
        calificacion: "6",
    },
    {
        premio:"",
        id: "36",
        name: "The Last Kingdom",
        año: "2015",
        temporadas: "5",
        calificacion: "6",
    },
    {
        premio:"",
        id: "37",
        name: "What If...?",
        año: "2021",
        temporadas: "1",
        calificacion: "6",
    },
    {
        premio:"",
        id: "38",
        name: "Squid Game",
        año: "2021",
        temporadas: "1",
        calificacion: "6",
    },
    {
        premio:"",
        id: "39",
        name: "Lucifer",
        año: "2016",
        temporadas: "6",
        calificacion: "6",
    },
    {
        premio:"",
        id: "40",
        name: "Ragnarök",
        año: "2020",
        temporadas: "2",
        calificacion: "6",
    },
    {
        premio:"",
        id: "41",
        name: "How to Get Away with Murder",
        año: "2014",
        temporadas: "6",
        calificacion: "6",
    },
    {
        premio:"",
        id: "42",
        name: "The Get Down",
        año: "2016",
        temporadas: "1",
        calificacion: "6",
    },
    {
        premio:"",
        id: "43",
        name: "La maldición de Hill House",
        año: "2018",
        temporadas: "1",
        calificacion: "5",
    },
    {
        premio:"",
        id: "44",
        name: "Stranger Things",
        año: "2016",
        temporadas: "4",
        calificacion: "5",
    },
    {
        premio:"",
        id: "45",
        name: "Atypical",
        año: "2017",
        temporadas: "4",
        calificacion: "5",
    },
    {
        premio:"",
        id: "46",
        name: "You",
        año: "2018",
        temporadas: "3",
        calificacion: "4",
    },
    {
        premio:"",
        id: "47",
        name: "La casa de papel",
        año: "2017",
        temporadas: "5",
        calificacion: "3",
    },
    {
        premio:"",
        id: "48",
        name: "Nicky Jam: el ganador",
        año: "2018",
        temporadas: "1",
        calificacion: "2",
    },
    {
        premio:"",
        id: "49",
        name: "Historia de un clan",
        año: "2015",
        temporadas: "1",
        calificacion: "2",
    },
]
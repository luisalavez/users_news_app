import { UserT, NewsT } from "./types";



export const users: UserT[] = [
    {
        id:1,
        firstName:"Mario",
        lastName:"Mejia",
        email:"mario.m@gmail.com",
        phoneNumber:"6644726257",
        address:"Springfield Evergreen Av.",
    },
    {
        id:2,
        firstName:"Daniel",
        lastName:"Dolores",
        email:"Daniel.d@gmail.com",
        phoneNumber:"6642226257",
        address:"Groove Av.",
    },
    {
        id:3,
        firstName:"Alejandra",
        lastName:"Alavez",
        email:"alejandra.a@gmail.com",
        phoneNumber:"6642326257",
        address:"Helm street",
    },
    {
        id:4,        
        firstName:"Christian",
        lastName:"Castro",
        email:"christian.c@gmail.com",
        phoneNumber:"6644336257",
        address:"orange Av.",
    },
    {
        id:5,
        firstName:"Juan",
        lastName:"Jimenez",
        email:"j.j@gmail.com",
        phoneNumber:"6644725258",
        address:"spring valley",
    },
];


export const News:NewsT[] = [
    {
      id:1,
      author: 'Nathan Frandino',
      title: 'California researchers test everybody in one town for coronavirus - Reuters India',
      description: 'Researchers began testing an entire town in northern California for the novel coronavirus and its antibodies on Monday, one of the first such efforts since the pandemic hit the United States.',
    },
    {
        id:2,
      author: 'BFSI Network',
      title: '80% asymptomatic cases deepens COVID-19 concerns in India - Elets',
      description: 'With inflating number of asymptomatic Covid-19 cases responsible for spreading the infection, Indias top medical research body is struggling with the problem caused by the "silent spreaders" ',

    },
    {
        id:3,
        author: 'AFP',
        title: 'Coronavirus: How diseases have originates from the animal world - Daily Monitor',
        description: 'Scientists think it originated in bats and could have been passed on via another mammal like a pangolin, an endangered species whose meat and scales are highly prized in parts of Asia',
    },
    {
        id:4,
        author: 'Kristen V Brown',
        title: 'Why there is a big debate over accuracy and results of Covid anti-body tests - ThePrint',
        description: 'The anti-body test is crucial to understanding Covid-19 & the virus that causes it. It can tell how many people potentially have some level of immunity.',
    }
]

export const LANGLINKS = {
    HOME: 'home',
    USERS: 'users',
    NEWS: 'news',
  };

export const LANGACTIONS = {
    VIEW_USER:'View User',
    VIEW_NEWS:'View news',
    SAVE:'SAVE',
    CREATE:'CREATE',
}
export const ROUTES = {
    HOME:"/",
    USERS:"/users",
    CREATE_USER:"/users/create",
    VIEW_USER:"/users/:id",
    NEWS:"/news",
    VIEW_NEWS:"/news/:id",
}


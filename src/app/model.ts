class Country {
    name;
    officialName;
    flag;
    alphaCode;
    capital;
    population;
    gallery;
    timezone;

    constructor(name: string, officialName: string, flag: string, alphaCode: string, capital: Array<string>, population: string, gallery:Array<String>, timezone: string) {
        this.name = name;
        this.officialName = officialName;
        this.flag = flag;
        this.alphaCode = alphaCode;
        this.capital = capital;
        this.population = population;
        this.gallery = gallery;
        this.timezone = timezone;
    }
}

class Weather {
    text;
    icon;
    localTime;

    constructor(text: string, icon: string, localTime: string) {
        this.text = text;
        this.icon = icon;
        this.localTime = localTime;
    }
}

class News {
    title;
    content;
    image;
    date;
    time;
    link;

    constructor(title: string, content: string, image: any, date: string, time: string, link: string) {
        this.title = title;
        this.content = content;
        this.image = image;
        this.date = date;
        this.time = time;
        this.link = link;
    }
}

class Attraction {
    name;
    image;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}

class Holiday {
    name;
    localName;
    date;

    constructor(name: string, localName: string, date:string) {
        this.name = name;
        this.localName = localName;
        this.date = date;
    }
}

class League {
    name;
    image;

    constructor(name: string, image: string) {
        this.name = name;
        this.image = image;
    }
}

class Team {
    name;
    image;
    goal;

    constructor(name: string, image: string, goal: string) {
        this.name = name;
        this.image = image;
        this.goal = goal;
    }
}

class SoccerMatch {
    league;
    homeTeam;
    awayTeam;

    constructor(league: League, homeTeam: Team, awayTeam: Team) {
        this.league = league;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
}

module.exports = {Country, Weather, News, Attraction, Holiday, SoccerMatch}
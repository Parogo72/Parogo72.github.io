const __addCookie = (cname, cvalue, exdays = 0, cpath = '/') => document.cookie = `${cname}=${cvalue}${exdays ? `; expires=${(new Date(Date.now() + exdays * 86400000)).toUTCString()}` : ''}; path=${cpath}`;
const __removeCookie = (cname, cpath) => document.cookie = `${cname}=; expires=${Date()}; path=${cpath}`;
const __readCookie = (cname) => {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

const __conf = {
    default: {
        theme: 0,
        lang: 0,
        notation: 0,
        round: 0
    },
    eq: {
        theme: ['white', 'black'],
        lang: ['Español', 'English', 'Català'],
        notation: ["10", "e"],
        round: ["mil", "cent", "dec"]
    } 
}

class __Cookie {
    constructor(name) {
        this.name = name;
    }
    get value () {
        return __conf.eq[this.name][__readCookie(this.name)] || __conf.eq[this.name][__conf.default[this.name]];
    }
    set value (t) {
        const v = __conf.eq[this.name].indexOf(t);
        if(typeof v !== 'undefined') __addCookie(this.name, v, 365);
        else throw new Error(`[Cookies] Invalid ${this.name} value: ${t}`);
    }
    exist() {
        const v = __readCookie(this.name);
        return !!v || v !== '';
    }
}

class __C {
    constructor() {
        this.theme = new __Cookie('theme');
        this.lang = new __Cookie('lang');
        this.notation = new __Cookie('notation');
        this.round = new __Cookie('round');
    }
    defaultValues = __conf.default;
    values = __conf.eq;
}

const c = new __C();

if(!c.theme.exist()) c.theme.value = __conf.eq.theme[__conf.default.theme];
if(!c.lang.exist()) c.lang.value = __conf.eq.lang[__conf.default.lang];
if(!c.notation.exist()) c.notation.value = __conf.eq.notation[__conf.default.notation];
if(!c.round.exist()) c.round.value = __conf.eq.round[__conf.default.round];

const params = new URLSearchParams(window.location.search);
if(languages[params.get("lang")].description) {
    document.querySelector('meta[name="description"]').setAttribute("content", languages[params.get("lang")].description);
    document.querySelector('meta[property="og:description"]').setAttribute("content", languages[params.get("lang")].description);
}

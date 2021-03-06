let  aLetter = document.getElementById('a-letter')
let a = document.getElementById('body')

let alphabet = document.getElementById('alphabet')
let cover = document.getElementById('cover')

let submitEl = document.querySelector('.submit-btn')
submitEl.addEventListener('click', start)

let restartEl = document.querySelector('.restart-btn')
restartEl.addEventListener('click', restart)
let wordArray;

let nameEl = document.getElementById("name_input")
nameEl.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
     event.preventDefault();
     submitEl.click();
    } else {
        nameEl.addEventListener("keyup", start);
    }
});



let count = 7
let counter = 7
let colors = [
    '#F15353', // red
    '#F17553', // orange
    '#F1D953', //yellow
    'rgb(120, 184, 68)', // green
    // '#A0E449', // green
    'rgb(68, 147, 184)', //blue
    'rgb(102, 65, 158)', // violet

    'rgb(202, 111, 146)', //pink
]

let diacritics = {
    'ě': 'e_letter',
    'š': 's_soft_letter',
    'č': 'c_soft_letter',
    'ř': 'r_soft_letter',
    'ž': 'z_soft_letter',
    'ý': 'y_letter',
    'á': 'a_letter',
    'í': 'i_letter',
    'é': 'e_letter',
    'ú': 'u_letter',
    'ů': 'u_letter'
}

let content = {
    a_letter : {text:'Alzheimerova choroba je onemocnění spojené s úbytkem nervových buněk v mozku a s postupující demencí. Ve věku 80 let se může týkat zhruba každého pátého z nás. Vyléčit Alzheimerovu chorobu neumíme, při včasném záchytu však umíme průběh onemocnění zmírnit. Proto je ve starším věku součástí preventivní prohlídky vyšetření kognitivních schopností pacienta. Ale ani to někdy nestačí. <br><br> Umělá inteligence umí na základě některých vyšetření odhadnout míru rizika rozvoje Alzheimerovy choroby u konkrétního pacienta. Přínosem kromě zhodnocení provedených vyšetření je i automatická analýza fotografie výrazu v obličeji či fotografie sítnice pomocí tzv. hlubokého učení. Umělá inteligence pak doporučí další vyšetření, třeba zobrazovací (jako je CT nebo magnetická rezonance) nebo vyšetření mozkomíšního moku. Cílem použití umělé inteligence je zejména nastavit ideální postup, při kterém lékaři dokáží zachytit včas co nejvíc rizikových pacientů a zahájit jim co nejdříve individuální sledování či léčbu.', img:''},
    b_letter : {text: "Umělá inteligence umí pomoci při zjišťování a léčbě bakteriálních onemocnění. Může to znít překvapivě, ale již v 70. letech minulého století vznikl expertní systém MYCIN, který uměl poradit lékaři s léčbou infekcí. Po zadání několika základních údajů dokázal MYCIN odhadnout, jaká bakterie nejspíše způsobuje pacientovi jeho onemocnění a dokonce jaká antibiotika by byla pro léčbu nejvhodnější. <br><br> V dnešní době se umělá inteligence dokáže uplatnit při vývoji antibiotik, při odhalování odolnosti bakterií vůči antibiotikům, při sledování průběhu onemocnění u rizikových pacientů (například včasné odhalení sepse) a podobně.", img:''},    
    c_letter : {text: "Zdravé cévy jsou pro nás doslova životně důležité. Proto cévám v moderní medicíně věnujeme velkou pozornost i s ohledem na prevenci různých onemocnění. Chceme snížit riziko srdečních infarktů a cévních mozkových příhod.<br><br>Umělá inteligence umí pomoci vyhodnocovat výsledky zobrazovacích metod, nejen rentgenových vyšetření, ale i vyšetření pomocí ultrazvuku či infračerveného záření. Mnohem přesněji odhalí drobné chorobné změny a dokáže z celkového obrazu a ostatních údajů vypočítat rizikovost pacienta v budoucnu. Dokáže tak včasným zásahem zabránit infarktu či mrtvice u lidí, kteří by jinak zůstali bez léčby.<br><br>I během diagnostiky akutních příhod dokáže umělá inteligence pomoci. Například u akutních cévních mozkových příhod umí urychlit a zpřesnit dané vyšetření (CT nebo magnetickou rezonanci) či upozornit na snímky, kde se s největší pravděpodobností nachází nějaká patologie. Některé modely neuronových sítí už dokonce dokázaly u konkrétních pacientů odhadnout riziko, s jakým u původně uzavřené cévy může dojít k následnému krvácení, což je jinak obávaná a mnohdy život ohrožující komplikace.", img:''},
    c_soft_letter : {text: "Delá kočka!", img:''},   
    d_letter : {text: 'Dům je stavení, zpravidla obytné. ', img:''},  
    e_letter : {text: 'Ozvěna (též echo) je akustický jev, který vzniká odrazem zvuku od rozlehlé překážky. Odražený zvuk poté posluchač vnímá zpožděně. Vhodnou překážkou pro vznik ozvěny je například skála, dno studny, jeskyně, dno propasti nebo vnitřek rozlehlé budovy.',  img:''},  
    f_letter : {text: 'Prohra, nezdar, neúspěch, trapné selhání, malér, průšvih',   img:''}, 
    g_letter : {text: 'Jako galoše označujeme gumovou ochrannou obuv vhodnou do bláta, deště a pro práci v mokrém terénu. Jedná se vlastně o gumové přezůvky.',    img:''},
    h_letter : {text: 'Háje (německy Haj) jsou městská čtvrť a katastrální území na východě městské části Praha 11, kterou tvoří společně s Chodovem.',   img:''},
    i_letter : {text: 'Iniciála (z latinského initium „začátek“, ze slovesa in-ire, „vejít, vstoupit“) je první písmeno slova, které je výrazně odlišeno od ostatního textu velikostí, barvou nebo tvarem, někdy (hlavně v rukopisech, ale i ve starších tiscích) vybaveno i iluminací. Obvykle bývá na začátku stránky, kapitoly nebo odstavce.',   img:''},
    ch_letter : {text: "Chorvatsko (starším názvem Charvátsko, chorvatsky Hrvatska), plným názvem Chorvatská republika (chorvatsky Republika Hrvatska), je evropský stát, který se geograficky nachází na pomezí střední a jižní Evropy;", img:''},
    j_letter : {text:"Jablko je plod jabloně, patří mezi nejběžnější druhy ovoce nejen ve střední Evropě. Jde o malvici, podobně jako u plodu hrušně hrušky.", img:''}, 
    k_letter : {text:"Kaše je pokrm na bázi tekutiny tuhé nebo polotuhé konzistence", img:''}, 
    l_letter : {text:"Líbánky je český film z roku 2013 režiséra Jana Hřebejka.", img:''}, 
    m_letter : {text:"Most je dopravní stavba, která převádí pěší, silniční nebo železniční cestu případně vodní tok, přes překážku, kterou může být například vodní plocha (řeka, potok, moře, jezero), terénní nerovnost (údolí, rokle, strž) nebo jiná komunikace.", img:''}, 
    n_letter : {text:"Noste roušky!", img:''}, 
    n_soft_letter : {text:"", img:''}, 
    o_letter : {text:"Boo!", img:''}, 
    p_letter : {text:"Park", img:''}, 
    q_letter : {text:"", img:''}, 
    r_letter : {text:"Radost je příjemná emoce, vznikající v reakci na úspěch či zisk u jednodušších, emocí schopných tvorů (např. člověk), a na prožitek čisté lásky a sounáležitosti u těch na vyšší úrovni. ", img:''}, 
    r_soft_letter : {text:"teče!", img:''}, 
    s_letter : {text:"Seno", img:''}, 
    s_soft_letter : {text:"Šablona", img:''}, 
    t_letter : {text:"Tábor (německy Tabor) je město ve stejnojmenném okrese, v Jihočeském kraji, 50 km severně od Českých Budějovic a 75 km jižně od Prahy.r", img:''}, 
    t_soft_letter : {text:"", img:''}, 
    u_letter : {text:"Úprava", img:''}, 
    v_letter : {text:"Vrstva", img:''}, 
    w_letter : {text:"Waltz je tanec v tříčtvrťovém taktu, jeho současná verze vznikla na počátku 20. století v Anglii z amerického tance boston a evropského ländleru (předchůdce valčíku). ", img:''}, 
    x_letter : {text:"Xylofon (z řečtiny xylos – dřevo a phoné – hlas) je hudební nástroj ze skupiny bicích nástrojů.", img:''}, 
    y_letter : {text:"Ypsilon", img:''}, 
    z_letter : {text:"Zebra je označení pro jeden ze tří podrodů kopytníků z rodu Equus, jejichž srst je charakteristicky bílo-černě pruhovaná", img:''}, 
    z_soft_letter : {text: 'kvák!',   img:''},

}
console.log(diacritics)

function start(){
    restart()
    let name = nameEl.value;
    name = name.toLowerCase()
    let wordArray = name.split("");
    
    for (let i=0; i<wordArray.length; i++) {
        console.log(wordArray[i])
        if (wordArray[i] === 'ň') {
            wordArray[i] = 'n_letter'
        
        } else if ( wordArray[i] === 'ě') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'š') {
            wordArray[i] = 's_soft_letter'

        } else if (wordArray[i] === 'č') {
            wordArray[i] = 'c_soft_letter'

        } else if (wordArray[i] === 'ř') {
            wordArray[i] = 'r_soft_letter'

        } else if (wordArray[i] === 'ž') {
            wordArray[i] = 'z_soft_letter'

        } 
        // else if (wordArray[i] === 'ť') {
        //     wordArray[i] = 't_soft_letter'

        // } else if (wordArray[i] === 'ď') {
        //     wordArray[i] = 'd_soft_letter'

        // } 

        else if (wordArray[i] === 'ť') {
            wordArray[i] = 't_letter'

        } else if (wordArray[i] === 'ď') {
            wordArray[i] = 'd_letter'

        } 

        else if (wordArray[i] === 'ý') {
            wordArray[i] = 'y_letter'

        } else if (wordArray[i] === 'á') {
            wordArray[i] = 'a_letter'

        } else if (wordArray[i] === 'í') {
            wordArray[i] = 'i_letter'

        } else if (wordArray[i] === 'é') {
            wordArray[i] = 'e_letter'

        } else if (wordArray[i] === 'ú') {
            wordArray[i] = 'u_letter'

        } else if (wordArray[i] === 'ů') {
            wordArray[i] = 'u_letter'

        } else if (wordArray[i] === 'ó') {
            wordArray[i] = 'o_letter'

        } else  {
            wordArray[i] += '_letter'
        }
    }
    // console.log(name)
    console.log(wordArray)
    
    Array.from(alphabet.children).forEach( card => {

        card.style.backgroundColor = colors[count % 7]
        card.dataset.ourcolor = colors[count % 7]
        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 7]
        })
        count += 1

        if (!(wordArray.includes(card.id))) {
            card.style.display = 'none'
        }

        }
    )
}

function restart() {

    Array.from(alphabet.children).forEach( card => {
        card.style.display = 'flex'
        })

}





function show(e) {
    
    let our_color = window.getComputedStyle(e.target).getPropertyValue("background-color");
    our_color = e.target.dataset.ourcolor
    console.log(e.target)
    if (!(e.target.dataset.ourcolor)) {
        window.getComputedStyle(e.target.parentElement).getPropertyValue("background-color");
    }

    // console.log(our_color)
    // console.log('show', e.target)

    cover.style.backgroundColor = our_color
    cover.style.display = 'flex'

    if (content[e.target.dataset.id].img) {
        cover.innerHTML = `<img src="${content[e.target.dataset.id].img}"> <h3>${content[e.target.dataset.id].text}</h3>`

    } else {
        cover.innerHTML = `<h3>${content[e.target.dataset.id].text}</h3>`
    }

}

function unshow(e) {
    // console.log('Done')
    cover.style.display = 'none'
}

function compoundWord() {
    pass
}


function attachColors() {
    
    Array.from(alphabet.children).forEach( card => {
        card.style.backgroundColor = colors[count % 7]
        card.dataset.ourcolor = colors[count % 7]

        Array.from(card.children).forEach ( child => {
            child.dataset.ourcolor = colors[count % 7]
        })
        // console.log(count, count % 7 - 1)
        count += 1

        card.addEventListener('click', show)
        }
    )
}





attachColors()


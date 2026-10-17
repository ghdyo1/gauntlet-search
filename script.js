const g=["fire","ice","poison","shadow","lava","bonus","chaos","demon","time","crystal","magic","spike","monster","doom","death","forest","force","spooky","water","haunted","acid","power","halloween","treasure","spider","gem","inferno","portal","strange","fantasy","christmas","mystery","cursed","cyborg","castle","world","galaxy","universe","discord","split","ncs 1","ncs 2","space","cosmos","random","chance","love","duality","paradox"];
const levels=[
    ["outerspace","overture","first race","shock","magmatic sanctuary"],//Fire
    ["amplification","skyward","carnation","geobound","polihedral"],//Ice
    ["acid factory","beast mode full","ground zero","shrimp","generation retro"],//Poison
    ["spooky light","ominous","ghosttown","fear zone","infusion"],//Shadow
    ["infernal arena","ichor","frontline full","fire aura","danger zone"],//Lava
    ["chambers","rising","battletown","crazy ball","payload"],//Bonus
    ["anubis","scarlet surge","drippy dub","kappaclysm","dark drop"],//Chaos
    ["sidestep","traction","mechanical showdown","vibration","hell"],//Demon
    ["mind control","silence","timeless","half past twelve","rose"],//Time
    ["lustre","crystal fusion","sanctuary of light","prismarine","crystal essence"],//Crystal
    ["schade","aquarius","kalaxian","odyssey","empyrean"],//Magic
    ["victim","pureland","tenebris","desert bounce","powerful"],//Spike
    ["slam","omg aliens","monster mischief","mechanism","hellgate menace"],//Monster
    ["extinction","buried angel","shrill hallway","nowise","darkness keeper"],//Doom
    ["ghoul","shuriken","predator","adust","the behemoth"],//Death
    ["lost in the woods","honeydew","twenty four","petal patch","astralith"],//Forest
    ["propane nightmares","expansion","uprising","motion","metal magic"],//Force
    ["devils tombyard","spoopier","parsnip","trip or treat","hydrux"],//Spooky
    ["submerged","trek","soar","ocean rush","calypso blitz"],//Water
    ["the diablo","vessel","great asset","fall apart","not a phobia"],//Haunted
    ["sewer showdown","soreville","savage sewer","necrus","absolute garbage"],//Acid
    ["rush","perpetual motion","digital glitch","stylewave","unnamed h"],//Power
    ["boo","spoopy","clownparty","retention remaster","tricky treats"],//Halloween
    ["avarinth","seaside shuffle","baelfire","floodfall caverns","zone pirate v"],//Treasure
    ["free the boys","weaver","outside world","deepweb","creepy crawlers"],//Spider
    ["venice","golem","crystal corridor","silhouette garden","radiant rift"],//Gem
    ["burn","ablaze","tabasco","inferno","in silico"],//Inferno
    ["azimuth","shards of siberia","between worlds","whymewhymewhymewhyme","tsuretette"],//Portal
    ["sha","odd","the poolrooms","b spr9s0","underworld"],//Strange
    ["dreamy","magic valley","in deepestiner","voyage","united"],//Fantasy
    ["flight ii","deluxe","winter works","les go 2","trainwreck"],//Christmas
    ["under","3rd 3y3","empty space","self reflect","control"],//Mystery
    ["im dead","last abyss","deathstep iii","ispywithmylittleeye","death moon"],//Cursed
    ["assembly line","3nine","mission 01","quantum future","gethappier"],//Cyborg
    ["crush","glorious fortress","sky tower","castlemania","still life"],//Castle
    ["nivel","great white north","frostburn peak","planet x","down unda"],//World
    ["caput mundi","fizzy fossils","koenigstein","xin chao","xanadu"],//Galaxy
    ["ruta del sol","bismarck","lutetia","pabrik","asadal"],//Universe
    ["afterlife","snow flies in fog","growing insane","double dimension","radiant glen"],//Discord
    ["subdivision zone","seasonal haven","wild card","sinless ash","change of scene"],//Split
    ["bussin","ber zer ker","quebrantar","next cab soon","the incinerator"],//NCS I
    ["slasher","i see stars","neozenith","magistro","wannacry"],//NCS II
    ["abducted","stardust sanctuary","jova","out of place","alien dream emulator"],//Space
    ["the beyond","spacetime continuum","kisaragi","aperture","final orbit"],//Cosmos
    ["dimension break","krypt of krandon","dll","busted","randomverse"],//Random
    ["io","fukashigi","update disorder","dronification","project novaform"],//Chance
    ["moonlight","amorous","fallen in love","toytime trials","wall"],//Love
    ["drifting fortune","goldfish glade","quality time","tragedy muse","clearing"],//Duality
    ["the master","hyperheist","dao","master reality","quicksilver"] //Paradox
];
const authors=[
    ["nicki1202","fault","stamina","danolex","radiationv2"],//Fire
    ["berkoo","chaos","ilhamaulia","mikeymonke","creatorfreeze"],//Ice
    ["usernamedefault","god of music","dorsha","schady","arathhsa"],//Poison
    ["serponge","hyenada","izhar","gd jose","schady"],//Shadow
    ["suomi","dzras","god of music","sumsar","gd jose"],//Lava
    ["sirhadoken","ald3rite","tongii","izhar","therm22"],//Bonus
    ["adiale","insendium","danolex","glittershroom","alkali"],//Chaos
    ["chase","ferdefunky","tongii","schady","serponge"],//Demon
    ["darwin","bransilver","sirhadoken","hyenada","thedevon"],//Time
    ["g4lvatron","castrix","abstractdark","sirhadoken","chase"],//Crystal
    ["bransilver","skitten","thomartin","viprin","viprin"],//Magic
    ["geoslam1","torch121","f3lixsram","dashtrict","gd jose"],//Spike
    ["rafer","danzmen","mrkooltrix","haon","chase"],//Monster
    ["haon","f3lixsram","nico99","darwin","abstractdark"],//Doom
    ["desticy","ferdefunky","samoht","f3lixsram","jacobroso"],//Death
    ["r3xx3r","howler","zerosr","ghotstav","arclia"],//Forest
    ["rafer","alkali","radiationv2","taman","brasilver",],//Force
    ["j735","unzor","brokenmusicbox","pepethegod","nikce"],//Spooky
    ["subwoofer","olisw","puueds","serponge","danke"],//Water
    ["pipenachho","kizibro7","pixellolka","bli","enzore"],//Haunted
    ["mlggyarados","zoogie","butterboxx","destriv","bli"],//Acid
    ["dhaner","subwoofer","dangerkat","thomartin","r3xx3r"],//Power
    ["bli","unzor","deeperspace","robotic24","radiationv2"],//Halloween
    ["hhoppy","asterma","thetechniteam","j735","wilz"],//Treasure
    ["pocke","entium","funkyfries","subwoofer","kotabird"],//Spider
    ["presta","lyriaki","knots","vizitek","ivyteal"],//Gem
    ["r3xx3r","wav","talia","codex","rafer"],//Inferno
    ["knots","xender game","xxlocoxx","tmngaming","xenoteric"],//Portal
    ["vrymer","jayuff","kira9999","fungifity","presta"],//Strange
    ["dhaner","girlyale02","zhak","autonick","unzor"],//Fantasy
    ["rafer","logiking","debihan","unzor","knots"],//Christmas
    ["serponge","iltesseractli","ninkaz","flash","r3xx3r"],//Mystery
    ["danke","troxxp1","rehanz","voxicat","caustic"],//Cursed
    ["splinter25","scrumpy","thedevon","pipenacho","knots"],//Cyborg
    ["subwoofer","jamattack","rafer","serponge","empika"],//Castle
    ["neondusk","whirl","abstractdark","arb","danzmen"],//World
    ["royalp","jghost","woom","magpipe","mangosteen"],//Galaxy
    ["troxxp1","inex","lasersword33","r4nger","seokso"],//Universe
    ["nasgubb","denipol","subwoofer","girlyale02","knots"],//Discord
    ["dangerkat","abstractdark","thomartin","whirl","bli"],//Split
    ["connot","grax","debihan","arclia","vegtam"],//NCS I
    ["whirl","meeloz","f5night","chrapiva","kira9999"],//NCS II
    ["vegtam","glubfuberz","debihan","djudjeito","kira9999"],//Space
    ["lyal","desticy","empsea","chunlv1","bli"],//Cosmos
    ["abstractdark","lightpotatodev","galofuf","whirl","minay"],//Random
    ["7ak","trms01","dangerousrobot","ivyteal","dolphe"],//Chance
    ["unzor","jayuff","fadedcat","glubfuberz","fjud"],//Love
    ["bpi","vegtam","wistfrost","hauxz","mega0of"],//Duality
    ["studiobois","lightpotatodev","zgalliard","fileexplorerexe","ivyteal"] //Paradox
];
function check(){
    if(document.querySelector("input").value!=""){
        let a=document.querySelector("input").value;
        let b="";
        for(let i=0;i<g.length;i++){
            for(let j=0;j<5;j++){
                if(levels[i][j].includes(a.toLowerCase())){
                    b+=levels[i][j]+" by "+authors[i][j]+" in "+g[i]+" gauntlet\r\n";
                }
            }
        }
        if(b!=""){
            document.querySelector("div").innerText=b;
        }
        else{
            document.querySelector("div").innerText="Пошел нахуй.";
        }
    }
    else{
        document.querySelector("div").innerText="";
    }
};
document.querySelector("button").addEventListener("click",check)
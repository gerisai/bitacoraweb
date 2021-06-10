const providers = [
    "ABOS",
    "ALCOM",
    "AMBAR BLUE",
    "AR TELECOM",
    "BEGON",
    "BRAME TELECOM",
    "BARRCOM",
    "CABLING",
    "CITAI",
    "CLESA",
    "COMUNICARE",
    "DECELENCEL",
    "DISARO",
    "ESBA",
    "EXPERTCELL",
    "ETEL",
    "GLOBARED",
    "GTB",
    "GUIPO",
    "G R STRATEGICS",
    "HIDALZAC",
    "HYBRYD",
    "IEX",
    "INCORET",
    "INFRACOM",
    "INSTAFIBRA",
    "IOS",
    "ISREDES",
    "ITAY",
    "JOCO",
    "LCC",
    "MAFTEC",
    "MEGON",
    "MAHEVO",
    "MTL",
    "PEOPLE NETWORK",
    "PRESEA",
    "PROELCOM",
    "PROTELVAN",
    "RCE",
    "SARWAAT",
    "TCL",
    "TETSI",
    "TOTALCOM",
    "TOTALPLAY",
    "ZARP",
    "OTRO"
];

const Providers = () => {
    return (
        <>
        {providers.map((p,i) =>  (<option value={p} key={i}>{p}</option>))}
        </>    
    );
}

export default Providers;
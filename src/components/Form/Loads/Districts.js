const districts = [
    "CDMX 1",
    "CDMX 2",
    "CDMX 3",
    "CDMX 4",
    "CDMX 5",
    "CDMX 6",
    "CDMX 7",
    "CDMX 8",
    "CDMX 9",
    "CDMX 10",
    "CDMX 11",
    "CDMX 12",
    "CDMX 13",
    "CDMX 14",
    "CDMX 15",
    "CDMX 16",
    "CDMX 17",
    "CDMX 18",
    "CDMX 19",
    "CDMX 20",
    "CDMX 21",
    "CDMX 22",
    "CDMX 23",
    "CDMX 24",
    "CDMX 25",
    "CDMX 26",
    "CDMX 27",
    "CDMX 28",
    "AGUASCALIENTES",
    "CANCUN",
    "CELAYA",
    "CULIACAN",
    "CHIHUAHUA",
    "CD JUAREZ SUR",
    "CD JUAREZ NORTE",
    "CUERNAVACA",
    "GUADALAJARA",
    "LEON",
    "MERIDA",
    "MONTERREY",
    "MORELIA",
    "MEXICALLI",
    "PACHUCA",
    "PUEBLA",
    "QUERETARO",
    "SAN LUIS POTOSI",
    "TIJUANA",
    "TOLUCA",
    "VERACRUZ",
    "TUXTLA GZ",
    "XALAPA"
]

const Districts = () => {
    return (
        <>
        {districts.map((d,i) =>  (<option value={d} key={i}>{d}</option>))}
        </>    
    );
}

export default Districts;
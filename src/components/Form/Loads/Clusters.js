const clusters = ['AGRICOLA ORIENTAL', 'AGUA AZUL', 'AGUA CALIENTE', 'AGUA SANTA', 'ALCAHUACAN', 'ALDAMA', 'ALTAMIRA', 'AMPLIACION PUEBLO SANTA FE 1', 'ANAHUAC', 'ANZURES 1', 'ANZURES 2', 'APATLACO', 'APODACA', 'AQUILES SERDAN', 'ARAGON 1', 'ARAGON 2', 'ARBOLEDAS', 'ARCOS DE VALLARTA', 'ARCOS DEL SOL', 'ARCOS DEL SUR', 'ARGENTINA', 'ARROYO BLANCO', 'ASTURIAS', 'ATLACOMULCO', 'AZCAPOTZALCO', 'BELLAVISTA', 'BENITO JUAREZ 1', 'BENITO JUAREZ 2', 'BERNABE', 'BOCA DEL RIO', 'BOCANEGRA', 'BOJORQUEZ', 'BOLIVAR', 'BOSQUE REAL', 'BOSQUES', 'BOSQUES AMALUCAN', 'BUENOS AIRES', 'CABEZA DE JUAREZ', 'CAMPANARIO', 'CAMPESTRE', 'CAMPO BELLO', 'CANADA DEL REFUGIO', 'CANTERAS', 'CARLOS AMAYA', 'CARRANZA', 'CARTAGENA', 'CAUCEL', 'CELAYA 1', 'CELAYA 2', 'CELAYA 3', 'CERRO COLORADO', 'CERRO DE LA ESTRELLA', 'CERRO DE LA SILLA', 'CEYLAN', 'CHAMIZAL', 'CHEMUYIL', 'CHIHUAHUA', 'CHIMALHUACAN', 'CIUDAD AZTECA', 'CLAVERIA', 'COACALCO', 'COAPA', 'COLINAS DEL PARQUE', 'CONDESA', 'CONSTITUCION DE 1917', 'CONSTITUYENTES', 'COSTA VERDE', 'COYOACAN 1', 'COYOACAN 2', 'COYOL', 'CUAJIMALPA', 'CUAUTITLAN', 'CUAUTLA', 'CUERNAVACA 1', 'CUERNAVACA 2', 'CUERNAVACA 3', 'CULHUACAN', 'CUMBRES', 'CUMBRES DE SANTA FE', 'DEL VALLE', 'DONCELES', 'DOS MIL', 'EDUARDO MOLINA', 'EL COBANO', 'EL ROSARIO', 'EL SALADO', 'EL TREBOL', 'EL VERGEL', 'EL ZALATE', 'ENRAMADA', 'ENSENADA', 'ENSENADA_BCN', 'ESCANDON', 'ESPERANZA', 'FERROCARRILERA', 'FONTANA', 'FORTIN', 'FRAMBOYANES', 'FRANCISCO MONTEBELLO', 'FUENTES DEL VALLE', 'FUNDADORES', 'GALINDAS', 'GENERAL ESCOBEDO', 'GOMEZ MORIN', 'GRANJAS ESMERALDA', 'GRANJAS INDEPENDENCIA', 'GREMIAL', 'GUADALAJARA', 'GUADALAJARA II', 'GUADALUPE', 'GUADALUPE DEL MORAL', 'HACIENDA', 'HEROES TECAMAC I', 'HEROES TECAMAC II', 'HISTORIADORES', 'HUERTA REAL', 'IGNACIO ZARAGOZA', 'INDEPENDENCIA', 'INSURGENTES CUICUILCO', 'IXTACALA', 'IXTLAHUACA', 'IZCALLI 1', 'IZCALLI 2', 'IZTACALCO', 'JACARANDAS', 'JARDINES DE MORELOS', 'JARDINES DE SAN FRANCISCO', 'JARDINES DE SANTIAGO', 'JESUS DEL MONTE', 'JIUTEPEC', 'JURICA', 'KATAVIA', 'LA FLORESTA', 'LA HACIENDA', 'LA TIJERA', 'LA VISTA', 'LAGRANGE', 'LAS AGUILAS/CENTENARIO', 'LAS ALAMEDAS', 'LAS AMERICAS', 'LAS ARMAS', 'LAS CRUCES', 'LAS JUNTAS', 'LAS MERCEDES', 'LAZARO CARDENAS', 'LERMA', 'LIBERTAD', 'LINDAVISTA', 'LOMA BONITA', 'LOMAS COUNTRY CLUB', 'LOMAS DE ANGELOPOLIS', 'LOMAS DE CHAPULTEPEC', 'LOMAS DE MORELOS', 'LOMAS DE VIRREY', 'LOMAS DE ZAPOPAN', 'LOMAS VERDES', 'LOS CIPRESES', 'LOS FRAILES', 'LOS FRESNOS', 'LOS FUERTES', 'LOS NARANJOS', 'LOS REYES ACAQUILPAN', 'MAGISTERIAL', 'MALINALCO', 'MANANTIALES', 'MANUEL CLOUTHIER', 'MARAVILLAS', 'MARMOL', 'MATAMOROS', 'MAYAPAN', 'MAYORAZGO', 'MAYORCA', 'MELCHOR OCAMPO', 'MENDOZA', 'METEPEC', 'MEXIQUITO', 'MEZQUITAN', 'MIGUEL HIDALGO', 'MINERAL DE LA REFORMA', 'MIRADOR', 'MIRAFLORES', 'MIRAMONTES', 'MIRAVALLE', 'MIXCOAC/PORTALES', 'MONTEJO', 'MORALES CAMPESTRE', 'MUNDO E', 'NAPOLES', 'NARVARTE', 'NICOLAS ROMERO', 'NOGALES', 'NUEVO CALAKMUL', 'OASIS', 'OBISPADO', 'OBLATOS', 'OBSERVATORIO', 'OCEANIA', 'OJO DE AGUA', 'OTAY', 'OTRO', 'OZUMBILLA', 'PACHUCA CENTRO', 'PACIFICO', 'PALMITAS', 'PALOMARES', 'PANTITLAN', 'PARQUE DEL ALAMO', 'PARQUE VERDE', 'PARQUES NACIONALES', 'PASEO DE LOS ANGELES', 'PATRIA', 'PATRIA NUEVA', 'PEDREGAL', 'PELICANO 1', 'PELICANO 2', 'PENITAS', 'PENUELAS', 'PINO', 'PLAYA CENTRO', 'PLAYA HERMOSA', 'PLAYA LINDA', 'PLAYAS TIJUANA', 'PLAZA DEL SOL', 'PLAZA DORADA', 'POLANCO 1', 'POLANCO 2', 'PORTALES', 'PORTALES DE MORELIA', 'PRADO CHURUBUSCO', 'PRADOS XALOSTOC', 'PRESA DE GUADALUPE', 'PRESIDENTES', 'PROGRESO', 'PROVENZA', 'PROVIDENCIA', 'PUEBLA CENTRO', 'PUEBLO DE BOSQUE REAL', 'PUEBLO SANTA FE 1', 'PUEBLO SANTA FE 2', 'PUERTA DE HIERRO', 'PUERTO CANCUN', 'QUINTAS CAROLINA', 'QUINTO CENTENARIO', 'RANCHO BLANCO', 'REAL DE JEREZ', 'REAL DE TESISTAN', 'REFORMA AZUL', 'REFORMA_SUR_BCN', 'REFUGIO', 'REVOLUCION', 'ROBINSON', 'ROMA 1', 'ROMA 2', 'ROSAMAR', 'ROSARIO NORTE', 'ROSARITO_NORTE_TIJ', 'ROSAS MAGALLON', 'SALVATIERRA', 'SAN ANGEL', 'SAN ANTONIO', 'SAN BARTOLO AMEYALCO', 'SAN BERNABE', 'SAN CARLOS', 'SAN CAYETANO', 'SAN CRISTOBAL', 'SAN FELIPE', 'SAN FERNANDO 1', 'SAN FERNANDO 2', 'SAN FERNANDO 3', 'SAN JERONIMO', 'SAN JOSE CUMBRES', 'SAN JOSE DEL JARAL', 'SAN JOSE INSURGENTES', 'SAN JUAN TLIHUACA', 'SAN LORENZO', 'SAN LORENZO TEZONCO', 'SAN MARCOS', 'SAN MATEO ATENCO', 'SAN MIGUEL CHAPULTEPEC', 'SAN MIGUEL XICALCO', 'SAN NICOLAS', 'SAN PABLO DE LAS SALINAS I', 'SAN PABLO DE LAS SALINAS II', 'SAN PEDRO XALPA', 'SAN RAFAEL', 'SAN ROQUE', 'SANTA ANA', 'SANTA ANA II', 'SANTA ANITA', 'SANTA CATARINA', 'SANTA CECILIA', 'SANTA CLARA', 'SANTA CRUZ ACALPIXCA', 'SANTA FE', 'SANTA FE TIJUANA', 'SANTA MARIA', 'SANTA MARIA ACATITLA', 'SANTA MONICA', 'SANTA URSULA 1', 'SANTA URSULA 2', 'SANTA_FE_TIJ', 'SANTO DOMINGO', 'SANTOS DEGOLLADO', 'SATELITE', 'SATELITE 2 (ECHEGARAY)', 'SAUCES', 'SAUCITO', 'SOLARES', 'SOLEDAD', 'TABACHINES', 'TABACHINES II', 'TAMPIQUITO', 'TARIMOYA', 'TAXQUENA', 'TEC PACHUCA', 'TECAMACHALCO', 'TEJALPA', 'TEMIXCO', 'TEPALCAPA', 'TEPEPAN', 'TEPETLIXPAN', 'TEPEYAC', 'TEPOJACO', 'TERRANOVA', 'TESISTAN', 'THOMPSON', 'TICOMAN', 'TIERRA BUENA', 'TIERRA NUEVA', 'TLAJOMULCO DE ZUNIGA', 'TLALNEPANTLA', 'TLAQUEPAQUE', 'TLAQUEPAQUE II', 'TLATILCO', 'TOLOTZIN', 'TOLUCA 1 CENTRO', 'TOLUCA CU', 'TOLUCA SAN CARLOS', 'TOLUCA-LEONES', 'TONALA', 'TOPOCHICO', 'TORREMOLINOS', 'TOTOLTEPEC', 'TULPETLAC', 'TULTEPEC', 'TULTITLAN', 'UDLA', 'UMAN', 'UNIVERSIDAD', 'VALLARTA', 'VALLE DE BRAVO', 'VALLE DE HUAJUCO', 'VALLE DE HUINALA', 'VALLE DE LOS MOLINOS', 'VALLE DORADO', 'VALLE VERDE', 'VALLEJO', 'VALSEQUILLO', 'VERTIZ NARVARTE', 'VILLA DE LAS FLORES', 'VILLA DEL CARMEN', 'VILLA JUAREZ', 'VILLA MITRAS', 'VILLA VERONA', 'VILLAS', 'VILLAS DEL ALAMO', 'VISTA HERMOSA', 'XOCHIACA', 'XOCHIMILCO', 'XOCHITEPEC', 'ZACATENCO', 'ZALATE II', 'ZAPATA', 'ZAPOPAN', 'ZERTUCHE', 'ZINACANTEPEC', 'ZOMEYUCAN'];

const Clusters = () => {
    return (
        <>
        {clusters.map((c,i) =>  (<option value={c} key={i}>{c}</option>))}
        </>    
    );
}

export default Clusters;
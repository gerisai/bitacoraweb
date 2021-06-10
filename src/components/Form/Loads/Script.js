import { Textarea } from '@chakra-ui/react';

const selectAlarms = (form,i) => {
    let selected = {};
    for (let prop in form) {
        if (prop.startsWith(`alarm${i}`)) selected[prop] = form[prop];
    }
    return selected;
}

const selectPorts = (form,i) => {
    let selected = {};
    for (let prop in form) {
        if (prop.startsWith(`port${i}`)) selected[prop] = form[prop];
    }
    return selected;
}

const Script = ({ form, splitters, setScriptState }) => {
    let [ alarmString, portString, summary ] = ["","",""];
    let Null;
    let statusSummary = {
        Libre: 0,
        Ocupado: 0,
        Depurado: 0,
        Asegurado: 0,
        Fusionado:0,
        Empalmado: 0,
        SinPigtail: 0,
        Danado: 0,
        Atenuado: 0,
        Total: 0
    };
    for(let i = 1; i < splitters + 1; i++) {
        if (form[`f${i}`] || form[`s${i}`] || form[`p${i}`]) {
            alarmString += `*- SPLITTER ${i} -*\n`;
            alarmString += `Frame ${form[`f${i}`]}  Slot ${form[`s${i}`]}  Puerto ${form[`p${i}`]}  Ancho de banda  ${form[`bw${i}`]}  Número de Clientes  ${form[`clients${i}`]}\n`
        }
        let alarms = selectAlarms(form,i);
        for (let j = 1; j < Object.keys(alarms).length + 1; j++) {
            Null = typeof form[`alst${i}_${j}`] === 'undefined';
            alarmString += `${j < 9 ? "0" : ""}${j}.- Onu id: ${form[`alarm${i}_${j}`]}  Status: ${ Null ? '' : form[`alst${i}_${j}`]}\n`;
        }
        let ports = selectPorts(form,i);
        if (Object.keys(ports).length > 0) {
            let NullP;
            for (let j = 1; j < form[`ports${i}`] + 1; j++) {
                Null = typeof form[`portst${i}_${j}`] === 'undefined';
                NullP = typeof form[`port${i}_${j}`] === 'undefined';
                if (j === 1) { 
                    portString += `*- SPLITTER ${i} -*\n`;
                    portString += `01 : ${form[`ports${i}`] > 9 ? "" : "0"}${form[`ports${i}`]}\n`;
                }
                portString += `Puerto ${j > 9 ? "" : "0"}${j} :   Cuenta : ${NullP ? '' : form[`port${i}_${j}`]}   Status: ${ Null ? '' : form[`portst${i}_${j}`]}\n`;
                statusSummary[form[`portst${i}_${j}`]] += 1;
                statusSummary.Total += Null ? 0 : 1;
            }
        }
    }
    summary = 
`*-- DETALLE DE STATUS DE PUERTOS DE SPLITTER --*

*DEPURADOS:*       ${statusSummary.Depurado}
*OCUPADOS:*        ${statusSummary.Ocupado}
*ASEGURADOS:*      ${statusSummary.Asegurado} 
*LIBRES:*          ${statusSummary.Libre}
*FUSIONADOS:*      ${statusSummary.Fusionado}
*EMPALMADOS:*      ${statusSummary.Empalmado}
*SIN PIGTAIL:*     ${statusSummary.SinPigtail}
*DAÑADOS:*         ${statusSummary.Danado}
*ATENUADO:*        ${statusSummary.Atenuado}

*TOTALES:*         ${statusSummary.Total}
`;

    let script = 
`   *--SCRIPT ${form.service.toLowerCase() !== "soporte" ? "DEPURACIÓN" : "SOPORTE "} SCPE--*
*FECHA: ${new Date().toLocaleDateString('en-GB')}  HORA: ${new Date().toLocaleTimeString('en-GB')}*
*${form.service}-${form.id}*
*No. EMPLEADO:* ${form.numEmpl}
*IDC:* ${form.idc}\n${form.service.toLowerCase() !== "soporte" ? `*TIPO DE DEPURACION:* ${form.type}\r` : ""}
*PROOVEDOR:* ${form.provider}
*DISTRITO:* ${form.district}
*DIRECCION:* ${form.address}
*COORDENADAS:* ${form.coordinates}
*CLUSTER:* ${form.cluster}
*OLT:* ${form.olt}\n${alarmString !== "" ? "\n    *--DETALLE DE STATUS ONT--*\n" : ""}${alarmString}${portString !== "" ? "\n    *--DETALLE DE PUERTOS DE SPLITTER--*\n" : ""}${portString} 
    *--COMENTARIOS ADICIONALES--* 
${form.comment}
    *--INGENIERO SCPE: NOMBRE COMPLETO *--*   

${portString !== "" ? summary : ""}
`;

    return (
        <Textarea size="lg" bg="teal.500" fontFamily="monospace" color="white" rows={25} onChange={(e) => setScriptState(e.target.value)}>{script}</Textarea>
    );
} 

export default Script;

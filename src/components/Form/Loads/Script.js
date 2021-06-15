import { useContext } from 'react';
import { Textarea } from '@chakra-ui/react';
import { UserContext } from './../../../hooks/UserContext';

const notNullPorts = (ports) => {
    console.log(ports)
    for (let port in ports) {
        if (Array.isArray(ports)) {
            if (ports[port].port) return true
        } else {
            if (ports[port]) return true;
        }
    }
    return false;
}

const Script = ({ form, setScriptState }) => {
    const { user } = useContext(UserContext);
    let [ alarmString, portString, summary ] = ["","",""];
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

    form.splitters.forEach((splitter,i) => {
        if (parseInt(splitter.f) || parseInt(splitter.s) || parseInt(splitter.p)) {
            alarmString += `*- SPLITTER ${i + 1} -*\n`;
            alarmString += `Frame ${splitter.f || ''}  Slot ${splitter.s || ''}  Puerto ${splitter.p || ''}  Ancho de banda  ${splitter.bw || ''}  Número de Clientes  ${splitter.clients || ''}\n`
        }
        splitter.alarms.forEach((alarm,j) => {
            alarmString += `${(j + 1) < 9 ? "0" : ""}${j + 1}.- Onu id: ${alarm.alarm}  Status: ${alarm.status}\n`;
        });
        if (notNullPorts(splitter.ports)) {
            for (let k = 1; k < splitter.portNumber + 1; k++) {
                if (k === 1) { 
                    portString += `*- SPLITTER ${i + 1} -*\n`;
                    portString += `01 : ${splitter.portNumber > 9 ? "" : "0"}${splitter.portNumber}\n`;
                }
                portString += `Puerto ${k > 9 ? "" : "0"}${k} :   Cuenta : ${splitter.ports[`port${k}`] || ''}   Status: ${splitter.ports[`status${k}`] || ''}\n`;
                statusSummary[splitter.ports[`status${k}`]] += 1;
                statusSummary.Total += splitter.ports[`status${k}`] ? 1 : 0;
            }
        }
    });
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
    *--INGENIERO SCPE: ${user.name} *--*   

${portString !== "" ? summary : ""}
`;

    return (
        <Textarea size="lg" bg="teal.500" fontFamily="monospace" color="white" rows={25} onChange={(e) => setScriptState(e.target.value)}>{script}</Textarea>
    );
} 

export default Script;

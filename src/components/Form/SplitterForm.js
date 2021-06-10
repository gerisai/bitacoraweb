import SplitterGeneralForm from './SplitterGeneralForm';
import SplitterAlarms from './SplitterAlarms';
import SplitterPorts from './SplitterPorts';

const SplitterForm = ({ id, form, setForm }) => {
    return(
    <>
        <SplitterGeneralForm id={id} form={form} setForm={setForm} />
        <SplitterAlarms id={id} form={form} setForm={setForm}/>
        <SplitterPorts id={id} form={form} setForm={setForm}/>
    </>
    );
}

export default SplitterForm;
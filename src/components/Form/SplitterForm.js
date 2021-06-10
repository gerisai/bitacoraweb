import SplitterGeneralForm from './SplitterGeneralForm';
import SplitterAlarms from './SplitterAlarms';
import SplitterPorts from './SplitterPorts';

const SplitterForm = ({ id, form, handleChange, handleSwitch, sixteen, dummy, setForm }) => {
    return(
    <>
        <SplitterGeneralForm id={id} form={form} handleChange={handleChange} />
        <SplitterAlarms id={id} form={form} handleChange={handleChange} setForm={setForm}/>
        <SplitterPorts id={id} form={form} handleChange={handleChange} handleSwitch={handleSwitch} sixteen={sixteen} dummy={dummy}/>
    </>
    );
}

export default SplitterForm;
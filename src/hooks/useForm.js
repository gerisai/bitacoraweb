import { useState } from 'react';
import formFields from '../components/Form/Loads/FormFields';

export default function useForm () {
    const [ form, setForm ] = useState(JSON.parse(JSON.stringify(formFields)));

    return {
        form,
        setForm
    }

}
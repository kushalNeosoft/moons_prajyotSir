import {useState} from 'react';

const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (fieldName, value) => {
    setValues({
      ...values,
      [fieldName]: value,
    });
  };

  const handleSubmit = callback => {
    callback(values);
  };

  return {values, handleChange, handleSubmit};
};

export default useForm;

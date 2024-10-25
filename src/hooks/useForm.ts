import { ChangeEvent, useEffect, useMemo, useState } from 'react';

interface FormValidations {
  [key: string]: (((value: string) => boolean) | string)[]
}

export interface FormState {
  [key: `${string}Valid` | string]: string | null | ((value: string) => boolean);
}

export const useForm = <T>(initialForm: T, formValidations?: FormValidations) => {

  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState<FormState>({})

  useEffect(() => {
    createValidators();
  }, [formState])

  const isFormValid = useMemo(() => {
   
    for(const formValue of Object.keys(formValidation)) {
      if(formValidation[formValue] !== null) return false 
    }
    
    return true

  }, [formValidation])

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  const createValidators = () => {
    if (formValidations === undefined) return;

    const formCheckedValues: { [key: string]: string | null | ((value: string) => boolean) } = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      if (typeof fn !== 'function') {
        console.error(`Validation function for ${formField} is not a function`);
        continue;
      }

      const fieldValue = (formState as { [key: string]: any })[formField];
      if (fieldValue === undefined) {
        console.error(`Form field ${formField} does not exist in formState`);
        continue;
      }

      formCheckedValues[`${formField}Valid`] = fn(fieldValue) ? null : errorMessage;
    }
    setFormValidation(formCheckedValues);
  }

  return {
    ...formValidation,
    ...formState,
    isFormValid,
    formState,
    onInputChange,
    onResetForm,
  }
}
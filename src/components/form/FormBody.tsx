import React, { ChangeEvent } from 'react'
import FormFieldModel from '../../models/FormFieldModel'
import { ErrorMessage, Field } from 'formik'

const FormBody:React.FC<FormFieldModel> = (formField): JSX.Element => {
var field:React.JSX.Element;
     switch(formField.type){
        case 'select':
          field=( <div className="form-group  p-2">
                <label className='small mb-0 ' htmlFor={formField.id}>{formField.label}</label>
                <Field className="form-control" id={formField.id}  as="select" data-testid={formField.id} name={formField.name} required={formField.required}>
                <ErrorMessage data-testid={formField.id} name={formField.id} component="div" className="error" />
                <option value="" disabled>{formField.placeholder}</option>           
                {formField.options && formField.options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
                </Field>
                </div>);
                break;
        case 'text':
            field=( <div className="form-group  p-2">
            <label  className='small mb-0 ' htmlFor={formField.id}>{formField.label}</label>
            <Field   data-testid={formField.id} className="form-control" type={formField.type}     placeholder={formField.placeholder}  id={formField.id} name={formField.id} required={formField.required}  />
                <ErrorMessage  data-testid={`err-${formField.id}`} name={formField.id}  className="error"   component="span" />
        </div>);
       break;
       case 'number':
        field=( <div className="form-group  p-2">
        <label  className='small mb-0 ' htmlFor={formField.id}>{formField.label}</label>
        <Field   data-testid={formField.id} style={{
          // Apply the CSS to hide spin buttons
          WebkitAppearance: 'none',
          appearance: 'none',
          margin: '0', // Adjust the margin as needed
        }}   pattern={formField.pattern} className="form-control" type='text'   onInput={(e: ChangeEvent<HTMLInputElement>)=>{ e.target.value = e.target.value.replace(/[^0-9]/g, '');}}  placeholder={formField.placeholder}  id={formField.id} name={formField.id} required={formField.required}  />
            <ErrorMessage  data-testid={`err-${formField.id}`} name={formField.id}  className="error"   component="span" />
    </div>);
   break;
        case 'textarea':
            field=( <div className="form-group  p-2">
            <label  className='small mb-0  ' htmlFor={formField.id}>{formField.label}</label>
            <Field  data-testid={formField.id} className="form-control" component={formField.type}     placeholder={formField.placeholder}  id={formField.id} name={formField.id} required={formField.required}  />
                <ErrorMessage  name={formField.id}  component="div"  className="error"  />
        </div>);
       break;

       default:
        field=( <div className="form-group  p-2">
        <label  className='small mb-0  ' htmlFor={formField.id}>{formField.label}</label>
        <Field   className="form-control" type={formField.type}     placeholder={formField.placeholder}  id={formField.id} name={formField.id} required={formField.required}  />
            <ErrorMessage  name={formField.id}  component="div"  className="error"  />
    </div>);
   break;
     }
 
     return  field;
  
}

export default FormBody
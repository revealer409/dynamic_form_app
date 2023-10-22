interface FormFieldModel {
    id:string,
    name: string;
    type: string;      
    label?:string;
    placeholder?:string;
    required?:boolean;
    options?:Array<string>   
  }

  export default FormFieldModel;
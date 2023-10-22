interface FormFieldModel {
    id:string,
    name: string;
    type: string;      
    label?:string;
    placeholder?:string;
    required?:boolean;
    pattern?:string;
    options?:Array<string>   
  }

  export default FormFieldModel;
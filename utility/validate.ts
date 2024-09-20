interface ValidationErrors {
    [key: string]: string | undefined;
  }
  
  type ValidationRule = (value: string) => string | undefined;
  
  interface ValidationConfig {
    [key: string]: {
      required?: boolean;
      validate?: ValidationRule;
    };
  }
  
  const emailValidation: ValidationRule = (value) => {
    if (!/\S+@\S+\.\S+/.test(value)) {
      return 'Email is not valid.';
    }
  };
  
  const validateForm = (values: Record<string, string>, config: ValidationConfig): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    for (const key in config) {
      const { required, validate } = config[key];
      const value = values[key];
  
      if (required && !value) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      } else if (validate) {
        const validationError = validate(value);
        if (validationError) {
          errors[key] = validationError;
        }
      }
    }
  
    return errors;
  };
  
  export { validateForm, emailValidation };
  
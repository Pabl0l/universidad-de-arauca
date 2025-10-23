import React from 'react';
import { useFloatingLabel } from '../../hooks';
import styles from './FormField.module.css';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const FormField: React.FC<FormFieldProps> = ({ id, name, label, type = 'text', required = false, options, value, onChange }) => {
  const { isFloating, handleFocus, handleBlur } = useFloatingLabel(value || '');

  const commonProps = {
    id,
    name,
    required,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange,
    value,
  };

  return (
    <div className={`${styles.formGroup} ${isFloating ? styles.isFloating : ''} ${type === 'date' ? styles.dateField : ''}`}>
      {type === 'select' ? (
        <select {...commonProps} className={styles.formSelect}>
          <option value="" disabled></option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...commonProps} type={type} className={styles.formInput} placeholder={type === 'date' ? 'dd/mm/aa' : ' '} />
      )}
      <label htmlFor={id} className={styles.formLabel}>
        {label}
      </label>
    </div>
  );
};

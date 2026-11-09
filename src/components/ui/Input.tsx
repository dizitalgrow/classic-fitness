import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helperText, id, ...props }, ref) => {
    const inputId = id || props.name || Math.random().toString(36).substring(2, 9);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={inputId}
            className="text-xs font-mono font-medium uppercase tracking-[0.08em] text-[#b3b2b2] select-none"
          >
            {label} {props.required ? <span className="text-[#ffc526]">*</span> : null}
          </label>
        ) : null}

        <input
          id={inputId}
          type={type}
          ref={ref}
          className={cn(
            'w-full h-11 px-3.5 rounded bg-[#050507] border text-[#f3f4f2] placeholder:text-[#8e8e8e] text-sm font-body transition-colors duration-150 focus:outline-none focus:border-[#ffc526] focus:ring-1 focus:ring-[#ffc526] disabled:opacity-50 disabled:cursor-not-allowed',
            error ? 'border-[#ff425f]' : 'border-[#414045] hover:border-[#8e8e8e]',
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />

        {error ? (
          <span id={`${inputId}-error`} className="text-xs text-[#ff425f] font-body font-semibold">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-xs text-[#8e8e8e] font-body">{helperText}</span>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, rows = 3, ...props }, ref) => {
    const textareaId = id || props.name || Math.random().toString(36).substring(2, 9);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={textareaId}
            className="text-xs font-mono font-medium uppercase tracking-[0.08em] text-[#b3b2b2] select-none"
          >
            {label} {props.required ? <span className="text-[#ffc526]">*</span> : null}
          </label>
        ) : null}

        <textarea
          id={textareaId}
          ref={ref}
          rows={rows}
          className={cn(
            'w-full p-3.5 rounded bg-[#050507] border text-[#f3f4f2] placeholder:text-[#8e8e8e] text-sm font-body transition-colors duration-150 focus:outline-none focus:border-[#ffc526] focus:ring-1 focus:ring-[#ffc526] disabled:opacity-50 disabled:cursor-not-allowed resize-none',
            error ? 'border-[#ff425f]' : 'border-[#414045] hover:border-[#8e8e8e]',
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          {...props}
        />

        {error ? (
          <span id={`${textareaId}-error`} className="text-xs text-[#ff425f] font-body font-semibold">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-xs text-[#8e8e8e] font-body">{helperText}</span>
        ) : null}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const selectId = id || props.name || Math.random().toString(36).substring(2, 9);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label ? (
          <label
            htmlFor={selectId}
            className="text-xs font-mono font-medium uppercase tracking-[0.08em] text-[#b3b2b2] select-none"
          >
            {label} {props.required ? <span className="text-[#ffc526]">*</span> : null}
          </label>
        ) : null}

        <select
          id={selectId}
          ref={ref}
          className={cn(
            'w-full h-11 px-3.5 rounded bg-[#050507] border text-[#f3f4f2] text-sm font-body transition-colors duration-150 focus:outline-none focus:border-[#ffc526] focus:ring-1 focus:ring-[#ffc526] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
            error ? 'border-[#ff425f]' : 'border-[#414045] hover:border-[#8e8e8e]',
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${selectId}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="bg-[#111014] text-[#f3f4f2] py-2"
            >
              {option.label}
            </option>
          ))}
        </select>

        {error ? (
          <span id={`${selectId}-error`} className="text-xs text-[#ff425f] font-body font-semibold">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-xs text-[#8e8e8e] font-body">{helperText}</span>
        ) : null}
      </div>
    );
  }
);
Select.displayName = 'Select';

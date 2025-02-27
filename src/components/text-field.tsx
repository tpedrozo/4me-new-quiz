import React, { forwardRef } from "react";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          {...props}
          type="text"
          data-invalid={errorMessage ? "true" : "false"}
          className="w-full h-[50px] indent-4 rounded text-gray-600 data-invalid:border-2"
        />
        {errorMessage && (
          <p className="absolute -bottom-[22px]  text-red-500 max-w-sm text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";

export default TextField;

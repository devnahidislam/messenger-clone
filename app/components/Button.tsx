'use client'

import clsx from "clsx";

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondery?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  secondery,
  danger,
  disabled
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={
          clsx(`
            flex
            justify-center
            rounded-md
            px-3
            py-2
            text-sm
            font-semibold
            focus-visible: outline
            focus-vsisible: outline-2
            focus-visible: outline-offset-2`,

            disabled && `opacity-50 cursor-default`,
            fullWidth && `w-full`,
            secondery ? `text-gray-900` : `text-white`,
            danger && `bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600`,
            !secondery && !danger && `bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600`
          )
        }
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
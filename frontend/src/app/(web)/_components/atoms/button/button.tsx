/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import "./button.css";

export default function Button({
  children,
  href,
  spaceClassName,
  ...props
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else {
      props.onClick?.(undefined as any);
    }
  };

  return (
    <div className="relative group">
      <div
        className={classNames(
          "w-3 h-1 absolute -top-0.5 right-[15%] z-20 transition-all duration-300 group-hover:w-0",
          spaceClassName,
        )}
      ></div>

      <div
        className={classNames(
          "w-3 h-1 absolute -bottom-0.5 left-[15%] z-20 transition-all duration-300 group-hover:w-0",
          spaceClassName,
        )}
      ></div>

      <button
        {...props}
        className={`border-primary border-2 text-primary px-4 py-2 rounded-lg button-css flex gap-2 items-center cursor-pointer ${classNames(props.className)}`}
        onClick={handleClick}
      >
        {props.icon && <div className="icon-container">{props.icon}</div>}
        {children}
      </button>
    </div>
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  spaceClassName?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

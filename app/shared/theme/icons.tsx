'use client';

import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function ArrowLeftIcon({ 
  size = 20, 
  color = '#33363d', 
  className = '' 
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ 
  size = 20, 
  color = '#22C55E', 
  className = '' 
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.667 5L7.5 14.167L3.333 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserIcon({ 
  size = 20, 
  color = '#33363d', 
  className = '' 
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.667 17.5V15.833C16.667 14.949 16.316 14.101 15.691 13.476C15.066 12.851 14.218 12.5 13.333 12.5H6.667C5.783 12.5 4.934 12.851 4.309 13.476C3.684 14.101 3.333 14.949 3.333 15.833V17.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.167C11.841 9.167 13.333 7.675 13.333 5.833C13.333 3.992 11.841 2.5 10 2.5C8.159 2.5 6.667 3.992 6.667 5.833C6.667 7.675 8.159 9.167 10 9.167Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WarningIcon({ 
  size = 20, 
  color = '#F59E0B', 
  className = '' 
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.574 2.343C9.201 1.22 10.799 1.22 11.426 2.343L18.092 14.343C18.719 15.466 17.92 16.833 16.666 16.833H3.334C2.08 16.833 1.281 15.466 1.908 14.343L8.574 2.343Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 7.5V10.833"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="13.75"
        r="0.625"
        fill={color}
      />
    </svg>
  );
}

export type { IconProps };
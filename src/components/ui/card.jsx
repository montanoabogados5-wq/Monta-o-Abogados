import React from 'react'
export function Card({ className = '', ...props }) {
  const cls = [
    'rounded-2xl border-2 border-[#D4AF37] bg-white text-zinc-900 shadow-sm',
    className,
  ].join(' ');
  return <div className={cls} {...props} />;
}
export function CardContent({ className = '', ...props }) {
  const cls = ['p-4', className].join(' ');
  return <div className={cls} {...props} />;
}

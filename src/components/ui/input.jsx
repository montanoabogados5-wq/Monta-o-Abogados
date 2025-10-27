import React from 'react'
export function Input({ className = '', ...props }) {
  const cls = ['w-full rounded-xl border border-zinc-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-300', className].join(' ');
  return <input className={cls} {...props} />;
}

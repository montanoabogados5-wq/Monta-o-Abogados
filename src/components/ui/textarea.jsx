import React from 'react'
export function Textarea({ className = '', ...props }) {
  const cls = ['w-full rounded-xl border border-zinc-300 px-3 py-2 h-28 resize-vertical focus:outline-none focus:ring-2 focus:ring-zinc-300', className].join(' ');
  return <textarea className={cls} {...props} />;
}

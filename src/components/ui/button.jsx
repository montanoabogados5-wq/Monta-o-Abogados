import React from 'react'
export function Button({ className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl font-medium transition shadow-sm';
  const sizes = { sm:'text-sm px-3 py-1.5', md:'text-sm px-4 py-2', lg:'text-base px-5 py-2.5' };
  const variants = { default:'bg-black text-white hover:opacity-90',
    outline:'border border-zinc-300 text-zinc-800 bg-white hover:bg-zinc-50',
    secondary:'bg-white text-black hover:bg-zinc-100' };
  const cls = [base, sizes[size] || sizes.md, variants[variant] || variants.default, className].join(' ');
  return <button className={cls} {...props} />;
}

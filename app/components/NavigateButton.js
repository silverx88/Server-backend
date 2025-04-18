// app/components/NavigateButton.js
'use client';
import Link from 'next/link'

import { useRouter } from 'next/navigation';

export default function NavigateButton({ to, label, className = '' }) {
    return (
      <Link href={to}>
        <button className={`rounded px-4 py-2 font-medium transition ${className}`}>
          {label}
        </button>
      </Link>
    );
  }
  
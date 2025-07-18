import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number | null, decimals: number = 2): string {
  if (num === null || num === undefined) return "N/A";
  
  if (Math.abs(num) >= 1000000000) {
    return (num / 1000000000).toFixed(decimals) + "B";
  } else if (Math.abs(num) >= 1000000) {
    return (num / 1000000).toFixed(decimals) + "M";
  } else if (Math.abs(num) >= 1000) {
    return (num / 1000).toFixed(decimals) + "K";
  } else {
    return num.toFixed(decimals);
  }
}

export function formatCurrency(amount: number | null, currency: string = "VND"): string {
  if (amount === null || amount === undefined) return "N/A";
  
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPercent(value: number | null, decimals: number = 2): string {
  if (value === null || value === undefined) return "N/A";
  return `${value.toFixed(decimals)}%`;
}

export function getDecisionColor(decision: 'MUA' | 'GIỮ' | 'BÁN'): string {
  switch (decision) {
    case 'MUA':
      return 'text-green-600 bg-green-50 border-green-200';
    case 'BÁN':
      return 'text-red-600 bg-red-50 border-red-200';
    case 'GIỮ':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
}

export function getScoreColor(score: number): string {
  if (score >= 7.5) return 'text-green-600';
  if (score >= 5.0) return 'text-yellow-600';
  return 'text-red-600';
}

export function getTrendColor(trend: 'tăng' | 'giảm' | 'đi ngang'): string {
  switch (trend) {
    case 'tăng':
      return 'text-green-600';
    case 'giảm':
      return 'text-red-600';
    case 'đi ngang':
      return 'text-gray-600';
    default:
      return 'text-gray-600';
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function validateStockSymbol(symbol: string): boolean {
  // Vietnamese stock symbols are typically 3-4 characters, all uppercase
  const regex = /^[A-Z]{3,4}$/;
  return regex.test(symbol.trim().toUpperCase());
}

export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
} 
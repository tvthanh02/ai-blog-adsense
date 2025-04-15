import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parseISO } from 'date-fns';

export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs))
}

export function formatDateTime(dateTimeString: string) {
 const date = parseISO(dateTimeString);
 return format(date, 'MM-dd-yyyy - HH:mm');
}
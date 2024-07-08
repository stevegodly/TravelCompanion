import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { atom } from "jotai";

export const placeAtom = atom("Republic of India");

export const loadingCityAtom = atom(false);

export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}

export function convertKelvinToCelsius(tempInKelvin){
    const tempInCelsius = tempInKelvin - 273.15;
    return Math.floor(tempInCelsius); // Removes decimal part and keeps integer part
}

export function convertWindSpeed(speedInMetersPerSecond){
    const speedInKilometersPerHour = speedInMetersPerSecond * 3.6; // Conversion from m/s to km/h
    return `${speedInKilometersPerHour.toFixed(0)}km/h`;
}

export function getDayOrNightIcon(iconName,dateTimeString){
    const hours = new Date(dateTimeString).getHours(); // Get hours from the given date and time string
  
    const isDayTime = hours >= 6 && hours < 18; // Consider daytime from 6 AM to 6 PM
  
    return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}

export function metersToKilometers(visibilityInMeters){
    const visibilityInKilometers = visibilityInMeters / 1000;
    return `${visibilityInKilometers.toFixed(0)}km`; // Round to 0 decimal places and add 'km' unit
  }
  
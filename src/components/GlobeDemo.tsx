'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Globe from './Globe';

interface Props {
  className?: string;
}

interface CountryInfo {
  code: string;
  region: string;
}

const GlobeDemo: React.FC<Props> = ({ className = '' }) => {
  // Countries grouped by region
  const [countriesByRegion, setCountriesByRegion] = useState<Record<string, CountryInfo[]>>({});
  const [visitedCountriesList] = useState<CountryInfo[]>([
    { code: 'CA', region: 'Americas' }, // Canada
    { code: 'MX', region: 'Americas' }, // Mexico
    { code: 'US', region: 'Americas' }, // United States
    { code: 'TC', region: 'Americas' }, // Turks and Caicos
    
    { code: 'CO', region: 'Americas' }, // Colombia
    { code: 'AR', region: 'Americas' }, // Argentina
    { code: 'PE', region: 'Americas' }, // Peru
    { code: 'UY', region: 'Americas' }, // Uruguay
    { code: 'CL', region: 'Americas' }, // Chile
    
    { code: 'GB', region: 'Europe' }, // United Kingdom
    { code: 'IE', region: 'Europe' }, // Ireland
    { code: 'IS', region: 'Europe' }, // Iceland
    { code: 'FO', region: 'Europe' }, // Faroe Islands
    { code: 'NO', region: 'Europe' }, // Norway
    { code: 'DK', region: 'Europe' }, // Denmark
    { code: 'PT', region: 'Europe' }, // Portugal
    { code: 'ES', region: 'Europe' }, // Spain
    { code: 'IT', region: 'Europe' }, // Italy
    { code: 'CH', region: 'Europe' }, // Switzerland
    { code: 'DE', region: 'Europe' }, // Germany
    { code: 'AT', region: 'Europe' }, // Austria
    { code: 'CZ', region: 'Europe' }, // Czech Republic
    { code: 'SI', region: 'Europe' }, // Slovenia
    { code: 'HR', region: 'Europe' }, // Croatia
    { code: 'BA', region: 'Europe' }, // Bosnia
    { code: 'RS', region: 'Europe' }, // Serbia
    { code: 'ME', region: 'Europe' }, // Montenegro
    { code: 'AL', region: 'Europe' }, // Albania
    { code: 'MK', region: 'Europe' }, // North Macedonia
    { code: 'GR', region: 'Europe' }, // Greece
    { code: 'PL', region: 'Europe' }, // Poland
    { code: 'LV', region: 'Europe' }, // Latvia
    { code: 'HU', region: 'Europe' }, // Hungary
    { code: 'GE', region: 'Europe' }, // Georgia
    
    { code: 'TR', region: 'Middle East & Africa' }, // Turkey
    { code: 'AE', region: 'Middle East & Africa' }, // United Arab Emirates
    { code: 'MA', region: 'Middle East & Africa' }, // Morocco
    { code: 'KE', region: 'Middle East & Africa' }, // Kenya
    
    { code: 'ID', region: 'Asia/Pacific' }, // Indonesia
    { code: 'VN', region: 'Asia/Pacific' }, // Vietnam
    { code: 'LA', region: 'Asia/Pacific' }, // Laos
    { code: 'KH', region: 'Asia/Pacific' }, // Cambodia
    { code: 'SG', region: 'Asia/Pacific' }, // Singapore
    { code: 'TW', region: 'Asia/Pacific' }, // Taiwan
    { code: 'JP', region: 'Asia/Pacific' }, // Japan
    { code: 'KR', region: 'Asia/Pacific' }, // South Korea
    { code: 'NZ', region: 'Asia/Pacific' }, // New Zealand
  ]);

  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // Group countries by region
  useEffect(() => {
    const grouped = visitedCountriesList.reduce((acc, country) => {
      if (!acc[country.region]) {
        acc[country.region] = [];
      }
      acc[country.region].push(country);
      return acc;
    }, {} as Record<string, CountryInfo[]>);
    
    // Sort regions
    const orderedRegions: Record<string, CountryInfo[]> = {};
    const regionOrder = [
      'Americas',
      'Europe',
      'Middle East & Africa',
      'Asia/Pacific',
    ];
    
    regionOrder.forEach(region => {
      if (grouped[region]) {
        orderedRegions[region] = grouped[region].sort((a, b) => a.code.localeCompare(b.code));
      }
    });
    
    setCountriesByRegion(orderedRegions);
  }, [visitedCountriesList]);

  useEffect(() => {
    setIsMounted(true);
    
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth < 768 ? 300 : 600,
        height: window.innerWidth < 768 ? 300 : 600
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCountryClick = useCallback((code: string) => {
    setSelectedCountry(code);
  }, []);

  // Extract just the country codes for the Globe component
  const visitedCountryCodes = visitedCountriesList.map(country => country.code);

  // Add a helper function to get country names from ISO codes
  const getCountryName = (code: string): string => {
    const countryNames: Record<string, string> = {
      'CA': 'Canada',
      'MX': 'Mexico',
      'US': 'United States',
      'TC': 'Turks and Caicos',
      'CO': 'Colombia',
      'AR': 'Argentina',
      'PE': 'Peru',
      'UY': 'Uruguay',
      'CL': 'Chile',
      'GB': 'United Kingdom',
      'IE': 'Ireland',
      'IS': 'Iceland',
      'FO': 'Faroe Islands',
      'NO': 'Norway',
      'DK': 'Denmark',
      'PT': 'Portugal',
      'ES': 'Spain',
      'IT': 'Italy',
      'CH': 'Switzerland',
      'DE': 'Germany',
      'AT': 'Austria',
      'CZ': 'Czech Republic',
      'SI': 'Slovenia',
      'HR': 'Croatia',
      'BA': 'Bosnia and Herzegovina',
      'RS': 'Serbia',
      'ME': 'Montenegro',
      'AL': 'Albania',
      'MK': 'North Macedonia',
      'GR': 'Greece',
      'PL': 'Poland',
      'LV': 'Latvia',
      'HU': 'Hungary',
      'GE': 'Georgia',
      'TR': 'Turkey',
      'AE': 'United Arab Emirates',
      'MA': 'Morocco',
      'KE': 'Kenya',
      'ID': 'Indonesia',
      'VN': 'Vietnam',
      'LA': 'Laos',
      'KH': 'Cambodia',
      'SG': 'Singapore',
      'TW': 'Taiwan',
      'JP': 'Japan',
      'KR': 'South Korea',
      'NZ': 'New Zealand',
    };
    
    return countryNames[code] || code;
  };

  if (!isMounted) {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <h2 className="text-xl font-display mb-4">Countries I've Visited</h2>
        <div className="border border-radical-primary p-1 rounded-lg w-[300px] h-[300px] flex items-center justify-center">
          <span className="text-radical-primary">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h2 className="text-xl font-display mb-4">Countries I've Visited</h2>
      <div className="border border-radical-primary p-1 rounded-lg max-w-full">
        <Globe 
          width={dimensions.width}
          height={dimensions.height}
          visitedCountries={visitedCountryCodes}
          focusCountry={selectedCountry}
          className="overflow-hidden rounded-lg bg-radical-darker"
        />
      </div>
      
      <div className="mt-6 max-w-[600px]">
        {Object.entries(countriesByRegion).map(([region, countries]) => (
          <div key={region} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{region}</h3>
            <div className="flex flex-wrap gap-2">
              {countries.map(country => (
                <button
                  key={country.code}
                  onClick={() => handleCountryClick(country.code)}
                  title={getCountryName(country.code)}
                  className={`px-2 py-1 rounded-md text-sm flex items-center space-x-1 transition-colors ${
                    selectedCountry === country.code 
                      ? 'bg-radical-primary text-white' 
                      : 'bg-radical-secondary hover:bg-radical-primary text-white'
                  }`}
                >
                  <span className="m-1">{String.fromCodePoint(...Array.from(country.code).map(c => 127397 + c.charCodeAt(0)))}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobeDemo; 
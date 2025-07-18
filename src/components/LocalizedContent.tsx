import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface LocalizedContentProps {
  children: React.ReactNode;
  className?: string;
}

export const LocalizedContent: React.FC<LocalizedContentProps> = ({ children, className = '' }) => {
  const { getCurrentLanguage } = useTranslation();
  const currentLang = getCurrentLanguage();

  return (
    <div 
      className={`${className} ${currentLang.rtl ? 'rtl' : 'ltr'}`}
      dir={currentLang.rtl ? 'rtl' : 'ltr'}
      lang={currentLang.code}
    >
      {children}
    </div>
  );
};

interface LocalizedDateProps {
  date: Date;
  className?: string;
}

export const LocalizedDate: React.FC<LocalizedDateProps> = ({ date, className = '' }) => {
  const { formatDate } = useTranslation();
  
  return (
    <span className={className}>
      {formatDate(date)}
    </span>
  );
};

interface LocalizedNumberProps {
  number: number;
  className?: string;
}

export const LocalizedNumber: React.FC<LocalizedNumberProps> = ({ number, className = '' }) => {
  const { formatNumber } = useTranslation();
  
  return (
    <span className={className}>
      {formatNumber(number)}
    </span>
  );
};

interface LocalizedCurrencyProps {
  amount: number;
  className?: string;
}

export const LocalizedCurrency: React.FC<LocalizedCurrencyProps> = ({ amount, className = '' }) => {
  const { formatCurrency } = useTranslation();
  
  return (
    <span className={className}>
      {formatCurrency(amount)}
    </span>
  );
};

export default LocalizedContent;
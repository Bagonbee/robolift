import { useState, useEffect, useCallback } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  rtl?: boolean;
  region?: string;
  dateFormat?: string;
  numberFormat?: string;
  currency?: string;
  currencySymbol?: string;
}

export interface TranslationContext {
  sourceLanguage: string;
  targetLanguage: string;
  text: string;
  context: 'website' | 'navigation' | 'form' | 'content' | 'technical' | 'metadata';
  tone: 'formal' | 'informal' | 'professional' | 'friendly';
  formality: 'high' | 'medium' | 'low';
  industry: 'robotics' | 'education' | 'technology' | 'general';
  audience: 'students' | 'parents' | 'educators' | 'professionals' | 'general';
}

export const languages: Language[] = [
  // Major World Languages with localization data
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English', 
    flag: '🇺🇸', 
    region: 'North America',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: '1,234.56',
    currency: 'USD',
    currencySymbol: '$'
  },
  { 
    code: 'es', 
    name: 'Spanish', 
    nativeName: 'Español', 
    flag: '🇪🇸', 
    region: 'Europe',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'fr', 
    name: 'French', 
    nativeName: 'Français', 
    flag: '🇫🇷', 
    region: 'Europe',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1 234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'de', 
    name: 'German', 
    nativeName: 'Deutsch', 
    flag: '🇩🇪', 
    region: 'Europe',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1.234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'it', 
    name: 'Italian', 
    nativeName: 'Italiano', 
    flag: '🇮🇹', 
    region: 'Europe',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'pt', 
    name: 'Portuguese', 
    nativeName: 'Português', 
    flag: '🇵🇹', 
    region: 'Europe',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'pt-BR', 
    name: 'Portuguese (Brazil)', 
    nativeName: 'Português (Brasil)', 
    flag: '🇧🇷', 
    region: 'South America',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'BRL',
    currencySymbol: 'R$'
  },
  { 
    code: 'ru', 
    name: 'Russian', 
    nativeName: 'Русский', 
    flag: '🇷🇺', 
    region: 'Europe',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1 234,56',
    currency: 'RUB',
    currencySymbol: '₽'
  },
  
  // East Asian Languages
  { 
    code: 'zh', 
    name: 'Chinese (Simplified)', 
    nativeName: '简体中文', 
    flag: '🇨🇳', 
    region: 'East Asia',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234.56',
    currency: 'CNY',
    currencySymbol: '¥'
  },
  { 
    code: 'zh-TW', 
    name: 'Chinese (Traditional)', 
    nativeName: '繁體中文', 
    flag: '🇹🇼', 
    region: 'East Asia',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234.56',
    currency: 'TWD',
    currencySymbol: 'NT$'
  },
  { 
    code: 'ja', 
    name: 'Japanese', 
    nativeName: '日本語', 
    flag: '🇯🇵', 
    region: 'East Asia',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234.56',
    currency: 'JPY',
    currencySymbol: '¥'
  },
  { 
    code: 'ko', 
    name: 'Korean', 
    nativeName: '한국어', 
    flag: '🇰🇷', 
    region: 'East Asia',
    dateFormat: 'YYYY.MM.DD',
    numberFormat: '1,234.56',
    currency: 'KRW',
    currencySymbol: '₩'
  },
  
  // Middle Eastern & RTL Languages
  { 
    code: 'ar', 
    name: 'Arabic', 
    nativeName: 'العربية', 
    flag: '🇸🇦', 
    rtl: true, 
    region: 'Middle East',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56',
    currency: 'SAR',
    currencySymbol: 'ر.س'
  },
  { 
    code: 'he', 
    name: 'Hebrew', 
    nativeName: 'עברית', 
    flag: '🇮🇱', 
    rtl: true, 
    region: 'Middle East',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56',
    currency: 'ILS',
    currencySymbol: '₪'
  },
  { 
    code: 'fa', 
    name: 'Persian', 
    nativeName: 'فارسی', 
    flag: '🇮🇷', 
    rtl: true, 
    region: 'Middle East',
    dateFormat: 'YYYY/MM/DD',
    numberFormat: '1,234.56',
    currency: 'IRR',
    currencySymbol: '﷼'
  },
  { 
    code: 'ur', 
    name: 'Urdu', 
    nativeName: 'اردو', 
    flag: '🇵🇰', 
    rtl: true, 
    region: 'South Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56',
    currency: 'PKR',
    currencySymbol: '₨'
  },
  { 
    code: 'tr', 
    name: 'Turkish', 
    nativeName: 'Türkçe', 
    flag: '🇹🇷', 
    region: 'Middle East',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1.234,56',
    currency: 'TRY',
    currencySymbol: '₺'
  },
  
  // South Asian Languages
  { 
    code: 'hi', 
    name: 'Hindi', 
    nativeName: 'हिन्दी', 
    flag: '🇮🇳', 
    region: 'South Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,23,456.78',
    currency: 'INR',
    currencySymbol: '₹'
  },
  { 
    code: 'bn', 
    name: 'Bengali', 
    nativeName: 'বাংলা', 
    flag: '🇧🇩', 
    region: 'South Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,23,456.78',
    currency: 'BDT',
    currencySymbol: '৳'
  },
  { 
    code: 'ta', 
    name: 'Tamil', 
    nativeName: 'தமிழ்', 
    flag: '🇱🇰', 
    region: 'South Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,23,456.78',
    currency: 'LKR',
    currencySymbol: 'Rs'
  },
  
  // Southeast Asian Languages
  { 
    code: 'th', 
    name: 'Thai', 
    nativeName: 'ไทย', 
    flag: '🇹🇭', 
    region: 'Southeast Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56',
    currency: 'THB',
    currencySymbol: '฿'
  },
  { 
    code: 'vi', 
    name: 'Vietnamese', 
    nativeName: 'Tiếng Việt', 
    flag: '🇻🇳', 
    region: 'Southeast Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'VND',
    currencySymbol: '₫'
  },
  { 
    code: 'id', 
    name: 'Indonesian', 
    nativeName: 'Bahasa Indonesia', 
    flag: '🇮🇩', 
    region: 'Southeast Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1.234,56',
    currency: 'IDR',
    currencySymbol: 'Rp'
  },
  { 
    code: 'ms', 
    name: 'Malay', 
    nativeName: 'Bahasa Melayu', 
    flag: '🇲🇾', 
    region: 'Southeast Asia',
    dateFormat: 'DD/MM/YYYY',
    numberFormat: '1,234.56',
    currency: 'MYR',
    currencySymbol: 'RM'
  },
  { 
    code: 'tl', 
    name: 'Filipino', 
    nativeName: 'Filipino', 
    flag: '🇵🇭', 
    region: 'Southeast Asia',
    dateFormat: 'MM/DD/YYYY',
    numberFormat: '1,234.56',
    currency: 'PHP',
    currencySymbol: '₱'
  },
  
  // Additional European Languages
  { 
    code: 'pl', 
    name: 'Polish', 
    nativeName: 'Polski', 
    flag: '🇵🇱', 
    region: 'Europe',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1 234,56',
    currency: 'PLN',
    currencySymbol: 'zł'
  },
  { 
    code: 'nl', 
    name: 'Dutch', 
    nativeName: 'Nederlands', 
    flag: '🇳🇱', 
    region: 'Europe',
    dateFormat: 'DD-MM-YYYY',
    numberFormat: '1.234,56',
    currency: 'EUR',
    currencySymbol: '€'
  },
  { 
    code: 'sv', 
    name: 'Swedish', 
    nativeName: 'Svenska', 
    flag: '🇸🇪', 
    region: 'Europe',
    dateFormat: 'YYYY-MM-DD',
    numberFormat: '1 234,56',
    currency: 'SEK',
    currencySymbol: 'kr'
  },
  { 
    code: 'da', 
    name: 'Danish', 
    nativeName: 'Dansk', 
    flag: '🇩🇰', 
    region: 'Europe',
    dateFormat: 'DD-MM-YYYY',
    numberFormat: '1.234,56',
    currency: 'DKK',
    currencySymbol: 'kr'
  },
  { 
    code: 'no', 
    name: 'Norwegian', 
    nativeName: 'Norsk', 
    flag: '🇳🇴', 
    region: 'Europe',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1 234,56',
    currency: 'NOK',
    currencySymbol: 'kr'
  },
  { 
    code: 'fi', 
    name: 'Finnish', 
    nativeName: 'Suomi', 
    flag: '🇫🇮', 
    region: 'Europe',
    dateFormat: 'DD.MM.YYYY',
    numberFormat: '1 234,56',
    currency: 'EUR',
    currencySymbol: '€'
  }
];

// Industry-specific terminology for robotics/STEM education
const roboticsTerminology: Record<string, Record<string, string>> = {
  en: {
    'robotics': 'robotics',
    'STEM': 'STEM',
    'programming': 'programming',
    'engineering': 'engineering',
    'competition': 'competition',
    'team': 'team',
    'mentor': 'mentor',
    'innovation': 'innovation',
    'technology': 'technology',
    'automation': 'automation'
  },
  es: {
    'robotics': 'robótica',
    'STEM': 'CTIM',
    'programming': 'programación',
    'engineering': 'ingeniería',
    'competition': 'competencia',
    'team': 'equipo',
    'mentor': 'mentor',
    'innovation': 'innovación',
    'technology': 'tecnología',
    'automation': 'automatización'
  },
  fr: {
    'robotics': 'robotique',
    'STEM': 'STIM',
    'programming': 'programmation',
    'engineering': 'ingénierie',
    'competition': 'compétition',
    'team': 'équipe',
    'mentor': 'mentor',
    'innovation': 'innovation',
    'technology': 'technologie',
    'automation': 'automatisation'
  },
  de: {
    'robotics': 'Robotik',
    'STEM': 'MINT',
    'programming': 'Programmierung',
    'engineering': 'Ingenieurwesen',
    'competition': 'Wettbewerb',
    'team': 'Team',
    'mentor': 'Mentor',
    'innovation': 'Innovation',
    'technology': 'Technologie',
    'automation': 'Automatisierung'
  },
  zh: {
    'robotics': '机器人技术',
    'STEM': 'STEM',
    'programming': '编程',
    'engineering': '工程学',
    'competition': '竞赛',
    'team': '团队',
    'mentor': '导师',
    'innovation': '创新',
    'technology': '技术',
    'automation': '自动化'
  },
  ja: {
    'robotics': 'ロボティクス',
    'STEM': 'STEM',
    'programming': 'プログラミング',
    'engineering': 'エンジニアリング',
    'competition': '競技',
    'team': 'チーム',
    'mentor': 'メンター',
    'innovation': 'イノベーション',
    'technology': 'テクノロジー',
    'automation': '自動化'
  },
  ko: {
    'robotics': '로보틱스',
    'STEM': 'STEM',
    'programming': '프로그래밍',
    'engineering': '공학',
    'competition': '경쟁',
    'team': '팀',
    'mentor': '멘토',
    'innovation': '혁신',
    'technology': '기술',
    'automation': '자동화'
  },
  ar: {
    'robotics': 'الروبوتات',
    'STEM': 'العلوم والتكنولوجيا والهندسة والرياضيات',
    'programming': 'البرمجة',
    'engineering': 'الهندسة',
    'competition': 'المنافسة',
    'team': 'الفريق',
    'mentor': 'المرشد',
    'innovation': 'الابتكار',
    'technology': 'التكنولوجيا',
    'automation': 'الأتمتة'
  },
  hi: {
    'robotics': 'रोबोटिक्स',
    'STEM': 'विज्ञान, प्रौद्योगिकी, इंजीनियरिंग और गणित',
    'programming': 'प्रोग्रामिंग',
    'engineering': 'इंजीनियरिंग',
    'competition': 'प्रतियोगिता',
    'team': 'टीम',
    'mentor': 'गुरु',
    'innovation': 'नवाचार',
    'technology': 'प्रौद्योगिकी',
    'automation': 'स्वचालन'
  },
  vi: {
    'robotics': 'robot học',
    'STEM': 'STEM',
    'programming': 'lập trình',
    'engineering': 'kỹ thuật',
    'competition': 'cuộc thi',
    'team': 'đội',
    'mentor': 'người hướng dẫn',
    'innovation': 'đổi mới',
    'technology': 'công nghệ',
    'automation': 'tự động hóa'
  }
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    const savedLang = localStorage.getItem('robolift-language');
    if (savedLang) return savedLang;
    
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    return supportedLang ? browserLang : 'en';
  });

  const [isTranslating, setIsTranslating] = useState(false);
  const [translationCache, setTranslationCache] = useState<Map<string, string>>(new Map());

  const getCurrentLanguage = useCallback(() => {
    return languages.find(lang => lang.code === currentLanguage) || languages[0];
  }, [currentLanguage]);

  const detectUserLanguage = useCallback(() => {
    const browserLang = navigator.language.split('-')[0];
    const supportedLang = languages.find(lang => lang.code === browserLang);
    if (supportedLang && supportedLang.code !== currentLanguage) {
      return supportedLang.code;
    }
    return null;
  }, [currentLanguage]);

  const formatDate = useCallback((date: Date, langCode?: string): string => {
    const lang = languages.find(l => l.code === (langCode || currentLanguage));
    const locale = langCode || currentLanguage;
    
    try {
      return new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(date);
    } catch {
      return date.toLocaleDateString();
    }
  }, [currentLanguage]);

  const formatNumber = useCallback((number: number, langCode?: string): string => {
    const locale = langCode || currentLanguage;
    
    try {
      return new Intl.NumberFormat(locale).format(number);
    } catch {
      return number.toString();
    }
  }, [currentLanguage]);

  const formatCurrency = useCallback((amount: number, langCode?: string): string => {
    const lang = languages.find(l => l.code === (langCode || currentLanguage));
    const locale = langCode || currentLanguage;
    const currency = lang?.currency || 'USD';
    
    try {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
      }).format(amount);
    } catch {
      return `${lang?.currencySymbol || '$'}${amount}`;
    }
  }, [currentLanguage]);

  const applyTerminologyReplacement = useCallback((text: string, targetLang: string): string => {
    if (!roboticsTerminology[targetLang]) return text;
    
    let processedText = text;
    const terminology = roboticsTerminology[targetLang];
    
    Object.entries(terminology).forEach(([english, translated]) => {
      const regex = new RegExp(`\\b${english}\\b`, 'gi');
      processedText = processedText.replace(regex, translated);
    });
    
    return processedText;
  }, []);

  const translateWithContext = useCallback(async (context: TranslationContext): Promise<string> => {
    const { sourceLanguage, targetLanguage, text, tone, formality, industry, audience } = context;
    
    if (!text.trim() || targetLanguage === sourceLanguage) return text;
    
    const cacheKey = `${text}-${sourceLanguage}-${targetLanguage}-${tone}-${formality}`;
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey)!;
    }

    try {
      // Apply industry-specific terminology first
      let processedText = text;
      if (industry === 'robotics' && roboticsTerminology[targetLanguage]) {
        processedText = applyTerminologyReplacement(text, targetLanguage);
      }

      // Use MyMemory API for translation
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(processedText)}&langpair=${sourceLanguage}|${targetLanguage}`);
      
      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      let translatedText = data.responseData?.translatedText || processedText;
      
      // Post-process for cultural appropriateness and formality
      if (formality === 'high' && targetLanguage === 'ja') {
        translatedText = translatedText.replace(/です/g, 'でございます');
      }
      
      if (formality === 'high' && targetLanguage === 'ko') {
        translatedText = translatedText.replace(/요$/g, '습니다');
      }
      
      if (audience === 'students' && tone === 'friendly') {
        if (targetLanguage === 'es') {
          translatedText = translatedText.replace(/usted/g, 'tú');
        }
      }
      
      // Cache the translation
      setTranslationCache(prev => new Map(prev.set(cacheKey, translatedText)));
      
      return translatedText;
    } catch (error) {
      console.warn('Translation failed:', error);
      return text;
    }
  }, [translationCache, applyTerminologyReplacement]);

  const translateText = useCallback(async (text: string, targetLang: string): Promise<string> => {
    return translateWithContext({
      sourceLanguage: 'en',
      targetLanguage: targetLang,
      text,
      context: 'website',
      tone: 'professional',
      formality: 'medium',
      industry: 'robotics',
      audience: 'general'
    });
  }, [translateWithContext]);

  const updatePageMetadata = useCallback((langCode: string) => {
    const lang = languages.find(l => l.code === langCode);
    if (!lang) return;

    // Update HTML lang attribute
    document.documentElement.lang = langCode;
    
    // Update text direction
    document.documentElement.dir = lang.rtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang.rtl || false);
    
    // Update meta tags
    let metaLang = document.querySelector('meta[name="language"]');
    if (!metaLang) {
      metaLang = document.createElement('meta');
      metaLang.setAttribute('name', 'language');
      document.head.appendChild(metaLang);
    }
    metaLang.setAttribute('content', langCode);

    // Update hreflang links
    const existingHreflangs = document.querySelectorAll('link[hreflang]');
    existingHreflangs.forEach(link => link.remove());

    languages.forEach(language => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = language.code;
      link.href = `${window.location.origin}${window.location.pathname}?lang=${language.code}`;
      document.head.appendChild(link);
    });

    // Update URL with language parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', url.toString());
  }, []);

  const translatePage = useCallback(async (targetLang: string) => {
    if (targetLang === currentLanguage) return;
    
    setIsTranslating(true);
    setCurrentLanguage(targetLang);
    
    try {
      // Update metadata and URL
      updatePageMetadata(targetLang);
      
      // Save to localStorage
      localStorage.setItem('robolift-language', targetLang);
      
      if (targetLang === 'en') {
        window.location.reload();
        return;
      }

      // Enhanced text node selection with better filtering
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent || 
                parent.tagName === 'SCRIPT' || 
                parent.tagName === 'STYLE' ||
                parent.classList.contains('notranslate') ||
                parent.closest('.notranslate') ||
                !node.textContent?.trim() ||
                node.textContent.trim().length < 2) {
              return NodeFilter.FILTER_REJECT;
            }
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const textNodes: Text[] = [];
      let node;
      while (node = walker.nextNode()) {
        textNodes.push(node as Text);
      }

      // Categorize and translate content with appropriate context
      const navigationNodes = textNodes.filter(node => 
        node.parentElement?.closest('nav, header, .navigation')
      );
      
      const contentNodes = textNodes.filter(node => 
        !node.parentElement?.closest('nav, header, .navigation')
      );

      // Translate navigation with formal tone
      for (const textNode of navigationNodes) {
        const originalText = textNode.textContent?.trim();
        if (originalText && originalText.length > 1) {
          const translatedText = await translateWithContext({
            sourceLanguage: 'en',
            targetLanguage: targetLang,
            text: originalText,
            context: 'navigation',
            tone: 'professional',
            formality: 'medium',
            industry: 'robotics',
            audience: 'general'
          });
          if (translatedText !== originalText) {
            textNode.textContent = translatedText;
          }
        }
      }

      // Translate content with appropriate context - optimized batch processing
      const batchSize = 15; // Increased from 3 to 15
      for (let i = 0; i < contentNodes.length; i += batchSize) {
        const batch = contentNodes.slice(i, i + batchSize);
        const promises = batch.map(async (textNode) => {
          const originalText = textNode.textContent?.trim();
          if (originalText && originalText.length > 1) {
            const isHeading = textNode.parentElement?.tagName.match(/^H[1-6]$/);
            const isButton = textNode.parentElement?.tagName === 'BUTTON' || 
                           textNode.parentElement?.closest('button');
            
            const translatedText = await translateWithContext({
              sourceLanguage: 'en',
              targetLanguage: targetLang,
              text: originalText,
              context: isHeading ? 'content' : isButton ? 'form' : 'content',
              tone: 'professional',
              formality: 'medium',
              industry: 'robotics',
              audience: 'students'
            });
            
            if (translatedText !== originalText) {
              textNode.textContent = translatedText;
            }
          }
        });
        
        await Promise.all(promises);
        
        if (i + batchSize < contentNodes.length) {
          await new Promise(resolve => setTimeout(resolve, 50)); // Reduced from 200ms to 50ms
        }
      }

      // Translate form elements with appropriate context
      const inputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
      for (const input of inputs) {
        const placeholder = input.getAttribute('placeholder');
        if (placeholder) {
          const translatedPlaceholder = await translateWithContext({
            sourceLanguage: 'en',
            targetLanguage: targetLang,
            text: placeholder,
            context: 'form',
            tone: 'friendly',
            formality: 'low',
            industry: 'general',
            audience: 'general'
          });
          input.setAttribute('placeholder', translatedPlaceholder);
        }
      }

      // Translate labels
      const labels = document.querySelectorAll('label');
      for (const label of labels) {
        const text = label.textContent?.trim();
        if (text && text.length > 1) {
          const translatedText = await translateWithContext({
            sourceLanguage: 'en',
            targetLanguage: targetLang,
            text: text,
            context: 'form',
            tone: 'professional',
            formality: 'medium',
            industry: 'general',
            audience: 'general'
          });
          if (translatedText !== text) {
            label.textContent = translatedText;
          }
        }
      }

      // Translate alt text
      const images = document.querySelectorAll('img[alt]');
      for (const img of images) {
        const alt = img.getAttribute('alt');
        if (alt) {
          const translatedAlt = await translateWithContext({
            sourceLanguage: 'en',
            targetLanguage: targetLang,
            text: alt,
            context: 'content',
            tone: 'professional',
            formality: 'medium',
            industry: 'robotics',
            audience: 'general'
          });
          img.setAttribute('alt', translatedAlt);
        }
      }

      // Update page title
      const title = document.title;
      if (title) {
        const translatedTitle = await translateWithContext({
          sourceLanguage: 'en',
          targetLanguage: targetLang,
          text: title,
          context: 'metadata',
          tone: 'professional',
          formality: 'medium',
          industry: 'robotics',
          audience: 'general'
        });
        document.title = translatedTitle;
      }

    } catch (error) {
      console.error('Translation error:', error);
    } finally {
      setIsTranslating(false);
    }
  }, [currentLanguage, translateWithContext, updatePageMetadata]);

  useEffect(() => {
    const targetLanguage = languages.find(lang => lang.code === currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = targetLanguage?.rtl ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', targetLanguage?.rtl || false);
    
    // Check URL for language parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && urlLang !== currentLanguage && languages.find(l => l.code === urlLang)) {
      setCurrentLanguage(urlLang);
      localStorage.setItem('robolift-language', urlLang);
    }
  }, [currentLanguage]);

  return {
    currentLanguage,
    setCurrentLanguage,
    isTranslating,
    translatePage,
    translateText,
    translateWithContext,
    getCurrentLanguage,
    detectUserLanguage,
    formatDate,
    formatNumber,
    formatCurrency,
    languages
  };
};
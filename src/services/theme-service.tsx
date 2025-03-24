import { useState, useEffect } from 'react';

interface Theme {
    label: string;
    value: string;
}

const themeService = () => {
    const [themes, setThemes] = useState<Theme[]>([]);
    const [currentColorTheme, setCurrentColorTheme] = useState<string>('');

    const fetchColorThemes = async () => {
        try {
            const response = await fetch('/api/themes');
            const themeList = await response.json();
            setThemes(themeList);
            if (themeList.length > 0) {
                setCurrentColorTheme(themeList[0].value);
            }
        } catch (error) {
            console.error('Error loading color themes:', error);
        }
    };

    const applyColorTheme = (colorTheme: string) => {
        const existingLinks = document.querySelectorAll('link[rel="stylesheet"][data-theme]');
        existingLinks.forEach(link => link.remove());

        const colorLink = document.createElement('link');
        colorLink.rel = 'stylesheet';
        colorLink.href = `/themes/${colorTheme}/theme.css`;
        colorLink.dataset.theme = colorTheme;
        document.head.appendChild(colorLink);

        if (typeof window !== 'undefined') {
            localStorage.setItem('colorTheme', colorTheme);
        }
    };

    useEffect(() => {
        fetchColorThemes();
    }, []);

    useEffect(() => {
        const savedColorTheme = localStorage.getItem('colorTheme') || (themes.length > 0 ? themes[0].value : '');
        setCurrentColorTheme(savedColorTheme);
        if (savedColorTheme) {
            applyColorTheme(savedColorTheme);
        }
    }, [themes]);

    return {
        themes,
        currentColorTheme,
        setCurrentColorTheme,
        applyColorTheme,
    };
};

export default themeService ;
import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import themeService from "@/services/theme-service";

const Header: React.FC<{ setTheme: (theme: string) => void }> = ({ setTheme }) => {
    const { themes, currentColorTheme, setCurrentColorTheme, applyColorTheme } = themeService();
    const [showCustomizer, setShowCustomizer] = useState<boolean>(false);

    const items = [
        { label: 'Home', icon: 'pi pi-fw pi-home', command: () => { window.location.href = '/'; } },
        { label: 'Contacts', icon: 'pi pi-fw pi-users', command: () => { window.location.href = '/contact'; } },
        { label: 'About', icon: 'pi pi-fw pi-info', command: () => { window.location.href = '/about'; } },
        { label: 'Skills', icon: 'pi pi-fw pi-cog', command: () => { window.location.href = '/experience'; } },
    ];

    return (
        <header className="p-4 shadow-md flex justify-between items-center relative">
            <Menubar model={items} />
            <div className="flex items-center gap-4">
                <Button
                    icon="pi pi-palette"
                    className="p-button-rounded p-button-text"
                    onClick={() => setShowCustomizer(!showCustomizer)}
                />
                <Button
                    icon="pi pi-user"
                    className="p-button-rounded p-button-text"
                    onClick={() => window.location.href = '/'}
                />
                {showCustomizer && (
                    <div className="absolute right-0 top-12 bg-white p-4 shadow-lg rounded-lg flex flex-col gap-2">
                        <Dropdown
                            value={currentColorTheme}
                            options={themes}
                            onChange={(e) => {
                                setCurrentColorTheme(e.value);
                                applyColorTheme(e.value);
                                setTheme(e.value);
                            }}
                            placeholder="Select Theme"
                        />
                        <Button label="Apply" onClick={() => applyColorTheme(currentColorTheme)} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
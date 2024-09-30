import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { cn } from './lib/utils';
import { ThemeProvider } from './Components/theme/theme-provider';

const appName = import.meta.env.VITE_APP_NAME || 'Sierra Communication';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob('./Pages/**/*.tsx'),
        ),
    setup({ el, App, props }) {
        if (import.meta.env.SSR) {
            hydrateRoot(el, 
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <App {...props} />
                </ThemeProvider>
                );
            return;
        }

        createRoot(el).render(
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: '#00f7ff',
    },
});

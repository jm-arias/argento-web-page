import {
    defineConfig,
    presetWind,
    presetWebFonts,
    transformerVariantGroup,
} from 'unocss';

const config = {

    presets: [
        presetWind(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: {
                    name: 'Poppins',
                    weights: [100, 300, 400, 500, 700, 800, 900],
                },
            },
        }),
    ],
    transformers: [transformerVariantGroup()],
    theme: {
        colors: {
            dark: '#3A3A3A',
            bluePrimary: '#3F7EBA',
            blueSecondary: '#544B9F',
            blueAccent: '#4CC9FE',
            orangePrimary: '#C74433',
            orangeSecondary: '#F7C75B',
            orangeAccent: '#E88B3C',
            purplePrimary: '#48388E',
            purpleSecondary: '#473C70',
            purpleAccent: '#7A4EF8',
        },
    },
    safelist: [
        ...['text-dark', 'text-blue-primary', 'text-blue-secondary', 'text-blue-accent', 'text-orange-primary', 'text-orange-secondary', 'text-orange-accent', 'text-purple-primary', 'text-purple-secondary', 'text-purple-accent'],
        ...['bg-dark', 'bg-blue-primary', 'bg-blue-secondary', 'bg-blue-accent', 'bg-orange-primary', 'bg-orange-secondary', 'bg-orange-accent', 'bg-purple-primary', 'bg-purple-secondary', 'bg-purple-accent'],
        ...['border-dark', 'border-blue-primary', 'border-blue-secondary', 'border-blue-accent', 'border-orange-primary', 'border-orange-secondary', 'border-orange-accent', 'border-purple-primary', 'border-purple-secondary', 'border-purple-accent']
    ]
}
export default defineConfig(config);

//const safelist: string[] = Object.keys(config.theme.colors).map(key => key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()).map(__ => `text-${__}`);
//console.log(safelist)
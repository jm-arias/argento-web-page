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
            blueAccent: '#37C2D9',
            orangePrimary: '#C74433',
            orangeSecondary: '#F7C75B',
            orangeAccent: '#E88B3C',
            purplePrimary: '#48388E',
            purpleSecondary: '#473C70',
            purpleAccent: '#7A4EF8',
        },
    },
    safelist: ['color-dark', 'color-blue-primary', 'color-blue-secondary', 'color-blue-accent', 'color-orange-primary', 'color-orange-secondary', 'color-orange-accent', 'color-purple-primary', 'color-purple-secondary', 'color-purple-accent']
}
export default defineConfig(config);

const safelist: string[] = Object.keys(config.theme.colors).map(key => key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()).map(__ => `color-${__}`);
console.log(safelist)
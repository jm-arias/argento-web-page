import {
    defineConfig,
    presetWind,
    presetWebFonts,
    transformerVariantGroup,
} from 'unocss';

export default defineConfig({
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
        },
    },
});

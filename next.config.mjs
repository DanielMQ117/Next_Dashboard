/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        ppr: "incremental", // Habilitar la pre-renderizacion parcial
    },
};

export default nextConfig;

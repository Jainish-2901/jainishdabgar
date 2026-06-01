import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://jainishdabgar.vercel.app";

    // Dynamic distribution matrix for all core architecture endpoints
    const routes = [
        "",
        "/archive",
        "/achievements",
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
    }));
}
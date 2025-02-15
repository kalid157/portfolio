import type { ManifestData } from '../../types/astro.js';
import type { RouteData } from '../../types/public/internal.js';
/** Find matching route from pathname */
export declare function matchRoute(pathname: string, manifest: ManifestData): RouteData | undefined;
/** Finds all matching routes from pathname */
export declare function matchAllRoutes(pathname: string, manifest: ManifestData): RouteData[];
export declare function isRoute404(route: string): boolean;
export declare function isRoute500(route: string): boolean;
/**
 * Determines if the given route matches a 404 or 500 error page.
 *
 * @param {RouteData} route - The route data to check.
 * @returns {boolean} `true` if the route matches a 404 or 500 error page, otherwise `false`.
 */
export declare function isRoute404or500(route: RouteData): boolean;

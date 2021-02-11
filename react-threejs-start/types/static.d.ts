/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}

/* CSS */
declare module "*.css";
declare module "*.scss";

/* IMAGES */
declare module "*.svg" {
    const ref: string;
    export default ref;
}
declare module "*.bmp" {
    const ref: string;
    export default ref;
}
declare module "*.gif" {
    const ref: string;
    export default ref;
}
declare module "*.jpg" {
    const ref: string;
    export default ref;
}
declare module "*.jpeg" {
    const ref: string;
    export default ref;
}
declare module "*.png" {
    const ref: string;
    export default ref;
}

/* FONTS */
declare module "*.woff" {
    const ref: string;
    export default ref;
}
declare module "*.woff2" {
    const ref: string;
    export default ref;
}

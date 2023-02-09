import { buildLegacyTheme } from "sanity"

const props = {
    "--my-white":"#fff",
    "--my-black": "#1a1a1a",
    "brand":"#F7AB0A",
    "--my-red":"#db4437",
    "--my-yellow": "#f4b400",
    "--my-green": "#0f9d58"
};

export const myTheme = buildLegacyTheme({
    // Base theme color
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--gray":"#666",
    "--gray-base": "#666",

    "--component-bg": props["--my-black"],
    "--component-text-color": props["--my-white"],

    //Brand
    "--brand-primary":props["brand"],

    //default button
    "--default-button-color": "#666",
    "--default-button-primary-color": props["brand"],
    "--default-button-success-color": props["--my-green"],
    "--default-button-warning-color": props["--my-yellow"],
    "--default-button-danger-color": props["--my-red"],

    //State
    "--state-info-color": props["brand"],
    "--state-success-color": props["--my-green"],
    "--state-danger-color": props["--my-red"],
    "--state-warning-color": props["--my-yellow"],

    //Navbar
    "--main-navigation-color--inverted":props["--my-white"],
    "--main-navigation-color":props["--my-black"],

    "--focus-color": props["brand"],
})
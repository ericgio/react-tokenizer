import toTitleCase from "@gouch/to-title-case";

const setCase = (text = "", caseType = "title") => {

    //Change text to case specified by caseType string
    switch (caseType.toLowerCase()) {
        case "upper":
        case "uppercase":
        case "upper_case":
        case "upper-case":
        case "capitals":
        case "allcaps":
        case "all_caps":
        case "all-caps":
            return text.toUpperCase()
            break
        case "lower":
        case "lowercase":
        case "lower_case":
        case "lower-case":
        case "nocaps":
        case "no_caps":
        case "no-caps":
            return text.toLowerCase();
            break;
        case "proper":
        case "proper_case":
        case "proper-case":
        case "sentence":
        case "sentence_case":
        case "sentence-case":
            return capitalise(text, true);
            break;
        case "capitalise":
        case "capitalize":
        case "firstletter":
        case "first_letter":
        case "first-letter":
            return capitalise(text, false, " ");
            break;
        case "alternating":
        case "alternatingcase":
        case "alternating_case":
        case "alternating-case":
        case "alternatingcaps":
        case "alternating_caps":
        case "alternating-caps":
        case "alternate":
        case "alternate_case":
        case "alternate-case":
        case "sticky":
        case "sticky_case":
        case "sticky-case":
        case "studly":
        case "studly_case":
        case "studly-case":
        case "alternate":
        case "alternate_caps":
        case "alternate-caps":
        case "sticky":
        case "sticky_caps":
        case "sticky-caps":
        case "studly":
        case "studly_caps":
        case "studly-caps":
            //credit - https://codegolf.stackexchange.com/questions/122783/alternate-the-case
            return text.replace(/[a-z]/gi, c => c[`to${(text = !text) ? 'Low' : 'Upp'}erCase`]());
            break;
        case "title":
        case "titlecase":
        case "title_case":
        case "title-case":
        case "totitlecase":
        case "to_title_case":
        case "to-title-case":
            return text.toTitleCase();
            break;
        case "camel":
        case "camelcase":
        case "camel_case":
        case "camel-case":
            return (text.charAt(0).toLowerCase() + capitalise(text, false, " ").slice(1)).replace(/ (\w)/g, "$1");
            break;
        case "snake":
        case "snakecase":
        case "snake_case":
        case "snake-case":
            return text.toLowerCase().replace(/ /g, "_");
            break;
        case "snakeupper":
        case "snakeuppercase":
        case "snake_upper_case":
        case "snake-upper-case":
            return text.toUpperCase().replace(/ /g, "_");
            break;
        case "snakecapital":
        case "snakecapitalise":
        case "snakecapitalised":
        case "snakecapitalcase":
        case "snakecapitalisedcase":
        case "snake_capital_case":
        case "snake_capitalised_case":
        case "snake-capital-case":
        case "snake-capitalised-case":
            return capitalise(text, true, "_", /[ _]/g);
            break;
        case "hyphen":
        case "hyphencase":
        case "hyphen_case":
        case "hyphen-case":
            return text.toLowerCase().replace(/ /g, "-");
            break;
        case "hyphencapital":
        case "hyphencapitalise":
        case "hyphencapitalised":
        case "hyphencapitalcase":
        case "hyphencapitalisedcase":
        case "hyphen_capital_case":
        case "hyphen_capitalised_case":
        case "hyphen-capital-case":
        case "hyphen-capitalised-case":
            return capitalise(text, true, "-", /[ -]/g);
            break;
        case "hyphenupper":
        case "hyphenuppercase":
        case "hyphen_upper_case":
        case "hyphen-upper-case":
            return text.toUpperCase().replace(/ /g, "-");
            break;
        default:
            return text;
            break
    }
}
export default setCase;

const capitalise = (text: string, forceLower = true, delimiter = null, separator = / /g) => {
    if (delimiter) {
        return text.split(separator).map((x) => x.charAt(0).toUpperCase() + (forceLower ? x.toLowerCase().slice(1) : x.slice(1))).join(delimiter);
    } else {
        return text.charAt(0).toUpperCase() + (forceLower ? text.toLowerCase().slice(1) : text.slice(1));
    }
};

// Slugify a string
export function slugify(str)
{
    str = str.replace(/^\s+|\s+$/g, '');

    // Make the string lowercase
    str = str.toLowerCase();

    // Remove accents, swap ñ for n, etc
    var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
    var to   = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    // Remove invalid chars
    str = str.replace(/[^a-z0-9 -]/g, '') 
    // Collapse whitespace and replace by -
    .replace(/\s+/g, '-') 
    // Collapse dashes
    .replace(/-+/g, '-'); 

    return str;
}

export const slideBackgrounds = {
   278: "#d84315",
   238: "#37474F",
   424: "#4e4e4e",
   240: "#1d1d1d",
   129 : "#C62828",
   496243 : "#00695C",
   680 : "#4527A0",
   122 : "#4E342E",
   637 : "#9E9E9E",
   155 : "#0e0e0e",
   13 : "#1565C0",
   389 : "#F9A825",
   769 : "#C62828",
   537061 : "#EC407A",
   618344 : "#D84315",
   550 : "#C2185B",
   598 : "#EF6C00",
   664767 : "#212121",
   324857 : "#C62828"
}
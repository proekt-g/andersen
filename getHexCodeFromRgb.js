function getHexCode (r,g,b) { 
    function rgbToHex(color) { 
        if(color > 255) color = 255;
        if(color < 0) color = 0; 
        let hex = Number(color).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };  
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return '#' + red + green + blue;
};
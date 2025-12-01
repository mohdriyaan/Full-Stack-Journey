class Color {
    constructor(r, g, b, name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r},${g},${b}`
    }
    greet() {
        return `Hello From ${this.name}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    hex() {
        const { r, g, b } = this
        return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`
    }
    hsl() {
        const {r,g,b} = this
        let rNorm = r / 255;
        let gNorm = g / 255;
        let bNorm = b / 255;

        const max = Math.max(rNorm, gNorm, bNorm);
        const min = Math.min(rNorm, gNorm, bNorm);
        const delta = max - min;

        // Calculate Hue
        let h;
        if (delta === 0) {
            h = 0;
        } else if (max === rNorm) {
            h = ((gNorm - bNorm) / delta) % 6;
        } else if (max === gNorm) {
            h = (bNorm - rNorm) / delta + 2;
        } else {
            h = (rNorm - gNorm) / delta + 4;
        }
        h = Math.round(h * 60);
        if (h < 0) h += 360;

        // Calculate Lightness
        let l = (max + min) / 2;

        // Calculate Saturation
        let s;
        if (delta === 0) {
            s = 0;
        } else {
            s = delta / (1 - Math.abs(2 * l - 1));
        }

        // Convert to percentages
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return `hsl(${h}, ${s}%, ${l}%)`;
    }
}

const c1 = new Color(10, 10, 121, "white")
const c2 = new Color(200,100,100)
console.log(c1)
console.log(c1.greet())
document.body.style.backgroundColor = c2.hsl()

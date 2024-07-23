import init, { calc_cellauto } from "./cellauto/pkg/cellauto.js";

function to_svg(data, width, height, rectSize) {
    const svgWidth = width * rectSize;
    const svgHeight = height * rectSize;

    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            if (data[row * width + col] === 0) continue;

            const rect = document.createElementNS(svgNamespace, "rect");
            const x = col * rectSize;
            const y = row * rectSize;

            rect.setAttribute("x", x);
            rect.setAttribute("y", y);
            rect.setAttribute("width", rectSize);
            rect.setAttribute("height", rectSize);
            rect.setAttribute("fill", "black");

            svg.appendChild(rect);
        }
    }

    return svg
}

window.downloadSVG = () => {
    const serializer = new XMLSerializer();
    const svgContainer = document.getElementById("svgContainer");
    const svg = svgContainer.querySelector("svg");
    const svgBlob = new Blob([serializer.serializeToString(svg)], { type: "image/svg+xml;charset=utf-8" });
    const svgUrl = URL.createObjectURL(svgBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "output.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

window.generateSVG = () => {
    const svgContainer = document.getElementById("svgContainer");
    const old_svg = svgContainer.querySelector("svg");
    if (old_svg !== null) {
        svgContainer.removeChild(old_svg);
    }

    const rule = parseInt(document.getElementById("rule").value);
    const rectSize = parseInt(document.getElementById("rectSize").value);
    const width = parseInt(document.getElementById("width").value);
    const height = parseInt(document.getElementById("height").value);
    const data = calc_cellauto(rule, width, height);
    const svg = to_svg(data, width, height, rectSize);

    document.getElementById("svgContainer").appendChild(svg);
}

await init();

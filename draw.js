function to_svg(data, stride, rectSize) {
    const svgWidth = stride * rectSize;
    const svgHeight = stride * rectSize;

    const svgNamespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNamespace, "svg");
    svg.setAttribute("width", svgWidth);
    svg.setAttribute("height", svgHeight);

    for (row = 0; row < stride; row++) {
        for (col = 0; col < stride; col++) {
            if (data[row * stride + col] === 0) continue;

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

function calc_cellauto(stride) {
    const data = [
        1, 1, 0, 1, 1,
        1, 0, 1, 0, 0,
        0, 0, 0, 1, 0,
        1, 0, 0, 0, 1,
        1, 0, 0, 0, 1
    ];
    return data
}

function downloadSVG() {
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

function generateSVG() {
    svgContainer = document.getElementById("svgContainer")
    const old_svg = svgContainer.querySelector("svg")
    if (old_svg !== null) {
        svgContainer.removeChild(old_svg)
    }

    const stride = parseInt(document.getElementById("stride").value)
    const rectSize = parseInt(document.getElementById("rectSize").value)
    const data = calc_cellauto(stride)
    const svg = to_svg(data, stride, rectSize);

    document.getElementById("svgContainer").appendChild(svg);
}

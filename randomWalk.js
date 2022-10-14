export function randomWalk(url) {
    //adding user interaction: users search something, and machine click one of the result. 
    debugger
    const xhr = new XMLHttpRequest();
    console.log("This is Random Walk!!!!!!!!!!!!!!!");
    xhr.open("GET", url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var htmlText = xhr.responseText;
            var arr = getLinksFromHtml(htmlText);
            debugger;
            // randomWalk2(arr);
        }
    };
}

export function randomWalk2(urlArr) {
    //adding user interaction: users search something, and machine click one of the result.

    // for (var i = 0; i < urlArr.length; i++) {
    //     var url = urlArr[i];
    //     const xhr = new XMLHttpRequest();
    //     xhr.open("GET", url, true);
    //     xhr.send(null);
    // }
    (function myLoop(i) {
        setTimeout(function () {
            var url = urlArr[i];
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url, true);
            xhr.send(null);
            //  decrement i and call myLoop again if i > 0
            if (--i) myLoop(i);
        }, 30000)
    })(10);
}

function getLinksFromHtml(txt) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(txt, "text/html")
    // console.log(htmlDoc.getElementsByTagName("a"));
    var arr = [], l = htmlDoc.links;
    for (var i = 0; i < l.length; i++) {
        const str = l[i].href;
        if (str.substring(0, 5) === 'https' && !str.includes("google") && !str.includes("gov"))
            arr.push(l[i].href);
    }
    // Shuffle array
    const shuffled = arr.sort(() => 0.5 - Math.random());
    // Get sub-array of first n elements after shuffled
    arr = shuffled.slice(0, 10);
    return arr;
}
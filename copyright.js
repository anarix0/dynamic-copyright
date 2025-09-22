// https://2faa.cc
// https://github.com/anarix0

// https://github.com/anarix0/dynamic-copyright

const copyright_sign = "©";
const copyright_name = "anarix0";

function copyright() {
    const copyright_id = crypto.randomUUID();
    const copyright_href_id = crypto.randomUUID();

    var font = document.createElement('link');
    font.href = "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
    font.rel = "stylesheet"

    document.head.appendChild(font);

    p_element = document.createElement('p')
    //p_element.classList.add(copyright_id)

    a_element = document.createElement('a')
    //a_element.classList.add(copyright_href_id)
    a_element.href = "https://2faa.cc"
    a_element.innerHTML = `${copyright_sign} ${copyright_name}, ${/\d{4}/.exec(Date())[0]}`

    p_element.append(a_element)

    p_element.style = `
    width: 100%;
    text-align: center;
    color: gray;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    margin: 0;
    text-decoration: none;
    margin-bottom: 16px;`

    a_element.style = `
    font-family: "DM Sans", sans-serif;
    text-decoration: none;
    color: gray;`

    document.body.append(p_element)
}

window.addEventListener('load', function () {
    copyright();
})


//<p class="copyright"><a class="copyright-href" href="https://anarix0.github.io">© anarix0, <script>document.write(/\d{4}/.exec(Date())[0])</script></a></p>
//<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet">

//.copyright {
//    width: 100%;
//    text-align: center;
//    color: gray;
//    position: fixed;
//    bottom: 0;
//    z-index: 100;
//    margin: 0;
//    text-decoration: none;
//    margin-bottom: 16px;
//}
//
//.copyright-href {
//    font-family: "DM Sans";
//    text-decoration: none;
//    color: gray;
//}

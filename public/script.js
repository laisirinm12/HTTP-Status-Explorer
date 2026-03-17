async function checkStatus() {

    const code = document.getElementById("code").value;

    const res = await fetch(`/api/status/${code}`);
    const data = await res.json();

    if (data.message) {

        document.getElementById("result").innerHTML =
            `<b>${data.code} - ${data.message}</b><br><br>
${data.description}<br><br>
<b>Example:</b> ${data.example}`;

    }
    else {
        document.getElementById("result").innerText = data.message;
    }

}

async function getAll() {

    const res = await fetch("/api/status");
    const data = await res.json();

    const success = document.getElementById("success");
    const redirect = document.getElementById("redirect");
    const client = document.getElementById("client");
    const server = document.getElementById("server");

    success.innerHTML = "";
    redirect.innerHTML = "";
    client.innerHTML = "";
    server.innerHTML = "";

    for (const code in data) {

        const btn = document.createElement("button");

        btn.innerText = code;

        btn.onclick = () => showStatus(code);

        if (code.startsWith("2")) {
            btn.className = "success";
            success.appendChild(btn);
        }

        else if (code.startsWith("3")) {
            btn.className = "redirect";
            redirect.appendChild(btn);
        }

        else if (code.startsWith("4")) {
            btn.className = "client";
            client.appendChild(btn);
        }

        else if (code.startsWith("5")) {
            btn.className = "server";
            server.appendChild(btn);
        }

    }

}

async function showStatus(code){

const res = await fetch(`/api/status/${code}`);
const data = await res.json();

const result = document.getElementById("result");

result.innerHTML =
`<h3>${data.code} - ${data.message}</h3>
<p>${data.description}</p>
<p><b>Example:</b> ${data.example}</p>`;

result.style.display = "block";

}

window.onload = getAll;
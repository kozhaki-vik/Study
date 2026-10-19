function CreateRequest() {
    let httpRequest = false;
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (CatchException) {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }
    if (!httpRequest) { 
        console.log("Don't create XMLHttpRequest"); 
    }
    return httpRequest;
}

function el(selector) { 
    return document.querySelector(selector); 
}

function myConsole(c, status = '') {
    let message = '';
    let alertClass = 'alert-info';
    
    switch (c) {
        case 1:
            message = '1: Preparation for sending...';
            alertClass = 'alert-primary';
            break;
        case 2:
            message = '2: Sent...';
            alertClass = 'alert-primary';
            break;
        case 3:
            message = '3: Processing exchange...';
            alertClass = 'alert-warning';
            break;
        case 4:
            message = '4: Exchange completed!';
            alertClass = 'alert-success';
            break;
        case 5:
            message = 'Error: requested script not found!';
            alertClass = 'alert-danger';
            break;
        case 6:
            message = 'Error: server returned status: ' + status;
            alertClass = 'alert-danger';
            break;
        default:
            return;
    }
    
    const text = `<div class="alert ${alertClass} py-2 px-3 mb-2 text-left small shadow-sm" role="alert">${message}</div>`;
    el("#console").innerHTML += text;
}

function sendRequest(e) {
    if (e && e.preventDefault) {
        e.preventDefault();
    }
    
    el("#console").innerHTML = '';
    el("#printResult").innerHTML = '<div class="d-flex align-items-center justify-content-center text-muted py-2"><span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Loading server response...</div>';
    
    // Create request: calling the CreateRequest function
    const request = CreateRequest();
    const url = 'https://jsonplaceholder.typicode.com/posts/4';
    
    if (!request) {
        console.log("Don't create XMLHttpRequest");
        el("#console").innerHTML = '<div class="alert alert-danger py-2 px-3 mb-2 text-left small" role="alert">Error: Unable to create XMLHttpRequest</div>';
        el("#printResult").innerHTML = '<span class="text-danger">Request initialization failed.</span>';
    } else {
        console.log("Ye! We created XMLHttpRequest. What to do with it?");
        request.onreadystatechange = function () {
            switch (request.readyState) {
                case 1:
                    myConsole(1);
                    break;
                case 2:
                    myConsole(2);
                    break;
                case 3:
                    myConsole(3);
                    break;
                case 4:
                    if (request.status == 200) {
                        myConsole(4);
                        try {
                            const parsed = JSON.parse(request.responseText);
                            el("#printResult").innerHTML = `<pre class="text-left p-3 mb-0 border rounded small bg-white" style="max-height: 220px; overflow-y: auto;"><code>${JSON.stringify(parsed, null, 2)}</code></pre>`;
                        } catch {
                            el("#printResult").innerHTML = "<strong>" + request.responseText + "</strong>";
                        }
                    } else if (request.status == 404) {
                        myConsole(5);
                        el("#printResult").innerHTML = '<span class="text-danger font-weight-bold">404: Resource not found</span>';
                    } else {
                        myConsole(6, request.status);
                        el("#printResult").innerHTML = '<span class="text-danger font-weight-bold">Error status: ' + request.status + '</span>';
                    }
                    break;
            }
        };
        request.open('GET', url, true);
        request.send('');
    }
}

el('.getBtn').addEventListener('click', sendRequest);

onmessage = function(event) {
    if (event.data.length < 6) {
        postMessage(true); // 6미만이면 true를 반환하여 경고가 뜰 수 있게한다.
    } else {
        postMessage(false);
    }
}

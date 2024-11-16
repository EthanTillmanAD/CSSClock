


setInterval(time, 1000);
function time(){
    const date  = new Date();


    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;

    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}  ${ampm}`;

}

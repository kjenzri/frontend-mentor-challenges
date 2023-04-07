window.addEventListener("DOMContentLoaded", (event) =>{
    const rateParameterName = 'rate';
    const params = new URLSearchParams(window.location.search);
    const rate = params.get(rateParameterName);
    const rateSpan = document.getElementById(rateParameterName);
    rateSpan.innerHTML = rate;
});
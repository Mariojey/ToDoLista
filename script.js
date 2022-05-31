document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert('Zadanie jest puste')
    } else {
        document.querySelector('#tasks').innerHTML += `<div class="task">
        <span id="taskname"> ${document.querySelector('#newtask input').value} </span>
        </div>`;
    }
}
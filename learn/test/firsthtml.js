function movestyle() {
    const input = document.querySelector('input');
    const previousSibling = input.previousElementSibling;
    if (previousSibling) {
        previousSibling.style.backgroundColor = 'red';
    }
}
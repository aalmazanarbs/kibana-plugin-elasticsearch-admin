import $ from 'jquery';

$(document.body).on('click', '.jstFold, .jstExpand', function () {
    let id = $(this).data('child-id');
    let element = document.getElementById(id);
    let parent = element.parentNode;
    let toggleButton = element.previousElementSibling;
    if (element.className === '') {
        element.className = 'jstHiddenBlock';
        parent.className = 'jstFolded';
        toggleButton.className = 'jstExpand';
    } else {
        element.className = '';
        parent.className = '';
        toggleButton.className = 'jstFold';
    }
});
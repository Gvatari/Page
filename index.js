document.addEventListener("DOMContentLoaded", function() {

    // Селект
    const dropdown = document.querySelector('.main_inputs_system-dropdown');
    const system = document.querySelector('.main_inputs_system');
    const currentType = system.querySelector('.main_inputs_system-current-type');

    system.addEventListener('click', () => {
        dropdown.style.display = dropdown.style.display === 'none' || !dropdown.style.display ? 'block' : 'none';
        system.classList.toggle('opened');
    });

    dropdown.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target.classList.contains('main_inputs_system-dropdown-item')) {
            currentType.textContent = event.target.textContent;
            currentType.setAttribute('value', event.target.getAttribute('value'));
            dropdown.style.display = "none";
            system.classList.remove('opened');
        }
    });

    document.addEventListener("click", (event) => {
        if (!event.target.closest(".main_inputs_system")) {
            dropdown.style.display = "none";
            system.classList.remove('opened');
        }
    });

    // Процент трека
    const rangeInput = document.querySelector('.main_attach_group_range-item');
    const percentDisplay = document.querySelector('.main_attach_group_range-percent');

    rangeInput.addEventListener('input', () => {
        percentDisplay.textContent = rangeInput.value + '%';
    });

    // Отправить файл
    const fileInput = document.getElementById('fileInput');
    const submitButton = document.querySelector('.main_submit');
    const attachButton = document.querySelector('.main_attach_group_button');
    
    let isFileNameClick = false;
    
    attachButton.addEventListener('click', (event) => {
        if (event.target.classList.contains('main_attach_group_button-name')) {
            isFileNameClick = true;
        } else {
            isFileNameClick = false;
            fileInput.click();
        }
    });
    
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            const selectedFile = fileInput.files[0];
            console.log('Выбран файл:', selectedFile.name);
        }
    });
    
    submitButton.addEventListener('click', () => {
        if (fileInput.files.length > 0) {
            const selectedFile = fileInput.files[0];
            console.log('Отправка файла:', selectedFile.name);
        } else {
            console.log('Файл не выбран');
        }
    });

});
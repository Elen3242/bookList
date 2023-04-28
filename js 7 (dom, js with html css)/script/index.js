const addButton = document.getElementById('add-button');
const addFormInput = document.getElementById('add-form-input')
const bookName = document.getElementsByClassName('name');
const ulList = document.querySelector('#book-list ul');
const hideBox = document.getElementById('hide');
const searchInput = document.getElementById('searchBar')

const handleAddBook = () => {
    const {value } = addFormInput;
    if (value.trim) {
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const delateBook = document.createElement('span');
        
        bookName.classList.add('name');
        delateBook.classList.add('delate')
        li.appendChild(bookName);
        li.appendChild(delateBook);
        ulList.appendChild(li);

        addFormInput.value = '';
    }
}   
addButton.addEventListener('click', handleAddBook);


//your JS code here. If required.
function addBook() {
      // Get input values
      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const year = document.getElementById('isbn').value.trim();

      if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
      }

      // Get table body
      const tableBody = document.getElementByClassName('table table-striped').getElementsByTagName('tbody')[0];

      // Create new row
      const newRow = tableBody.insertRow();

      // Insert cells
      const titleCell = newRow.insertCell(0);
      const authorCell = newRow.insertCell(1);
      const yearCell = newRow.insertCell(2);
      const actionCell = newRow.insertCell(3);

      // Add text to cells
      titleCell.textContent = title;
      authorCell.textContent = author;
      yearCell.textContent = isbn;

      // Create and add Delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Clear';
      deleteBtn.className = 'delete-btn';
      deleteBtn.onclick = function () {
        newRow.remove();
      };
      actionCell.appendChild(deleteBtn);

      // Clear input fields
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('isbn').value = '';
    }
const searchInput = document.getElementById('search');
const table = document.getElementById('medicineList');

searchInput.addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = table.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(filter)) {
                match = true;
                break;
            }
        }

        rows[i].style.display = match ? '' : 'none';
    }
});

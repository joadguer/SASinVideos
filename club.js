let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function showPage(page) {
    document.querySelectorAll('.page').forEach((pageElement, index) => {
        pageElement.style.display = (index + 1 === page) ? 'flex' : 'none'; 

    });
    document.getElementById('page-number').textContent = `Página ${page}`;
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Mostrar la primera página al cargar
showPage(currentPage);







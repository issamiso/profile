document.getElementById('arrow-left').addEventListener('click', function() {
    document.querySelector('.recom-box').scrollBy({
        left: -300, // يمكنك ضبط هذا حسب الحاجة
        behavior: 'smooth'
    });
});

document.getElementById('arrow-right').addEventListener('click', function() {
    document.querySelector('.recom-box').scrollBy({
        left: 300, // يمكنك ضبط هذا حسب الحاجة
        behavior: 'smooth'
    });
});
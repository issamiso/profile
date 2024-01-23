$(document).ready(function() {
    $(".category-child").on("click", function() {
        // إزالة الكلاس من جميع العناصر التي تحمله
        $(".category-child").removeClass("category-child-active");
      
       


        // إضافة الكلاس إلى العنصر الذي تم النقر عليه
        $(this).addClass("category-child-active");
    });
    
});  



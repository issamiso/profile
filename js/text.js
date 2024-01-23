// انتظر لمدة ثانيتين ثم قم ببدء الكتابة
setTimeout(function() {
    startTyping();
}, 3600);

// دالة الكتابة
function startTyping() {
    new TypeIt("#simpleUsage", {
        strings: "I'm Issam El-rahmouni ",
        speed: 120,
        waitUntilVisible: true,
        breakLines: false,
    }).go();
}


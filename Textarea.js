const textArea = document.querySelector("#msg");

function convertTextarea() {
    var original = textArea.value;
    var converted = original.toLowerCase()
                            .replace(/[áäà]/g, 'a')
                            .replace(/[éëè]/g, 'e')
                            .replace(/[íïì]/g, 'i')
                            .replace(/[óöò]/g, 'o')
                            .replace(/[úüù]/g, 'u')
                            .replace(/[ñ]/g, 'n');
    if (original !== converted) {
        textArea.value = converted;
    }
}

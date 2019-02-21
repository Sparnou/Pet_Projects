export default (function (control) {
    if (control.value) {
        var fieldValue = control.value;
        var pattern1 = /^\d{4}[/]\d{2}[/]\d{2}$/;
        var pattern2 = /^\d{2}[ ](?:[A-Z]?)[a-z]+[ ]\d{4}$/;
        var pattern3 = /^\d{2}[-]([A-Z]|[a-z])[a-z]{2}[-]\d{2}$/;
        if (!pattern1.test(fieldValue) && !pattern2.test(fieldValue) && !pattern3.test(fieldValue)) {
            return {
                'dateFormatError': true
            };
        }
    }
    return null;
});
//# sourceMappingURL=dateValidator.js.map
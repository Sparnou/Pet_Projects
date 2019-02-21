export default function (control) {
    var minAgeValue = 18;
    var maxAgeValue = 65;
    if (control.value) {
        var fieldValue = Number(control.value);
        if (!isNaN(fieldValue)) {
            if (fieldValue < minAgeValue || fieldValue > maxAgeValue) {
                return {
                    'invalidAge': true
                };
            }
        }
        else {
            return {
                'incorrectAgeValue': true
            };
        }
    }
    return null;
}
//# sourceMappingURL=ageValidator.js.map
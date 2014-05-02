(function(wCombobox) {

    /* Default width and height of your widget */
    wCombobox.setWidth('200');
    wCombobox.setHeight('30');

    /* Define custom event for your widget */
    wCombobox.addEvent('change');
    wCombobox.addEvent('opening');
    wCombobox.addEvent('open');
    wCombobox.addEvent('highlight');
    wCombobox.addEvent('selecting');
    wCombobox.addEvent('focus');
    wCombobox.addEvent('blur');
});
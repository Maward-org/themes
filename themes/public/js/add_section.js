frappe.ui.form.on('Case', {
	refresh: function(frm) {
        frappe.msgprint("hello")
		console.log("test")
        frm.dashboard.add_section(
            frappe.render_template('insert_html', {
                data: "hello"
            })
        );
        frm.dashboard.show();

	}
});
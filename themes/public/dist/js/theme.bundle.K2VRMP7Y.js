(() => {
  // ../themes/themes/public/js/theme_switcher.js
  frappe.provide("frappe.ui");
  frappe.ui.ThemeSwitcher = class CustomThemeSwitcher extends frappe.ui.ThemeSwitcher {
    fetch_themes() {
      return new Promise((resolve) => {
        this.themes = [
          {
            name: "light",
            label: "Frappe Light",
            info: "Light Theme"
          },
          {
            name: "dark",
            label: "Timeless Night",
            info: "Dark Theme"
          },
          {
            name: "automatic",
            label: "Automatic",
            info: "Uses system's theme to switch between light and dark mode"
          },
          {
            name: "cotton_candy",
            label: "Cotton Candy",
            info: "Cotton Candy Blue Theme"
          },
          {
            name: "cherry",
            label: "Cherry",
            info: "Cherry Theme"
          },
          {
            name: "apricot",
            label: "Apricot",
            info: "Apricot Theme"
          },
          {
            name: "green",
            label: "Green",
            info: "green Theme"
          }
        ];
        resolve(this.themes);
      });
    }
  };

  // ../themes/themes/public/js/theme.bundle.js
  console.log("HEllo");
})();
//# sourceMappingURL=theme.bundle.K2VRMP7Y.js.map

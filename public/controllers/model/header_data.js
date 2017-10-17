export function Header (selectedMenuItem) {
    this.breadcrumbs = [];
    this.selectedMenuItem = selectedMenuItem;

    this.addBreadcrumb = (breadcrumb) => {
        this.breadcrumbs.push(breadcrumb);
        return this;
    };
};

export function Breadcrumb(name, url, active) {
    this.name = name;
    this.url = url;
    this.active = active;
}


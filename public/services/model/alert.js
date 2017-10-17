export default function (message, level, _class, icon) {
    this.message = message;
    this.level = level;
    this.class = _class;
    this.icon = icon;
    this.id = 'alert_box_' + new Date().getTime();
};
var post = {
    id: 2,
    title: "My first post!",
    body: "This is some filler text",
    published: false
};
function printPost(id, title, body, published) {
    console.log(id + " - " + title);
    console.log("==============================");
    console.log(body);
}
var post2 = {
    id: 2,
    title: "My second post!",
    body: "This is some filler text",
    published: false
};
function printPost2(post) {
    console.log(post.id + " - " + post.title);
    console.log("==============================");
    console.log(post.body);
}
//printPost(post)
printPost2(post2);
var Point = /** @class */ (function () {
    function Point(x, y, stroke, color) {
        this.x = x;
        this.y = y;
        this.stroke = stroke;
        this.color = color;
    }
    Point.prototype.show = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };
    return Point;
}());
var p = new Point(100, 300, 5, 0);
console.log(p.x);
console.log(p.y);
console.log(p.stroke);
console.log(p.color);
p.show();

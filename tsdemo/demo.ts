let post = {
    id: 2,
    title: "My first post!",
    body: "This is some filler text",
    published: false    
};


function printPost(id: number, title: string, body: string, published: boolean){
    console.log(id + " - " + title);
    console.log("==============================");
    console.log(body);
}

//printPost(post.id, post.title, post.body, post.published);

//printPost(1,2,3,4);

//---------------------------------------------------//

// I for interface


interface IPost {
    id: number;
    title: string;
    body: string;
    published: boolean
}

let post2: IPost = {
    id: 2,
    title: "My second post!",
    body: "This is some filler text",
    published: false    
};

function printPost2(post: IPost): void{
    console.log(post.id + " - " + post.title);
    console.log("==============================");
    console.log(post.body);
}

//printPost(post)
printPost2(post2);

class Point {
    constructor(public x: number, public y: number, public stroke: number, public color: number){
    }

    show(): void{
        console.log("(" + this.x + ", " + this.y + ")")
    }
}


let p: Point = new Point(100, 300, 5, 0);

console.log(p.x)
console.log(p.y)
console.log(p.stroke)
console.log(p.color)

p.show();

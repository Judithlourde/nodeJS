class App {
    constructor() {
        this.render();
    }
    render() {
        document.getElementById('app').innerHTML = `
            <div>
                <h1>Hello World</h1>
                <p>It's a beautiful day.</p>
            </div>
        `;
    }
}

const app = new App();
# :construction: **Work In Progress**

# cellauto-wasm

A Cellular Automaton implemented with WebAssembly (WASM).

Check the current status: [Live Demo](https://www.obizip.jp/cellauto-wasm)

## Getting Started

### Serve Locally
1. Clone this repository:
    ```bash
    git clone https://github.com/obizip/cellauto-wasm.git
    cd cellauto-wasm
    ```
2. Serve the project (example):
    ```bash
    python -m http.server 8000
    ```
    Open your browser and navigate to `http://localhost:8000`.

### Build Instructions
1. Set up the Rust environment
2. Install wasm-pack:
    ```bash
    cargo install wasm-pack
    ```
3. Build the project with make:
    ```bash
    make
    ```
    
> [!NOTE]
> You can built without make:
> ```cd cellauto && wasm-pack build --target web```

4. You can serve the built project

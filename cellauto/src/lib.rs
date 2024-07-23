use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calc_cellauto(stride: usize) -> Vec<usize> {
    let data = vec![
        1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
    ];

    data
}

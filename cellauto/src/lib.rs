use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calc_cellauto(rule: usize, width: usize, height: usize) -> Vec<usize> {
    let rule_vec: Vec<usize> = format!("{:08b}", rule)
        .chars()
        .map(|c| c.to_digit(10).expect("should be integer") as usize)
        .rev()
        .collect();
    let mut cellmap = vec![0; width * height];
    // let firstline = vec![1, 1, 0, 1, 1];
    cellmap[width / 2 - 1] = 1;

    for row in 1..height {
        for col in 0..width {
            let left = if col == 0 {
                cellmap[(row - 1) * width + width - 1]
            } else {
                cellmap[(row - 1) * width + col - 1]
            };
            let middle = cellmap[(row - 1) * width + col];
            let right = if col == width - 1 {
                cellmap[(row - 1) * width + 0]
            } else {
                cellmap[(row - 1) * width + col + 1]
            };

            let rule_idx = left * 4 + middle * 2 + right;
            cellmap[row * width + col] = rule_vec[rule_idx];
        }
    }

    cellmap
}

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn calc_cellauto(rule: usize, stride: usize) -> Vec<usize> {
    let rule_vec: Vec<usize> = format!("{:08b}", rule)
        .chars()
        .map(|c| c.to_digit(10).expect("should be integer") as usize)
        .rev()
        .collect();
    let mut cellmap = vec![0; stride * stride];
    // let firstline = vec![1, 1, 0, 1, 1];
    cellmap[stride / 2 - 1] = 1;

    for row in 1..stride {
        for col in 0..stride {
            let left = if col == 0 {
                cellmap[(row - 1) * stride + stride - 1]
            } else {
                cellmap[(row - 1) * stride + col - 1]
            };
            let middle = cellmap[(row - 1) * stride + col];
            let right = if col == stride - 1 {
                cellmap[(row - 1) * stride + 0]
            } else {
                cellmap[(row - 1) * stride + col + 1]
            };

            let rule_idx = left * 4 + middle * 2 + right;
            cellmap[row * stride + col] = rule_vec[rule_idx];
        }
    }

    cellmap
}

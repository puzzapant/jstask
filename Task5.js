function countSmaller(nums) {
    const n = nums.length;
    const counts = Array(n).fill(0); 
    const indices = Array.from({ length: n }, (_, i) => i);

   
    function mergeSort(left, right) {
        if (right - left <= 1) return; 

        const mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid, right);

        let temp = [];
        let i = left, j = mid;

       
        while (i < mid && j < right) {
            if (nums[indices[i]] <= nums[indices[j]]) {
                temp.push(indices[i]);
                counts[indices[i]] += j - mid; 
                i++;
            } else {
                temp.push(indices[j]);
                j++;
            }
        }

        while (i < mid) {
            temp.push(indices[i]);
            counts[indices[i]] += j - mid;
            i++;
        }

        while (j < right) {
            temp.push(indices[j]);
            j++;
        }

       
        for (let k = left; k < right; k++) {
            indices[k] = temp[k - left];
        }
    }

 
    mergeSort(0, n);
    return counts;
}


const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); 

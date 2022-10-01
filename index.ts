function insertionSort(numbers: Array<number>): Array<number>{

    for (let index: number = 1; index < numbers.length; index++) {

        let currentNumber: number = numbers[index];
        let prevIndex: number = index - 1;

        while (prevIndex >= 0 && numbers[prevIndex] > currentNumber) {

            numbers[prevIndex + 1] = numbers[prevIndex];
            prevIndex -= 1;
            
        }

        numbers[prevIndex + 1] = currentNumber;
        
    }

    return numbers;
}

function selectionSort(numbers: Array<number>): Array<number>{

    for (let index = 0; index < numbers.length - 1; index++) {

        let minValue: number = numbers[index];

        for (let j = index + 1; j < numbers.length; j++) {
            const currentNumber: number = numbers[j];

            if (currentNumber < minValue) {

                let currentMinValue: number = minValue;
                minValue = currentNumber;
                numbers[index] = minValue;
                numbers[j] = currentMinValue;
                
            }
            
        }
        
    }

    return numbers;
}

const numbers: Array<number> = [4, 9, 5, 2, 3, 10, 1];
const sortedNumbers: Array<number> = selectionSort(numbers);

console.log('sorted numbers: ', sortedNumbers);
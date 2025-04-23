
# Matrix Multiplication Project Report

**Student Name**: Mugabo

**Student ID**: LS2425229

**Submission Date**: 2025-03-25


## System Configuration

| **CPU Model:**|Intel(R) Core(TM) i5-4300M CPU @ 2.60GHz  |
| **Memory Size**| Total: 3.8Gi, Used: 518Mi, Free: 3.3Gi |
| **Operating System**: | Linux x86_64 GNU |
| **Compiler Version** | gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0 |
| **Python Version**: | Python 3.12.3 |


## Implementation Details
### C Language Implementation
**Source Code**: 
 
 ```
#include <stdio.h>
#include <time.h>
#define N 3
int i, j, k; // initialization
void multiply(int mat1[N][N], int mat2[N][N], int res[N][N]) {
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            res[i][j] = 0;
            for (k = 0; k < N; k++) {
                res[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
}

int main() {
    int mat1[N][N] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    int mat2[N][N] = {{9, 8, 7}, {6, 5, 4}, {3, 2, 1}};
    int res[N][N];
    // function to multiply matrices
    multiply(mat1, mat2, res);

    printf("Resultant Matrix:\n");
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            printf("%d ", res[i][j]);
        }
        printf("\n");
    }
    
    struct timespec start, end;
    clock_gettime(CLOCK_MONOTONIC, &start);  // Start time

    multiply(mat1, mat2, res);

    clock_gettime(CLOCK_MONOTONIC, &end);  // End time

    // Calculating execution time in milliseconds
    double time_taken = (end.tv_sec - start.tv_sec) * 1000.0 + 
                        (end.tv_nsec - start.tv_nsec) / 1.0e6;

    printf("Execution Time: %.6f ms\n", time_taken);
    return 0;
}
 ```

**Compilation Command**: `gcc matrix.c -o matrix`

**GCC (GNU Compiler Collection)** is a powerful open-source compiler system. 
To Compile the C program you run this command `gcc matrix.c -o matrix` in the terminal. 

**Execution Command**: `./matrix`

To execute the C program, you definitely run `./matrix`, and therefore after the execution, the output will be printed on the terminal.

### Python Language Implementation
**Source Code**:

 ```
import numpy as np
import time

def multiply_matrices(mat1, mat2):
    return np.dot(mat1, mat2)

mat1 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
mat2 = np.array([[9, 8, 7], [6, 5, 4], [3, 2, 1]])

start_time = time.time()
result = multiply_matrices(mat1, mat2)
end_time = time.perf_counter()

print("Results Matrix:")
print(result)
execution_time = (end_time - start_time) * 1000  # Converting to milliseconds
print(f"Execution Time: {execution_time:.6f} ms")
```

**Execution Command**: `python matrix.py` or `python3 matrix.py` [1]

## Algorithm Verification

**Correctness**: The Algorithm has been verified by doing matrices multiplication manually and comparing the results computed by the Python's numpy and C Program. The results are same, which confirms the verification and correctness of the Algorithm.

## Performance Analysis【bonus】

**Execution Times**:

| **C Program** | 0.000458 ms |
| **Python** | 0.007242 ms|

**Analysis**: 

 - **Time Complexity**: The time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input [2]. The standard matrix multiplication algorithm used in both implementations follows an O(N³) time complexity due to the three nested loops iterating over matrix dimensions.
 
 -   **Performance Difference**:
        -   C is significantly faster due to static typing, direct memory access, and compiled execution.
        - Python, even when using NumPy (which is optimized with C under the hood), still incurs some overhead due to Python’s interpreted nature and dynamic typing.

## Conclusion
The project gave me first-hand on how to use Unix command line operations, including compilation and execution both locally and remote work station. I practiced Markdown for structured documentation, explored performance differences between compiled (C) and interpreted (Python) languages, linking it with algorithmic complexity. Last but not least, I demonstrated execution time measurement in both C and Python, confirming efficiency differences.

## References
1. python-guide, *Installing Python 3 on Linux*. [online]. Available:  
https://docs.python-guide.org/starting/install3/linux/  
[Accessed March 24.2025]

2. GeeksForGeeks, *time-complexity-and-space-complexity*. [online]. Available:  
https://www.geeksforgeeks.org/time-complexity-and-space-complexity/  
[Accessed March 25.2025]

## Appendix
![Output of the Python program, executed from the remote workstation](https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/486621170_2982769485205219_5271737741796030883_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=xfVKPitObFwQ7kNvgHw8xgH&_nc_oc=Admr04J0yUCBJU39MrM8vI6aMo3UMFXEOkO3dYVkMvXtl1ND_Q5VvZ3yrJ0KG1ZYm34&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=teQUQ48lo5RLox8D1X6TuQ&oh=00_AYGnp70oo79SdBNUXL0ACuR6z1j5b037iiOFfjXSOVH_NA&oe=67E8456B)



![Comparison of Python Program VS C Program in terms of execution time](https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/486490840_2982764691872365_5315368710483007292_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=DYsc9hwBLl8Q7kNvgEwGSXo&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=JA7N_8Y09v3KGSdC2l6u1w&oh=00_AYGS9qvezvecSQg1UpG1n0VMY5ORbaP8vFPyuGyTtTEzzA&oe=67E825FB)



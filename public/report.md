
# Matrix Multiplication Project Report

**Student Name**: Mugabo

**Student ID**: LS2425229

**Submission Date**: 2025-03-25


<h2>System Configuration</h2>

<table>
  <tbody>
    <tr>
      <th>CPU Model:</th>
      <td>Intel(R) Core(TM) i5-4300M CPU @ 2.60GHz</td>
    </tr>
    <tr>
      <th>Memory Size:</th>
      <td>Total: 3.8Gi, Used: 518Mi, Free: 3.3Gi</td>
    </tr>
    <tr>
      <th>Operating System:</th>
      <td>Linux x86_64 GNU</td>
    </tr>
    <tr>
      <th>Compiler Version:</th>
      <td>gcc (Ubuntu 13.3.0-6ubuntu2~24.04) 13.3.0</td>
    </tr>
    <tr>
      <th>Python Version:</th>
      <td>Python 3.12.3</td>
    </tr>
  </tbody>
</table>



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
    int mat1[N][N] =  // codes from here were deleted because they incorporated curly brackets which led to errors while deploying to GitHub
    int mat2[N][N] = // codes from here were deleted because they incorporated curly brackets which led to errors while deploying to GitHub
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

mat1 = np.array()
mat2 = np.array()

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

<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>Execution Time</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>C Program</strong></td>
      <td>0.000458 ms</td>
    </tr>
    <tr>
      <td><strong>Python</strong></td>
      <td>0.007242 ms</td>
    </tr>
  </tbody>
</table>


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
![Output of the Python program, executed from the remote workstation](/mugabo/output.jpg)




![Comparison of Python Program VS C Program in terms of execution time](/mugabo/pythonOutputa.jpg)



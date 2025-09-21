const quizData = {
            intro: [
                {
                    question: "Who developed the C programming language?",
                    options: ["Dennis Ritchie", "Ken Thompson", "Brian Kernighan", "Bjarne Stroustrup"],
                    correct: 0,
                    explanation: "Dennis Ritchie developed C at Bell Labs between 1969 and 1973."
                },
                {
                    question: "In which year was C programming language developed?",
                    options: ["1970", "1972", "1975", "1969"],
                    correct: 1,
                    explanation: "C was developed in 1972 by Dennis Ritchie at Bell Labs."
                },
                {
                    question: "C is a _______ level programming language.",
                    options: ["High", "Low", "Middle", "Machine"],
                    correct: 2,
                    explanation: "C is considered a middle-level language as it combines features of both high-level and low-level languages."
                },
                {
                    question: "Which of the following is the correct extension for C source files?",
                    options: [".cpp", ".c", ".h", ".cc"],
                    correct: 1,
                    explanation: "C source files use the .c extension, while header files use .h extension."
                },
                {
                    question: "C language is based on which earlier programming language?",
                    options: ["ALGOL", "FORTRAN", "B", "COBOL"],
                    correct: 2,
                    explanation: "C was developed as a successor to the B programming language."
                },
                {
                    question: "Which operating system was originally written in C?",
                    options: ["Windows", "UNIX", "DOS", "Linux"],
                    correct: 1,
                    explanation: "UNIX operating system was rewritten in C, making it portable across different hardware platforms."
                },
                {
                    question: "C is known for being:",
                    options: ["Platform dependent", "Platform independent", "Portable", "Both portable and platform independent"],
                    correct: 2,
                    explanation: "C is portable, meaning C programs can be compiled and run on different platforms with minimal changes."
                },
                {
                    question: "The first C compiler was written in:",
                    options: ["Assembly language", "B language", "C itself", "FORTRAN"],
                    correct: 0,
                    explanation: "The first C compiler was written in assembly language before C could compile itself."
                },
                {
                    question: "Which book popularized the C programming language?",
                    options: ["The C Bible", "C Programming", "The C Programming Language", "Learning C"],
                    correct: 2,
                    explanation: "'The C Programming Language' by Kernighan and Ritchie (K&R) is the definitive book on C."
                },
                {
                    question: "C follows which programming paradigm?",
                    options: ["Object-oriented", "Procedural", "Functional", "Logic"],
                    correct: 1,
                    explanation: "C follows the procedural programming paradigm, organizing code into functions."
                }
            ],
            syntax: [
                {
                    question: "Every C program must have:",
                    options: ["A header file", "A main() function", "Global variables", "Comments"],
                    correct: 1,
                    explanation: "Every C program must have a main() function as it's the entry point of the program."
                },
                {
                    question: "Which symbol is used to end a statement in C?",
                    options: [".", ",", ";", ":"],
                    correct: 2,
                    explanation: "Semicolon (;) is used to terminate statements in C."
                },
                {
                    question: "What are the symbols used to enclose a block of code in C?",
                    options: ["( )", "[ ]", "{ }", "< >"],
                    correct: 2,
                    explanation: "Curly braces { } are used to define code blocks in C."
                },
                {
                    question: "Which of the following is a valid C identifier?",
                    options: ["2variable", "var-name", "_variable", "var name"],
                    correct: 2,
                    explanation: "_variable is valid. Identifiers can start with underscore or letter, not digits or contain spaces/hyphens."
                },
                {
                    question: "C is case sensitive. Which means:",
                    options: ["'Var' and 'var' are same", "'Var' and 'var' are different", "Only lowercase allowed", "Only uppercase allowed"],
                    correct: 1,
                    explanation: "C is case sensitive, so 'Var' and 'var' are treated as different identifiers."
                },
                {
                    question: "What is the correct way to include a header file?",
                    options: ["include <stdio.h>", "#include stdio.h", "#include <stdio.h>", "include stdio.h"],
                    correct: 2,
                    explanation: "#include <stdio.h> is the correct preprocessor directive to include standard library headers."
                },
                {
                    question: "Which of the following is NOT a C keyword?",
                    options: ["int", "float", "main", "char"],
                    correct: 2,
                    explanation: "'main' is not a keyword in C, it's a function name. 'int', 'float', and 'char' are keywords."
                },
                {
                    question: "What is the maximum length of an identifier in C?",
                    options: ["31 characters", "63 characters", "Implementation defined", "Unlimited"],
                    correct: 2,
                    explanation: "The maximum length of identifiers is implementation-defined, though traditionally it was 31 characters."
                },
                {
                    question: "Which character is used for single line comments in C99?",
                    options: ["#", "//", "/*", "--"],
                    correct: 1,
                    explanation: "// is used for single-line comments in C99 and later versions."
                },
                {
                    question: "The correct syntax for main function is:",
                    options: ["void main()", "int main()", "main()", "int main(void)"],
                    correct: 3,
                    explanation: "int main(void) is the correct and most explicit form for main function."
                }
            ],
            comments: [
                {
                    question: "Which of the following is used for multi-line comments in C?",
                    options: ["//", "/* */", "#", "<!-- -->"],
                    correct: 1,
                    explanation: "/* */ is used for multi-line comments in C."
                },
                {
                    question: "Can comments be nested in C?",
                    options: ["Yes", "No", "Only single-line", "Only multi-line"],
                    correct: 1,
                    explanation: "Comments cannot be nested in C. /* /* */ */ would cause compilation error."
                },
                {
                    question: "What happens to comments during compilation?",
                    options: ["They are converted to machine code", "They are ignored", "They generate warnings", "They cause errors"],
                    correct: 1,
                    explanation: "Comments are ignored by the compiler and don't affect the compiled program."
                },
                {
                    question: "Which comment style was introduced in C99?",
                    options: ["/* */", "//", "#", "Both /* */ and //"],
                    correct: 1,
                    explanation: "Single-line comments (//) were introduced in C99 standard."
                },
                {
                    question: "What is the output of: int x = 5 /* + 10 */; printf(\"%d\", x);",
                    options: ["5", "15", "Compilation error", "10"],
                    correct: 0,
                    explanation: "The comment /* + 10 */ is ignored, so x = 5 is printed."
                },
                {
                    question: "Which is correct for commenting out code temporarily?",
                    options: ["Use // for each line", "Use /* */ around the block", "Use #if 0 ... #endif", "All of the above"],
                    correct: 3,
                    explanation: "All methods can be used to comment out code, with #if 0...#endif being useful for large blocks."
                },
                {
                    question: "Can you put comments inside string literals?",
                    options: ["Yes", "No", "Only single-line", "Only multi-line"],
                    correct: 1,
                    explanation: "Comments inside string literals are treated as part of the string, not as comments."
                },
                {
                    question: "What's wrong with: /* Comment 1 /* Comment 2 */ End */",
                    options: ["Nothing wrong", "Nested comments not allowed", "Missing semicolon", "Invalid syntax"],
                    correct: 1,
                    explanation: "Nested comments are not allowed in C. The first */ ends the comment."
                },
                {
                    question: "Documentation comments in C are typically written using:",
                    options: ["//", "/* */", "/** */", "Both /* */ and /** */"],
                    correct: 3,
                    explanation: "Both /* */ and /** */ are used for documentation, with /** */ being common for API documentation."
                },
                {
                    question: "Comments are useful for:",
                    options: ["Code documentation", "Debugging", "Code maintenance", "All of the above"],
                    correct: 3,
                    explanation: "Comments serve multiple purposes: documentation, debugging aid, and making code maintenance easier."
                }
            ],
            variables: [
                {
                    question: "Which of the following is a correct variable declaration?",
                    options: ["int 2var;", "int var-name;", "int var_name;", "int var name;"],
                    correct: 2,
                    explanation: "var_name is valid. Variable names can contain letters, digits, and underscores, but cannot start with digits or contain spaces/hyphens."
                },
                {
                    question: "What is the default value of an uninitialized local variable?",
                    options: ["0", "NULL", "Garbage value", "-1"],
                    correct: 2,
                    explanation: "Uninitialized local variables contain garbage values (unpredictable values from memory)."
                },
                {
                    question: "Which keyword is used to prevent modification of a variable?",
                    options: ["static", "const", "volatile", "extern"],
                    correct: 1,
                    explanation: "The 'const' keyword makes a variable read-only, preventing modification after initialization."
                },
                {
                    question: "What is variable scope?",
                    options: ["Variable size", "Variable type", "Variable visibility region", "Variable value"],
                    correct: 2,
                    explanation: "Variable scope refers to the region of the program where the variable is accessible."
                },
                {
                    question: "Global variables are stored in:",
                    options: ["Stack", "Heap", "Data segment", "Code segment"],
                    correct: 2,
                    explanation: "Global variables are stored in the data segment of memory."
                },
                {
                    question: "What is the output of: int x = 5, y = x++; printf(\"%d %d\", x, y);",
                    options: ["5 5", "6 5", "6 6", "5 6"],
                    correct: 1,
                    explanation: "x++ is post-increment. y gets the current value of x (5), then x is incremented to 6."
                },
                {
                    question: "Which is correct initialization?",
                    options: ["int x = 5.5;", "int x = 'A';", "int x = \"5\";", "int x = 5;"],
                    correct: 3,
                    explanation: "int x = 5; is correct. 5.5 is float, 'A' gives ASCII value, \"5\" is string."
                },
                {
                    question: "Local variables are stored in:",
                    options: ["Heap", "Stack", "Data segment", "Code segment"],
                    correct: 1,
                    explanation: "Local variables are stored in the stack memory."
                },
                {
                    question: "What does 'extern' keyword do?",
                    options: ["Creates external variable", "Declares variable defined elsewhere", "Makes variable global", "Initializes variable"],
                    correct: 1,
                    explanation: "'extern' declares that a variable is defined in another file or later in the same file."
                },
                {
                    question: "Can you declare multiple variables in one statement?",
                    options: ["No", "Yes, of same type only", "Yes, of different types", "Only with initialization"],
                    correct: 1,
                    explanation: "Multiple variables of the same type can be declared in one statement: int a, b, c;"
                }
            ],
            datatypes: [
                {
                    question: "What is the size of 'int' data type in most modern systems?",
                    options: ["2 bytes", "4 bytes", "8 bytes", "System dependent"],
                    correct: 3,
                    explanation: "The size of 'int' is system-dependent. It's typically 4 bytes on modern 32-bit and 64-bit systems."
                },
                {
                    question: "Which data type is used to store a single character?",
                    options: ["string", "char", "character", "chr"],
                    correct: 1,
                    explanation: "'char' data type is used to store a single character."
                },
                {
                    question: "What is the range of 'unsigned char'?",
                    options: ["-128 to 127", "0 to 255", "-255 to 255", "0 to 127"],
                    correct: 1,
                    explanation: "unsigned char ranges from 0 to 255 (2^8 - 1)."
                },
                {
                    question: "Which is the largest integer data type in C?",
                    options: ["int", "long", "long long", "short"],
                    correct: 2,
                    explanation: "'long long' is the largest standard integer data type in C."
                },
                {
                    question: "What is the format specifier for 'double' data type?",
                    options: ["%f", "%d", "%lf", "%g"],
                    correct: 2,
                    explanation: "%lf is used for double in scanf, though %f works for printf due to automatic promotion."
                },
                {
                    question: "Which data type would you use to store very large numbers with decimal points?",
                    options: ["float", "double", "long double", "int"],
                    correct: 2,
                    explanation: "'long double' provides the highest precision for floating-point numbers."
                },
                {
                    question: "What does 'void' data type represent?",
                    options: ["Empty data", "No data type", "Null pointer", "Function with no return value"],
                    correct: 1,
                    explanation: "'void' represents the absence of type, commonly used for functions that don't return a value."
                },
                {
                    question: "The 'sizeof' operator returns:",
                    options: ["Number of bits", "Number of bytes", "Number of characters", "Memory address"],
                    correct: 1,
                    explanation: "'sizeof' operator returns the size in bytes of a data type or variable."
                },
                {
                    question: "Which is NOT a valid integer data type?",
                    options: ["short int", "long int", "long long int", "very long int"],
                    correct: 3,
                    explanation: "'very long int' is not a valid data type in C."
                },
                {
                    question: "What happens when you assign a float value to an int variable?",
                    options: ["Compilation error", "Decimal part is truncated", "Rounded to nearest integer", "Undefined behavior"],
                    correct: 1,
                    explanation: "When assigning float to int, the decimal part is truncated (not rounded)."
                }
            ],
            constants: [
                {
                    question: "Which keyword is used to define constants in C?",
                    options: ["constant", "const", "define", "final"],
                    correct: 1,
                    explanation: "'const' keyword is used to define constants in C."
                },
                {
                    question: "What is the difference between #define and const?",
                    options: ["No difference", "#define is preprocessor, const is compiler", "const is faster", "#define is newer"],
                    correct: 1,
                    explanation: "#define is handled by preprocessor (text replacement), const is handled by compiler (type checking)."
                },
                {
                    question: "Which is the correct way to define a constant using #define?",
                    options: ["#define PI = 3.14", "#define PI 3.14", "define PI 3.14", "#define PI: 3.14"],
                    correct: 1,
                    explanation: "#define PI 3.14 is correct. No '=' sign is used with #define."
                },
                {
                    question: "Can you change the value of a const variable after initialization?",
                    options: ["Yes", "No", "Only once", "Only in functions"],
                    correct: 1,
                    explanation: "const variables cannot be modified after initialization."
                },
                {
                    question: "What is a string literal?",
                    options: ["A variable", "A constant string", "A character array", "A pointer"],
                    correct: 1,
                    explanation: "String literals like \"Hello\" are constant strings stored in read-only memory."
                },
                {
                    question: "Which of the following is a character constant?",
                    options: ["\"A\"", "'A'", "A", "char A"],
                    correct: 1,
                    explanation: "'A' is a character constant (single quotes), \"A\" is a string literal."
                },
                {
                    question: "What type of constant is 123L?",
                    options: ["int", "long", "float", "double"],
                    correct: 1,
                    explanation: "123L is a long integer constant (L suffix indicates long)."
                },
                {
                    question: "Symbolic constants are preferred over magic numbers because:",
                    options: ["They are faster", "They improve readability", "They use less memory", "They are mandatory"],
                    correct: 1,
                    explanation: "Symbolic constants improve code readability and maintainability."
                },
                {
                    question: "What is the value of the constant expression 5 + 3 * 2?",
                    options: ["16", "11", "10", "13"],
                    correct: 1,
                    explanation: "Following operator precedence, multiplication is done first: 3 * 2 = 6, then 5 + 6 = 11."
                },
                {
                    question: "Which escape sequence represents a newline character?",
                    options: ["\\r", "\\n", "\\t", "\\b"],
                    correct: 1,
                    explanation: "\\n represents a newline character in C."
                }
            ],
            operators: [
                {
                    question: "Which operator has the highest precedence?",
                    options: ["*", "+", "()", "="],
                    correct: 2,
                    explanation: "Parentheses () have the highest precedence and are evaluated first."
                },
                {
                    question: "What is the result of 10 % 3?",
                    options: ["3", "1", "0", "3.33"],
                    correct: 1,
                    explanation: "The modulus operator % returns the remainder. 10 divided by 3 gives remainder 1."
                },
                {
                    question: "What is the difference between ++i and i++?",
                    options: ["No difference", "++i increments first, i++ increments after", "++i is faster", "i++ is deprecated"],
                    correct: 1,
                    explanation: "++i (pre-increment) increments before use, i++ (post-increment) increments after use."
                },
                {
                    question: "Which is the correct syntax for conditional operator?",
                    options: ["condition : true ? false", "condition ? true : false", "if condition then true else false", "condition then true else false"],
                    correct: 1,
                    explanation: "The ternary operator syntax is: condition ? true_value : false_value"
                },
                {
                    question: "What does the << operator do?",
                    options: ["Right shift", "Left shift", "Less than", "Assignment"],
                    correct: 1,
                    explanation: "<< is the left shift operator, which shifts bits to the left."
                },
                {
                    question: "What is the result of 5 && 0?",
                    options: ["5", "0", "1", "Error"],
                    correct: 1,
                    explanation: "Logical AND (&&) returns 0 when any operand is 0 (false)."
                },
                {
                    question: "Which operator is used for pointer dereferencing?",
                    options: ["&", "*", "->", "."],
                    correct: 1,
                    explanation: "The * operator is used to dereference pointers (access the value at the address)."
                },
                {
                    question: "What is the associativity of assignment operators?",
                    options: ["Left to right", "Right to left", "No associativity", "Depends on operator"],
                    correct: 1,
                    explanation: "Assignment operators have right-to-left associativity."
                },
                {
                    question: "What does the sizeof operator return for an array?",
                    options: ["Number of elements", "Size in bytes", "Address of first element", "Length of array"],
                    correct: 1,
                    explanation: "sizeof returns the total size in bytes of the array."
                },
                {
                    question: "Which is a compound assignment operator?",
                    options: ["==", "+=", "++", "&&"],
                    correct: 1,
                    explanation: "+= is a compound assignment operator, equivalent to a = a + value."
                }
            ],
            boolean: [
                {
                    question: "What is the boolean value of 0 in C?",
                    options: ["True", "False", "Undefined", "Error"],
                    correct: 1,
                    explanation: "In C, 0 is considered false, and any non-zero value is considered true."
                },
                {
                    question: "Which header file defines boolean type in C99?",
                    options: ["stdio.h", "stdlib.h", "stdbool.h", "bool.h"],
                    correct: 2,
                    explanation: "stdbool.h header defines bool type and true/false macros in C99."
                },
                {
                    question: "What is the result of !5?",
                    options: ["5", "-5", "0", "1"],
                    correct: 2,
                    explanation: "! is logical NOT. Since 5 is true (non-zero), !5 is false (0)."
                },
                {
                    question: "In C, what represents true?",
                    options: ["1 only", "Any non-zero value", "TRUE macro", "Boolean type"],
                    correct: 1,
                    explanation: "In C, any non-zero value represents true."
                },
                {
                    question: "What is the result of 10 > 5?",
                    options: ["true", "false", "1", "0"],
                    correct: 2,
                    explanation: "Comparison operators return 1 for true and 0 for false. 10 > 5 is true, so it returns 1."
                },
                {
                    question: "Which operator performs logical OR?",
                    options: ["|", "||", "OR", "or"],
                    correct: 1,
                    explanation: "|| is the logical OR operator in C."
                },
                {
                    question: "What is short-circuit evaluation?",
                    options: ["Fast evaluation", "Early termination of logical expressions", "Optimization technique", "Error handling"],
                    correct: 1,
                    explanation: "Short-circuit evaluation means logical operators stop evaluating once the result is determined."
                },
                {
                    question: "In the expression (a && b), when is b not evaluated?",
                    options: ["When a is true", "When a is false", "Always evaluated", "Never evaluated"],
                    correct: 1,
                    explanation: "In (a && b), if a is false, b is not evaluated due to short-circuit evaluation."
                },
                {
                    question: "What does _Bool represent in C99?",
                    options: ["Integer type", "Boolean type", "Character type", "Pointer type"],
                    correct: 1,
                    explanation: "_Bool is the native boolean type introduced in C99."
                },
                {
                    question: "What is the size of _Bool type?",
                    options: ["1 bit", "1 byte", "4 bytes", "Implementation defined"],
                    correct: 1,
                    explanation: "_Bool type is typically 1 byte in size."
                }
            ],
            ifelse: [
                {
                    question: "What is the correct syntax for if statement?",
                    options: ["if condition then", "if (condition)", "if condition:", "if [condition]"],
                    correct: 1,
                    explanation: "The correct syntax is if (condition) with parentheses around the condition."
                },
                {
                    question: "What happens if you don't use braces {} with if statement?",
                    options: ["Compilation error", "Only next statement is part of if", "All following statements included", "Undefined behavior"],
                    correct: 1,
                    explanation: "Without braces, only the immediately following statement is part of the if block."
                },
                {
                    question: "Which is the correct else-if syntax?",
                    options: ["else if", "elseif", "elif", "else-if"],
                    correct: 0,
                    explanation: "'else if' (two words) is the correct syntax for chaining conditions."
                },
                {
                    question: "What is the output of: if(5) printf(\"True\"); else printf(\"False\");",
                    options: ["True", "False", "5", "Error"],
                    correct: 0,
                    explanation: "5 is non-zero, hence true, so 'True' is printed."
                },
                {
                    question: "Can you have if statement without else?",
                    options: ["No", "Yes", "Only in functions", "Only with braces"],
                    correct: 1,
                    explanation: "else clause is optional in if statements."
                },
                {
                    question: "What is nested if?",
                    options: ["Multiple conditions", "if inside another if", "if with multiple else", "Complex conditions"],
                    correct: 1,
                    explanation: "Nested if means placing one if statement inside another if statement."
                },
                {
                    question: "What is the dangling else problem?",
                    options: ["Missing else", "Extra else", "Ambiguous else association", "Syntax error"],
                    correct: 2,
                    explanation: "Dangling else refers to ambiguity about which if an else belongs to in nested structures."
                },
                {
                    question: "How is dangling else resolved in C?",
                    options: ["Compilation error", "else matches nearest if", "else matches first if", "User must specify"],
                    correct: 1,
                    explanation: "C resolves dangling else by associating else with the nearest unmatched if."
                },
                {
                    question: "What is the alternative to multiple if-else statements?",
                    options: ["for loop", "while loop", "switch statement", "goto statement"],
                    correct: 2,
                    explanation: "switch statement is an alternative to multiple if-else statements for discrete values."
                },
                {
                    question: "Can you use assignment in if condition?",
                    options: ["No", "Yes", "Only with ==", "Causes warning"],
                    correct: 3,
                    explanation: "Assignment in if condition is allowed but typically causes compiler warnings as it's often unintended."
                }
            ],
            loops: [
                {
                    question: "Which loop is guaranteed to execute at least once?",
                    options: ["for loop", "while loop", "do-while loop", "All loops"],
                    correct: 2,
                    explanation: "do-while loop checks condition after execution, so it runs at least once."
                },
                {
                    question: "What is the correct syntax for a for loop?",
                    options: ["for(init; condition; increment)", "for(condition; init; increment)", "for(increment; condition; init)", "for(init; increment; condition)"],
                    correct: 0,
                    explanation: "for loop syntax: for(initialization; condition; increment/decrement)"
                },
                {
                    question: "What happens when the condition in a while loop is initially false?",
                    options: ["Loop runs once", "Loop runs infinitely", "Loop doesn't run", "Compilation error"],
                    correct: 2,
                    explanation: "If while loop condition is initially false, the loop body doesn't execute at all."
                },
                {
                    question: "Which creates an infinite loop?",
                    options: ["for(;;)", "while(1)", "do{}while(1)", "All of the above"],
                    correct: 3,
                    explanation: "All three create infinite loops: for(;;), while(1), and do{}while(1)."
                },
                {
                    question: "What is the output of: for(int i=0; i<3; i++) printf(\"%d \", i);",
                    options: ["0 1 2", "1 2 3", "0 1 2 3", "1 2"],
                    correct: 0,
                    explanation: "Loop runs for i=0,1,2 (i<3), printing '0 1 2 '."
                },
                {
                    question: "In a for loop, which part is optional?",
                    options: ["Initialization only", "Condition only", "Increment only", "All three parts"],
                    correct: 3,
                    explanation: "All three parts of for loop are optional, creating for(;;) infinite loop if all omitted."
                },
                {
                    question: "What does 'continue' statement do in a loop?",
                    options: ["Exits the loop", "Skips current iteration", "Restarts the loop", "Causes error"],
                    correct: 1,
                    explanation: "'continue' skips the remaining code in current iteration and jumps to next iteration."
                },
                {
                    question: "What does 'break' statement do in a loop?",
                    options: ["Pauses the loop", "Exits the loop", "Skips current iteration", "Restarts the loop"],
                    correct: 1,
                    explanation: "'break' statement immediately exits the loop."
                },
                {
                    question: "Can you declare variables in for loop initialization?",
                    options: ["No", "Yes, in C99 and later", "Only integers", "Only with const"],
                    correct: 1,
                    explanation: "C99 allows variable declaration in for loop initialization: for(int i=0; ...)"
                },
                {
                    question: "What is a nested loop?",
                    options: ["Loop with conditions", "Loop inside another loop", "Loop with multiple variables", "Complex loop"],
                    correct: 1,
                    explanation: "Nested loop is a loop placed inside the body of another loop."
                }
            ],
            breakcontinue: [
                {
                    question: "What does the 'break' statement do?",
                    options: ["Skips current iteration", "Exits the loop/switch", "Pauses execution", "Restarts loop"],
                    correct: 1,
                    explanation: "'break' exits the innermost loop or switch statement immediately."
                },
                {
                    question: "What does the 'continue' statement do?",
                    options: ["Exits the loop", "Skips to next iteration", "Pauses the loop", "Breaks the loop"],
                    correct: 1,
                    explanation: "'continue' skips the rest of current iteration and jumps to the next iteration."
                },
                {
                    question: "In nested loops, 'break' exits:",
                    options: ["All loops", "Outermost loop", "Innermost loop", "User-specified loop"],
                    correct: 2,
                    explanation: "'break' only exits the innermost loop containing it."
                },
                {
                    question: "Can 'break' be used outside loops?",
                    options: ["Yes, anywhere", "Only in switch statements", "In loops and switch only", "No, never"],
                    correct: 2,
                    explanation: "'break' can only be used inside loops and switch statements."
                },
                {
                    question: "What happens after 'continue' in a for loop?",
                    options: ["Loop exits", "Condition is checked", "Increment/decrement is executed", "Loop restarts"],
                    correct: 2,
                    explanation: "In for loop, 'continue' jumps to the increment/decrement part, then condition is checked."
                },
                {
                    question: "What is the output of: for(int i=0; i<5; i++) { if(i==2) continue; printf(\"%d \", i); }",
                    options: ["0 1 2 3 4", "0 1 3 4", "1 2 3 4", "0 1 2 3"],
                    correct: 1,
                    explanation: "When i=2, continue skips printf, so output is '0 1 3 4 '."
                },
                {
                    question: "What is the output of: for(int i=0; i<5; i++) { if(i==2) break; printf(\"%d \", i); }",
                    options: ["0 1", "0 1 2", "0 1 2 3 4", "1 2"],
                    correct: 0,
                    explanation: "When i=2, break exits the loop, so output is '0 1 '."
                },
                {
                    question: "Can 'continue' be used in switch statement?",
                    options: ["Yes", "No", "Only with loops", "Only in nested switch"],
                    correct: 1,
                    explanation: "'continue' cannot be used in switch statement directly, only in loops."
                },
                {
                    question: "In a do-while loop, where does 'continue' jump to?",
                    options: ["Beginning of loop", "Condition check", "End of loop", "Next statement"],
                    correct: 1,
                    explanation: "In do-while loop, 'continue' jumps to the condition check at the end."
                },
                {
                    question: "What is labeled break/continue?",
                    options: ["Break with message", "Break to specific loop", "Invalid syntax", "Break with line number"],
                    correct: 2,
                    explanation: "C doesn't support labeled break/continue (unlike Java). This is invalid syntax in C."
                }
            ],
            strings: [
                {
                    question: "How are strings represented in C?",
                    options: ["String data type", "Array of characters", "Linked list", "Special structure"],
                    correct: 1,
                    explanation: "Strings in C are represented as arrays of characters terminated by null character '\\0'."
                },
                {
                    question: "What is the null terminator in C strings?",
                    options: ["\\n", "\\0", "NULL", "\\t"],
                    correct: 1,
                    explanation: "\\0 (null character) terminates strings in C."
                },
                {
                    question: "Which header file contains string functions?",
                    options: ["stdio.h", "string.h", "stdlib.h", "ctype.h"],
                    correct: 1,
                    explanation: "string.h header file contains standard string manipulation functions."
                },
                {
                    question: "What does strlen() function return?",
                    options: ["Size in bytes", "Number of characters including \\0", "Number of characters excluding \\0", "Memory address"],
                    correct: 2,
                    explanation: "strlen() returns the number of characters in string excluding the null terminator."
                },
                {
                    question: "How do you declare a string variable?",
                    options: ["string str;", "char str[];", "char *str;", "Both char str[] and char *str"],
                    correct: 3,
                    explanation: "Strings can be declared as char str[] (array) or char *str (pointer)."
                },
                {
                    question: "What is the difference between char str[] = \"hello\" and char *str = \"hello\"?",
                    options: ["No difference", "Array is modifiable, pointer points to read-only", "Pointer is modifiable, array is read-only", "Both are read-only"],
                    correct: 1,
                    explanation: "char str[] creates modifiable array, char *str points to read-only string literal."
                },
                {
                    question: "Which function copies one string to another?",
                    options: ["strcat()", "strcmp()", "strcpy()", "strlen()"],
                    correct: 2,
                    explanation: "strcpy() function copies source string to destination string."
                },
                {
                    question: "What does strcmp() function return when strings are equal?",
                    options: ["1", "0", "-1", "true"],
                    correct: 1,
                    explanation: "strcmp() returns 0 when both strings are equal."
                },
                {
                    question: "Which function concatenates two strings?",
                    options: ["strcat()", "strcpy()", "strcmp()", "strlen()"],
                    correct: 0,
                    explanation: "strcat() function concatenates (appends) one string to another."
                },
                {
                    question: "What is the length of string \"Hello\"?",
                    options: ["4", "5", "6", "Depends on system"],
                    correct: 1,
                    explanation: "\"Hello\" has 5 characters. The null terminator is not counted by strlen()."
                }
            ],
            pointers: [
                {
                    question: "What is a pointer?",
                    options: ["A data type", "A variable that stores memory address", "A function", "An operator"],
                    correct: 1,
                    explanation: "A pointer is a variable that stores the memory address of another variable."
                },
                {
                    question: "Which operator is used to get the address of a variable?",
                    options: ["*", "&", "->", "."],
                    correct: 1,
                    explanation: "& (address-of operator) is used to get the address of a variable."
                },
                {
                    question: "Which operator is used to access the value at a pointer?",
                    options: ["&", "*", "->", "."],
                    correct: 1,
                    explanation: "* (dereference operator) is used to access the value stored at the address in pointer."
                },
                {
                    question: "What is a null pointer?",
                    options: ["Pointer to 0", "Pointer that points to nothing", "Invalid pointer", "Pointer to null character"],
                    correct: 1,
                    explanation: "A null pointer is a pointer that doesn't point to any valid memory location."
                },
                {
                    question: "How do you declare a pointer to integer?",
                    options: ["int ptr;", "int *ptr;", "pointer int ptr;", "*int ptr;"],
                    correct: 1,
                    explanation: "int *ptr; declares a pointer to integer."
                },
                {
                    question: "What is pointer arithmetic?",
                    options: ["Math operations on addresses", "Operations that move pointer by data type size", "Invalid operations", "Memory calculations"],
                    correct: 1,
                    explanation: "Pointer arithmetic moves the pointer by the size of the data type it points to."
                },
                {
                    question: "What is the result of ptr + 1 if ptr points to int?",
                    options: ["Next byte", "Next integer location", "ptr + 1", "Error"],
                    correct: 1,
                    explanation: "ptr + 1 moves to the next integer location (typically 4 bytes ahead)."
                },
                {
                    question: "What is a dangling pointer?",
                    options: ["Null pointer", "Pointer to deallocated memory", "Uninitialized pointer", "Pointer to pointer"],
                    correct: 1,
                    explanation: "A dangling pointer points to memory that has been deallocated or freed."
                },
                {
                    question: "What is double indirection?",
                    options: ["Two pointers", "Pointer to pointer", "Array of pointers", "Function pointer"],
                    correct: 1,
                    explanation: "Double indirection refers to a pointer that points to another pointer."
                },
                {
                    question: "How do you declare a pointer to pointer?",
                    options: ["int *ptr;", "int **ptr;", "int ptr*;", "pointer *ptr;"],
                    correct: 1,
                    explanation: "int **ptr; declares a pointer to a pointer to integer."
                }
            ],
            arrays: [
                {
                    question: "How do you declare an array of 10 integers?",
                    options: ["int arr[10];", "int arr(10);", "array int[10];", "int[10] arr;"],
                    correct: 0,
                    explanation: "int arr[10]; declares an array of 10 integers."
                },
                {
                    question: "What is the index of the first element in an array?",
                    options: ["1", "0", "-1", "Depends on declaration"],
                    correct: 1,
                    explanation: "Array indexing starts from 0 in C."
                },
                {
                    question: "How do you initialize an array during declaration?",
                    options: ["int arr[5] = 1,2,3,4,5;", "int arr[5] = {1,2,3,4,5};", "int arr[5] = [1,2,3,4,5];", "int arr[5] = (1,2,3,4,5);"],
                    correct: 1,
                    explanation: "Arrays are initialized using curly braces: int arr[5] = {1,2,3,4,5};"
                },
                {
                    question: "What happens if you access arr[10] in an array of size 5?",
                    options: ["Compilation error", "Runtime error", "Undefined behavior", "Returns 0"],
                    correct: 2,
                    explanation: "Accessing array out of bounds leads to undefined behavior in C."
                },
                {
                    question: "What is the relationship between arrays and pointers?",
                    options: ["No relationship", "Array name is a pointer to first element", "Arrays are better than pointers", "Pointers are arrays"],
                    correct: 1,
                    explanation: "Array name acts as a pointer to the first element of the array."
                },
                {
                    question: "How do you find the size of an array?",
                    options: ["length(arr)", "size(arr)", "sizeof(arr)/sizeof(arr[0])", "arr.length"],
                    correct: 2,
                    explanation: "sizeof(arr)/sizeof(arr[0]) gives the number of elements in array."
                },
                {
                    question: "Can you change the size of an array after declaration?",
                    options: ["Yes", "No", "Only increase", "Only decrease"],
                    correct: 1,
                    explanation: "Array size is fixed at compile time and cannot be changed."
                },
                {
                    question: "What is a multidimensional array?",
                    options: ["Array of arrays", "Large array", "Dynamic array", "Pointer array"],
                    correct: 0,
                    explanation: "Multidimensional array is an array of arrays, like int arr[3][4]."
                },
                {
                    question: "How do you pass an array to a function?",
                    options: ["By value", "By reference", "Array name (which is a pointer)", "Cannot pass arrays"],
                    correct: 2,
                    explanation: "Arrays are passed by passing the array name, which acts as a pointer to first element."
                },
                {
                    question: "What is the difference between int arr[] and int *arr in function parameters?",
                    options: ["Significant difference", "No difference", "arr[] is array, *arr is pointer", "arr[] is faster"],
                    correct: 1,
                    explanation: "In function parameters, int arr[] and int *arr are equivalent."
                }
            ],
            functions: [
                {
                    question: "What is a function in C?",
                    options: ["A variable", "A reusable block of code", "A data type", "An operator"],
                    correct: 1,
                    explanation: "A function is a reusable block of code that performs a specific task."
                },
                {
                    question: "Which is the correct function declaration?",
                    options: ["function int add(int a, int b)", "int add(int a, int b)", "def add(int a, int b)", "add(int a, int b): int"],
                    correct: 1,
                    explanation: "int add(int a, int b) is the correct function declaration syntax."
                },
                {
                    question: "What is a function prototype?",
                    options: ["Function definition", "Function declaration", "Function call", "Function body"],
                    correct: 1,
                    explanation: "Function prototype is a declaration that specifies function name, return type, and parameters."
                },
                {
                    question: "What does 'void' return type mean?",
                    options: ["Returns nothing", "Returns 0", "Returns null", "Returns error"],
                    correct: 0,
                    explanation: "'void' means the function doesn't return any value."
                },
                {
                    question: "How are arguments passed to functions in C?",
                    options: ["By reference", "By value", "By pointer", "By address"],
                    correct: 1,
                    explanation: "C uses call by value - copies of arguments are passed to functions."
                },
                {
                    question: "What is recursion?",
                    options: ["Function calling another function", "Function calling itself", "Nested function calls", "Function with multiple parameters"],
                    correct: 1,
                    explanation: "Recursion is when a function calls itself."
                },
                {
                    question: "What is the base case in recursion?",
                    options: ["First call", "Last call", "Terminating condition", "Error condition"],
                    correct: 2,
                    explanation: "Base case is the terminating condition that stops recursive calls."
                },
                {
                    question: "Can functions be declared inside other functions in C?",
                    options: ["Yes", "No", "Only in main", "Only with static"],
                    correct: 1,
                    explanation: "C doesn't support nested function declarations (unlike some other languages)."
                },
                {
                    question: "What happens if a function doesn't have a return statement?",
                    options: ["Compilation error", "Returns garbage value", "Returns 0", "Undefined behavior"],
                    correct: 3,
                    explanation: "If a non-void function doesn't return a value, behavior is undefined."
                },
                {
                    question: "What is function overloading?",
                    options: ["Multiple functions with same name", "Not supported in C", "Function with many parameters", "Recursive function"],
                    correct: 1,
                    explanation: "C doesn't support function overloading (unlike C++)."
                }
            ],
            structures: [
                {
                    question: "What is a structure in C?",
                    options: ["Array of different types", "User-defined data type", "Function", "Pointer type"],
                    correct: 1,
                    explanation: "Structure is a user-defined data type that groups related data items of different types."
                },
                {
                    question: "Which keyword is used to define a structure?",
                    options: ["struct", "structure", "class", "type"],
                    correct: 0,
                    explanation: "'struct' keyword is used to define structures in C."
                },
                {
                    question: "How do you access structure members?",
                    options: ["Using -> operator", "Using . operator", "Using [] operator", "Using * operator"],
                    correct: 1,
                    explanation: "Dot (.) operator is used to access structure members."
                },
                {
                    question: "When do you use -> operator?",
                    options: ["Always", "With structure pointers", "With arrays", "With functions"],
                    correct: 1,
                    explanation: "-> operator is used to access members through structure pointers."
                },
                {
                    question: "Can structures contain other structures?",
                    options: ["No", "Yes", "Only pointers to structures", "Only with typedef"],
                    correct: 1,
                    explanation: "Structures can contain other structures as members (nested structures)."
                },
                {
                    question: "What is structure padding?",
                    options: ["Extra space added by compiler", "Initialization with zeros", "Structure alignment", "Memory optimization"],
                    correct: 0,
                    explanation: "Structure padding is extra space added by compiler for memory alignment."
                },
                {
                    question: "How do you create a structure variable?",
                    options: ["struct StructName var;", "StructName var;", "new StructName var;", "create StructName var;"],
                    correct: 0,
                    explanation: "struct StructName var; creates a structure variable."
                },
                {
                    question: "What is typedef used for with structures?",
                    options: ["Define structure", "Create alias for structure", "Initialize structure", "Delete structure"],
                    correct: 1,
                    explanation: "typedef creates an alias, allowing you to use the alias instead of 'struct StructName'."
                },
                {
                    question: "Can you assign one structure to another?",
                    options: ["No", "Yes", "Only with same members", "Only with pointers"],
                    correct: 1,
                    explanation: "You can assign one structure to another of the same type."
                },
                {
                    question: "What is the size of an empty structure?",
                    options: ["0 bytes", "1 byte", "4 bytes", "Undefined"],
                    correct: 1,
                    explanation: "Empty structure typically has size of 1 byte to ensure unique addresses."
                }
            ]
        };

        let currentTopic = '';
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let score = 0;
        let allTopics = false;
        let allQuestionsData = [];

        // DOM elements
        const topicSelector = document.getElementById('topicSelector');
        const quizContainer = document.getElementById('quizContainer');
        const results = document.getElementById('results');
        const questionContainer = document.getElementById('questionContainer');
        const topicTitle = document.getElementById('topicTitle');
        const questionCounter = document.getElementById('questionCounter');
        const progressFill = document.getElementById('progressFill');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const finishBtn = document.getElementById('finishBtn');
        const exitBtn = document.getElementById('exitBtn');
        const homeBtn = document.getElementById('homeBtn');
        const startAllTopics = document.getElementById('startAllTopics');

        // Event listeners
        document.querySelectorAll('.topic-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                startQuiz(e.target.dataset.topic);
            });
        });

        startAllTopics.addEventListener('click', () => {
            startCompleteQuiz();
        });

        exitBtn.addEventListener('click', () => {
            const confirmExit = confirm('Are you sure you want to exit the quiz? Your progress will be lost.');
            if (confirmExit) {
                resetQuiz();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                displayQuestion();
                updateProgress();
                updateButtons();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < getCurrentQuestions().length - 1) {
                currentQuestionIndex++;
                displayQuestion();
                updateProgress();
                updateButtons();
            }
        });

        finishBtn.addEventListener('click', () => {
            // Check if all questions are answered before finishing
            const questions = getCurrentQuestions();
            const unansweredCount = questions.length - userAnswers.filter(answer => answer !== undefined).length;
            
            if (unansweredCount > 0) {
                alert(`Please answer all questions before finishing. ${unansweredCount} question(s) remaining.`);
                return;
            }
            
            calculateScore();
            showResults();
        });

        homeBtn.addEventListener('click', () => {
            resetQuiz();
        });

        function startQuiz(topic) {
            currentTopic = topic;
            allTopics = false;
            currentQuestionIndex = 0;
            // Initialize userAnswers array with proper length
            const questions = getCurrentQuestions();
            userAnswers = new Array(questions.length).fill(undefined);
            score = 0;

            topicSelector.style.display = 'none';
            quizContainer.style.display = 'block';
            results.style.display = 'none';

            topicTitle.textContent = topic.charAt(0).toUpperCase() + topic.slice(1).replace(/([A-Z])/g, ' $1');
            displayQuestion();
            updateProgress();
            updateButtons();
        }

        function startCompleteQuiz() {
            allTopics = true;
            currentTopic = 'all';
            currentQuestionIndex = 0;
            score = 0;
            
            // Combine all questions
            allQuestionsData = [];
            Object.keys(quizData).forEach(topic => {
                quizData[topic].forEach(question => {
                    allQuestionsData.push({...question, topic: topic});
                });
            });

            topicSelector.style.display = 'none';
            quizContainer.style.display = 'block';
            results.style.display = 'none';

            // Initialize userAnswers array with proper length
            userAnswers = new Array(allQuestionsData.length).fill(undefined);

            topicTitle.textContent = 'Complete C Programming Quiz';
            displayQuestion();
            updateProgress();
            updateButtons();
        }

        function getCurrentQuestions() {
            return allTopics ? allQuestionsData : quizData[currentTopic];
        }

        function displayQuestion() {
            const questions = getCurrentQuestions();
            const question = questions[currentQuestionIndex];
            
            const totalQuestions = questions.length;
            questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;

            let questionHTML = `
                <h3>Q${currentQuestionIndex + 1}: ${question.question}</h3>
            `;

            if (question.code) {
                questionHTML += `<pre><code>${question.code}</code></pre>`;
            }

            questionHTML += '<div class="options">';
            question.options.forEach((option, index) => {
                const isSelected = userAnswers[currentQuestionIndex] === index;
                const isAnswered = userAnswers[currentQuestionIndex] !== undefined;
                const isCorrect = index === question.correct;
                
                let optionClass = 'option';
                if (isSelected) optionClass += ' selected';
                if (isAnswered && isCorrect) optionClass += ' correct';
                if (isAnswered && isSelected && !isCorrect) optionClass += ' incorrect';

                questionHTML += `
                    <div class="${optionClass}" onclick="selectOption(${index})" ${isAnswered ? 'style="pointer-events: none;"' : ''}>
                        ${String.fromCharCode(65 + index)}. ${option}
                    </div>
                `;
            });
            questionHTML += '</div>';

            if (userAnswers[currentQuestionIndex] !== undefined) {
                const isCorrect = userAnswers[currentQuestionIndex] === question.correct;
                questionHTML += `
                    <div class="explanation show">
                        <h4>${isCorrect ? '✅ Correct!' : '❌ Incorrect!'}</h4>
                        <p><strong>Correct Answer:</strong> ${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}</p>
                        <p><strong>Explanation:</strong> ${question.explanation}</p>
                    </div>
                `;
            }

            questionContainer.innerHTML = questionHTML;
        }

        function selectOption(optionIndex) {
            if (userAnswers[currentQuestionIndex] !== undefined) return;
            
            userAnswers[currentQuestionIndex] = optionIndex;
            displayQuestion();
            updateButtons();
        }

        function updateProgress() {
            const questions = getCurrentQuestions();
            const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
            progressFill.style.width = progress + '%';
        }

        function updateButtons() {
            const questions = getCurrentQuestions();
            
            prevBtn.disabled = currentQuestionIndex === 0;
            
            if (currentQuestionIndex === questions.length - 1) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = 'inline-block';
                // Enable finish button only if current question is answered
                finishBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
            } else {
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
                nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
            }
        }

        function calculateScore() {
            const questions = getCurrentQuestions();
            score = 0;
            
            for (let i = 0; i < questions.length; i++) {
                if (userAnswers[i] !== undefined && userAnswers[i] === questions[i].correct) {
                    score++;
                }
            }
        }

        function showResults() {
            quizContainer.style.display = 'none';
            results.style.display = 'block';

            const questions = getCurrentQuestions();
            const totalQuestions = questions.length;
            const correctAnswers = score;
            const incorrectAnswers = totalQuestions - score;
            const percentage = Math.round((score / totalQuestions) * 100);

            // Update score circle
            const scoreCircle = document.getElementById('scoreCircle');
            scoreCircle.style.setProperty('--percentage', `${percentage * 3.6}deg`);
            
            document.getElementById('scoreText').textContent = `${percentage}%`;
            document.getElementById('correctCount').textContent = correctAnswers;
            document.getElementById('incorrectCount').textContent = incorrectAnswers;
            document.getElementById('totalCount').textContent = totalQuestions;
            document.getElementById('percentage').textContent = `${percentage}%`;
        }

        function resetQuiz() {
            currentTopic = '';
            currentQuestionIndex = 0;
            userAnswers = [];
            score = 0;
            allTopics = false;
            allQuestionsData = [];

            topicSelector.style.display = 'block';
            quizContainer.style.display = 'none';
            results.style.display = 'none';
        }

        // Initialize
        resetQuiz();

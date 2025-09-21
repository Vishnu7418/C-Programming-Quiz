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
    ]
}
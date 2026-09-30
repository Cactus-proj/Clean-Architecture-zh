# Part2. STARTING WITH THE BRICKS: PROGRAMMING PARADIGMS 从基础构件开始：编程范式

Software architecture begins with the code—and so we will begin our discussion of architecture by looking at what we’ve learned about code since code was first written.

> 任何软件架构的实现都离不开具体的代码，所以我们对软件架构的讨论应该从第一行被写下的代码开始。

In 1938, Alan Turing laid the foundations of what was to become computer programming. He was not the first to conceive of a programmable machine, but he was the first to understand that programs were simply data. By 1945, Turing was writing real programs on real computers in code that we would recognize (if we squinted enough). Those programs used loops, branches, assignment, subroutines, stacks, and other familiar structures. Turing’s language was binary.

> 1938 年，阿兰·图灵为现代计算机编程打下了地基。尽管他并不是第一个发明可编程机器的人，但却是第一个提出“程序即数据”的人。到 1945 年时，图灵已经在真实计算机上编写真实的、我们现在也能看懂的计算机程序了。这些程序中用到了循环、分支、赋值、子调用、栈等如今我们都很熟悉的结构。而图灵用的编程语言就是简单的二进制数序列。

Since those days, a number of revolutions in programming have occurred. One revolution with which we are all very familiar is the revolution of languages. First, in the late 1940s, came assemblers. These “languages” relieved the programmers of the drudgery of translating their programs into binary. In 1951, Grace Hopper invented A0, the first compiler. In fact, she coined the term compiler. Fortran was invented in 1953 (the year after I was born). What followed was an unceasing flood of new programming languages—COBOL, PL/1, SNOBOL, C, Pascal, C++, Java, ad infinitum.

> 从那时到现在，编程领域历经了数次变革，其中我们都很熟悉的一次就是编程语言的变革。首先，20 世纪 40 年代末出现了汇编器（assembler），让程序员不必再费力地把程序翻译成二进制。1951 年，Grace Hopper 发明了 A0，这是第一个编译器（compiler）；事实上，“编译器”一词也是她创造的。随后，FORTRAN 于 1953 年问世（也就是我出生的第二年）。此后，新编程语言层出不穷：COBOL、PL/1、SNOBOL、C、Pascal、C++、Java 等等，不胜枚举。

Another, probably more significant, revolution was in programming paradigms. Paradigms are ways of programming, relatively unrelated to languages. A paradigm tells you which programming structures to use, and when to use them. To date, there have been three such paradigms. For reasons we shall discuss later, there are unlikely to be any others.

> 除此之外，计算机编程领域还经历了另一场更大、也许更重要的变革，那就是编程范式（paradigm）的变迁。编程范式指的是编程方式，与具体的编程语言关系相对较小。范式会告诉我们应该采用哪些编程结构，以及何时采用。到目前为止，这样的范式只有三个；接下来我们会解释为什么几乎不可能再出现新的范式。

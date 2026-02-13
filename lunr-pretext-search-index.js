var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sect-polynomials",
  "level": "1",
  "url": "sect-polynomials.html",
  "type": "Section",
  "number": "1.1",
  "title": "Polynomials",
  "body": " Polynomials     Understand the general, factored and horner forms of a polynomial .    Find the roots and multiplicity of a polynomial.    Use the roots and multiplicity to sketch both the sign chart and the graph of a polynomial.    Learn the Fundamental Theorem of Algebra .      Recall that a polynomial is a function of the form:     where are constants and is called the leading coefficient . The degree of the polynomial is . Polynomials are quite important in numerical analysis.       Examples of polynomials include .    Functions that are not polynomials: .       The polynomials with small degrees are generally called more specific names. Here are the polynomials of degrees with 0, 1, 2 and 3.    degree  form  type        0     horizontal line    1     general line    2     quadratic    3     cubic      Power Functions  A power function has form for a nonnegative integer. These functions are the building blocks of polynomials. The graph of for :          The 3 functions for above are solid and shaped like cups opening up with the higher power growing faster with a flatter bottom inside the interval . The odd powers are dashed with a similar features in that the higher powers are steeper outside of the interval and flatter inside the interval.    Forms of Polynomials     Standard Form     This is a simple compact form of a polynomial and this can be useful for various types of theorems and it easy to see the degree and leading coefficient of the polynomial.    Factored Form:  The factored form of a polynomial can be written:     where the roots are and have multiplicity  respectively with from the standard form above, called the leading coefficient and the multiplicities satisfy: , where is the degree. Not all polynomials in standard form can be written in factored form, which assumes that all roots are real.  The factored form obviously gives you the roots directly, however, one can easily create a graph from this form as well. The behavior as , is the same as the power function with leading coefficient. That is it behaves like .  Additionally, the graph near each zero behaves like the multiplicity of zero. An example is given below in .    Horner's Form  Lastly, if a polynomial is written in a nested form like     it is in Horner’s Form , which is generally an efficient way of evaluating the polynomial at a point, both in terms of efficiency of operations and in terms of rounding errors as will be seen in .       Graphs of Polynomials  The graph of a polynomial is most easily understood in factored form . The following can be determined directly from this form:     The -intercepts are the roots of the polynomial, .    The multiplicity of the root is denoted , which is the power of the term in the factored form. We will see in an alternative way to find the multiplicity including the multiplicity of roots for functions other than polynomials.    The shape of the polynomial near is , where .    The end behavior of the graph (shape of the curve for ) is similar to the power function , where is the degree and is the leading coefficient.    The intervals of positive and negative values of the polynomial can be found by first understanding the sign of the power function for and , which depends on the sign of and if is even or odd. Once the sign of is known for large (in the positive or negative direction), we know that will only switch sign over a zero with odd multiplicity.     The following few examples shows how to both manipulate polynomials as well as pull out the important information.    Consider the polynomial .     List all real zeros of the polynomial and the multiplicity of each.    The zeros are (with multiplicity 1), (with multiplicity 1) and (with multiplicity 2).      Determine the -intercepts and if the cross or just touch at each.    The -intercepts cross at and just touch .      Find the power function that the polynomial resembles for large .    The power function is , where the 3 arises from the coefficient in front of the terms in amd the 4 is the degree of the polynomial, the sum of all of the multiplicities.      Find intervals where the graph is above and below the -axis.    Since the power function for large is , left of and right of the function is positive. Recalling that the polynomial changes sign over roots of odd multiplicity however doesn’t over even multiplicity, one gets the following sign chart:              Determine the graph of near each zero.    The graph of near each of the zeros will take on the form .  At the root  so the form will be   At the root  so the form will be   At the root  so the form will be       With all given information, plot with the graphs in #5.    A graph of the polynomial and the three transformed power functions (as dashed curves):             The next example shows use of these same concepts to construct the graph.    Construct the graph of the polynomial:       This polynomial is in factored form. The roots are and with multiplicities 3, 2 and 1 respectively. Also, the degree of the polynomial is the sum of the multiplicities or 6. Notice that the term in front is , so the leading term is .  The intervals on which the polynomial is positive and negative is found the following way. Note that the leading term is , the far behavior of is the same as this so it is negative for . The polynomial will change sign over the roots of odd multiplicity or at and . Therefore the sign of the polynomial can be summarized in the following sign chart:   A graph of the sign chart of .        The graph of near each of the zeros will take on the form or     When     so near , the graph is     When  The multiplicity is 1 and the coefficient in front is     so near , the graph is     When  The multiplicity is 2 and the coefficient in front is   so near , the graph is m - .     A graph of the polynomial and the three transformed power functions (as dashed curves):   A graph of the polynomial in together with the power functions near each of the roots.        and one can see the similarity between the power functions and the polynomial near each of the roots.    Above the general form, factored form and Horner form of a polynomial was defined. The following example shows how to convert between these forms.    Find the standard form and Horner form of the polynomial .    The standard form is found by expanding all of the terms. This is a little painful, so a CAS like Matlab, Maple or Mathematica is often helpful.     To find the Horner form, we successive factor out an in a nested way:     As we will see later in ?????, the Horner form also decreases round off errors and shorten the number of operations needed to evaluate the polynomial.    Also as we will see in , some polynomials have properties that seem to be nice may not be so nice. For example a polynomial with equally spaced roots have a nice form, but the local extrema get very large. The following example is a polynomial with equally-spaced roots.    A Wilkinson polynomial is a polynomial of some degree (an integer) with the following property: the polynomial as roots at , each of which has multiplicity 1. Write down the Wilkinson polynomial of degree 5.         For the next example, we show how to find an polynomial function with properties such as roots and multiplicity.    Find a polynomial with the following roots and multiplicity:    Roots  1  -1  2    Multiplicity  2  1  3    and satisfies .    First, we write a general polynomial that satisfies the roots property with appropriate multiplicity:     and then find using ,     so and the polynomial is:       In , we will cover how to find a polynomial that passes through a given set of points. The next example is a fundamental building block of such polynomials called a Lagrange polynomial.    Find the simplest polynomial that has the property that , and .    Since there are 3 points that it must satisfy, unless there is a special relationship between and , we will probably need a quadratic. We know two of the zeros of the polynomial, so a form is:     and then we use the third point to find      or     therefore the polynomial is:         Fundamental Theorem of Algebra  One of the most important analytical aspects of polynomials is the Fundamental Theorem of Algebra, which states that the number of roots of a polynomial equals the degree.   Fundamental Theorem of Algebra   Let be a non-constant single-variable polynomial with complex roots and degree . Then has exactly roots if each root is counted relative to its multiplicity.    Although the statement is quite simple, the proof is not as it generally requires significant knowledge of Complex Analysis as is generally shown at the end of the course. See Complex Analysis by Howell and Mathews as a nice open-source text. The proof is shown in Chapter 6 of that text.    "
},
{
  "id": "sect-polynomials-2",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "   Understand the general, factored and horner forms of a polynomial .    Find the roots and multiplicity of a polynomial.    Use the roots and multiplicity to sketch both the sign chart and the graph of a polynomial.    Learn the Fundamental Theorem of Algebra .    "
},
{
  "id": "sect-polynomials-3-4",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-3-4",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": "     Examples of polynomials include .    Functions that are not polynomials: .      "
},
{
  "id": "fig-power-functions",
  "level": "2",
  "url": "sect-polynomials.html#fig-power-functions",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": "       "
},
{
  "id": "ex-features-poly",
  "level": "2",
  "url": "sect-polynomials.html#ex-features-poly",
  "type": "Example",
  "number": "1.1.3",
  "title": "",
  "body": "  Consider the polynomial .     List all real zeros of the polynomial and the multiplicity of each.    The zeros are (with multiplicity 1), (with multiplicity 1) and (with multiplicity 2).      Determine the -intercepts and if the cross or just touch at each.    The -intercepts cross at and just touch .      Find the power function that the polynomial resembles for large .    The power function is , where the 3 arises from the coefficient in front of the terms in amd the 4 is the degree of the polynomial, the sum of all of the multiplicities.      Find intervals where the graph is above and below the -axis.    Since the power function for large is , left of and right of the function is positive. Recalling that the polynomial changes sign over roots of odd multiplicity however doesn’t over even multiplicity, one gets the following sign chart:              Determine the graph of near each zero.    The graph of near each of the zeros will take on the form .  At the root  so the form will be   At the root  so the form will be   At the root  so the form will be       With all given information, plot with the graphs in #5.    A graph of the polynomial and the three transformed power functions (as dashed curves):            "
},
{
  "id": "sect-polynomials-6-7",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-6-7",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "  Construct the graph of the polynomial:       This polynomial is in factored form. The roots are and with multiplicities 3, 2 and 1 respectively. Also, the degree of the polynomial is the sum of the multiplicities or 6. Notice that the term in front is , so the leading term is .  The intervals on which the polynomial is positive and negative is found the following way. Note that the leading term is , the far behavior of is the same as this so it is negative for . The polynomial will change sign over the roots of odd multiplicity or at and . Therefore the sign of the polynomial can be summarized in the following sign chart:   A graph of the sign chart of .        The graph of near each of the zeros will take on the form or     When     so near , the graph is     When  The multiplicity is 1 and the coefficient in front is     so near , the graph is     When  The multiplicity is 2 and the coefficient in front is   so near , the graph is m - .     A graph of the polynomial and the three transformed power functions (as dashed curves):   A graph of the polynomial in together with the power functions near each of the roots.        and one can see the similarity between the power functions and the polynomial near each of the roots.   "
},
{
  "id": "sect-polynomials-6-9",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-6-9",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": "  Find the standard form and Horner form of the polynomial .    The standard form is found by expanding all of the terms. This is a little painful, so a CAS like Matlab, Maple or Mathematica is often helpful.     To find the Horner form, we successive factor out an in a nested way:     As we will see later in ?????, the Horner form also decreases round off errors and shorten the number of operations needed to evaluate the polynomial.   "
},
{
  "id": "sect-polynomials-6-11",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-6-11",
  "type": "Example",
  "number": "1.1.10",
  "title": "",
  "body": "  A Wilkinson polynomial is a polynomial of some degree (an integer) with the following property: the polynomial as roots at , each of which has multiplicity 1. Write down the Wilkinson polynomial of degree 5.        "
},
{
  "id": "sect-polynomials-6-13",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-6-13",
  "type": "Example",
  "number": "1.1.11",
  "title": "",
  "body": "  Find a polynomial with the following roots and multiplicity:    Roots  1  -1  2    Multiplicity  2  1  3    and satisfies .    First, we write a general polynomial that satisfies the roots property with appropriate multiplicity:     and then find using ,     so and the polynomial is:      "
},
{
  "id": "sect-polynomials-6-15",
  "level": "2",
  "url": "sect-polynomials.html#sect-polynomials-6-15",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": "  Find the simplest polynomial that has the property that , and .    Since there are 3 points that it must satisfy, unless there is a special relationship between and , we will probably need a quadratic. We know two of the zeros of the polynomial, so a form is:     and then we use the third point to find      or     therefore the polynomial is:      "
},
{
  "id": "thm-fund-algebra",
  "level": "2",
  "url": "sect-polynomials.html#thm-fund-algebra",
  "type": "Theorem",
  "number": "1.1.13",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra   Let be a non-constant single-variable polynomial with complex roots and degree . Then has exactly roots if each root is counted relative to its multiplicity.   "
},
{
  "id": "sect-calc-theorems",
  "level": "1",
  "url": "sect-calc-theorems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Important Theorems from Calculus",
  "body": " Important Theorems from Calculus     Understand basic theorems of functions, like the Intermediate Value Theorem , Rolle's Theorem and the Mean Value Theorem .    Use these theorems to demonstrate properties of functions.     We now review a number of theorems that are usually presented in Calculus. Here we both state a number of important theorems, but show some examples and then prove most of these. For additional information on these, check any standard Calculus book. A nice open-source one can be found at APEX Calculus .   Intermediate Value Theorem   Let be a continuous function on . Let and . The function takes on all values between and . That is, for any value , such that , then there exists at least one value such that .    This is a important theorem, however, there is much background needed to prove this. A good open-source book with a proof is in Introduction to Real Analysis by William F. Trench The background and proof of this is in section 2.2 .   Rolle's Theorem   Let be a function that satisfies:      is continuous on the closed interval ,     is differentiable on the open interval ,     .     Then there is a number in such that .    From the Intermediate Value Theorem, takes on a minimum value, and maximum value, on the interval .   If , then the function is constant and all values of in the interval satisfy .    Otherwise, either the minimum or maximum or both of occurs in . Let be this value. Since the function is differentiable at and is a minimum or a maximum, then .         Show that on the interval satisfies all the conditions of Rolle's Theorem. Find all of the values of such that .    Since is a quadratic, it is continuous and differentiable everywhere, so the first two conditions are satisfied. Also, and , so the function is equal on the endpoints of the interval and the 3rd condition is satisfied.  To find the values of such that , we solve or .  A graphical view of this is as follows:          and one can see that the function is 0 at both and and that there is a horizontal tangent line at .    We can extend Rolle's theorem to functions that have more than 2 equal points. We will show an example of the theorem, but in general, this is very important for proving other theorems.   Generalized Rolle's Theorem   If is continuous on , has continuous derivatives on and is equal to zero at distinct points in then there exists a number with .     First, for some notation, assume that is the th zero of for and the are ordered increasingly. Therefore there are subintervals of , denoted such that . Using Rolle's theorem, for each subinterval, there exists a number in such that .  Therefore there are numbers, such that the derivative is 0 or subintervals such that . Using Rolle's theorem again, for each , there exists a number such that .  Repeat this process times and the theorem holds.   The following is a simple example of Generalized Rolle's theorem. We will see this theorem used in a proof later in the text.    Let . Show that this satisfies Generalized Rolle's theorem on for and find the value of such that .    First, there are zeros of at and since is a polynomial, it is infinitely differentiable, so it satisfies the conditions of the theorem.  Also, can be written:     and and when , .    Also, consider a plot of the above situation.          and as can be seen that the function is 0 at the 5 points and any function with 5 zeros like this either wiggle a lot like the above function, or is constant.   Mean Value Theorem   Let be a function that is continuous on a closed interval and differentiable on the interval . Then there exists a number such that        Let   Then and evaluated on the endpoints of the interval shows that   Since is continuous on and differentiable of , so is and therefore satisfies Rolle's Theorem. Then there exists a number in the interval such that or so the theorem holds.   The following example shows a nice consequence of the mean value theorem.    Use the Mean Value Theorem to proof that for all .    Let , , then the MVT applied to this situation is since , for , then     "
},
{
  "id": "sect-calc-theorems-2",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Understand basic theorems of functions, like the Intermediate Value Theorem , Rolle's Theorem and the Mean Value Theorem .    Use these theorems to demonstrate properties of functions.    "
},
{
  "id": "thm-ivt",
  "level": "2",
  "url": "sect-calc-theorems.html#thm-ivt",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "Intermediate Value Theorem.",
  "body": " Intermediate Value Theorem   Let be a continuous function on . Let and . The function takes on all values between and . That is, for any value , such that , then there exists at least one value such that .   "
},
{
  "id": "thm-rolles",
  "level": "2",
  "url": "sect-calc-theorems.html#thm-rolles",
  "type": "Theorem",
  "number": "1.2.2",
  "title": "Rolle’s Theorem.",
  "body": " Rolle's Theorem   Let be a function that satisfies:      is continuous on the closed interval ,     is differentiable on the open interval ,     .     Then there is a number in such that .    From the Intermediate Value Theorem, takes on a minimum value, and maximum value, on the interval .   If , then the function is constant and all values of in the interval satisfy .    Otherwise, either the minimum or maximum or both of occurs in . Let be this value. Since the function is differentiable at and is a minimum or a maximum, then .      "
},
{
  "id": "sect-calc-theorems-7",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-7",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": "  Show that on the interval satisfies all the conditions of Rolle's Theorem. Find all of the values of such that .    Since is a quadratic, it is continuous and differentiable everywhere, so the first two conditions are satisfied. Also, and , so the function is equal on the endpoints of the interval and the 3rd condition is satisfied.  To find the values of such that , we solve or .  A graphical view of this is as follows:          and one can see that the function is 0 at both and and that there is a horizontal tangent line at .   "
},
{
  "id": "thm-generalized-rolles",
  "level": "2",
  "url": "sect-calc-theorems.html#thm-generalized-rolles",
  "type": "Theorem",
  "number": "1.2.5",
  "title": "Generalized Rolle’s Theorem.",
  "body": " Generalized Rolle's Theorem   If is continuous on , has continuous derivatives on and is equal to zero at distinct points in then there exists a number with .   "
},
{
  "id": "sect-calc-theorems-10",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-10",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " First, for some notation, assume that is the th zero of for and the are ordered increasingly. Therefore there are subintervals of , denoted such that . Using Rolle's theorem, for each subinterval, there exists a number in such that .  Therefore there are numbers, such that the derivative is 0 or subintervals such that . Using Rolle's theorem again, for each , there exists a number such that .  Repeat this process times and the theorem holds.  "
},
{
  "id": "sect-calc-theorems-12",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-12",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": "  Let . Show that this satisfies Generalized Rolle's theorem on for and find the value of such that .    First, there are zeros of at and since is a polynomial, it is infinitely differentiable, so it satisfies the conditions of the theorem.  Also, can be written:     and and when , .   "
},
{
  "id": "fig-rolles2",
  "level": "2",
  "url": "sect-calc-theorems.html#fig-rolles2",
  "type": "Figure",
  "number": "1.2.7",
  "title": "",
  "body": "       "
},
{
  "id": "thm-mvt",
  "level": "2",
  "url": "sect-calc-theorems.html#thm-mvt",
  "type": "Theorem",
  "number": "1.2.8",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   Let be a function that is continuous on a closed interval and differentiable on the interval . Then there exists a number such that      "
},
{
  "id": "sect-calc-theorems-17",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-17",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " Let   Then and evaluated on the endpoints of the interval shows that   Since is continuous on and differentiable of , so is and therefore satisfies Rolle's Theorem. Then there exists a number in the interval such that or so the theorem holds.  "
},
{
  "id": "sect-calc-theorems-19",
  "level": "2",
  "url": "sect-calc-theorems.html#sect-calc-theorems-19",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  Use the Mean Value Theorem to proof that for all .    Let , , then the MVT applied to this situation is since , for , then    "
},
{
  "id": "sect-sequences",
  "level": "1",
  "url": "sect-sequences.html",
  "type": "Section",
  "number": "1.3",
  "title": "Sequences",
  "body": " Sequences     Definition of a sequence .    Definition of the limit of a sequence.    Definition of the Monotonic Sequence Theorem .    Presentation of the Squeeze Theorem .        A sequence or equivalently an infinite sequence is a function from the positive integers, to the reals. The following is a sequence and can more compactly be written .      The following are examples of infinite sequences:                               The definition states that a sequence is a function from the positive integers to the reals, it is often nice to write down the function. It isn't always easy to do. For example, the function of the first three sequences in , are , , . The fourth and fifth ones are not easily written as a function, but instead can be easily written recursively. For example, the fourth sequence is generates what is called the Fibonacci sequence. One may notice the same numbers in the fifth sequence and that can be written:   Despite the fact that we could not write down a formula for the function to generated sequences 4 and 5 in , since a function is a rule, some function actually exists.    Limits of Sequences  As we will see or you probably already know, it is important to know if the sequence approaches a number eventually. This is called the limit of the sequence and    The limit of the infinite sequence is if for every , there exists a number such that for all .      The sequence  converges to a number if or       Monotonic Sequences  One important type of sequence is called a monotonic sequence , which is a sequence that increases or decreases.   Monotonic Sequence   A monotonically increasing sequence is a sequence , such that for all . A monotonically decreasing sequence is a sequence , such that for all . A sequence that is either monotonically increasing or decreasing is called a monotonic sequence .      The following are monotonic sequences:                The first sequence is fairly obviously decreasing. However, the second is a bit less clear. The second is increasing, and can be shown by examining the derivative. If , then and this is positive for all , so the sequence is increasing.    We will see below that monotonic sequences have some helpful properties, including that bounded ones converge.   Monotonic Sequence Theorem   Every bounded, monotonic sequence is convergent.      Find the limits of the sequences in .     Since , this sequence grows without bound so the limit does not exist.    In this case, , which has a limit of 0.    It is fairly clear that this sequence cycles (repeats) the values , so the limit cannot exist.    As seen above, each element of the sequence is the sum of the previous two, so the limit cannot exist.    Note that this sequence can be written For , with . Let's assume that the limit exists, then   Also   Taking the limit of both sides of leads to or   And solving for leads to . If you take a number of terms of the sequence, you'll see that it appears to be converging to this. We'll see in Section ????? why this actually converges.         The Squeeze Theorem  Consider the sequence given by . The first few terms are   This is actually relative difficult to prove that it converges even though it appears that the sequence is approaching 0. However, the squeeze theorem is quite helpful:   Squeeze Theorem   Let be a sequence that satisfies for all , where then     In more informal terms, if the sequence is always between two sequences and for all , and the limit is the same for both and , then the limit of is the same.   "
},
{
  "id": "sect-sequences-2",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "   Definition of a sequence .    Definition of the limit of a sequence.    Definition of the Monotonic Sequence Theorem .    Presentation of the Squeeze Theorem .    "
},
{
  "id": "def-sequence",
  "level": "2",
  "url": "sect-sequences.html#def-sequence",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  A sequence or equivalently an infinite sequence is a function from the positive integers, to the reals. The following is a sequence and can more compactly be written .   "
},
{
  "id": "ex-sequence",
  "level": "2",
  "url": "sect-sequences.html#ex-sequence",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": "  The following are examples of infinite sequences:                              "
},
{
  "id": "sect-sequences-4-3",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-4-3",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "  The limit of the infinite sequence is if for every , there exists a number such that for all .   "
},
{
  "id": "sect-sequences-4-4",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-4-4",
  "type": "Definition",
  "number": "1.3.4",
  "title": "",
  "body": "  The sequence  converges to a number if or    "
},
{
  "id": "sect-sequences-5-3",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-5-3",
  "type": "Definition",
  "number": "1.3.5",
  "title": "Monotonic Sequence.",
  "body": " Monotonic Sequence   A monotonically increasing sequence is a sequence , such that for all . A monotonically decreasing sequence is a sequence , such that for all . A sequence that is either monotonically increasing or decreasing is called a monotonic sequence .   "
},
{
  "id": "sect-sequences-5-4",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-5-4",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": "  The following are monotonic sequences:                The first sequence is fairly obviously decreasing. However, the second is a bit less clear. The second is increasing, and can be shown by examining the derivative. If , then and this is positive for all , so the sequence is increasing.   "
},
{
  "id": "thm-monotonic-seq",
  "level": "2",
  "url": "sect-sequences.html#thm-monotonic-seq",
  "type": "Theorem",
  "number": "1.3.7",
  "title": "Monotonic Sequence Theorem.",
  "body": " Monotonic Sequence Theorem   Every bounded, monotonic sequence is convergent.   "
},
{
  "id": "sect-sequences-5-7",
  "level": "2",
  "url": "sect-sequences.html#sect-sequences-5-7",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Find the limits of the sequences in .     Since , this sequence grows without bound so the limit does not exist.    In this case, , which has a limit of 0.    It is fairly clear that this sequence cycles (repeats) the values , so the limit cannot exist.    As seen above, each element of the sequence is the sum of the previous two, so the limit cannot exist.    Note that this sequence can be written For , with . Let's assume that the limit exists, then   Also   Taking the limit of both sides of leads to or   And solving for leads to . If you take a number of terms of the sequence, you'll see that it appears to be converging to this. We'll see in Section ????? why this actually converges.      "
},
{
  "id": "thm-squeeze",
  "level": "2",
  "url": "sect-sequences.html#thm-squeeze",
  "type": "Theorem",
  "number": "1.3.9",
  "title": "Squeeze Theorem.",
  "body": " Squeeze Theorem   Let be a sequence that satisfies for all , where then    "
},
{
  "id": "sect-series",
  "level": "1",
  "url": "sect-series.html",
  "type": "Section",
  "number": "1.4",
  "title": "Infinite Series",
  "body": " Infinite Series     Understand the definition of an infinite series .    Understand the definition of the convergence and divergence of a series.    Understand if a series is geometric and under what conditions it converges or diverges.    Learn how to apply convergence tests to other series.      As we will see below, a power series is a function of , however, recall the definition of the series as well as its convergence.    The sum of the terms of a infinite sequence or is called an infinite series (or just a series ) and is denoted     Why would we want to add up an infinite number of terms? Let’s answer this with the following picture.          If we look at this as area, the total area is the area of the square or 1. If we look at this as a sum of the areas of rectangles, then the area is   And therefore this infinite sum is 1. This is an example of a geometric series which we will generalize below.    Convergence of Series  The example above converged because the infinite sum was a value. We more formally define convergence by looking at a partial sum.    For the series , define the  th partial sum , as   If the sequence is convergent and , then we write and the number is called the sum of the series.  If does not converge, then we say the series diverges .    In summary, to determine if an infinite series converges, then     Find the partial sum of the first terms. Call this .    Determine if the sequence converges. Use the standard limit theorems to find this.       Show that converges and find the sum.  The way that you need to find this is to recall that you can use partial fractions to write: therefore we can write: and note that the partial sums are so the sum is       Geometric Series  Above we saw an example of a geometric series. We now generalize this.    A geometric series is a series in the form: for real numbers and .    One nice aspect of a geometric series is that ratios of consecutive terms are constant. This means that:   Below is an example that uses this fact to determine if a series is a geometric series. However, we have the following theorem to determine the convergence of a geometric series.   Convergence of Geometric Series     Let be a geometric series. If , then the series converges. If , the series diverges.     The partial sums of the geometric series are and the th partial sum is   If we multiply by we get: and subtracting from we get:   Next, we solve for :   Assume that , then taking the limit,   If , then does not exist, so this diverges. Lastly, we look at and . In each case, we return to the series. If , and this diverges. If , then which also diverges, so the theorem holds.     For each of the following, determine if you have a geometric series. If so, find and .                .            In each case above, we try to determine and . x   Note that this fits the form of the geometric series with and . Since , then the series converges to     In this case which is not a constant, so this is not geometric.    In this case the term starts at , however, is still the first term in the series, or 1\/2 and , so this is geometric. However, since , the series does not converge.    This doesn’t appear to be a geometric series. However if we write it as: and note that and since this is constant it is a geometric series with and since this satisfies , the series converges. The first term is and thus the series converges to      This technique works to find the rational number version of any repeated decimal, which can always be written as a geometric series.      Tests for Convergence of Series  The convergence of a series is a very important concept. Without going over all of tests for series, we refer again to APEX Calculus , specifically Chapter 8. We cover a few tests here:    -test for Series   The series converges if and diverges if .     Alternating Series Test   If the alternating series: for satisfies:    for all , and        then the series converges.      Determine if the following series converge?                     In the first case . Thus is positive and decreasing. Also, since   Then the series converges.    In this case . Again, this is a positive series. To show that , it’s easier to show that and . which is negative for all , so it is a decreasing function. Also, so the series converges by the AST.       One of the most robust tests, however, is covered here:   Ratio Test for Absolute Convergence (RATFACE)   For the series, , let      if , then converges absolutely.    if or does not exist, then diverges.    if , the test is inconclusive.        Consider the case when . We will compare the series to a geometric series with . Since converges, then eventually will be less than and let’s say that this occurs at , specifically:   This results in for all an  Recall that we want to show that the series converges absolutely, which means that converges.   and since the second series is geometric with , it converges, therefore, converges and that means that converges. Similar techniques can be used to show the results if .   The next example shows how to apply the Ratio Test.    Use to determine if the following converge or diverge, if the theorem applies.                   "
},
{
  "id": "sect-series-2",
  "level": "2",
  "url": "sect-series.html#sect-series-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "   Understand the definition of an infinite series .    Understand the definition of the convergence and divergence of a series.    Understand if a series is geometric and under what conditions it converges or diverges.    Learn how to apply convergence tests to other series.    "
},
{
  "id": "sect-series-3-2",
  "level": "2",
  "url": "sect-series.html#sect-series-3-2",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  The sum of the terms of a infinite sequence or is called an infinite series (or just a series ) and is denoted    "
},
{
  "id": "fig-geom-series",
  "level": "2",
  "url": "sect-series.html#fig-geom-series",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "       "
},
{
  "id": "def-nth-partial-sum",
  "level": "2",
  "url": "sect-series.html#def-nth-partial-sum",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  For the series , define the  th partial sum , as   If the sequence is convergent and , then we write and the number is called the sum of the series.  If does not converge, then we say the series diverges .   "
},
{
  "id": "ex-series-converges",
  "level": "2",
  "url": "sect-series.html#ex-series-converges",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  Show that converges and find the sum.  The way that you need to find this is to recall that you can use partial fractions to write: therefore we can write: and note that the partial sums are so the sum is    "
},
{
  "id": "sect-series-5-3",
  "level": "2",
  "url": "sect-series.html#sect-series-5-3",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": "  A geometric series is a series in the form: for real numbers and .   "
},
{
  "id": "thm-geometric-series",
  "level": "2",
  "url": "sect-series.html#thm-geometric-series",
  "type": "Theorem",
  "number": "1.4.6",
  "title": "Convergence of Geometric Series.",
  "body": " Convergence of Geometric Series     Let be a geometric series. If , then the series converges. If , the series diverges.   "
},
{
  "id": "sect-series-5-7",
  "level": "2",
  "url": "sect-series.html#sect-series-5-7",
  "type": "Proof",
  "number": "1.4.2.1",
  "title": "",
  "body": " The partial sums of the geometric series are and the th partial sum is   If we multiply by we get: and subtracting from we get:   Next, we solve for :   Assume that , then taking the limit,   If , then does not exist, so this diverges. Lastly, we look at and . In each case, we return to the series. If , and this diverges. If , then which also diverges, so the theorem holds.  "
},
{
  "id": "sect-series-5-8",
  "level": "2",
  "url": "sect-series.html#sect-series-5-8",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  For each of the following, determine if you have a geometric series. If so, find and .                .            In each case above, we try to determine and . x   Note that this fits the form of the geometric series with and . Since , then the series converges to     In this case which is not a constant, so this is not geometric.    In this case the term starts at , however, is still the first term in the series, or 1\/2 and , so this is geometric. However, since , the series does not converge.    This doesn’t appear to be a geometric series. However if we write it as: and note that and since this is constant it is a geometric series with and since this satisfies , the series converges. The first term is and thus the series converges to      This technique works to find the rational number version of any repeated decimal, which can always be written as a geometric series.   "
},
{
  "id": "thm-p-series",
  "level": "2",
  "url": "sect-series.html#thm-p-series",
  "type": "Theorem",
  "number": "1.4.8",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-test for Series.",
  "body": "  -test for Series   The series converges if and diverges if .   "
},
{
  "id": "thm-AST",
  "level": "2",
  "url": "sect-series.html#thm-AST",
  "type": "Theorem",
  "number": "1.4.9",
  "title": "Alternating Series Test.",
  "body": " Alternating Series Test   If the alternating series: for satisfies:    for all , and        then the series converges.   "
},
{
  "id": "sect-series-6-5",
  "level": "2",
  "url": "sect-series.html#sect-series-6-5",
  "type": "Example",
  "number": "1.4.10",
  "title": "",
  "body": "  Determine if the following series converge?                     In the first case . Thus is positive and decreasing. Also, since   Then the series converges.    In this case . Again, this is a positive series. To show that , it’s easier to show that and . which is negative for all , so it is a decreasing function. Also, so the series converges by the AST.      "
},
{
  "id": "thm-ratface",
  "level": "2",
  "url": "sect-series.html#thm-ratface",
  "type": "Theorem",
  "number": "1.4.11",
  "title": "Ratio Test for Absolute Convergence (RATFACE).",
  "body": " Ratio Test for Absolute Convergence (RATFACE)   For the series, , let      if , then converges absolutely.    if or does not exist, then diverges.    if , the test is inconclusive.      "
},
{
  "id": "sect-series-6-8",
  "level": "2",
  "url": "sect-series.html#sect-series-6-8",
  "type": "Proof",
  "number": "1.4.3.1",
  "title": "",
  "body": " Consider the case when . We will compare the series to a geometric series with . Since converges, then eventually will be less than and let’s say that this occurs at , specifically:   This results in for all an  Recall that we want to show that the series converges absolutely, which means that converges.   and since the second series is geometric with , it converges, therefore, converges and that means that converges. Similar techniques can be used to show the results if .  "
},
{
  "id": "sect-series-6-10",
  "level": "2",
  "url": "sect-series.html#sect-series-6-10",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "  Use to determine if the following converge or diverge, if the theorem applies.                 "
},
{
  "id": "sect-power-series",
  "level": "1",
  "url": "sect-power-series.html",
  "type": "Section",
  "number": "1.5",
  "title": "Power Series",
  "body": " Power Series     Learn the definition of a power series .      In this section, we will expand the idea of a series from to that as a function that is written as a series. The simplest one is that of a power series in which each term is a power function.    Power Series    A power series is a series of the form: where is a variable and the 's are constants called coefficients.    A power series is a function of and resembles a polynomial with an infinite number of terms.    The series: is called a power series center at  .      Consider the power series   This is a geometric series with and . The series converges for and diverges for .  From what we know about geometric series, when the series converges, it converges to       Find the center of and all values of for which the series converges.    First, the center is . To find the values of of convergence, we will use RATFACE and and since and does not depend on , this series converges for all .      Find the domain for the power series:     Find the domain is identical to find all values of for which the series converges. Let's use RATFACE again.     And this value is less than 1 (and thus converges) when or and diverges when or and . This test is inconclusive when or at and . We will thus need to test each of those separately.      Plug this value into the series to get and this is an alternating series.We will use the Alternating Series Test ( ) with and this is positive, decreasing and approaches zero, so it converges.      Plug this value into the series to get: which diverges as it is a -series (see Theorem thm:p:test) with . Thus the domain of this function is .         For a given power series there are only three possibilities:   The series converges only when .    The series converges for all .    There is a positive number such that the series converges if and diverges for .       We call the number the radius of convergence and in the 2nd and 3rd cases, the interval of convergence. The center of the interval is always the point and the interval stretches from to .  Note that the theorem says nothing in the 3rd case about the points and . These are the endpoints of the interval, and must be tested for individually.    List the center, the radius of convergence and the interval of convergence of the series: , and        In this case, above, we found that the series converges for and diverges for . Thus the radius of convergence is 1 and the interval of convergence is .   In this case, we found that it converged for all , so the radius of convergence is and the interval of convergence is .   In this case we found that the radius of convergence was and the interval of convergence was .      Representations of Functions as Power Series   Power series are extremely important in many ways.     How do you compute ? That is find .    How do you evaluate integrals that are either extremely difficult to find an antiderivative or one may not exist?    Some differential equations are very difficult to solve. One method to solve them is to use power series.     In short, power series represent functions that we may need to approximate or can't find another representation.  We saw the power series in the previous section. Recall that it is a geometric series that converges when .    Express as a power series using the power series above.    If we replace with in the function and the geometric series, the we get       Create the power series of the function using the power series of . What is its radius of convergence?    If we write it as now replace in the power series for with , to get   The radius of convergence could be found using RATFACE, however, it is easier than that.  Recall that the radius of convergence for is , since this required that . Since we replaced with , then the series converges when so the radius is .      Differentiation and Integration of Power Series    If a power series of the form has a radius of convergence of , then the function defined as is differentiable on the interval and and both have a radius of convergence . Also, the derivative and the integral of is performed term by term.    Note: if has a particular interval of convergence, the interval of convergence for and may change, however only at the endpoints.    Use the power series for to find the power series for .      Note that   And the radius of convergence of this series is .      Use the power series for to find the power series for     Recall that from the last chapter we found that   Now, we'll integrate both sides of this: to determine the value of , we will substitute in : so this leads to the power series for arctangent:       Evaluate the series above at to establish a series representation for .           Use power series to approximate:     If you use a CAS (like Maple) to find the antiderivative of this function, then you get a solution that is a mess. Instead, we'll use the power series of to find the value of the integral to 16 digits.  Since then if we replace with , we get:   Next, if we integrate this:   To find an approximation, we'll use a partial sum instead of the full series. By the Alternating Series Remainder Theorem, the remainder is bounded by the term, that is   If we substitute in values of until this is reached, then we get , so if we find using the series above, then we will successfully find the appropriate approximation.       Show that satisfies the differential equation      so the differential equation is satisfied.      "
},
{
  "id": "sect-power-series-2",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "   Learn the definition of a power series .    "
},
{
  "id": "sect-power-series-4-2",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-2",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  A power series is a series of the form: where is a variable and the 's are constants called coefficients.   "
},
{
  "id": "sect-power-series-4-4",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-4",
  "type": "Definition",
  "number": "1.5.2",
  "title": "",
  "body": "  The series: is called a power series center at  .   "
},
{
  "id": "sect-power-series-4-5",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-5",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": "  Consider the power series   This is a geometric series with and . The series converges for and diverges for .  From what we know about geometric series, when the series converges, it converges to    "
},
{
  "id": "sect-power-series-4-6",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-6",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": "  Find the center of and all values of for which the series converges.    First, the center is . To find the values of of convergence, we will use RATFACE and and since and does not depend on , this series converges for all .   "
},
{
  "id": "sect-power-series-4-7",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-7",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": "  Find the domain for the power series:     Find the domain is identical to find all values of for which the series converges. Let's use RATFACE again.     And this value is less than 1 (and thus converges) when or and diverges when or and . This test is inconclusive when or at and . We will thus need to test each of those separately.      Plug this value into the series to get and this is an alternating series.We will use the Alternating Series Test ( ) with and this is positive, decreasing and approaches zero, so it converges.      Plug this value into the series to get: which diverges as it is a -series (see Theorem thm:p:test) with . Thus the domain of this function is .      "
},
{
  "id": "thm-power-series-convergence",
  "level": "2",
  "url": "sect-power-series.html#thm-power-series-convergence",
  "type": "Theorem",
  "number": "1.5.6",
  "title": "",
  "body": "  For a given power series there are only three possibilities:   The series converges only when .    The series converges for all .    There is a positive number such that the series converges if and diverges for .      "
},
{
  "id": "sect-power-series-4-11",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-4-11",
  "type": "Example",
  "number": "1.5.7",
  "title": "",
  "body": "  List the center, the radius of convergence and the interval of convergence of the series: , and        In this case, above, we found that the series converges for and diverges for . Thus the radius of convergence is 1 and the interval of convergence is .   In this case, we found that it converged for all , so the radius of convergence is and the interval of convergence is .   In this case we found that the radius of convergence was and the interval of convergence was .   "
},
{
  "id": "sect-power-series-5-2-5",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-2-5",
  "type": "Example",
  "number": "1.5.8",
  "title": "",
  "body": "  Express as a power series using the power series above.    If we replace with in the function and the geometric series, the we get    "
},
{
  "id": "sect-power-series-5-2-6",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-2-6",
  "type": "Example",
  "number": "1.5.9",
  "title": "",
  "body": "  Create the power series of the function using the power series of . What is its radius of convergence?    If we write it as now replace in the power series for with , to get   The radius of convergence could be found using RATFACE, however, it is easier than that.  Recall that the radius of convergence for is , since this required that . Since we replaced with , then the series converges when so the radius is .   "
},
{
  "id": "thm-power-series-radius-of-convergence",
  "level": "2",
  "url": "sect-power-series.html#thm-power-series-radius-of-convergence",
  "type": "Theorem",
  "number": "1.5.10",
  "title": "",
  "body": "  If a power series of the form has a radius of convergence of , then the function defined as is differentiable on the interval and and both have a radius of convergence . Also, the derivative and the integral of is performed term by term.   "
},
{
  "id": "sect-power-series-5-3-4",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-3-4",
  "type": "Example",
  "number": "1.5.11",
  "title": "",
  "body": "  Use the power series for to find the power series for .      Note that   And the radius of convergence of this series is .   "
},
{
  "id": "sect-power-series-5-3-5",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-3-5",
  "type": "Example",
  "number": "1.5.12",
  "title": "",
  "body": "  Use the power series for to find the power series for     Recall that from the last chapter we found that   Now, we'll integrate both sides of this: to determine the value of , we will substitute in : so this leads to the power series for arctangent:    "
},
{
  "id": "sect-power-series-5-3-6",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-3-6",
  "type": "Example",
  "number": "1.5.13",
  "title": "",
  "body": "  Evaluate the series above at to establish a series representation for .        "
},
{
  "id": "sect-power-series-5-3-7",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-3-7",
  "type": "Example",
  "number": "1.5.14",
  "title": "",
  "body": "  Use power series to approximate:     If you use a CAS (like Maple) to find the antiderivative of this function, then you get a solution that is a mess. Instead, we'll use the power series of to find the value of the integral to 16 digits.  Since then if we replace with , we get:   Next, if we integrate this:   To find an approximation, we'll use a partial sum instead of the full series. By the Alternating Series Remainder Theorem, the remainder is bounded by the term, that is   If we substitute in values of until this is reached, then we get , so if we find using the series above, then we will successfully find the appropriate approximation.    "
},
{
  "id": "sect-power-series-5-3-8",
  "level": "2",
  "url": "sect-power-series.html#sect-power-series-5-3-8",
  "type": "Example",
  "number": "1.5.15",
  "title": "",
  "body": "  Show that satisfies the differential equation      so the differential equation is satisfied.   "
},
{
  "id": "sect-taylor-series",
  "level": "1",
  "url": "sect-taylor-series.html",
  "type": "Section",
  "number": "1.6",
  "title": "Taylor Series",
  "body": " Taylor Series   Taylor and Maclaurin Series   We saw in the previous section that we could write power series for functions like and related functions like and and others. How about other functions like or or ? More generally, if I have a function that can be written as the power series centered at , that is how do you find the coefficients ?  Answer, follow these steps. Substitute into the function above: and the only term of the power series that is not zero is , so   Now take the derivative of , and substitute : and the only non-zero term of the power series is when ,   Now take the second derivative of , and substitute : the only non-zero term of the power series is when : so   Continue one more time. Thrice differentiate , plug in and the only non-zero term in the power series is so   In a similar manner, it can be shown that     Taylor Series  The Taylor Series of a function centered at is The Maclaurin Series of a function is the Taylor Series centered at or     Find the Maclaurin Series of .    Since and and , then the Maclaurin Series is       The th degree Taylor Polynomial  Let be the th partial sum. This is called the th degree Taylor Polynomial.    Find and plot and of the Maclaurin Series for .    The partial sums are just the first terms of the full series in Example ex:maclaurin:series:ex.      (for accessibility)         Taylor's Theorem  Nearly all of the theorems in this course will depend on the basic theorems seen in Calculus. Probably the most important theorem from that class is Taylor's theorem, which says that given a function there is a polynomial of a desired degree that is “close” to the function .  This is very important because most of numerical analysis consists of using approximations. If the approximation that we use is a polynomial (and often it is), then Taylor's theorem often helps us with knowing the error in our approximation.   Taylor's Theorem   Suppose is continuous on and that is continuous on for . (The set of functions with this property is called .) Let . For every there exists a number between and such that where     The function is called the Taylor Polynomial of degree and is called the remainder term. The Taylor Polynomial approximates the function on the interval and the remainder term is often used to determine the error bound. Often the form used is:          Earlier, we showed that converges for every real number . By the convergence theorem, the statement above is true.      Prove that converges to its Maclaurin Series.    Since , recall that for all . Let be any positive number and for , , so . Using Taylor's Inequality,   Taking the limit as  by the theorem above, so since for all , this proves that the Maclaurin series converges to for all . Since this is true for any number , then this is true for any number .       Taylor Series of and     Find the Maclaurin Series for .     So the coefficients are .       Find the Maclaurin series for .    Since , if we differentiate the above series:       The Binomial Series  The binomial series is simply the Maclaurin Series for the function . It is extremely useful in that many functions can be written in this form or adapted from this function as we will see.   so substituting this into the formula for Taylor Series, we get: so   Convergence of the Binomial Series. If we apply RATFACE so this converges when so the radius of convergence is .  There are a number of cases for the binomial series.      In this case Recall that $\\mathbb{Z}^{+}$ is a notation that means the positive integers. Also $\\mathbb{Z}^{-}$ is the set of all negative integers.  for and the power series reduces to where      In this case all of the coefficients are integers however it is an infinite series.          We show example of the binomial theorem for different values of .    Use the binomial theorem to find an expansion for about .     which is identical to expansion of the term using techniques learned before.      Use the binomial theorem to find the expansion of about .    In this case , and we directly use (eq:binom:coeffs), so now we can write the power series as which we also saw using the geometric series.      Use the binomial theorem to find the power series expansion of .    In this case : where .  The power series representation of is       Summary of Important Maclaurin Series  Using the formula for Taylor's Series similar to examples shown above, the following series are found.   Important Maclaurin Series The following are Maclaurin series for the given function as well as , the radius of convergence:   We can also find more complicated series based on previous series. Common function include composite functions as well as the sum, difference product and quotient of known series with powers of as well as the integration or differentiation. The next two examples show how to do this.    Find the Maclaurin series of     In this case, we will replace the in the Maclaurin series of with .         Use a given series, differentiation and\/or integration to find the Maclaurin series of .    Recall that and so the Maclaurin Series of   Next, we find the Maclaurin Series for by replacing above with .     Lastly, we integrate this to get the Maclaurin series for :   And find by plugging in . Since , then and thus   An alternative to doing this is to use Taylor's Formula, however, if we start differentiating:     and the derivatives get harder each derivative, so the other is easier to do.     "
},
{
  "id": "sect-taylor-series-2-3-2",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-2-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor Series "
},
{
  "id": "ex-maclaurin-exp",
  "level": "2",
  "url": "sect-taylor-series.html#ex-maclaurin-exp",
  "type": "Example",
  "number": "1.6.1",
  "title": "",
  "body": "  Find the Maclaurin Series of .    Since and and , then the Maclaurin Series is    "
},
{
  "id": "sect-taylor-series-2-4-3",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-2-4-3",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": "  Find and plot and of the Maclaurin Series for .    The partial sums are just the first terms of the full series in Example ex:maclaurin:series:ex.      (for accessibility)     "
},
{
  "id": "thm-taylors",
  "level": "2",
  "url": "sect-taylor-series.html#thm-taylors",
  "type": "Theorem",
  "number": "1.6.4",
  "title": "Taylor’s Theorem.",
  "body": " Taylor's Theorem   Suppose is continuous on and that is continuous on for . (The set of functions with this property is called .) Let . For every there exists a number between and such that where    "
},
{
  "id": "thm-power-series-terms",
  "level": "2",
  "url": "sect-taylor-series.html#thm-power-series-terms",
  "type": "Theorem",
  "number": "1.6.5",
  "title": "",
  "body": "       Earlier, we showed that converges for every real number . By the convergence theorem, the statement above is true.   "
},
{
  "id": "sect-taylor-series-3-7",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-3-7",
  "type": "Example",
  "number": "1.6.6",
  "title": "",
  "body": "  Prove that converges to its Maclaurin Series.    Since , recall that for all . Let be any positive number and for , , so . Using Taylor's Inequality,   Taking the limit as  by the theorem above, so since for all , this proves that the Maclaurin series converges to for all . Since this is true for any number , then this is true for any number .    "
},
{
  "id": "sect-taylor-series-4-2",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-4-2",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": "  Find the Maclaurin Series for .     So the coefficients are .    "
},
{
  "id": "sect-taylor-series-4-3",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-4-3",
  "type": "Example",
  "number": "1.6.8",
  "title": "",
  "body": "  Find the Maclaurin series for .    Since , if we differentiate the above series:    "
},
{
  "id": "sect-taylor-series-5-8",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-5-8",
  "type": "Example",
  "number": "1.6.9",
  "title": "",
  "body": "  Use the binomial theorem to find an expansion for about .     which is identical to expansion of the term using techniques learned before.   "
},
{
  "id": "sect-taylor-series-5-9",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-5-9",
  "type": "Example",
  "number": "1.6.10",
  "title": "",
  "body": "  Use the binomial theorem to find the expansion of about .    In this case , and we directly use (eq:binom:coeffs), so now we can write the power series as which we also saw using the geometric series.   "
},
{
  "id": "ex-sqrt-taylor-series",
  "level": "2",
  "url": "sect-taylor-series.html#ex-sqrt-taylor-series",
  "type": "Example",
  "number": "1.6.11",
  "title": "",
  "body": "  Use the binomial theorem to find the power series expansion of .    In this case : where .  The power series representation of is    "
},
{
  "id": "sect-taylor-series-6-5",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-6-5",
  "type": "Example",
  "number": "1.6.12",
  "title": "",
  "body": "  Find the Maclaurin series of     In this case, we will replace the in the Maclaurin series of with .      "
},
{
  "id": "sect-taylor-series-6-6",
  "level": "2",
  "url": "sect-taylor-series.html#sect-taylor-series-6-6",
  "type": "Example",
  "number": "1.6.13",
  "title": "",
  "body": "  Use a given series, differentiation and\/or integration to find the Maclaurin series of .    Recall that and so the Maclaurin Series of   Next, we find the Maclaurin Series for by replacing above with .     Lastly, we integrate this to get the Maclaurin series for :   And find by plugging in . Since , then and thus   An alternative to doing this is to use Taylor's Formula, however, if we start differentiating:     and the derivatives get harder each derivative, so the other is easier to do.   "
},
{
  "id": "sect-practical-examples",
  "level": "1",
  "url": "sect-practical-examples.html",
  "type": "Section",
  "number": "2.1",
  "title": "Practical Mathematical Examples",
  "body": " Practical Mathematical Examples   We start out with a few problems as examples that arise in mathematics where numerical analysis plays an important role.     Using only the four basic operations on a calculator, find to within 0.001.   Also, answer the following questions:   Write down the steps (the algorithm) that you used.    How do you know your answer is correct to 3 decimal places?    Can you use this technique to find to decimal places for any positive number and positive integer ? Explain.       The following is a classic example of an example where numerical analysis helps another mathematical field, specifically Statistics. Typically users in an introductory class are given tables of distributions or use software to calculate probabilities. Where do those tables come from? How does the software perform the calculations? The following specifically asks some questions related to the normal distribution.    If a random variable, is normally distributed with mean and standard deviation , the probability density function can be written as   The probability that is less than is given by   Here's a few standard questions:   If we are given , and , how do we calculate ?    For a given and and for , how do we solve ?       The following shows another common example in which data is given and information needs to be extracted from it.    The following table lists the price of hard drive space from 1980 to 2015. This was originally found at http:\/\/www.jcmit.com\/diskprice.htm , however, it is no longer available there. The price is given in USD per GB.   Historical Price Data    Year  Price  Year  Price  Year  Price  Year  Price    '80  6,328,125  '89  124,877  '98  1,129  '07  45.29    '81  4,374,218  '90  95,947  '99  847.93  '08  21.45    '82  1,933,593  '91  43,457  '00  823.82  '09  11.20    '83  1,933,593  '92  31,738  '01  297.54  '10  19.07    '84  1,299,479  '93  29,296  '02  202.52  '11  8.34    '85  703,125  '94  33,203  '03  112.53  '12  4.76    '86  292,480  '95  30,151  '04  171.66  '13  7.15    '87  172,037  '96  10,986  '05  113.48  '14  8.34    '88  178,001  '97  4,028  '06  80.09  '15  4.17     Find a function that gives a prediction of the price per GB for any year after 1980.      What is Numerical Analysis?  In general, this course and this subject in many ways is about solving problems. Often in math classes, only reasonable problems are given in classes as examples, homework and exam problems and by reasonable, one means a problem that can be solved in a few minutes to maybe an hour using relatively standard techniques. In the real world, however, the problems aren't always so nice, and in short this course will teach you how to attack these harder problems.  The problems in and either arise on occasion or were difficult problems to solve historically. In more detail:     As in , finding the square root of any number seems trivial today with calculators and computers, but before 1950 it was difficult. In general this falls into rootfinding which is the subject of . Extensions of rootfinding can be found in optimization problems which are sometimes full courses in and of themselves.     falls into two different categories: probability and statistics as well as numerical integration. This problem uses the definite integral of a function that doesn't have an antiderivative (as a elementary function). We will examine this in .     falls into the realm of either regression or interpolation. Often a set of data is given and you want to find a function that either passes through all of the data (interpolation) or is closest to some known function (regression). Interpolation will be presented in and approximation theory like regression will be studied in .      "
},
{
  "id": "ex-sqrt-65",
  "level": "2",
  "url": "sect-practical-examples.html#ex-sqrt-65",
  "type": "Example",
  "number": "2.1.1",
  "title": "",
  "body": "   Using only the four basic operations on a calculator, find to within 0.001.   Also, answer the following questions:   Write down the steps (the algorithm) that you used.    How do you know your answer is correct to 3 decimal places?    Can you use this technique to find to decimal places for any positive number and positive integer ? Explain.      "
},
{
  "id": "ex-norm-distribution",
  "level": "2",
  "url": "sect-practical-examples.html#ex-norm-distribution",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  If a random variable, is normally distributed with mean and standard deviation , the probability density function can be written as   The probability that is less than is given by   Here's a few standard questions:   If we are given , and , how do we calculate ?    For a given and and for , how do we solve ?      "
},
{
  "id": "ex-hard-disk-prices",
  "level": "2",
  "url": "sect-practical-examples.html#ex-hard-disk-prices",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  The following table lists the price of hard drive space from 1980 to 2015. This was originally found at http:\/\/www.jcmit.com\/diskprice.htm , however, it is no longer available there. The price is given in USD per GB.   Historical Price Data    Year  Price  Year  Price  Year  Price  Year  Price    '80  6,328,125  '89  124,877  '98  1,129  '07  45.29    '81  4,374,218  '90  95,947  '99  847.93  '08  21.45    '82  1,933,593  '91  43,457  '00  823.82  '09  11.20    '83  1,933,593  '92  31,738  '01  297.54  '10  19.07    '84  1,299,479  '93  29,296  '02  202.52  '11  8.34    '85  703,125  '94  33,203  '03  112.53  '12  4.76    '86  292,480  '95  30,151  '04  171.66  '13  7.15    '87  172,037  '96  10,986  '05  113.48  '14  8.34    '88  178,001  '97  4,028  '06  80.09  '15  4.17     Find a function that gives a prediction of the price per GB for any year after 1980.   "
},
{
  "id": "sect-algorithms",
  "level": "1",
  "url": "sect-algorithms.html",
  "type": "Section",
  "number": "2.2",
  "title": "Algorithms",
  "body": " Algorithms   One of the questions in Example ex:sqrt:65 asked to write down the steps to find the square root. Throughout this book and in many related fields, like computer science, reproducing results in a specific ways is immensely important. We call this an algorithm.    An algorithm is a precise sequence of steps to accomplish a task.    The next example shows that we actually use algorithm in our daily lives. This is a short cooking example, but finding directions or navigating webpages are other good examples of using algorithms.    Write down an algorithm to make a peanut butter and jelly sandwich.       Gather all ingredients (peanut butter, jelly and two slices of bread) and a knife.    Place the bread on a plate. Spread peanut butter on one side of one slice, spread jelly on one side of the other slice of bread.    Place the peanut butter coated bread on top of the jelly side of the other slice. Make sure the peanut butter side sticks to the jelly side.    Serve and enjoy.       The next example is a relatively straightforward mathematical problem.    Find an algorithm to determine the mean, of real numbers.    Input      Let     Let for .   return .    The next example shows the algorithm that can be used to find as in . This is called the bisection method and we will see the details of the algorithm in in short it starts with an interval that always contains the answer and through a procedure, finds subintervals that still contains the answer and the length of the subinterval shrinks.    Write down an algorithm to find the square root of to decimal places.    In this case, we will produce a sequence of numbers that are always below  and that are always above  . The algorithm is listed below and sentences in italics are simply comments.  Let the inputs be , a real number greater than 0 and be an integer greater than 1.   Let . This number is the precision which we intend to reach.     If , then and . If then and . This ensures that .     Let     Let . Take the midpoint of the interval as a new guess for the .     If then and , otherwise let and .    If then stop, return otherwise, increment by 1.    Return to step 4.       The next example shows how to employ a spreadsheet to run through the algorithm in . Computers are a great tool to automate algorithms and spreadsheets as well as other tools such as Maple, Mathematics, Matlab or programs written in other languages are how a lot of mathematics are done.    Use a computer program (Maple or a spreadsheet) to find to 3 decimal places using the algorithm in .    In this case, we will use a spreadsheet to accomplish this. We will make three columns (A, B, C) for the three sequences and .     Since , we will put a 1 in the first row of column A and a 65 in the first row of column B. For column C, enter =0.5*(a1+b1) and you should get 33. Also, create a column (in D) that will be the error. Enter in cell D1, =b1-a1 .    For the next row, we enter step 4 from Example ex:sqrt in the spreadsheet. For cell A2, enter =IF(C12 > 65,A1,C1) . This will fill in either the mean (in column C) or the value above it. For cell B2, enter =IF(C12>65,C1,B1) .    For cell C2, enter =0.5*(a2+b2) and for the error in D2, enter =c2-a2 .    To continue this, you can select the four columns in the second row, click on the lower right corner and drag down an number a places. The spreadsheet will fill in the values in a recursive manner.     You should see the following:   Spreadsheet for finding a square root                                                                                                                                                                                                                                                                                                               In the 17th row, you will see that the error (in the last row) is now smaller than 0.001, so you should stop. The approximation to the is 3.06201, which is correct to 3 digits.  This method is called the bisection method and we will see it in detail in the next chapter.      Newtons' Method: A Better Square Root Algorithm  We will use Newton's Method, that will be presented in to write down an alternative square root algorithm.  To find to decimal points,     Let     Let     Repeat step 2 until .    Return .       Use Newton's Method to find to 3 digits.    In this case, we will use a spreadsheet again. The first column will be and the 2nd column will be . In the first row, enter and . In the second row enter =a1+1 and =b1\/2+65\/(2*b1) . Select these two cells and in the bottom left corner, drag down a number of rows. You should see:   Newton's Method to Find                                                                                                       and since , we can stop. To 3 digits, is 8.062.      YASRA: Yet Another Square Root Algorithm  We will use Taylor's series (see ) for to find another algorithm for the square of . Let be the center of the Taylor's Series of a function . Then the function can be written where and this is similar to , but in that example, the center was and for this the center of the series is .  From this we develop another square root algorithm to find .    The following will find to within .     Let be the perfect square less than .    Let     Let until .    Repeat step 3 until        Note: only are used since is a perfect square.    Use YASRA to find to with 0.0001.       The first perfect square less than 65 is 64.                       and since the difference between and is less than , we stop.      Analyzing Algorithms  In this section, we have seen three different ways to compute a square root. Each produces a sequence of points. Here are some of the questions we should ask:     Does the algorithm do what is intended? That is, can we prove that each algorithm generates the square root? (Does it converge to the correct answer?)    How fast does the sequence converge?     These are two important questions that we will examine as we analyze algorithms throughout this book.   "
},
{
  "id": "sect-algorithms-2-2",
  "level": "2",
  "url": "sect-algorithms.html#sect-algorithms-2-2",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  An algorithm is a precise sequence of steps to accomplish a task.   "
},
{
  "id": "sect-algorithms-2-4",
  "level": "2",
  "url": "sect-algorithms.html#sect-algorithms-2-4",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  Write down an algorithm to make a peanut butter and jelly sandwich.       Gather all ingredients (peanut butter, jelly and two slices of bread) and a knife.    Place the bread on a plate. Spread peanut butter on one side of one slice, spread jelly on one side of the other slice of bread.    Place the peanut butter coated bread on top of the jelly side of the other slice. Make sure the peanut butter side sticks to the jelly side.    Serve and enjoy.      "
},
{
  "id": "sect-algorithms-2-6",
  "level": "2",
  "url": "sect-algorithms.html#sect-algorithms-2-6",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  Find an algorithm to determine the mean, of real numbers.    Input      Let     Let for .   return .   "
},
{
  "id": "ex-sqrt",
  "level": "2",
  "url": "sect-algorithms.html#ex-sqrt",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  Write down an algorithm to find the square root of to decimal places.    In this case, we will produce a sequence of numbers that are always below  and that are always above  . The algorithm is listed below and sentences in italics are simply comments.  Let the inputs be , a real number greater than 0 and be an integer greater than 1.   Let . This number is the precision which we intend to reach.     If , then and . If then and . This ensures that .     Let     Let . Take the midpoint of the interval as a new guess for the .     If then and , otherwise let and .    If then stop, return otherwise, increment by 1.    Return to step 4.      "
},
{
  "id": "sect-algorithms-2-10",
  "level": "2",
  "url": "sect-algorithms.html#sect-algorithms-2-10",
  "type": "Example",
  "number": "2.2.5",
  "title": "",
  "body": "  Use a computer program (Maple or a spreadsheet) to find to 3 decimal places using the algorithm in .    In this case, we will use a spreadsheet to accomplish this. We will make three columns (A, B, C) for the three sequences and .     Since , we will put a 1 in the first row of column A and a 65 in the first row of column B. For column C, enter =0.5*(a1+b1) and you should get 33. Also, create a column (in D) that will be the error. Enter in cell D1, =b1-a1 .    For the next row, we enter step 4 from Example ex:sqrt in the spreadsheet. For cell A2, enter =IF(C12 > 65,A1,C1) . This will fill in either the mean (in column C) or the value above it. For cell B2, enter =IF(C12>65,C1,B1) .    For cell C2, enter =0.5*(a2+b2) and for the error in D2, enter =c2-a2 .    To continue this, you can select the four columns in the second row, click on the lower right corner and drag down an number a places. The spreadsheet will fill in the values in a recursive manner.     You should see the following:   Spreadsheet for finding a square root                                                                                                                                                                                                                                                                                                               In the 17th row, you will see that the error (in the last row) is now smaller than 0.001, so you should stop. The approximation to the is 3.06201, which is correct to 3 digits.  This method is called the bisection method and we will see it in detail in the next chapter.   "
},
{
  "id": "ex-newton-method-sqrt-65",
  "level": "2",
  "url": "sect-algorithms.html#ex-newton-method-sqrt-65",
  "type": "Example",
  "number": "2.2.7",
  "title": "",
  "body": "  Use Newton's Method to find to 3 digits.    In this case, we will use a spreadsheet again. The first column will be and the 2nd column will be . In the first row, enter and . In the second row enter =a1+1 and =b1\/2+65\/(2*b1) . Select these two cells and in the bottom left corner, drag down a number of rows. You should see:   Newton's Method to Find                                                                                                       and since , we can stop. To 3 digits, is 8.062.   "
},
{
  "id": "alg-YASRA",
  "level": "2",
  "url": "sect-algorithms.html#alg-YASRA",
  "type": "Algorithm",
  "number": "2.2.9",
  "title": "",
  "body": "  The following will find to within .     Let be the perfect square less than .    Let     Let until .    Repeat step 3 until       "
},
{
  "id": "ex-YASRA",
  "level": "2",
  "url": "sect-algorithms.html#ex-YASRA",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": "  Use YASRA to find to with 0.0001.       The first perfect square less than 65 is 64.                       and since the difference between and is less than , we stop.   "
},
{
  "id": "sect-convergence-sequence",
  "level": "1",
  "url": "sect-convergence-sequence.html",
  "type": "Section",
  "number": "2.3",
  "title": "Convergence of Sequences",
  "body": " Convergence of Sequences     Understand the definition of a sequence and if it converges.    For a convergent sequence, show that it has a particular rate of convergence .      Recall that we defined and showed many examples of sequences in . The material there reviewed much of the main theorems from Calculus used to prove the convergence of sequences. In addition to that in this section we will cover the rates of convergence of sequences.  As we have seen so far, sequences and converges of sequences are very important in Numerical Analysis. We now spend a bit of time reviewing some of this material:    A sequence is function from the positive (or nonnegative) integers into the real numbers.    Typically a sequence is written as or where is the th term of the sequence . The most important aspect of a sequence is whether or not it converges, and if it converges, what is the value it converges to. Recall that the convergence of a sequence or its limit was explained in .    Big “O” Notation  Typically for any algorithm, we want to know how fast it performs. The speed of it is often proportional to the number of operations as well as the size of the problem. Generally, this proportionality is what we are looking for.    Let be a sequence that converges to and there exists another sequence that converges to 0, and , independent of such that for all , sufficiently large, then is said converge to with rate of convergence  .      Let   Both sequences converge to , however which one converges faster? We will write and , where and are the amounts each term differs from 2.   Since both and fit the form in , converges to 2 with rate and constant , whereas converges to 2 with rate and constant .  Since approaches 0 faster than , we generally say that the algorithm would be faster. However, the constant, is often is important in practical terms.    Recall that earlier we asked the question about how fast an algorithm converges. Often we will be interested only in the order of the convergence. That is, if a known algorithm converges with rate can we find an algorithm that converges faster, perhaps with rate or ?  The reason we generally are only concerned with the order of convergence is that as get larges (that means the problem is hard to solve), we would like to find an algorithm that find the answer quickly. This is an easy way to compare algorithms.    Let be a sequence that converges to and be a sequence that converges to 0. If for , then converges with .      Show using the theorem above that the sequence given by converges to zero with rate .     And this means that . By , the rate of convergence is .      Comparing Order of Operations  We will see that common order of operations are and other powers, but often and others in the form . As we have already alluded to that we desire faster algorithms which correspond to lower order.  It's probably clear that is lower than or in general is lower than when . However, where does fit?  If we look at some numerical data for these, we can make a table   Comparative Growth of Functions            1  0  0  0  1  0    10  1  10  10  100  100    100  2  200  400  10,000  20,000    1,000  3  3,000  9,000  1,000,000  3,000,000    100,000  5  500,000  2,500,000       This should give a sense of how fast these functions grow. Note that the order of the columns are from slowest to fastest. Throughout this course, there will be discussisons of the order of operation of a given algorithm and you may need to refer back to this table to get a sense of the speed of an algorithm.    Order of operations and evaluating polynomials  Let's look at how many operations it takes to evaluate a polynomial. In general, let's look at the polynomial in general form:   If we evaluate the polynomial above, then if is the order of the polynomial, then the number of function evaluations is: where in each set of parentheses the 1 is for the multiplication of the coefficient with the power of and the other is for the power of although than can be done more efficiently. Adding these up results in   Thus the rate of evaluating a polynomial in this manner is . An alternative to this way is to write the polynomial above using Horner's form (see ): by factoring in an appropriate way. This evaluation of the polynomial can occur much more rapidly. That is: and thus this is an method. If one is careful the way that algorithms are executed, efficiencies can often be made.    Order of Convergence  Here's a big picture question. Given some problem that we want to solve, we want to find the answer to a very accurate level and we want to solve it in as few number of steps as possible.  In the next definition, we determine for a sequence how quickly we reach the answer. Let be the error (distance from actual answer) at step .    Let be a sequence that converges to a number . Let for . If there exist positive constants and such that   Then is said to converge to of order with asymptotic error constant  .    If , we say that the sequence converges linearly . If , we say that the sequence converges quadratically , and if , we say that the sequence converges cubically . Note that does not need to be an integer.  Generally the larger the value of , the faster a sequence converges. The following shows if we start with the same error to begin with, the differences in the order.    Consider a case where and . Evaluate for or .     Table of errors for linear, quadratic and cubic convergence      linear  quadratic  cubic                                                                                                               It appears from the above example, that the error shrinks fastest for cubic converging methods, and slowest for linear converging methods. The next example shows that this is essentially correct, but it is necessary to be careful.    Evaluate the linear converging sequence where and the quadratically converging sequence where . for Let and .     Comparison of linear and quadratic convergence for difference coefficients      linear  quadratic    n                                                                                                                  As you can see from the table, it appears that in this case, the linear sequence is converging faster, however eventually the quadratically convergent one will surpass the linear one. In general if one has two methods: a linear and a quadratically convergent one, it is desirable to use the quadratically convergent one.      Numerically Determining the order of convergence  From the above examples, we can see that it is important to determine the order of convergence and also find the asymptotic error constant, or in the formula above.  We simply use the definition to determine the order:   We'll take a sufficiently large value of , but practically, this could be less than 10. When the limit is nearly converged, then   Taking the equation (we'll assume it's equal) on the right, then     Find the order of convergence of the YASRA in .    First, build the following table of errors.   Table of errors for YASRA                                                                                                 Looking at the errors, they appear to be dropping in a linear way (each is about 1\/100 of the previous one), but let's use the formula above:   Using a table to estimate the convergence rate of YASRA            0  0.8747372133045498    1  0.9538685373847787    2  0.975439938281658    3  0.9846245750612836    4  0.9936913420698572     From this analysis, it appears that in fact, this method converges linearly. The asymptote error constant is:     Next, we compare the rate of convergence of Newton's method from .    Determine the order of convergence of , which uses Newton's method to find .    First, calculate the error, of each step.   Table of Errors for Newton's Method                                                                                                                  This case is faster than linear. Each step seems to double the number of digits of accuracy you get. This is a sign of quadratic convergence. And in this table, we will show that it appears to be so.   Table that show Newton's method is quadratic convergence            0  1.178900923244053    1  1.3473842470980333    2  1.6184379407788283    3  1.8884480463362425    4  1.990935253721586    5  1.9997878352631038     From this analysis, it appears that in fact, this method converges linearly. The asymptote error constant is:       Determining Convergence Rates Theoretically  We saw in that Newton's method for the square root appears to converge quadratically. In this section we will show that is true.    Show that the fixed point iteration converges quadratically. Recall that this method was presented earlier for finding :    The errors and are given by:   And if we find the ratio , we arrive at: rearranging and simplifying,   Taking the limit which is approximately when . This shows that the numerical method of finding rates and asymptotic error constants in is indeed correct.      Show that the YASRA analyzed in and is linearly convergent and find .    Since we used Taylor's Series to find this algorithm, we will use the Taylor Remainder Theorem ( ) to find an error bound. Let and , then be the error of the approximation.   The function is decreasing, so the maximum occurs at the left endpoint, that is when . For convenience we will call this . and now taking the limit,   So this gives and when we took , this gives , close to the value found in .     "
},
{
  "id": "sect-convergence-sequence-2",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   Understand the definition of a sequence and if it converges.    For a convergent sequence, show that it has a particular rate of convergence .    "
},
{
  "id": "sect-convergence-sequence-3-3",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-3-3",
  "type": "Definition",
  "number": "2.3.1",
  "title": "",
  "body": "  A sequence is function from the positive (or nonnegative) integers into the real numbers.   "
},
{
  "id": "sect-convergence-sequence-4-3",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-4-3",
  "type": "Definition",
  "number": "2.3.2",
  "title": "",
  "body": "  Let be a sequence that converges to and there exists another sequence that converges to 0, and , independent of such that for all , sufficiently large, then is said converge to with rate of convergence  .   "
},
{
  "id": "sect-convergence-sequence-4-4",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-4-4",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  Let   Both sequences converge to , however which one converges faster? We will write and , where and are the amounts each term differs from 2.   Since both and fit the form in , converges to 2 with rate and constant , whereas converges to 2 with rate and constant .  Since approaches 0 faster than , we generally say that the algorithm would be faster. However, the constant, is often is important in practical terms.   "
},
{
  "id": "thm-rate-convergence",
  "level": "2",
  "url": "sect-convergence-sequence.html#thm-rate-convergence",
  "type": "Theorem",
  "number": "2.3.4",
  "title": "",
  "body": "  Let be a sequence that converges to and be a sequence that converges to 0. If for , then converges with .   "
},
{
  "id": "sect-convergence-sequence-4-8",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-4-8",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Show using the theorem above that the sequence given by converges to zero with rate .     And this means that . By , the rate of convergence is .   "
},
{
  "id": "sect-convergence-sequence-5-5",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-5-5",
  "type": "Table",
  "number": "2.3.6",
  "title": "Comparative Growth of Functions",
  "body": " Comparative Growth of Functions            1  0  0  0  1  0    10  1  10  10  100  100    100  2  200  400  10,000  20,000    1,000  3  3,000  9,000  1,000,000  3,000,000    100,000  5  500,000  2,500,000      "
},
{
  "id": "sect-convergence-sequence-7-4",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-7-4",
  "type": "Definition",
  "number": "2.3.7",
  "title": "",
  "body": "  Let be a sequence that converges to a number . Let for . If there exist positive constants and such that   Then is said to converge to of order with asymptotic error constant  .   "
},
{
  "id": "sect-convergence-sequence-7-7",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-7-7",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  Consider a case where and . Evaluate for or .     Table of errors for linear, quadratic and cubic convergence      linear  quadratic  cubic                                                                                                              "
},
{
  "id": "sect-convergence-sequence-7-9",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-7-9",
  "type": "Example",
  "number": "2.3.10",
  "title": "",
  "body": "  Evaluate the linear converging sequence where and the quadratically converging sequence where . for Let and .     Comparison of linear and quadratic convergence for difference coefficients      linear  quadratic    n                                                                                                                  As you can see from the table, it appears that in this case, the linear sequence is converging faster, however eventually the quadratically convergent one will surpass the linear one. In general if one has two methods: a linear and a quadratically convergent one, it is desirable to use the quadratically convergent one.   "
},
{
  "id": "ex-order-convergence-YASRA",
  "level": "2",
  "url": "sect-convergence-sequence.html#ex-order-convergence-YASRA",
  "type": "Example",
  "number": "2.3.12",
  "title": "",
  "body": "  Find the order of convergence of the YASRA in .    First, build the following table of errors.   Table of errors for YASRA                                                                                                 Looking at the errors, they appear to be dropping in a linear way (each is about 1\/100 of the previous one), but let's use the formula above:   Using a table to estimate the convergence rate of YASRA            0  0.8747372133045498    1  0.9538685373847787    2  0.975439938281658    3  0.9846245750612836    4  0.9936913420698572     From this analysis, it appears that in fact, this method converges linearly. The asymptote error constant is:    "
},
{
  "id": "ex-convergence-newton-method-sqrt-65",
  "level": "2",
  "url": "sect-convergence-sequence.html#ex-convergence-newton-method-sqrt-65",
  "type": "Example",
  "number": "2.3.15",
  "title": "",
  "body": "  Determine the order of convergence of , which uses Newton's method to find .    First, calculate the error, of each step.   Table of Errors for Newton's Method                                                                                                                  This case is faster than linear. Each step seems to double the number of digits of accuracy you get. This is a sign of quadratic convergence. And in this table, we will show that it appears to be so.   Table that show Newton's method is quadratic convergence            0  1.178900923244053    1  1.3473842470980333    2  1.6184379407788283    3  1.8884480463362425    4  1.990935253721586    5  1.9997878352631038     From this analysis, it appears that in fact, this method converges linearly. The asymptote error constant is:    "
},
{
  "id": "ex-convergence-rate-newton-sqrt",
  "level": "2",
  "url": "sect-convergence-sequence.html#ex-convergence-rate-newton-sqrt",
  "type": "Example",
  "number": "2.3.18",
  "title": "",
  "body": "  Show that the fixed point iteration converges quadratically. Recall that this method was presented earlier for finding :    The errors and are given by:   And if we find the ratio , we arrive at: rearranging and simplifying,   Taking the limit which is approximately when . This shows that the numerical method of finding rates and asymptotic error constants in is indeed correct.   "
},
{
  "id": "sect-convergence-sequence-9-4",
  "level": "2",
  "url": "sect-convergence-sequence.html#sect-convergence-sequence-9-4",
  "type": "Example",
  "number": "2.3.19",
  "title": "",
  "body": "  Show that the YASRA analyzed in and is linearly convergent and find .    Since we used Taylor's Series to find this algorithm, we will use the Taylor Remainder Theorem ( ) to find an error bound. Let and , then be the error of the approximation.   The function is decreasing, so the maximum occurs at the left endpoint, that is when . For convenience we will call this . and now taking the limit,   So this gives and when we took , this gives , close to the value found in .   "
},
{
  "id": "sect-floating-point",
  "level": "1",
  "url": "sect-floating-point.html",
  "type": "Section",
  "number": "2.4",
  "title": "Floating Point Number Systems",
  "body": " Floating Point Number Systems     Understand the impracticality of using the standard number types in mathematics.    Understand the definition of a floating-point number system     Understand the limitations of a floating-point number system including underflow , overflow and rounding errors .      Another important subject needed for numerical analysis is that of floating point numbers. In mathematics, we have numbers such as integers, rationals, reals and complex. These are great for doing mathematics, however when we try to use them for computations, they aren’t so great. For example, how do you store the number ? In a computer, you have to limit the number of stored digits for a decimal number. Also, how do you store the number of atoms in the universe? It’s an integer, but it’s big.  If we look at the integers, we could store an arbitrary integer just by writing down the decimal digits according to any integer. However, this is not very practical (although it can be done), and for most situations, arbitrary-size integers are not needed. Therefore most computer software packages have an upper and lower limit on the integers.  We can also do something similar with the rationals, because of the fact that any rational is a ratio of integers, and I will skip this discussion.  Storage of a real is also a problem, and most computer software use a floating point number as an approximation. Before discussing details about these, we will review writing a number in scientific notation.    Scientific Notation  Recall that any number written in decimal form with only a finite number of digits can be written in scientific notation that is in the form: where and is an integer. For example can be written as , so and .  In this form the number is often called the significand or mantissa and the number is exponent . This example has the base 10, however other bases are common (generally base 2).  One major advantage to using numbers in this form is the simple multiplication and division. Consider multiplying and . Using properties of exponentials we get and typically we would like to put this back into scientific notation by shifting the exponent so .  Division can be done in a similar manner and perhaps surprisingly, addition and subtraction are more difficult due to the fact that the exponents of the two numbers need to be equal before adding and subtracting.    Floating Point Numbers of a given size  The reason for using floating point numbers in calculations is twofold. First, there is a finite size of storage for a number and secondly, routines for performing operations on floating-point numbers are fast and usually encoded on a computer chip.  Consider a floating point of a given size, say 64 bits generally called a double precision floating point number . The first bit is generally used for the sign, the next 11 are the exponent and the final 52 bits store the mantissa. A floating point number has two limitations and that is the precision (how many digits that can be stored) and the magnitude (the largest number). Double precision numbers are store in binary and converted to decimal with the form: where is the sign is the exponent and stores the mantissa. For example, consider the following number: where spaces separate out , and . Converting to decimal:   The mantissa is calculated in the following way and thus the floating point number is:   The double precision number system falls into a class of number systems that we can commonly call floating-point number systems:   Floating Point Number System   A floating point number system , is a subset of the real numbers characterized by the parameters:   TITLE         the base     :    the number of digits in the mantissa     :    the minimum exponent     :    the maximum exponent     Elements of have the form: where is nonzero (except when representing the number 0) and and .    The double precision number system listed above is .    Consider the floating point system , a very simple but illustrative as an example. The following numbers are element of this set.     There are a total of 271 numbers in this system.    There are a few things to notice about a floating point number system. The set of numbers is finite and not distributed evenly.    Rounding Floating Point Numbers  As we saw above, an issue with floating-point numbers is the precision and size of the number, a more significant issue is that of rounding error when performing operations with such numbers.  Consider the FPS we saw above . If we take two of the numbers in the system, and and add, we get , which is not represented in the system. In this case there are two options that are typically available: rounding and chopping.  In rounding, if cannot be represented in the system, the nearest number to is used. In the example above, 2.4 would be used.  In chopping, if cannot be represented in the system, the number found by chopping the extra digits is used. In the example above, 2.3 would be used.    Overflow and Underflow  If a operation results in a number between 0 and the number in the system closest to 0, this is called underflow . For example, if we took and divided by in the system used above, the result is 0.004, which cannot be represented, so an underflow occurs.  If an operation results in a number larger in magnitude to the largest number in the system, then this is called overflow . For example, if we multiply 44 and 50 in the system above, the result is 2200, which is larger than 99 (the largest number), so overflow occurs.    Rounding Error  Regardless of the number of digits used in the floating point system, rounding or chopping occurs with nearly every operation. The difference between the actual result and the number used is called the rounding error . (It doesn’t matter if numbers are round or chopped.)    Let be an approximation to the number . The absolute error is and the relative error is       Let and . Find the absolute and relative errors.    The absolute error is: and the relative error is       Practical Effects of Floating-Point Arithmetic   We saw a simple example of a floating-point system above and although it was quite simple, the floating-point systems that most computers employ have similar limitations. We will see these affects in a simple example from using the quadratic formula as well as solving a linear system.    Cancellation Error  One of the biggest sources of error arises when subtracting two comparable numbers. The best example comes from a familiar place.  Consider the following example. Solve using the quadratic formula.  In this case, to emphasize the importance of floating-point numbers, let’s use 4 digits of precision to compute:   When solving this using no roundoff, the roots are , therefore the larger of the two is correct to 4 digits, but the smaller is off and way off in relative terms it is 31%.  What’s going on here? The issue with this problem is that the two terms in the numerator the and the are close to one another resulting in cancellation.  One way to solve this problem is on the first term where and are added, that is if we rationalize the numerator, we can write: and get an analogous form of the quadratic formula. If we use , and , we get 0.04225, identical to 4 digits using the result above.    Matrices and Roundoff Errors  One of the major places that roundoff errors occur is in matrix operations. Consider for example performing Gaussian Elimination on the following matrix:   If we use rational numbers to solve this problem, then we get for the first step:   From the second row, you can see that or , the other two rows and back substitution can get you the results that and .  If instead we use floating point arithmetic with 4 decimal places of accuracy, then the original matrix is: and performing the same two operations, you get:   Lastly, eliminating the 3rd row, 2nd column, we get:   Now, using back substitution, we can get that . Using the second row, we get that and then   Compared with the results using rational numbers, the solutions are off by a tremendous amount. We will see in how to perform matrix row operations to minimize such errors.     Why not just use Rational Numbers?  With the results of the previous problem, one solution would be to just use rational numbers. In many cases, this is a great idea, however in general, as the size of the matrix increase, the computations become costly. Also, there are limitation in storage for rational numbers as well, so it may not be practical.    "
},
{
  "id": "sect-floating-point-2",
  "level": "2",
  "url": "sect-floating-point.html#sect-floating-point-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   Understand the impracticality of using the standard number types in mathematics.    Understand the definition of a floating-point number system     Understand the limitations of a floating-point number system including underflow , overflow and rounding errors .    "
},
{
  "id": "sect-floating-point-5-6",
  "level": "2",
  "url": "sect-floating-point.html#sect-floating-point-5-6",
  "type": "Definition",
  "number": "2.4.1",
  "title": "Floating Point Number System.",
  "body": " Floating Point Number System   A floating point number system , is a subset of the real numbers characterized by the parameters:   TITLE         the base     :    the number of digits in the mantissa     :    the minimum exponent     :    the maximum exponent     Elements of have the form: where is nonzero (except when representing the number 0) and and .   "
},
{
  "id": "sect-floating-point-5-8",
  "level": "2",
  "url": "sect-floating-point.html#sect-floating-point-5-8",
  "type": "Example",
  "number": "2.4.3",
  "title": "",
  "body": "  Consider the floating point system , a very simple but illustrative as an example. The following numbers are element of this set.     There are a total of 271 numbers in this system.   "
},
{
  "id": "sect-floating-point-8-3",
  "level": "2",
  "url": "sect-floating-point.html#sect-floating-point-8-3",
  "type": "Definition",
  "number": "2.4.4",
  "title": "",
  "body": "  Let be an approximation to the number . The absolute error is and the relative error is    "
},
{
  "id": "sect-floating-point-8-4",
  "level": "2",
  "url": "sect-floating-point.html#sect-floating-point-8-4",
  "type": "Example",
  "number": "2.4.5",
  "title": "",
  "body": "  Let and . Find the absolute and relative errors.    The absolute error is: and the relative error is    "
},
{
  "id": "sect-intro-rootfinding",
  "level": "1",
  "url": "sect-intro-rootfinding.html",
  "type": "Section",
  "number": "3.1",
  "title": "Introduction to Rootfinding",
  "body": " Introduction to Rootfinding  In the beginning of the course, we were introduced to the problem of approximating the square root of 65 using only the four standard operations: addition, subtraction, multiplication and division. As we will see, another way to look at that problem is to show that if , then is the root, or the value of such that .  Examples are prevalent throughout applied sciences, and here's a more geometric one that is similar to problems in many Calculus classes:    Find the area bounded by the -axis, the line and the line in the first quadrant.  The area sought is the shaded area below:   Plot of and . The shaded area bounded between the positive -axis and the two curves in the first quadrant is shown.        The area is the definite integral of the difference of the two curves. However, the limits on the integral depend on the intersection point which means solving: or finding the root of . This does not have what is called a closed-form solution . Such a solution would be a way to write the solution using other known functions.    The next example is also a standard Calculus question.    Find the maximum of for .    This means solving which also does not have a closed form solution.    And finally to illustrate that these rootfinding problems arise in other fields, this next example examines how objects fall toward the earth.    A model of an object falling near the earth that includes drag is that the height as a function of time is given by where is the initial height of the object, is the gravitation constant near the earth and is the terminal velocity with as the mass, is the drag coefficient and is the cross-sectional area of the object.  The time the object strikes the ground is given by the root of the function in knowing all the other parameters.    These examples are among many in which a solution is sought, but no closed-form solution can be found. We will see in this chapter how to approximate the solutions.    The root of a function , is a number such that . The number is also often called the zero .  The root of a function has multiplicity  if can be written in the form: where .    Multiplicity usually pertain only to roots of polynomials as we saw in . For example, the polynomial: can be written as so the root has multiplicity 2.  However, a plot of the function that is in shows that the root at has characteristics of a function with multiplicity greater than 1.   Plot of showing the root of the function at .        The following theorem provides another tool to find the multiplicity.    Let be a continuous function with continuous derivatives on some open interval containing . The equation has a root of multiplicity at if and only if     Since is continuous and has continuous derivatives, we can use Taylor's Theorem ( ) to write: for some . Since for , all terms in the summation formula above are zero and thus we can write factoring out a term which has a nonzero limit as , therefore has a root at of multiplicity .  In converse, assume that has a root of multiplicity . This means that we can write with . Obviously . Also if has continuous derivatives, then does as well. In general, we can write where is a function of (however the exact form it not needed).  Evaluating at results in since for and evaluating at results in since . Therefore the theorem holds.    This is quite a helpful theorem as we will see below, but to get some idea of using it in a general sense, the following shows how to find the multiplicity of roots of two particular functions.    Use the above theorem to find the multiplicity of the following functions at the given root:    at      at        For the first function, differentiate and plug in until the result is not zero. First, , then and therefore the multiplicity of the root at is 4.  For the second function and then and therefore the multiplicity of at is 3.    "
},
{
  "id": "sect-intro-rootfinding-4",
  "level": "2",
  "url": "sect-intro-rootfinding.html#sect-intro-rootfinding-4",
  "type": "Example",
  "number": "3.1.1",
  "title": "",
  "body": "  Find the area bounded by the -axis, the line and the line in the first quadrant.  The area sought is the shaded area below:   Plot of and . The shaded area bounded between the positive -axis and the two curves in the first quadrant is shown.        The area is the definite integral of the difference of the two curves. However, the limits on the integral depend on the intersection point which means solving: or finding the root of . This does not have what is called a closed-form solution . Such a solution would be a way to write the solution using other known functions.   "
},
{
  "id": "sect-intro-rootfinding-6",
  "level": "2",
  "url": "sect-intro-rootfinding.html#sect-intro-rootfinding-6",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Find the maximum of for .    This means solving which also does not have a closed form solution.   "
},
{
  "id": "sect-intro-rootfinding-8",
  "level": "2",
  "url": "sect-intro-rootfinding.html#sect-intro-rootfinding-8",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": "  A model of an object falling near the earth that includes drag is that the height as a function of time is given by where is the initial height of the object, is the gravitation constant near the earth and is the terminal velocity with as the mass, is the drag coefficient and is the cross-sectional area of the object.  The time the object strikes the ground is given by the root of the function in knowing all the other parameters.   "
},
{
  "id": "def-multiplicity",
  "level": "2",
  "url": "sect-intro-rootfinding.html#def-multiplicity",
  "type": "Definition",
  "number": "3.1.5",
  "title": "",
  "body": "  The root of a function , is a number such that . The number is also often called the zero .  The root of a function has multiplicity  if can be written in the form: where .   "
},
{
  "id": "fig-multiplicity-2",
  "level": "2",
  "url": "sect-intro-rootfinding.html#fig-multiplicity-2",
  "type": "Figure",
  "number": "3.1.6",
  "title": "",
  "body": " Plot of showing the root of the function at .       "
},
{
  "id": "thm-multiplicity",
  "level": "2",
  "url": "sect-intro-rootfinding.html#thm-multiplicity",
  "type": "Theorem",
  "number": "3.1.7",
  "title": "",
  "body": "  Let be a continuous function with continuous derivatives on some open interval containing . The equation has a root of multiplicity at if and only if     Since is continuous and has continuous derivatives, we can use Taylor's Theorem ( ) to write: for some . Since for , all terms in the summation formula above are zero and thus we can write factoring out a term which has a nonzero limit as , therefore has a root at of multiplicity .  In converse, assume that has a root of multiplicity . This means that we can write with . Obviously . Also if has continuous derivatives, then does as well. In general, we can write where is a function of (however the exact form it not needed).  Evaluating at results in since for and evaluating at results in since . Therefore the theorem holds.   "
},
{
  "id": "sect-intro-rootfinding-17",
  "level": "2",
  "url": "sect-intro-rootfinding.html#sect-intro-rootfinding-17",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Use the above theorem to find the multiplicity of the following functions at the given root:    at      at        For the first function, differentiate and plug in until the result is not zero. First, , then and therefore the multiplicity of the root at is 4.  For the second function and then and therefore the multiplicity of at is 3.   "
},
{
  "id": "sect-bisection",
  "level": "1",
  "url": "sect-bisection.html",
  "type": "Section",
  "number": "3.2",
  "title": "The Bisection Method",
  "body": " The Bisection Method   We saw the Bisection method in to find the square root of 65, but can be extended to finding roots of any function. The idea is that if you can find two values with function values that are different signs, and if the function is continuous, as we can see with , discussed below, there will be a root.    Show that the function has a root on .    We know that is continuous on the interval and and , and since this satisfies the Intermediate Value Theorem ( ), there must exist a number such that , and this is the definition of a root.    Plotting the function above on the given interval:          You can see that there is a root and the Intermediate Value Theorem assures that there is one there. Now, how to find it? We will see that the bisection method will start with an interval (with a guaranteed root), find the midpoint of the interval and then choose a new interval ensuring it has a root again. The following section shows this in detail.    The Bisection Algorithm  The following in the formal bisection method.   Bisection Method   Let be a function and be an interval , such that . The bisection method are the steps below to find the root with tolerance . That is if , then return such that .     Set , and .    Let    If , then let , .    else let , .       If , then stop, return . If not let and return to step 2.       The following example applies the bisection method to find .    Use the bisection method to find using the function on the interval to 2 digits.    First, , and and is the midpoint of this interval.  Note that , and . Since , , . This is continued in the table:   Table of interval Endpoints of the Bisection Method                                                                                                                                                                                                      And at this point , so we stop. Thus the approximation to is .      The Bisection Method with a Spreadsheet  The bisection method is fairly easy to perform with a simple handheld calculator, however it is tedious. Let's begin by building a spreadsheet with the top row of the table in .   Building a Spreadsheet for the Bisection Method      A  B  C  D  E  F    1                     2  8  -1  9  16  8.5  7.25    3                 where     the cell A2 has been entered as 8    the cell B2 has been entered as the formula: =a2*a2-65     the cell C2 has been entered as 9    the cell D2 has been entered as the formula: =c2*c2-65     the cell E2 has been entered as the formula: =0.5*(a2+c2)     the cell F2 has been entered as the formula: =e2*e2-65      Note that the formulas in cells B2, D2 and F2 are the functions of the cells to the left of each and the cell in E2 is the midpoint of A2 and C2.  The next step is to choose new values for the left and right endpoints in columns A and C. To do this, in cell A3 enter the formula: =IF(B3*F3 < 0;A3;E3) (note that some spreadsheets use commas in place of semicolons.) This formula will each choose the same left endpoint or the midpoint c to ensure that there is still a root between the two endpoints. For the same reason, enter =IF(D3*F3 > 0;E3;C3) in cell C3.  Lastly copy the cells from B2, D2, E2, and F2 into the ones in row 3. You may copy and paste or drag the lower-left corner of each cell. You should have a spreadsheet that looks like:      A  B  C  D  E  F    1                      2  8  -1  9  16  8.5  7.25    3  8.00000  -1.00000  8.50000  7.25000  8.25000  3.06250    Lastly, if you selected all cells in the last line, click on the lower left corner and drag down to at least line 12, you will build up a table that looks like the table in .    Graphical look at the Bisection  Let's look at the last example graphically to understand the bisection method in a different way. First, the plot of is given below.          Next, let's plot the first few steps of bisection starting on the domain . (Note: this is different than above, but more clearly illustrates how bisection works. First, , and the midpoint is and since and , then and .          Continuing, and to keep the root bracketed (such that ), then . This method continues until the root is found to a desired accuracy.    Analysis of the Bisection Algorithm  We return to one of our main questions that arise in this area: how to we know that our sequence of points is converging to the correct answer. In short, we will answer this by analyzing the bisection method. The analysis can be summarized in the following theorem.    Let be a continuous function on the closed interval with . The bisection method generates a sequence which converges to , a root (where ) within , with the property that      The length of the interval is halved in each step. That is   Since both and are in the interval , thus   And using the squeeze theorem ( ) so the sequence converges to .     Order and Rate of Convergence of the Bisection Method  Recall that an iterative method has rate if   from , and , so the bisection method converges with rate .  It is a bit more difficult to calculate the order of convergence. Since there is not a simple formula for , it is hard to show that exists for some and .  Consider, instead, a linearly convergent sequence . This means that   For large , this means that or and extending this we can show that   Since we can say that the bisection is approximately linear with .    Stopping Conditions for the Bisection Method  We have shown above that the bisection method converges and shows precisely the number of iterations needed to guarantee an error bound. There are three standard ways to determine when to stop:     The absolute error in the location of the root:     The relative error in the location of the root:     The root is reached within       Determination of which method often depends what you are looking for.    Consider the function . Perform the bisection method using the interval and using each stopping condition for . Report the number of steps needs for each.    If we use the Bisection algorithm on this function for the given starting interval, we get the following table. From this we can see when the stopping condition is reached.   TITLE                         abs. error  rel. error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     The first stopping condition occurs when , the second stopping condition occurs when and the final condition occurs when . Each are boxed above.  If we stop at different values of , there is a different approximate root.    From the above example, one can see that using different stopping conditions give different results. A natural question to ask is which condition to use and of course the answer is it depends. If you need to ensure that you have reached a certain number of digits of accuracy, then 1) is good, and if you are just trying to find an answer that has a very small function value then 3) is good.   "
},
{
  "id": "sect-bisection-2-2",
  "level": "2",
  "url": "sect-bisection.html#sect-bisection-2-2",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": "  Show that the function has a root on .    We know that is continuous on the interval and and , and since this satisfies the Intermediate Value Theorem ( ), there must exist a number such that , and this is the definition of a root.   "
},
{
  "id": "fig-bisection",
  "level": "2",
  "url": "sect-bisection.html#fig-bisection",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": "       "
},
{
  "id": "alg-bisection",
  "level": "2",
  "url": "sect-bisection.html#alg-bisection",
  "type": "Algorithm",
  "number": "3.2.3",
  "title": "Bisection Method.",
  "body": " Bisection Method   Let be a function and be an interval , such that . The bisection method are the steps below to find the root with tolerance . That is if , then return such that .     Set , and .    Let    If , then let , .    else let , .       If , then stop, return . If not let and return to step 2.      "
},
{
  "id": "ex-bisection-sqrt",
  "level": "2",
  "url": "sect-bisection.html#ex-bisection-sqrt",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Use the bisection method to find using the function on the interval to 2 digits.    First, , and and is the midpoint of this interval.  Note that , and . Since , , . This is continued in the table:   Table of interval Endpoints of the Bisection Method                                                                                                                                                                                                      And at this point , so we stop. Thus the approximation to is .   "
},
{
  "id": "sect-bisection-4-3",
  "level": "2",
  "url": "sect-bisection.html#sect-bisection-4-3",
  "type": "Table",
  "number": "3.2.6",
  "title": "Building a Spreadsheet for the Bisection Method",
  "body": " Building a Spreadsheet for the Bisection Method      A  B  C  D  E  F    1                     2  8  -1  9  16  8.5  7.25    3                "
},
{
  "id": "fig-bisect2",
  "level": "2",
  "url": "sect-bisection.html#fig-bisect2",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": "       "
},
{
  "id": "fig-bisect3",
  "level": "2",
  "url": "sect-bisection.html#fig-bisect3",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": "       "
},
{
  "id": "thm-bisection-converge",
  "level": "2",
  "url": "sect-bisection.html#thm-bisection-converge",
  "type": "Theorem",
  "number": "3.2.9",
  "title": "",
  "body": "  Let be a continuous function on the closed interval with . The bisection method generates a sequence which converges to , a root (where ) within , with the property that    "
},
{
  "id": "sect-bisection-6-4",
  "level": "2",
  "url": "sect-bisection.html#sect-bisection-6-4",
  "type": "Proof",
  "number": "3.2.4.1",
  "title": "",
  "body": " The length of the interval is halved in each step. That is   Since both and are in the interval , thus   And using the squeeze theorem ( ) so the sequence converges to .  "
},
{
  "id": "sect-bisection-8-5",
  "level": "2",
  "url": "sect-bisection.html#sect-bisection-8-5",
  "type": "Example",
  "number": "3.2.10",
  "title": "",
  "body": "  Consider the function . Perform the bisection method using the interval and using each stopping condition for . Report the number of steps needs for each.    If we use the Bisection algorithm on this function for the given starting interval, we get the following table. From this we can see when the stopping condition is reached.   TITLE                         abs. error  rel. error                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     The first stopping condition occurs when , the second stopping condition occurs when and the final condition occurs when . Each are boxed above.  If we stop at different values of , there is a different approximate root.   "
},
{
  "id": "sect-fixed-point",
  "level": "1",
  "url": "sect-fixed-point.html",
  "type": "Section",
  "number": "3.3",
  "title": "Fixed Point Iteration Schemes",
  "body": " Fixed Point Iteration Schemes   Thus far, in this chapter we have seen the bisection method and later we will see Newton's Method (which we saw briefly in ). This and other rootfinding techniques fall into a general scheme called fixed point iteration schemes. In short, if we have a function and a sequence can be generated by knowing and then for subsequence terms, , this is a fixed point iteration.    A fixed point of the function is any real number for which .      Show graphically that there is a fixed point of the function .    In this case we plot the curves and .          Since the function crosses the line , there is a fixed point.    A fixed point iteration creates a sequence for a given function and initial point. The following using the function shown in the plot above.    Iterate with where and . That is evaluate the fixed point iteration for with given initial point.       This appears to be converging to about the value of 0.7391.    From the last example, it appears that if we iterate a function, we can find where it crosses the line . Consider the function and note that it crosses the line in two locations from the following plot:   A graph of the function and the line .          Iterate for when the function is for .       Notice in this case that the iteration did not converge nor result in finding the intersection point.    A question is why did it work in the first case, and not in the second. We will find out, but need a few more basic analysis first. This next theorem gives some conditions when the fixed point is unique.   Fixed Point Theorem   Let be a continuous function on the closed interval with . Then has a fixed point . Furthermore, if is differentiable on and there exists a positive constant such that for all , then the fixed point in is unique.    First, we will prove the existence of a fixed point. Let . Since both and are continuous, then is continuous on . The roots of are the fixed points of .  Because the range of is a subset of , and . Therefore   If either or , then we have found a root of and therefore a fixed point of . If not, the condition and the intermediate value theorem guarantees a value such that , and thus is a fixed point of or .  The next step is to prove the uniqueness of the fixed point. Suppose that both and are fixed points of . That is and . Therefore, which is a contradiction therefore the fixed point is unique.    What can we say about the previous two examples in light of this theorem? First, when , we saw above that the fixed point was 0.739 (to 3 decimal places). And since the derivative near this point is important . Since is continuous and differential, there is an interval containing 0.739 such that . Therefore the iteration scheme converged to the unique fixed point.  In the second case, when , there are two fixed points. Using a different method, and are both fixed points and and in both cases the absolute value is greater than 1. The fact that if the sequence diverges is not a consequence of , but may explain why we see the results.    Additional Analysis of Fixed Point Iterations   is extremely helpful for analyzing fixed points—especially to determine where an iteration will converge to a fixed point or not. In this section, we go further with the analysis. The last two theorems will determine the order of converge to the fixed point. First, however, we examine a theorem that determines how close an term of the sequence is to the fixed point.   Bounds on Fixed Point Iterations   Let be continuous on the closed interval with . Furthermore, suppose that is differentiable on the open interval and there exists a positive constant such that for all . Then     The sequence generated by converges to the fixed point for any ;     ; and     .       First, note that the hypotheses of the theorem are the same as the fixed point theorem ( ), so we know that there is a unique fixed point. This theorem gives us much more information about the iterations.      To prove convergence, we need to prove that , or , and since , so the sequence converges to .    Since and use of establishes     First, the following needs to be established   Next, if ,   Taking the limit as : And thus the conclusions of the theorem are verified.      This theorem gives quite a bit of insight into fixed point iterations. Let's examine the three consequences of the theorem:     The first item determines convergence. Given a fixed point iteration formula with the conditions on , we are guaranteed convergence. This is good!     By establishing a bound on , we can guarantee an error bound on the th iterate. If we have some method that applies to finding , this part will determine how close a term of the sequence is to or usually more importantly, this can be used to determine the number of terms it takes to get within some tolerance of .    Same as in #2.       Linear Convergence of Fixed Point Iterations  The follow theorem extends the Fixed Point Theorem (thm:fixed:pt) to determine when a sequence resulting from fixed point iteration converges linearly.   Linear Convergence of Fixed Point Iterations   Let be a continuous function on the closed interval with and suppose that is continuous on the open interval with for all . If , where satisfies , then the sequence converges only linearly to .    First, the hypotheses of the theorem imply that there is a unique fixed point and the sequence converges to . We only need to show that if , then the sequence converges linearly.  This means that we need to show that   Next, consider where is between the points and for each . Since converges to , then also converges to . Taking the limit and by the hypothesis of the problem since and , this converges linearly by definition of linear convergence.    This theorem gives a simple way to determine if a fixed point iteration converges linearly.    Show that the fixed point iteration given by converges only linearly on the interval .    We know that and since is never zero in this interval (it is 0 on the boundary), this means that this sequence converges linearly.    The next theorem allows one to determine the order of convergence by extending that in    Higher-Order Convergence of Fixed Point Iterations   Let be a continuous function on the closed interval with continuous derivatives on the open interval . Further, let be a fixed point of . If but , then there exists a such that for any , the sequence converges to of order with asymptotic error constant        Proof of convergence  Since and and are continuous on , with and that by continuity of and continuity of there exists an interval , where and . If we let , then using , the for any , the sequence given by converges.    Proof of rate of convergence  Let and expand in a Taylor's Series above the fixed point : where is between and .  Since , we have Letting and , then     Order convergence   which shows that the order of convergence is with asymptotic error constant .       In , we showed directly that the fixed point iteration given by the formula converges quadratically. We will use the above theorem to show this.    Prove using that the method given by   converges to quadratically and find the asymptotic error constant,   First, note that is continuous and differentiable (to any order) on an interval not containing .  Next, note that so is a fixed point.     Since and , this method converges and converges quadratically. The asymptotic error constant is , which we saw in .    In light of the above example, the next one seeks a higher-order method for finding square roots. To do this, we'll assume a functional form and then force the function to have for as many as possible.    Use to find a third-order method to find . In particular find , and such that the fixed point iteration given by converges cubically.    Using , we need to satisfy:   Skipping the algebra, we can find that so   And since   This method is in fact third-order and the asymptotic error constant .    To illustrate the speed of convergence of this, we will use this to find . If we let and iterate, then   And even though we showed above that the method is third-order, we will also show this numerically. Recall from that if , then if , then the method is third-order (or cubic). Using these above,   Demonstration of Cubic Convergence of the method in             1  0.0147058823529411764    2  0.0111205171617669693    3  0.0051974665879438180    4  0.0038599182753288449    5  0.0038461538656714881     which shows that the method is cubic with , which is consistent with the value found above with .  Lastly, on a practical matter, a cubic method usually triples the digits of accuracy with each step and this one has about 600 digits of accuracy after 10 steps.   "
},
{
  "id": "sect-fixed-point-2-2",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-2-2",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  A fixed point of the function is any real number for which .   "
},
{
  "id": "sect-fixed-point-2-3",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-2-3",
  "type": "Example",
  "number": "3.3.2",
  "title": "",
  "body": "  Show graphically that there is a fixed point of the function .    In this case we plot the curves and .          Since the function crosses the line , there is a fixed point.   "
},
{
  "id": "sect-fixed-point-2-5",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-2-5",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Iterate with where and . That is evaluate the fixed point iteration for with given initial point.       This appears to be converging to about the value of 0.7391.   "
},
{
  "id": "fig-f-two-intersections",
  "level": "2",
  "url": "sect-fixed-point.html#fig-f-two-intersections",
  "type": "Figure",
  "number": "3.3.5",
  "title": "",
  "body": " A graph of the function and the line .       "
},
{
  "id": "sect-fixed-point-2-8",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-2-8",
  "type": "Example",
  "number": "3.3.6",
  "title": "",
  "body": "  Iterate for when the function is for .       Notice in this case that the iteration did not converge nor result in finding the intersection point.   "
},
{
  "id": "thm-fixed-pt",
  "level": "2",
  "url": "sect-fixed-point.html#thm-fixed-pt",
  "type": "Theorem",
  "number": "3.3.7",
  "title": "Fixed Point Theorem.",
  "body": " Fixed Point Theorem   Let be a continuous function on the closed interval with . Then has a fixed point . Furthermore, if is differentiable on and there exists a positive constant such that for all , then the fixed point in is unique.    First, we will prove the existence of a fixed point. Let . Since both and are continuous, then is continuous on . The roots of are the fixed points of .  Because the range of is a subset of , and . Therefore   If either or , then we have found a root of and therefore a fixed point of . If not, the condition and the intermediate value theorem guarantees a value such that , and thus is a fixed point of or .  The next step is to prove the uniqueness of the fixed point. Suppose that both and are fixed points of . That is and . Therefore, which is a contradiction therefore the fixed point is unique.   "
},
{
  "id": "thm-fixed-point-bounds",
  "level": "2",
  "url": "sect-fixed-point.html#thm-fixed-point-bounds",
  "type": "Theorem",
  "number": "3.3.8",
  "title": "Bounds on Fixed Point Iterations.",
  "body": " Bounds on Fixed Point Iterations   Let be continuous on the closed interval with . Furthermore, suppose that is differentiable on the open interval and there exists a positive constant such that for all . Then     The sequence generated by converges to the fixed point for any ;     ; and     .      "
},
{
  "id": "sect-fixed-point-3-5",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-3-5",
  "type": "Proof",
  "number": "3.3.1.1",
  "title": "",
  "body": "    To prove convergence, we need to prove that , or , and since , so the sequence converges to .    Since and use of establishes     First, the following needs to be established   Next, if ,   Taking the limit as : And thus the conclusions of the theorem are verified.     "
},
{
  "id": "thm-fixed-point-2",
  "level": "2",
  "url": "sect-fixed-point.html#thm-fixed-point-2",
  "type": "Theorem",
  "number": "3.3.9",
  "title": "Linear Convergence of Fixed Point Iterations.",
  "body": " Linear Convergence of Fixed Point Iterations   Let be a continuous function on the closed interval with and suppose that is continuous on the open interval with for all . If , where satisfies , then the sequence converges only linearly to .    First, the hypotheses of the theorem imply that there is a unique fixed point and the sequence converges to . We only need to show that if , then the sequence converges linearly.  This means that we need to show that   Next, consider where is between the points and for each . Since converges to , then also converges to . Taking the limit and by the hypothesis of the problem since and , this converges linearly by definition of linear convergence.   "
},
{
  "id": "sect-fixed-point-4-5",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-4-5",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": "  Show that the fixed point iteration given by converges only linearly on the interval .    We know that and since is never zero in this interval (it is 0 on the boundary), this means that this sequence converges linearly.   "
},
{
  "id": "thm-fp-order",
  "level": "2",
  "url": "sect-fixed-point.html#thm-fp-order",
  "type": "Theorem",
  "number": "3.3.11",
  "title": "Higher-Order Convergence of Fixed Point Iterations.",
  "body": " Higher-Order Convergence of Fixed Point Iterations   Let be a continuous function on the closed interval with continuous derivatives on the open interval . Further, let be a fixed point of . If but , then there exists a such that for any , the sequence converges to of order with asymptotic error constant        Proof of convergence  Since and and are continuous on , with and that by continuity of and continuity of there exists an interval , where and . If we let , then using , the for any , the sequence given by converges.    Proof of rate of convergence  Let and expand in a Taylor's Series above the fixed point : where is between and .  Since , we have Letting and , then     Order convergence   which shows that the order of convergence is with asymptotic error constant .      "
},
{
  "id": "ex-sqrt-a-conv-rate",
  "level": "2",
  "url": "sect-fixed-point.html#ex-sqrt-a-conv-rate",
  "type": "Example",
  "number": "3.3.12",
  "title": "",
  "body": "  Prove using that the method given by   converges to quadratically and find the asymptotic error constant,   First, note that is continuous and differentiable (to any order) on an interval not containing .  Next, note that so is a fixed point.     Since and , this method converges and converges quadratically. The asymptotic error constant is , which we saw in .   "
},
{
  "id": "ex-cubic-convergence-sqrt",
  "level": "2",
  "url": "sect-fixed-point.html#ex-cubic-convergence-sqrt",
  "type": "Example",
  "number": "3.3.13",
  "title": "",
  "body": "  Use to find a third-order method to find . In particular find , and such that the fixed point iteration given by converges cubically.    Using , we need to satisfy:   Skipping the algebra, we can find that so   And since   This method is in fact third-order and the asymptotic error constant .   "
},
{
  "id": "sect-fixed-point-4-14",
  "level": "2",
  "url": "sect-fixed-point.html#sect-fixed-point-4-14",
  "type": "Table",
  "number": "3.3.14",
  "title": "Demonstration of Cubic Convergence of the method in Example 3.3.13",
  "body": " Demonstration of Cubic Convergence of the method in             1  0.0147058823529411764    2  0.0111205171617669693    3  0.0051974665879438180    4  0.0038599182753288449    5  0.0038461538656714881    "
},
{
  "id": "sect-newtons-method",
  "level": "1",
  "url": "sect-newtons-method.html",
  "type": "Section",
  "number": "3.4",
  "title": "Newton’s Method",
  "body": " Newton's Method   The most ubiquitous root finding method is Newton's Method , which we saw in Chapter 1 for finding by finding the root of .  Recall that to find , we can solve using the method: which converges to quadratically for any starting value . This method is Newton's method for finding the root of .  In general, Newton's Method to solve can be seen graphically. First, consider , a starting point for the method, and plot the function and its tangent at :          The iteration proceeds with being the root of the tangent line. Since the tangent line to at is if we let , and and solve for to get: or for a general step as   Note that this fits the fixed point iteration scheme with so all of the analysis performed in applies to Newton's with this definition of .     Newton's Method for finding a root to tolerance of a function with initial point is given by the following algorithm.     Set with given values of and .    Find     If then stop and return .    Increment by 1 and go to step 2.         Use Newton's method to find the intersection of and in the first quadrant.    This means that we find the root of and . Newton's method for this problem is:   If we iterate this method with we get the results:   Table of values in Newton's method for                                                         And it appears that the sequence is converging as well as the function values at the points are approaching zero. We will analyze the convergence and rate of convergence later in this section.      Performing Newton's Method using a Spreadsheet  Newton's method is relative easy to calculate with a hand calculator if you know the derivative. You can use a spreadsheet to simplify much of the tedium of repeating calculations as the following example shows. We will reproduce the results in Example ex:newtons:method.  First, start with the following spreadsheet:      A  B  C    1             2  1  0.459697694  -1.84147    where     cell A2 is the number 1,    cell B2 is the formula =cos(a2)-a2 ,    cell C2 is the formula =-sin(a2)-1 , the derivative of the cell in B2     Next, in cell A3, enter the formula for Newton's method or =A2-B2\/C2 . In cells B3 and C3, drag (or copy) down from cells B2 and C2. You should see:   TITLE      A  B  C    1       2  1  0.459697694  -1.84147    3  0.7503639  -0.0189231  -1.6819050     and if the last row is dragged down a few rows, you will get the table in .    Analysis of Newton's Method  Recall that Newton's Method fits the iteration form of with   Using this, we can show that Newton's method is a quadratically converging method if and . We will use to show that it convergence quadratically, that is that and or and if , then .  Lastly, the asymptotic error constant can be found using as     Find the formula for Newton's method for the function , for . In addition, find the asymptotic error constant.    In this case, using Newton's Method from ,   Also, the asymptotic error constant is found by using , which we have shown most recently in .      Newton's Method for roots of multiplicity greater than 1  We start with an example showing that Newton's method does not always converge quadratically.    Apply Newton's method to the function starting with     In this case, and therefore Newton's method is   The following table shows this:        0  0.5    1  0.25480007759114687    2  0.1802096055020658    3  0.14103188077228046    4  0.11641077194721548    5  0.0993613061968627    6  0.08679954162860683    7  0.07713325770653695    8  0.06945102448715239    9  0.0631910576041048    10  0.05798716463299298    It appears that this sequence is converging to 0 (note that ), however it also appears to be converging very slowly, but can be shown numerically that the convergence is linear.    What's going on with this? Why so slow. Notice that the method in , the term in the determinator is going to 0, and in fact, if we plug in, then we have a division by zero error.  Even though this is Newton's method, if we use with , note first that does not exist, however, and and again is not defined, but which would show this is a linear convergence method.  The issue with this can be seen if you recall that the denominator of Newton's method is the derivative. For the function has . If we use , with the result that which shows that has a root of multiplicity 2 at .   "
},
{
  "id": "sect-newtons-method-2-1",
  "level": "2",
  "url": "sect-newtons-method.html#sect-newtons-method-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's Method "
},
{
  "id": "fig-newton",
  "level": "2",
  "url": "sect-newtons-method.html#fig-newton",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "       "
},
{
  "id": "alg-newtons-method",
  "level": "2",
  "url": "sect-newtons-method.html#alg-newtons-method",
  "type": "Algorithm",
  "number": "3.4.2",
  "title": "",
  "body": "   Newton's Method for finding a root to tolerance of a function with initial point is given by the following algorithm.     Set with given values of and .    Find     If then stop and return .    Increment by 1 and go to step 2.      "
},
{
  "id": "ex-newtons-method",
  "level": "2",
  "url": "sect-newtons-method.html#ex-newtons-method",
  "type": "Example",
  "number": "3.4.3",
  "title": "",
  "body": "  Use Newton's method to find the intersection of and in the first quadrant.    This means that we find the root of and . Newton's method for this problem is:   If we iterate this method with we get the results:   Table of values in Newton's method for                                                         And it appears that the sequence is converging as well as the function values at the points are approaching zero. We will analyze the convergence and rate of convergence later in this section.   "
},
{
  "id": "sect-newtons-method-3-8",
  "level": "2",
  "url": "sect-newtons-method.html#sect-newtons-method-3-8",
  "type": "Table",
  "number": "3.4.5",
  "title": "TITLE",
  "body": " TITLE      A  B  C    1       2  1  0.459697694  -1.84147    3  0.7503639  -0.0189231  -1.6819050    "
},
{
  "id": "sect-newtons-method-4-5",
  "level": "2",
  "url": "sect-newtons-method.html#sect-newtons-method-4-5",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": "  Find the formula for Newton's method for the function , for . In addition, find the asymptotic error constant.    In this case, using Newton's Method from ,   Also, the asymptotic error constant is found by using , which we have shown most recently in .   "
},
{
  "id": "sect-newtons-method-5-3",
  "level": "2",
  "url": "sect-newtons-method.html#sect-newtons-method-5-3",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Apply Newton's method to the function starting with     In this case, and therefore Newton's method is   The following table shows this:        0  0.5    1  0.25480007759114687    2  0.1802096055020658    3  0.14103188077228046    4  0.11641077194721548    5  0.0993613061968627    6  0.08679954162860683    7  0.07713325770653695    8  0.06945102448715239    9  0.0631910576041048    10  0.05798716463299298    It appears that this sequence is converging to 0 (note that ), however it also appears to be converging very slowly, but can be shown numerically that the convergence is linear.   "
},
{
  "id": "sect-other-rootfinding",
  "level": "1",
  "url": "sect-other-rootfinding.html",
  "type": "Section",
  "number": "3.5",
  "title": "Other Rootfinding Methods",
  "body": " Other Rootfinding Methods   In , we saw Newton's method. Although it's not a perfect rootfinding algorithm, Newton's method has a lot of strength including it's relative simplicity and quadratic convergence. However, one drawback is that it requires taking the derivative. In this chapter we will see the secant method which uses a secant line instead of a tangent line to estimate the root.  Additional methods including the blending of the methods we've seen including using the speed of Newton's method with the bisection method which guarantees a root.    The Secant Method  Recall that in , we used the tangent line to the function to estimate the root. If instead, we use the secant line, we do the same. shows the secant line through a function through two points and . The zero of the secant line is found and labelled as . This is used recursively.          Recall that a secant line through the points and can be written and the zeros of this line is This value is thus used to find an approximation to the root or   If this is same formula is used recursively, then we have    Secant Rootfinding Method   The following will find the root to within using the secant method :     Start with two approximations of the root called and . Let .    Find     If , stop. The best approximation to the root is . If not, increment by 1 and return to step 2.     Note: An alternative stopping condition would be use .    The next example shows the detailed steps to use the secant method.    Use the secant method to find the intersection point of and or finding the root of . This is the same function as in . Use and .       Convergence of Root-Finding Method         0      1      2      3      4      5      6      7      8      9           Analysis of the Secant Method  Analyzing the secant method is similar to that of other iterative methods, however, because there are three points involved in the step in , the analysis must be adapted a bit.  First, let be the root of , that is, and is the sequence of points from the secant method. Define . Then expand the terms and about the root . where is used. Subtracting these results in Then using and subtracting from each side results in so we have the relationship that .  We are trying to find the order of convergence or the value of such that or equivalently, which results in and then   To ensure that the powers of is the same for both sides: and using the quadatic formula, and since we need , then , the same result that we saw above.    The Newton-Bisection Method  One of the advantages of the bisection method from is that if the original interval is guaranteed to contain a root, then each successive step results in a root. However, as we saw, it is quite slow to converge and in this section, we combine the speed of Newton's method to speed up the bisection method.    Muller's Method  Muller's method extends the idea of the secant method to three points and the quadratic that passes through the points. Consider a general function as in           We find the parabola that passes through the points , and , where . Although the quadratic can be written in standard form, it is easier if we write it as We also use substituting the three points into results in Plugging in into and divide by results in Combining and and dividing by results in adding and  which results in and then subtracting times and times results in or   This shows that the quadratic that passes through the points is with     Use the results above to find the quadratic that passes through the points and     First, and then the coefficients of the quadratic is   This results in the quadratic equation:     Next, Muller's method uses the root of the quadratic to find the root, however, only one of the roots is needed.     The folllowing steps uses Muller's method to estimate the root of the function . The input in the function and three values. Let's call them and and we will find the root to tol .     Let  h₁ = x₁ -x₀  h₂ = x₂ - x₁           Brent's Method     "
},
{
  "id": "fig-secant-method",
  "level": "2",
  "url": "sect-other-rootfinding.html#fig-secant-method",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "       "
},
{
  "id": "alg-secant-method",
  "level": "2",
  "url": "sect-other-rootfinding.html#alg-secant-method",
  "type": "Algorithm",
  "number": "3.5.2",
  "title": "Secant Rootfinding Method.",
  "body": " Secant Rootfinding Method   The following will find the root to within using the secant method :     Start with two approximations of the root called and . Let .    Find     If , stop. The best approximation to the root is . If not, increment by 1 and return to step 2.     Note: An alternative stopping condition would be use .   "
},
{
  "id": "subsec-secant-method-8",
  "level": "2",
  "url": "sect-other-rootfinding.html#subsec-secant-method-8",
  "type": "Example",
  "number": "3.5.3",
  "title": "",
  "body": "  Use the secant method to find the intersection point of and or finding the root of . This is the same function as in . Use and .       Convergence of Root-Finding Method         0      1      2      3      4      5      6      7      8      9        "
},
{
  "id": "fig-muller",
  "level": "2",
  "url": "sect-other-rootfinding.html#fig-muller",
  "type": "Figure",
  "number": "3.5.5",
  "title": "",
  "body": "       "
},
{
  "id": "subsec-mullers-method-6",
  "level": "2",
  "url": "sect-other-rootfinding.html#subsec-mullers-method-6",
  "type": "Example",
  "number": "3.5.6",
  "title": "",
  "body": "  Use the results above to find the quadratic that passes through the points and     First, and then the coefficients of the quadratic is   This results in the quadratic equation:    "
},
{
  "id": "alg-muller",
  "level": "2",
  "url": "sect-other-rootfinding.html#alg-muller",
  "type": "Algorithm",
  "number": "3.5.7",
  "title": "",
  "body": "  The folllowing steps uses Muller's method to estimate the root of the function . The input in the function and three values. Let's call them and and we will find the root to tol .     Let  h₁ = x₁ -x₀  h₂ = x₂ - x₁        "
},
{
  "id": "sect-intro-interpolation",
  "level": "1",
  "url": "sect-intro-interpolation.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Interpolation",
  "body": " Introduction to Interpolation   Consider part of a table of normal values from a statistics book:       0  0.25  0.50  0.75  1       0.0000  0.0987  0.1915  0.2734  0.3413    What is the value of the function for or ?  We will eventually learn how to find this function value (which is called the cumulative density function for the normal distribution) using a technique called quadrature, but we would like to be able to approximate a function based on some given values.    Fundamental Interpolation Problem  The following is the standard problem that we are looking to solve:   Given a set of points for , where the are distinct and are the corresponding function values (perhaps either given or for some ), we wish to find:       An approximate value for at (other than the given )      Or find a function such that and for other values, is “reasonable” between the points. Typically “reasonable” needs to be defined clearly.        Interpolation Versus Regression  First, a bit about terminology. You probably have heard the word regression used in terms of data fitting. For example, linear regression for the data given above may seek to find the line that best fits the data above in the table.  In the case of finding the values of the cumulative density function above, this is not desirable. Instead, interpolation finds a function that passes through the given points and approximates (hopefully in a smooth manner) between the points.    Polynomial Interpolation  The first function that we will use to interpolate some data is often a polynomial. Recall that a polynomial of degree has the form:   There are many reasons for using polynomials. From a computational point of view, a polynomial can be evaluated only with four basic operations ( ) that are easily done in computers. Except for Rational Functions (which are usually the second encountered class of interpolated functions), all other functions require some kind of approximation to find function values. In addition, polynomials can be evaluated efficiently. See for more details.  Finally (and probably the most-important) is that polynomial can always be used to approximate any other function. This is stated more precisely in the following theorem:   Weierstrauss Approximation Theorem   Suppose that is defined and continuous on . For each , there exists a polynomial with the property that       The proof of this theorem is rather complicated so will not be presented here, however this is a crucial theorem and can be found in functional analysis texts such as rudin1991. In short, any continuous function can be approximated (to within any value) with a polynomial. This is an important reason for using polynomial in both interpolation and approximation.  Next, we show a simple example of an interpolation problem.    Find a quadratic function that fits the following data .    One way to handle this problem is to write a general quadratic function: and note that the polynomial must satisfy the data. . Then write down the function values for each of the three points:   This is a linear system that can be solve using Gaussian Elimination (or a CAS can solve it directly) as . Thus the polynomial that interpolates the given set of points is:   A plot of the data and function is shown below:   A plot of a polynomial that interpolates the given data.           "
},
{
  "id": "sect-intro-interpolation-5-5",
  "level": "2",
  "url": "sect-intro-interpolation.html#sect-intro-interpolation-5-5",
  "type": "Theorem",
  "number": "4.1.1",
  "title": "Weierstrauss Approximation Theorem.",
  "body": " Weierstrauss Approximation Theorem   Suppose that is defined and continuous on . For each , there exists a polynomial with the property that      "
},
{
  "id": "ex-quad-interp-basic",
  "level": "2",
  "url": "sect-intro-interpolation.html#ex-quad-interp-basic",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Find a quadratic function that fits the following data .    One way to handle this problem is to write a general quadratic function: and note that the polynomial must satisfy the data. . Then write down the function values for each of the three points:   This is a linear system that can be solve using Gaussian Elimination (or a CAS can solve it directly) as . Thus the polynomial that interpolates the given set of points is:   A plot of the data and function is shown below:   A plot of a polynomial that interpolates the given data.         "
},
{
  "id": "sect-lagrange-interp",
  "level": "1",
  "url": "sect-lagrange-interp.html",
  "type": "Section",
  "number": "4.2",
  "title": "The Lagrange Form of the Interpolating Polynomial",
  "body": " The Lagrange Form of the Interpolating Polynomial   Let's return to the notion of fitting a polynomial to a set of data. We will start with two points. Consider the points and . The lowest-order polynomial that fits the data is a straight line which can be written in point-slope form as:   Rearranging this a bit we can get:   The functions are called the Lagrange polynomials and are the functional part of . In this case, they are a lines and have the properties:   Because of this property, it makes the interpolating polynomial easy to find. You just need to multiply the each Lagrange polynomial by the appropriate -value, thus can be written as and we will see that both the quadratic form and general form of interpolation is similar. We can now use this in an example.    Use the Lagrange formulas above to find the line that interpolates through the points and .    First, we will find the Lagrange polynomials in with and  and then the interpolated line is found using , which is the same result if one found the line through the two given points using a technique from Precalculus.      Quadratic Lagrange Polynomials  If we look at the above properties for the linear Lagrange polynomials in , we can hypothesize the properties of a quadratic Lagrange polynomial.     Also, analogous to , the following are the quadratic Lagrange polynomials.   And the quadratic function that interpolates the data is and is the quadratic version of .    Use the dataset that was given in to find the interpolating polynomial using the Lagrange formulas:    First, find the individual Lagrange polynomials in for the given values: and the resulting interpolating polynomial given by is which is the same polynomial that we found in .      General Lagrange Polynomial  The general -th Lagrange polynomial of order is given by   Notice that this gives the property   And the general interpolating polynomial that passes through the data for is     If we return to the problem of finding a polynomial that passes through the probability data given at the beginning of the chapter:                                                        in which . Then the Lagrange polynomials using the -values in the table above are: and the resulting Lagrange interpolating polynomial is where simplification has taken place.  The data and the interpolating polynomial are plotted below:          For example, if we use the interpolating polynomial to calculate the probability , the polynomial gives us: which agrees to the cumulative density function (given in Probability and Statistics books) to 4 digits.    The following theorem shows that given a set of points, there exists a polynomials that passes through the points and that polynomial is unique.    If are distinct points in the domain of , then there exists a unique polynomial, of degree at most such that interpolates ; that is for each . The function is called the interpolating polynomial .     Existence:   Such a polynomial exists by constructing the Lagrange polynomial as seen above.   and using the properties of the Lagrange polynomials: for each .   Uniqueness:   This will proceed by contradiction. Suppose both and are polynomials of degrees at most which interpolate at the given points.  Let . Since both and are polynomials of degree at most , the same is true for . Also, for each . Therefore is a polynomial of degree at most with roots. The fundamental Theorem of Algebra guarantees that the only way this can happen is if . This implies that , and thus the polynomial is unique.    Since the above theorem shows that the interpolating polynomial is unique, therefore the method used to find it does not matter. used a basic method to arrive at the interpolating polynomial through the points and . used Lagrange interpolation to arrive at the same answer and in the next section, we will see yet another form.    Error in the interpolating polynomial  We saw in , the interpolating polynomial with the normal distribution data given was accurate to 4 decimal places at the desired point. The next theorem shows how to calculate this.    Suppose are distinct numbers in and . Then for each in , a number in exists with   This results in a error term:     First, note that because of the form of the error term since at each , the error term is zero.  For any value such that for all , define:   By the conditions of the theorem, has continuous derivatives, and since is a polynomial, and it has continuous derivatives, has continuous derivatives on .  Furthermore, for and therefore has roots on . Applying the Generalized Rolle's Theorem given in , it follows that there exists such that .  Note that is a polynomial of degree at most , so . And is a polynomial of degree with leading coefficient , so   Differentiating  times and evaluating it at yields   Solving for , results in     This theorem now allows us to determine the error associated with approximating a function. The following example shows how one can use this to determine how well an interpolated polynomial approximates a function.    Find the interpolated polynomial for the function on using 3 equally-spaced points. Find a bound on the error using .    First, we will find the interpolated polynomial through the points , and . We will need the three Lagrange polynomials: and then write:   Here is a plot of both and on .          As you can see from the plot, the interpolated polynomial and the sine function are close (but not identical). Now, let's use to find the error,   First, there is the term for and . Since the function is the sine function, this can be bounded by 1. Next, is the term:   We also need to find the maximum of this error, which must occur when or which has a zero when and at either of these points is . Therefore a bound on the error:   Thus the approximation (using the polynomial) in place of the sine function on this interval is bounded by 0.2486.      Advantages and Disadvantages of the Lagrange form  We will soon see an alternative way of finding a polynomial interpolant. Before moving on, let's look at the advantages and disadvantages:   Advantages : The formula for computing the Lagrange form is relatively simple and easy (as we will see) to understand. The other advantage is the error formula just proved above is easy to derive because of the Lagrange form.   Disadvantages: The main disadvantage is seen by considering the following scenario: Let's return to the problem seen above in that we found a polynomial interpolant through the data:               0  0.25  0.50  0.75  1       0.0000  0.0987  0.1915  0.2734  0.3413        Consider the case of another point is found (perhaps we know that ) and we would like to produce a new polynomial that incorporates this new point.  Unfortunately, the Lagrange form requires that we start from scratch and rebuild the polynomial. That is, we can't use the current polynomial to find a new polynomial. We will see that this is possible with the Newton Divided Differences in the next section.   "
},
{
  "id": "sect-lagrange-interp-2-5",
  "level": "2",
  "url": "sect-lagrange-interp.html#sect-lagrange-interp-2-5",
  "type": "Example",
  "number": "4.2.1",
  "title": "",
  "body": "  Use the Lagrange formulas above to find the line that interpolates through the points and .    First, we will find the Lagrange polynomials in with and  and then the interpolated line is found using , which is the same result if one found the line through the two given points using a technique from Precalculus.   "
},
{
  "id": "ex-lagrange-interp-quad",
  "level": "2",
  "url": "sect-lagrange-interp.html#ex-lagrange-interp-quad",
  "type": "Example",
  "number": "4.2.2",
  "title": "",
  "body": "  Use the dataset that was given in to find the interpolating polynomial using the Lagrange formulas:    First, find the individual Lagrange polynomials in for the given values: and the resulting interpolating polynomial given by is which is the same polynomial that we found in .   "
},
{
  "id": "ex-interp-normal-dist",
  "level": "2",
  "url": "sect-lagrange-interp.html#ex-interp-normal-dist",
  "type": "Example",
  "number": "4.2.3",
  "title": "",
  "body": "  If we return to the problem of finding a polynomial that passes through the probability data given at the beginning of the chapter:                                                        in which . Then the Lagrange polynomials using the -values in the table above are: and the resulting Lagrange interpolating polynomial is where simplification has taken place.  The data and the interpolating polynomial are plotted below:          For example, if we use the interpolating polynomial to calculate the probability , the polynomial gives us: which agrees to the cumulative density function (given in Probability and Statistics books) to 4 digits.   "
},
{
  "id": "thm-interp-exist-unique",
  "level": "2",
  "url": "sect-lagrange-interp.html#thm-interp-exist-unique",
  "type": "Theorem",
  "number": "4.2.5",
  "title": "",
  "body": "  If are distinct points in the domain of , then there exists a unique polynomial, of degree at most such that interpolates ; that is for each . The function is called the interpolating polynomial .     Existence:   Such a polynomial exists by constructing the Lagrange polynomial as seen above.   and using the properties of the Lagrange polynomials: for each .   Uniqueness:   This will proceed by contradiction. Suppose both and are polynomials of degrees at most which interpolate at the given points.  Let . Since both and are polynomials of degree at most , the same is true for . Also, for each . Therefore is a polynomial of degree at most with roots. The fundamental Theorem of Algebra guarantees that the only way this can happen is if . This implies that , and thus the polynomial is unique.   "
},
{
  "id": "thm-interp-error",
  "level": "2",
  "url": "sect-lagrange-interp.html#thm-interp-error",
  "type": "Theorem",
  "number": "4.2.6",
  "title": "",
  "body": "  Suppose are distinct numbers in and . Then for each in , a number in exists with   This results in a error term:     First, note that because of the form of the error term since at each , the error term is zero.  For any value such that for all , define:   By the conditions of the theorem, has continuous derivatives, and since is a polynomial, and it has continuous derivatives, has continuous derivatives on .  Furthermore, for and therefore has roots on . Applying the Generalized Rolle's Theorem given in , it follows that there exists such that .  Note that is a polynomial of degree at most , so . And is a polynomial of degree with leading coefficient , so   Differentiating  times and evaluating it at yields   Solving for , results in    "
},
{
  "id": "ex-interp-error",
  "level": "2",
  "url": "sect-lagrange-interp.html#ex-interp-error",
  "type": "Example",
  "number": "4.2.7",
  "title": "",
  "body": "  Find the interpolated polynomial for the function on using 3 equally-spaced points. Find a bound on the error using .    First, we will find the interpolated polynomial through the points , and . We will need the three Lagrange polynomials: and then write:   Here is a plot of both and on .          As you can see from the plot, the interpolated polynomial and the sine function are close (but not identical). Now, let's use to find the error,   First, there is the term for and . Since the function is the sine function, this can be bounded by 1. Next, is the term:   We also need to find the maximum of this error, which must occur when or which has a zero when and at either of these points is . Therefore a bound on the error:   Thus the approximation (using the polynomial) in place of the sine function on this interval is bounded by 0.2486.   "
},
{
  "id": "sect-newton-divided-diff",
  "level": "1",
  "url": "sect-newton-divided-diff.html",
  "type": "Section",
  "number": "4.3",
  "title": "Newton Divided Differences",
  "body": " Newton Divided Differences   We saw above in that an interpolated polynomial is unique. Therefore the method of finding the polynomial is not important. We will see in this section that another method, Newton Divided Differences has some advantages not seen in the Lagrange form.  Recall in Section sect:interp:intro that a factored form of the polynomial was shown to have advantage mainly due to evaluation speed. Similar to this form, the Newton form of a polynomial given by has advantages when it comes to interpolations. The number can be any set of numbers, however when using this form for interpolation, the -values of the data set is typically used.  Next, if we introduce the notation that and in general the th divided difference of with respect to the points is:   The divided differences that we see above is closely related to derivatives as we will see. That is, is approximately equal to or . Similarly .    Newton Divided Difference Form of the Interpolating Polynomial  Let's now return to the interpolation problem. That is for a set of points , for , find an th degree polynomial that passes through all points. In terms of the Newton's Divided Difference formulas, let the polynomial be that defined in (eq:newton:poly:general).  Since the polynomial satisfies , then   Also, since the polynomial passes through , then setting and solving for , we get:   Similarly, we can show that   And therefore the interpolating polynomial can be written as     Calculating the Newton Divided Differences  Although the formula for the interpolation through Newton Divided differences in seems complicated, the determination of the divided differences is not very difficult as we can create a Newton Divided Differences table for data , , , .                                                                                          where the first column are the -values and the 2nd column are the (or ) values. Both of these are typically given. For the remaining columns, the formula in is used. Each value in the third column and to the left uses the the divided differences just to the left (above and below) and the -values given in the divided difference. The following example shows a specific case.    Construct a Newton Divided Differences Table for the data in the table:                                                                                                                                       The table is built up from left to right. The second column is the values in the table. The third column is from and so on. For example, using , where the numerator is the difference of the two adjacent numbers, and the denominator are the first-column values followed back (see the boxed values above).      Use the Newton divided difference table above to construct the interpolating polynomial through each of the following sets of points.      , and .    In this case, , so the interpolating polynomial is:   This is the same polynomial as we have seen above in and .       ,  and .    In this case, this is the same 3 points as above with an additional point added. Due to the nature of the Newton form of the polynomial, only one term needs to be found:       The last example shows that the Newton Divided Difference form of the interpolating polynomial is nice in that the entire polynomial need not be regenerated from scratch as Lagrange needs. In the next example, we interpolate through the point of the cumulative density function of the normal distribution as seen in the beginning of the chapter.    Use the Newton Divided Differences to find the interpolating polynomial through the points given by the cumulative density function at the beginning of the chapter.                                                 First, we build the Newton Divided Difference table:                                  0                     1                               2                                    3                          4          And the interpolating polynomial is:   The coefficients of each term are the upper diagonal elements. The corresponding terms are the products of the terms up (but not including the current one). For example, the term associated with goes up to . These terms are . The resulting polynomial is the same as that in , which used the Lagrange form of the interpolation polynomial.      Errors and Interpolation, revisited  In , we found the interpolating polynomial that passes through the sine curve for and . First, let's use Newton's Divided Difference to find this polynomial again.  The interpolating data will be:          0             0  1  0    Using Newton's Divided Differences we get the table:                     0                     1                            2            and for the interpolating polynomial, we get: which is the same as seen in .  Next, let's add two additional points on the sine curve when and . We can add these points into the table and expand the table. (Note: even though the -values are not listed smallest to largest, this does not matter).                                                                                                                                 So the interpolation polynomial is:   From the error formula given in .   in this case so   It can be shownThis is quite difficult to show and is not a very tight bound, but is sufficient for this example. See ???? for a reference. that if the are equally-spaced on the interval , that   Therefore the error in this situation can be shown to be: and in the case of , this is   Therefore theoretically, the maximum error between the sine function and the interpolated polynomial through the five equally-space points on ] is bounded by 0.0761.    Summary  This section showed a second method called Newton Divided Difference method for finding an interpolated polynomial through a set of points. The two advantages to this method is that the polynomial can be found by finding a divided difference table and that additional points can be added without recalculating the entire polynomial.   "
},
{
  "id": "ex-divided-diff-table",
  "level": "2",
  "url": "sect-newton-divided-diff.html#ex-divided-diff-table",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": "  Construct a Newton Divided Differences Table for the data in the table:                                                                                                                                       The table is built up from left to right. The second column is the values in the table. The third column is from and so on. For example, using , where the numerator is the difference of the two adjacent numbers, and the denominator are the first-column values followed back (see the boxed values above).   "
},
{
  "id": "sect-newton-divided-diff-4-6",
  "level": "2",
  "url": "sect-newton-divided-diff.html#sect-newton-divided-diff-4-6",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": "  Use the Newton divided difference table above to construct the interpolating polynomial through each of the following sets of points.      , and .    In this case, , so the interpolating polynomial is:   This is the same polynomial as we have seen above in and .       ,  and .    In this case, this is the same 3 points as above with an additional point added. Due to the nature of the Newton form of the polynomial, only one term needs to be found:     "
},
{
  "id": "sect-newton-divided-diff-4-8",
  "level": "2",
  "url": "sect-newton-divided-diff.html#sect-newton-divided-diff-4-8",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": "  Use the Newton Divided Differences to find the interpolating polynomial through the points given by the cumulative density function at the beginning of the chapter.                                                 First, we build the Newton Divided Difference table:                                  0                     1                               2                                    3                          4          And the interpolating polynomial is:   The coefficients of each term are the upper diagonal elements. The corresponding terms are the products of the terms up (but not including the current one). For example, the term associated with goes up to . These terms are . The resulting polynomial is the same as that in , which used the Lagrange form of the interpolation polynomial.   "
},
{
  "id": "ch-interpolation-6",
  "level": "1",
  "url": "ch-interpolation-6.html",
  "type": "Section",
  "number": "4.4",
  "title": "Hermite Interpolation",
  "body": " Hermite Interpolation   In the previous section, we studied polynomial interpolation in which a polynomial passes through the points . In this section, we consider the polynomial also satisfies the derivative conditions , , , . This is called Hermite Interpolation .  Consider an example in which a polynomial needs to satisfy the points and as well having a slope of 1 at and a slope of at . Visually, this is:          where the lines in the plot are the tangent lines to the polynomial. This polynomial must be at most order 3 (with 4 unknowns) to satisfy the 4 conditions. A crude way to proceed would be to write:   Applying and leads to and . If we set and we get: and solve for and (using some linear algebra) results in and , thus the polynomial is:   In short, Hermite polynomials exist and are unique much like Lagrange polynomials. The proofs are similar to that shown in however a bit more complicated in that the form of the interpolation is more complicated due to the requirement that the derivative needs to match. See Burden and Faires, Burden:2004fk for more information about this.    Hermite Interpolation Implementation  The form presented above is not a simple way to find the polynomial coefficients as the degree of the polynomial gets large. Instead, we proceed in a way which closely follows that of Newton Divided Differences.  The idea behind using Newton Divided Differences in Hermite interpolation is as follows. Let and for . However some of the difference formulas will have the form: which has the form . When this situation arises, let .  The Newton Divide Difference table for two points and (or the four points ).        First divided  Second divided          difference  difference                                                                             If additional points are needed, the divided difference table can be continued in a similar manner.    Use the Newton Divided Difference table to produce the Hermite Polynomial that satisfies and .    First let and .          1st D.D.  2nd D.D.  3rd D.D.           0                                                                          where the two boxed values are the derivative values given in the problem.  And as we saw in Newton divided difference, we produce a polynomial based on the top diagonal elements of the table. The only difference is recall that since there are two terms, there will be a term as well. The Hermite Polynomial will be: or writing it back in terms of : which is the same as seen above.    The next example applies this technique to finding a Hermite polynomial to on .    Find the Hermite Polynomial that satisfies both the function value and derivative of for and .    We will first produce a Divided Difference table:          1st D.D.  2nd D.D.  3rd D.D.  4th D.D.  5th D.D.        0  0             0  0                          1                       0    0       1                               0                     0    And then read the Hermite polynomial off the top diagonal row:   A plot both the polynomial and the sine function is:          and this shows that to the visual eye, they appear the same. If we plot the absolute value of the difference:          you can see that the error seems to be bounded by 0.003. There are error bounds for Hermite polynomials, however we will not cover them here.     "
},
{
  "id": "fig-hermite-example",
  "level": "2",
  "url": "ch-interpolation-6.html#fig-hermite-example",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": "       "
},
{
  "id": "ch-interpolation-6-3-7",
  "level": "2",
  "url": "ch-interpolation-6.html#ch-interpolation-6-3-7",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": "  Use the Newton Divided Difference table to produce the Hermite Polynomial that satisfies and .    First let and .          1st D.D.  2nd D.D.  3rd D.D.           0                                                                          where the two boxed values are the derivative values given in the problem.  And as we saw in Newton divided difference, we produce a polynomial based on the top diagonal elements of the table. The only difference is recall that since there are two terms, there will be a term as well. The Hermite Polynomial will be: or writing it back in terms of : which is the same as seen above.   "
},
{
  "id": "ch-interpolation-6-3-9",
  "level": "2",
  "url": "ch-interpolation-6.html#ch-interpolation-6-3-9",
  "type": "Example",
  "number": "4.4.3",
  "title": "",
  "body": "  Find the Hermite Polynomial that satisfies both the function value and derivative of for and .    We will first produce a Divided Difference table:          1st D.D.  2nd D.D.  3rd D.D.  4th D.D.  5th D.D.        0  0             0  0                          1                       0    0       1                               0                     0    And then read the Hermite polynomial off the top diagonal row:   A plot both the polynomial and the sine function is:          and this shows that to the visual eye, they appear the same. If we plot the absolute value of the difference:          you can see that the error seems to be bounded by 0.003. There are error bounds for Hermite polynomials, however we will not cover them here.   "
},
{
  "id": "sect-intro-quadrature",
  "level": "1",
  "url": "sect-intro-quadrature.html",
  "type": "Section",
  "number": "5.1",
  "title": "Numerical Differentiation",
  "body": " Numerical Differentiation   In this section, we examine how to approximate the derivative of a function at some point. There are numerous approximations and we will also estimate the error.  Recall that the definition of the derivative of a function at a point is So for some , we can write down an estimate of the derivative with where . This formula is called the forward difference formula . Note also that this formula is the Newton Divided Difference formula as in . Thus, as we mentioned in divided difference formulas are like derivatives.    Two-Point Difference Formulas  In this section, we examine the derivative formula as well as errors associated with the derivative. First, we will consider derivative formulas that are based on two points.  Let where is the interpolating polynomial that passes through and and the second term is the error (as seen in ).  Since we can write as the Lagrange form of the linear interpolating polynomial from and as and differentiating, the results are   Differentiating , one gets   Evaluating at both and , one gets: The forward difference formula and backwards difference formula for are respectively: and the error associated with each is . In particular, the error is for some .  In the case of the 2-point first derivatives, the forward and backward difference formulas are the same. We will see for 3-point (and higher) formulas that they won't be.     -point formula for   Now that we have seen the 2-point formulas, we can generalize to -point formulas using the following steps. If the function is known at the points: , , , , then to find at these points, then     Write the general interpolating polynomial, . through the -points . (Generally the Lagrange form of the polynomial is used.)    Find .    Evaluate for .     Also, generally, the formulas are found such that , that is the points are equally-spaced with spacing . If, in addition, the error formula is sought, recall that the polynomial interpolation error is given as where   Then find for the desired point .    3- and 5-point formulas for   We now apply the general results to find 3-point formulas for . First, to find the 3-point formula we find the interpolated polynomial : and let and ,   There are three formulas for 3-pt difference formulas when is evaluated , and . where is called the 3-point forward difference formula for  , is called the 3-point center difference formula for  and is called the 3-point backward difference formula for  .  Next, we examine the error formulas for these numerical derivatives. The error formula for the order-2 interpolation is: and differentiating leads to   To find the error associated with the forward, center and backward difference formulas, evaluate at and to get   The main importance of these formulas is that they are all methods.    Use the 3-point forward difference formula in above to estimate if and and . Provide a theoretical error bound and compare it to the actual derivative.    First, the forward difference formula applied to this problem is and recall that .  The theoretical error bound is and since the actual error is 0.083, within the theoretical error bound.    The next example uses a CAS to do the algebra and calculus to find the 5-point formula for .    REDO USING MATLAB  Find the 5-point center difference formula for using a Computer Algebra System:  We will use Maple commands here. First, we will need the CurveFitting package.   with(CurveFitting):   Create the polynomial:   Pn:=PolynomialInterpolation([seq([ , ],i=0..4)],z):   where the colon is used to suppress the output. You may remove it to see a number of pages of output. Note: this is a polynomial in because the points are chosen to be in term of .  Next, differentiate the interpolating polynomial:   dPn:=diff(Pn,z):   and then substitute in the points. The polynomial is to be evaluated at and then the other points are written in terms of and .   simplify(eval(dPn, , , , , ))   and the output should be which can be written back in terms of as:   This is the 5-point difference formula for at , the center point. Note that is missing from the formula. This is similar to the center point missing in the 3-point formula for in .      Three-point numerical formulas for   For the 3-point formula for , we need to differentiate the order-2 interpolated polynomial, . Since we have already found , we then differentiate , and evaluating this at and results in the same formula for each. Thus the 3-point forward difference forward for  , the 3-point center difference forward for  , and the 3-point backward difference forward for  are each the same as given in .  To determine the error in this formula, differentiate . and evaluating this at and results in   Thus the forward and backward difference formulas are methods and the center difference formula is .    Higher Order Numerical derivatives  The examples in this section show how to derive specific formulas for and . Following similar techniques, one can derive forward, center and backward difference formulas for any order derivative using the same basic steps:     Find an interpolating polynomial, that passes through the desired points. (Note: often these are equally spaced in that , however this is not necessary.) The order of the polynomial must be at least one less than the number of points in the formula (That is, a 7-point formula must have a order of at least 6).    Find the desired derivative of .    Substitute in the value of where one wants the derivative.      "
},
{
  "id": "sect-intro-quadrature-2-2",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forward difference formula "
},
{
  "id": "sect-intro-quadrature-3-6",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forward difference formula backwards difference formula "
},
{
  "id": "sect-intro-quadrature-5-3",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "3-point forward difference formula for  3-point center difference formula for  3-point backward difference formula for  "
},
{
  "id": "sect-intro-quadrature-5-7",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-5-7",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": "  Use the 3-point forward difference formula in above to estimate if and and . Provide a theoretical error bound and compare it to the actual derivative.    First, the forward difference formula applied to this problem is and recall that .  The theoretical error bound is and since the actual error is 0.083, within the theoretical error bound.   "
},
{
  "id": "sect-intro-quadrature-5-9",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-5-9",
  "type": "Example",
  "number": "5.1.2",
  "title": "",
  "body": "  REDO USING MATLAB  Find the 5-point center difference formula for using a Computer Algebra System:  We will use Maple commands here. First, we will need the CurveFitting package.   with(CurveFitting):   Create the polynomial:   Pn:=PolynomialInterpolation([seq([ , ],i=0..4)],z):   where the colon is used to suppress the output. You may remove it to see a number of pages of output. Note: this is a polynomial in because the points are chosen to be in term of .  Next, differentiate the interpolating polynomial:   dPn:=diff(Pn,z):   and then substitute in the points. The polynomial is to be evaluated at and then the other points are written in terms of and .   simplify(eval(dPn, , , , , ))   and the output should be which can be written back in terms of as:   This is the 5-point difference formula for at , the center point. Note that is missing from the formula. This is similar to the center point missing in the 3-point formula for in .   "
},
{
  "id": "sect-intro-quadrature-6-2",
  "level": "2",
  "url": "sect-intro-quadrature.html#sect-intro-quadrature-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "3-point forward difference forward for  3-point center difference forward for  3-point backward difference forward for  "
},
{
  "id": "sect-intro-quadature",
  "level": "1",
  "url": "sect-intro-quadature.html",
  "type": "Section",
  "number": "5.2",
  "title": "The Basics of Numerical Integration or Quadrature",
  "body": " The Basics of Numerical Integration or Quadrature   We now turn to a more-important aspect of numerical calculus, numerical integration or quadrature. It is not difficult to find a function that doesn't have an antiderivative that can written in terms of our standard set of functions. For example, we will use the integral which is similar to that is related to the normal curve in Probability and Statistics. There is no simple antiderivative of and thus we need to resort to other methods to evaluate for values of .  The basic idea behind quadrature is that for a continuous function on an interval , we wish to find   Most quadrature formulas take on the form: where are called the quadrature points and are called the weights . The various methods we will see in this section and subsequent sections will differ based on finding different values of the nodes and weights.  This may look similar to that of a Riemann sum from Calculus. You may recall that the Riemann sum (for a finite number of rectangles) is an approximation to the area under the curve or the definite integral. Typically, if , that is the points used in evaluation are equally spaced, then is the Riemann sum.    Newton-Cotes Formulas  The first class of formulas for quadrature that we will see are called the Newton-Cotes Formulas . In this case, we will use interpolating polynomials (usually using equally-spaced points) to approximate the function, then integrate the polynomial.  First, write the interpolating polynomial in terms of the Lagrange polynomials, ,   Let be the definite integral of on or where   We now look at specific cases for , the order of the interpolating polynomial.     case  In this case, there are two points, and . therefore the weights are:   Although these integrals are not difficult to do, they are easier if we change variables. Let where , then these integrals become:   Thus the quadrature formula is   This formula is called the trapezoid rule, because the integral is equivalent to the area of the trapezoid formed by the points , , , and as seen in the plot below.          The trapezoid is the shaded area in the plot above and approximates the integral of from to .  The Trapezoid Rule is an approximation to , given by      case  In this case, we will use a quadratic function (parabola) that interpolates the data and then will be integrated. To do this, we use the following 3 points to determine the interpolating polynomial: and we will define to be half the total distance between and . The Lagrange polynomials through these points are: and the weights are:   If we define , these can be written: so the quadrature formula in this case using the above points and weights and substituting into can be written as follows.  The quadrature formula that uses three equally-spaced points is given by and is called Simpson's Rule .  We now see a example from the start of this section that uses the trapezoid and Simpson's rule to evaluate an integral.    Let      Estimate using the Trapezoid Rule.    In this case .       Estimate using Simpson's Rule.    In this case .      For comparison, we will later show that which shows that Simpson's Rule is correct to 3 decimal places and the trapezoid rule is correct to only 1 digit.    Other Newton-Cotes  Other Newton-Cotes formula can be found by taking more points. In the case, there are 4 points and 4 weights and it can be shown that so using these weights as well as and in is which is called the 3\/8-rule .  Lastly, when , one can show that the weights are and using with in (eq:quad:basic) results in Boole's Rule for quadrature     Use the three-eighths rule and Boole's rule to estimate .  In this case, and which is accurate to nearly 4 decimal places and with Boole's rule, and which is accurate to 5 decimal places.      Error Formulas for Newton-Cotes  In this section, we will find error formulas for the Newton-Cotes rules derived above. That is, we will be able to determine theoretically how close the quadrature formula (approximation) is to the actual integral.    The degree of precision or accuracy of a quadrature rule is the positive integer such that     In short the degree of precision of a quadrature formula is the highest degree polynomial that is integrated exactly. Due to the linearly of integration (and hence quadrature), it is sufficient to integrate only powers of to determine the degree of precision.    If a rule integrates 1, and exactly, but not , then the degree of precision is 2.      Find the degree of precision for Simpson's Rule.    We build a table of the integrals of and Simpson's Rule,                       0  1          1             2             3             4             Since Simpson's rule integrates exactly for but not , the degree of precision is 3.    The next example shows that we can use the degree of precision to find the weights. This is an alternative to using the interpolation polynomial to find the .    Find and such that the quadrature rule on for given by has as high a degree of precision as possible and .    First, recall that   Therefore we need to apply this quadrature formula for , as large as possible.     If , , so we apply this to the given quadrature rule.     If , then and applying this to the quadrature rule,   Solving the two equations above and using the definition of , we get:      So the quadrature rule becomes:   If we apply this formula to , we get which is not , so this quadrature rule has degree of precision 1.  This is an example of a Newton-Cotes open quadrature formula because the points do not include the endpoints.    An open quadrature formula does not include the endpoints. This can be useful for calculating improper integrals. For example, exists even though the integrand evaluated at does not.  Next, we examine the error associated with quadrature formulas, but first need the following theorem.   Weighted Mean Value Theorem   If is continuous on , is integrable on and does not change sign on , then there exists a number such that     Suppose on . Since is continuous on , it reaches a min and max on the interval, or so for all . Thus,   If then also equals zero since we assumed that , so any satisfies the theorem. Otherwise, . Therefore   Applying the intermediate value theorem, there exists a number , such that   If , then a similar argument can be made, thus the theorem holds true.     Error Formula for Trapezoid Rule   If , and is the trapezoid rule given in , then there exists an such that     First, start with the interpolating polynomial error formula with from .     If we integrate then where as shown above. Since does not change sign, we can apply the weighted mean value theorem applied to the integral in the last term, there is an such that     This theorem is quite useful for finding error bounds when using the trapezoid rule to approximate a definite integral. It also gives the degree of precision for the trapezoid rule. If we integral , then the error given by the second term in Theorem thm:error:trap which is proportional to is 0 for and , but not . Therefore the degree of precision is 1.   Error Formula for Simpson's Rule   If and is the formula for Simpson's rule applied to on , then there exists a such that     Using an argument similar to that that above about the trapezoid rule, this shows that Simpson's Rule has degree of precision of 3. The proof of this is more difficult than that of the error associated with the trapezoid rule, so is skipped. See Isaacson:1966fj for more information.    Use the Error Formula for Simpson's Rule to find a theoretical error bound of .    First, one can show that if then   The maximum of this function on the interval occurs when and is 12, so   Thus the error, defined as   This means that the value for in is accurate to 0.004285.    The next theorem shows that the error formula for any closed Newton-Cotes quadrature rules takes on a certain form and thus the degree of precision can be derived.   Error Formula for Closed Newton-Cotes Quadrature   If denotes the Closed Newton-Cotes Quadrature Rule with nodes, then   if is even and , then there exist constants and such that and the degree of precision of is .    if is odd and , then there exists constants and such that and the degree of precision is .       The proof of this theorem is not given but can be found in Bradie:2006qy.    Use the Error formula for Closed Newton-Cotes quadrature rules above to determine the degree of precision of Boole's rule.    In the case of Boole's rule, , thus the exists constants and such that where is Boole's rule. The error is proportional to , thus the degree of precision is 5.      Exercises and Projects    In , we derived an open Newton-Cotes formula for quadrature. An alternative way to derive these is to do a similar analysis of quadrature that we did above for the closed Newton-Cotes formulas.  Investigate the Open Newton-Coates formula and provide examples of applying the formula for various functions. Note that these can be helpful for analyzing type II improper integrals (see a standard calculus book).      Consider an integral of the form: or   The way to handle these integrals is to do a transformation (substitution) that maps from or to a finite interval, say and then perform a standard quadrature technique on the transformed integral.  Investigate some possible transformations, apply some standard techniques and find error formulas for the new quadrature formula.     "
},
{
  "id": "fig-trapezoid",
  "level": "2",
  "url": "sect-intro-quadature.html#fig-trapezoid",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "sect-intro-quadature-4-8",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-4-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Trapezoid Rule "
},
{
  "id": "sect-intro-quadature-5-4",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simpson's Rule "
},
{
  "id": "ex-trap-simp",
  "level": "2",
  "url": "sect-intro-quadature.html#ex-trap-simp",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Let      Estimate using the Trapezoid Rule.    In this case .       Estimate using Simpson's Rule.    In this case .     "
},
{
  "id": "sect-intro-quadature-6-2",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "3\/8-rule "
},
{
  "id": "sect-intro-quadature-6-4",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-6-4",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Use the three-eighths rule and Boole's rule to estimate .  In this case, and which is accurate to nearly 4 decimal places and with Boole's rule, and which is accurate to 5 decimal places.   "
},
{
  "id": "sect-intro-quadature-7-3",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-3",
  "type": "Definition",
  "number": "5.2.4",
  "title": "",
  "body": "  The degree of precision or accuracy of a quadrature rule is the positive integer such that    "
},
{
  "id": "sect-intro-quadature-7-5",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-5",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  If a rule integrates 1, and exactly, but not , then the degree of precision is 2.   "
},
{
  "id": "sect-intro-quadature-7-6",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-6",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Find the degree of precision for Simpson's Rule.    We build a table of the integrals of and Simpson's Rule,                       0  1          1             2             3             4             Since Simpson's rule integrates exactly for but not , the degree of precision is 3.   "
},
{
  "id": "ex-open-newton-coates",
  "level": "2",
  "url": "sect-intro-quadature.html#ex-open-newton-coates",
  "type": "Example",
  "number": "5.2.7",
  "title": "",
  "body": "  Find and such that the quadrature rule on for given by has as high a degree of precision as possible and .    First, recall that   Therefore we need to apply this quadrature formula for , as large as possible.     If , , so we apply this to the given quadrature rule.     If , then and applying this to the quadrature rule,   Solving the two equations above and using the definition of , we get:      So the quadrature rule becomes:   If we apply this formula to , we get which is not , so this quadrature rule has degree of precision 1.  This is an example of a Newton-Cotes open quadrature formula because the points do not include the endpoints.   "
},
{
  "id": "sect-intro-quadature-7-11",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-11",
  "type": "Theorem",
  "number": "5.2.8",
  "title": "Weighted Mean Value Theorem.",
  "body": " Weighted Mean Value Theorem   If is continuous on , is integrable on and does not change sign on , then there exists a number such that     Suppose on . Since is continuous on , it reaches a min and max on the interval, or so for all . Thus,   If then also equals zero since we assumed that , so any satisfies the theorem. Otherwise, . Therefore   Applying the intermediate value theorem, there exists a number , such that   If , then a similar argument can be made, thus the theorem holds true.   "
},
{
  "id": "thm-error-trap",
  "level": "2",
  "url": "sect-intro-quadature.html#thm-error-trap",
  "type": "Theorem",
  "number": "5.2.9",
  "title": "Error Formula for Trapezoid Rule.",
  "body": " Error Formula for Trapezoid Rule   If , and is the trapezoid rule given in , then there exists an such that     First, start with the interpolating polynomial error formula with from .     If we integrate then where as shown above. Since does not change sign, we can apply the weighted mean value theorem applied to the integral in the last term, there is an such that    "
},
{
  "id": "thm-error-simp",
  "level": "2",
  "url": "sect-intro-quadature.html#thm-error-simp",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "Error Formula for Simpson’s Rule.",
  "body": " Error Formula for Simpson's Rule   If and is the formula for Simpson's rule applied to on , then there exists a such that    "
},
{
  "id": "sect-intro-quadature-7-16",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-16",
  "type": "Example",
  "number": "5.2.11",
  "title": "",
  "body": "  Use the Error Formula for Simpson's Rule to find a theoretical error bound of .    First, one can show that if then   The maximum of this function on the interval occurs when and is 12, so   Thus the error, defined as   This means that the value for in is accurate to 0.004285.   "
},
{
  "id": "sect-intro-quadature-7-18",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-18",
  "type": "Theorem",
  "number": "5.2.12",
  "title": "Error Formula for Closed Newton-Cotes Quadrature.",
  "body": " Error Formula for Closed Newton-Cotes Quadrature   If denotes the Closed Newton-Cotes Quadrature Rule with nodes, then   if is even and , then there exist constants and such that and the degree of precision of is .    if is odd and , then there exists constants and such that and the degree of precision is .      "
},
{
  "id": "sect-intro-quadature-7-20",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-7-20",
  "type": "Example",
  "number": "5.2.13",
  "title": "",
  "body": "  Use the Error formula for Closed Newton-Cotes quadrature rules above to determine the degree of precision of Boole's rule.    In the case of Boole's rule, , thus the exists constants and such that where is Boole's rule. The error is proportional to , thus the degree of precision is 5.   "
},
{
  "id": "sect-intro-quadature-8-2",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-8-2",
  "type": "Project",
  "number": "5.2.1",
  "title": "",
  "body": "  In , we derived an open Newton-Cotes formula for quadrature. An alternative way to derive these is to do a similar analysis of quadrature that we did above for the closed Newton-Cotes formulas.  Investigate the Open Newton-Coates formula and provide examples of applying the formula for various functions. Note that these can be helpful for analyzing type II improper integrals (see a standard calculus book).   "
},
{
  "id": "sect-intro-quadature-8-3",
  "level": "2",
  "url": "sect-intro-quadature.html#sect-intro-quadature-8-3",
  "type": "Project",
  "number": "5.2.2",
  "title": "",
  "body": "  Consider an integral of the form: or   The way to handle these integrals is to do a transformation (substitution) that maps from or to a finite interval, say and then perform a standard quadrature technique on the transformed integral.  Investigate some possible transformations, apply some standard techniques and find error formulas for the new quadrature formula.   "
},
{
  "id": "sect-composite-newton-cotes",
  "level": "1",
  "url": "sect-composite-newton-cotes.html",
  "type": "Section",
  "number": "5.3",
  "title": "Composite Newton-Cotes Quadrature",
  "body": " Composite Newton-Cotes Quadrature   In the previous section, we developed a class of numerical integration techniques called Newton-Cotes Quadrature formulas. In this case we break down an integral into smaller subintervals and then apply the formulas from the previous section.  If we let where , for some positive integer, we can write where is some quadrature formula on . Note, in this section, the subscript does not determine the quadrature formula (like trapezoid or Simpson's). Instead it only determines the interval on which the formula is applied.    Composite Trapezoid  Recall that the Trapezoid Rule with its error term from is and applying this to the interval is   So applying this on subintervals of length is   And this can be written more compactly.  The Composite Trapezoid Rule on for equally-spaced subintervals is designated and is where and .  Let's look at the error formula a bit more carefully. Let and be defined to be: therefore for each . If we sum over from 1 to , we get:   By the Intermediate Value Theorem there exists a number such that   The error at the end of can now be written: Where has been used. Therefore,   The error of the Composite trapezoid rule is therefore: for some .    Find using the composite trapezoid rule with . Find a bound on the error.    In this case .   To find a bound on the error, we use and need a bound on the second derivative of . It can be shown that and this reaches a maximum (in absolute value) at , so . Using ,   Recall that this is a theoretical error bound and the actual error is about .      Rate of Convergence   shows that the error is . The following example will also show this is true numerically.    Show numerically that the error of composite trapezoid rule is by the following. Find for where on . Build a table of errors and show that appears to converge to 4.    First, we will find for . To demonstrate the first few, for , , so and when , , so and so on. The error is given by and finally a ratio is calculated. The following table lists all these values for .                                                                                                                                                                             An method will have because since     We will show later in this chapter that knowing that the trapezoid rule is will allow us to create an accelerated quadrature method called Romberg integration.    Composite Simpson's Rule  Since Simpson's Rule has 2 subintervals, when we extend it to a composite Simpson's rule, we need an even number of subintervals for , so let , and for .  If represents Simpson's Rule on , then  Composite Simpson's Rule on the interval is given by for even and and .The error associated with Simpson's rule is for some number .  The error analysis above for Simpson's rule is similar to that found in the composite trapezoid rule above.    Find using composite Simpson's rule and . (That is, ). Also, find the theoretical error bound using on .    First, note that the nodes are for and . Let .   The error can be found by using (eq:comp:simp:error), so the approximate value of the integral given above is guaranteed accurate to 5 decimal places.    The methods given here in this section can be extended to the other Newton-Cotes rules like the 3\/8-rule and Boole's rule. However, they are generally not used. It is often simpler to stay with the composite trapezoid or Simpson's rule and use more subintervals to decrease the error. Also as we will see at the end of this chapter an accelerated method using composite trapezoid method will often generate more accurate results with fewer function evaluations.   "
},
{
  "id": "sect-composite-newton-cotes-3-5",
  "level": "2",
  "url": "sect-composite-newton-cotes.html#sect-composite-newton-cotes-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Composite Trapezoid Rule "
},
{
  "id": "ex-comp-trap",
  "level": "2",
  "url": "sect-composite-newton-cotes.html#ex-comp-trap",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Find using the composite trapezoid rule with . Find a bound on the error.    In this case .   To find a bound on the error, we use and need a bound on the second derivative of . It can be shown that and this reaches a maximum (in absolute value) at , so . Using ,   Recall that this is a theoretical error bound and the actual error is about .   "
},
{
  "id": "sect-composite-newton-cotes-4-3",
  "level": "2",
  "url": "sect-composite-newton-cotes.html#sect-composite-newton-cotes-4-3",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Show numerically that the error of composite trapezoid rule is by the following. Find for where on . Build a table of errors and show that appears to converge to 4.    First, we will find for . To demonstrate the first few, for , , so and when , , so and so on. The error is given by and finally a ratio is calculated. The following table lists all these values for .                                                                                                                                                                             An method will have because since    "
},
{
  "id": "sect-composite-newton-cotes-5-3",
  "level": "2",
  "url": "sect-composite-newton-cotes.html#sect-composite-newton-cotes-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Composite Simpson's Rule "
},
{
  "id": "sect-composite-newton-cotes-5-5",
  "level": "2",
  "url": "sect-composite-newton-cotes.html#sect-composite-newton-cotes-5-5",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  Find using composite Simpson's rule and . (That is, ). Also, find the theoretical error bound using on .    First, note that the nodes are for and . Let .   The error can be found by using (eq:comp:simp:error), so the approximate value of the integral given above is guaranteed accurate to 5 decimal places.   "
},
{
  "id": "sect-gauss-quad",
  "level": "1",
  "url": "sect-gauss-quad.html",
  "type": "Section",
  "number": "5.4",
  "title": "Gaussian Quadrature",
  "body": " Gaussian Quadrature   Recall that a quadrature rule approximates with a formula for nodes (or quadrature points) and are the weights. The concept of Gaussian Quadrature is the formula that determines the weights and nodes with the highest degree of precision.  Also, in the derivations below, we will find the integral with and for simplicity. For general intervals, a linear conversion can be made.    2-point Gaussian Quadrature Formula  In this case the quadrature formula will be and we want to find , which is in contrast to Newton-Cotes formulas where we knew and .     Applying this formula for results in the following nonlinear system:   Next, we solve this nonlinear system. First, find in , and substitute this into to arrive at   This results in either , , or .  If is substituted into , one gets   If , or , there is no solution to this, therefore, . Using this result in means that and from , both weights must be 1.  Lastly, substituting , into , we get:   so and .  The 2-point Gaussian Quadrature formula for on is given by   We will see in that the quadratic in is special. It is called a Legendre polynomial and the roots of it are the nodes for Gaussian Quadrature. The next example shows an application of Gaussian quadrature.    Use the two-point Gaussian Quadrature formula in to approximate .    In this case,   Note that the actual value of the integral is .    The above example shows the usefulness of Gaussian quadrature. Since evaluated at each endpoint is 0, the trapezoid rule applied to this is 0 and Simpson's rule is 4\/3. By selecting other nodes, Gaussian quadrature is often much more accurate than the Newton-Cotes formulas.    Gaussian Quadrature on   In this case, we translate the interval to as we have seen before. If and then   Therefore the 2-point Gaussian quadrature formula in can be written as     Use to approximate .    In this case , and we get which has error of 2.29 . Note that this error is better than the composite trapezoid rule with seen in the previous section in .      3-point Gaussian Quadrature Formula  The next more-accurate Gaussian Quadrature Formula is using 3 nodes. That is, if we let to have the highest precision on the interval . If we apply for , the result is:   Although this may be a nightmare to try to solve by hand, a CAS (like Maple) can generate the solution as: The 3-point Gaussian Quadrature formula for approximating is:   Note, the solutions for above are the roots of the polynomial which is also a Legendre polynomial. We will discuss this is more generality in .    Use the 3-point Gaussian Quadrature formula in as well as the interval conversion in to find an approximation to     Using , the three points become: and using ,   Note that the that multiplies in front is the term due to the change in length of the interval. Also, the quadrature result is within of the correct answer.      Error Formula of Gaussian Quadrature  The error associated with Gaussian quadrature can be found in much the same manner that we found for the Newton-Cotes formulas in . In short, the error associated with the interpolated polynomial is used and upon integration an error formula can be found. We won't go into the details here mainly because the irregular spacing of the nodes (roots of Legendre polynomials) make the calculation more difficult than we saw for Newton-Cotes.   "
},
{
  "id": "sect-gauss-quad-3-13",
  "level": "2",
  "url": "sect-gauss-quad.html#sect-gauss-quad-3-13",
  "type": "Example",
  "number": "5.4.1",
  "title": "",
  "body": "  Use the two-point Gaussian Quadrature formula in to approximate .    In this case,   Note that the actual value of the integral is .   "
},
{
  "id": "sect-gauss-quad-4-4",
  "level": "2",
  "url": "sect-gauss-quad.html#sect-gauss-quad-4-4",
  "type": "Example",
  "number": "5.4.2",
  "title": "",
  "body": "  Use to approximate .    In this case , and we get which has error of 2.29 . Note that this error is better than the composite trapezoid rule with seen in the previous section in .   "
},
{
  "id": "sect-gauss-quad-5-5",
  "level": "2",
  "url": "sect-gauss-quad.html#sect-gauss-quad-5-5",
  "type": "Example",
  "number": "5.4.3",
  "title": "",
  "body": "  Use the 3-point Gaussian Quadrature formula in as well as the interval conversion in to find an approximation to     Using , the three points become: and using ,   Note that the that multiplies in front is the term due to the change in length of the interval. Also, the quadrature result is within of the correct answer.   "
},
{
  "id": "ch-quadrature-7",
  "level": "1",
  "url": "ch-quadrature-7.html",
  "type": "Section",
  "number": "5.5",
  "title": "Richardson Extrapolation and Romberg Integration",
  "body": " Richardson Extrapolation and Romberg Integration   We have seen two different types of quadrature formulas here, both Newton-Cotes and Gaussian Quadrature evaluate the function on a fixed number of points, whereas the composite Newton-Cotes formulas refine the interval by breaking it up into subintervals first. This increases the accuracy of the method at the expense of increasing the number of operations.  In a manner similar to that of acceleration rootfinding as in Section sect:accel:conv, we will see in this section that we can use the Newton-Cotes composite formulas and an acceleration to speed up the rate of convergence of quadrature formulas.    Richardson Extrapolation  Suppose that we have a method that has a predictable error formula. For example, let be the exact answer and be the approximation that depends on . Thus consider an approximation such that the error can be expressed, for some constants . This method is an method since is non-zero.  Richard extrapolation exploits knowledge of the order of a method to improve its order of convergence. If we evaluate at and we get,   Multiplying by 2 and subtracting results in where is a function of and is a function of . The term has canceled. Also, the exact form of and does not matter.  For convenience, we label and and thus can be written as: and evaluating at results in and similar to that above if we multiply by 4 and subtract the result is and dividing by 3 results in and define as the first two term on the right hand side or   If we continue this process, then we can define the following: and is an order approximation of .  The values of can be created in a table as follows:                                                                                                                     By building up such a table, the values to the right and down are more accurate. Generally, the last diagonal element will be the most accurate.  The next example shows that we can use this method to improve the forward difference formula to approximate the derivative.    Create a Richardson Extrapolation table to to find for using the forward difference formula in . Use .    In this case we build the table above, row by row. We will need the following:   Next, we create the table:                     0.63661977            0.90031631  1.16401285          0.97449535  1.04867440  1.01022825        0.99358685  1.01267834  1.00067965  0.99931556    0.99839439  1.00320193  1.00004313  0.99995219  0.99999464    where the first column in as seen above and the th column is , calculated from and using the column before it.  As you can tell, the last row, last column is the most accurate value of , valid to 5 digits. This was based using the first column, of which the most accurate in that column was only 2 digits accurate.      Richardson Extrapolation for other error schemes  The Richard Extrapolation explained above relied on the fact that the error between the actual value and the approximation were successive powers of as seen in . If instead, we had the error structure: is another common error structure and here we will examine how to apply Richardson Extrapolation for such a situation. Solving above for and evaluating it at and , the result is and taking a linear combination of these to eliminate the term one takes 4 times and subtracts to result in   Defining and then   Similarly, define   In performing Richardson extrapolation in this case, a table is create with the first column of , the numerical approximation for the given step size. The remaining columns are filled in with .  In the next section, we will see how to apply Richardson extrapolation in this case to that of integration.    Romberg Integration  The technique of Richardson Extrapolation can be applied to any situation in which the error formula can be written as powers of . Romberg integration uses this with composite trapezoid rule to develop a fast-converging quadrature scheme.  It can be shown that composite trapezoid rule can be written as which fits the error scheme from . Thus Romberg integration creates a table based on the composite trapezoid rule and Richardson extrapolation.  The first column in a table will be the composite trapezoid rule. The th row in this column will be the rule with . Define .   and extending this in general leads to   Using this formula along with Richardson extrapolation, which applied in this case to results in   Typically a table is created using 1) which is the trapezoid rule given in and 2) the relation in . We will see this in the following example.    Perform Romberg integration to evaluate . Create a table of 4 rows.    The first column, needs to be filled with composite trapezoid rule as explained above. That is, for apply (eq:romberg:first). The other values of is found using (eq:romberg:first:col).   Next, using , the columns are filled from left to right to get:    n                1  0.7853981633      2  0.9480594489  1.0022798774    3  0.9871158009  1.0001345849  0.9999915654    4  0.9967851718  1.0000082955  0.9999998762  1.0000000081    The result in has an absolute error of about , which is remarkable in that the best approximation in the first column is only to 2 digits.    Generally Romberg integration is performed in a manner that builds up a table until the desired accuracy is found. That is, the table is created row by row until two consecutive numbers on the diagonal are found within the desired level of error. The following example shows this.    Use Romberg integration to find to within .    First, we start by calculating and using (eq:romberg:first) and (eq:romberg:first:col)   Then use (eq:romberg) to find :   Since , another row of the table is built using (eq:romberg:first:col)   Then and are computed using (eq:romberg)   Since , this is still not within the desired error. At least one more row must be calculated.   Then , and are computed: and now , so we can stop here. The approximate value of the integral is .     "
},
{
  "id": "ch-quadrature-7-3-11",
  "level": "2",
  "url": "ch-quadrature-7.html#ch-quadrature-7-3-11",
  "type": "Example",
  "number": "5.5.1",
  "title": "",
  "body": "  Create a Richardson Extrapolation table to to find for using the forward difference formula in . Use .    In this case we build the table above, row by row. We will need the following:   Next, we create the table:                     0.63661977            0.90031631  1.16401285          0.97449535  1.04867440  1.01022825        0.99358685  1.01267834  1.00067965  0.99931556    0.99839439  1.00320193  1.00004313  0.99995219  0.99999464    where the first column in as seen above and the th column is , calculated from and using the column before it.  As you can tell, the last row, last column is the most accurate value of , valid to 5 digits. This was based using the first column, of which the most accurate in that column was only 2 digits accurate.   "
},
{
  "id": "ch-quadrature-7-5-8",
  "level": "2",
  "url": "ch-quadrature-7.html#ch-quadrature-7-5-8",
  "type": "Example",
  "number": "5.5.2",
  "title": "",
  "body": "  Perform Romberg integration to evaluate . Create a table of 4 rows.    The first column, needs to be filled with composite trapezoid rule as explained above. That is, for apply (eq:romberg:first). The other values of is found using (eq:romberg:first:col).   Next, using , the columns are filled from left to right to get:    n                1  0.7853981633      2  0.9480594489  1.0022798774    3  0.9871158009  1.0001345849  0.9999915654    4  0.9967851718  1.0000082955  0.9999998762  1.0000000081    The result in has an absolute error of about , which is remarkable in that the best approximation in the first column is only to 2 digits.   "
},
{
  "id": "ch-quadrature-7-5-10",
  "level": "2",
  "url": "ch-quadrature-7.html#ch-quadrature-7-5-10",
  "type": "Example",
  "number": "5.5.3",
  "title": "",
  "body": "  Use Romberg integration to find to within .    First, we start by calculating and using (eq:romberg:first) and (eq:romberg:first:col)   Then use (eq:romberg) to find :   Since , another row of the table is built using (eq:romberg:first:col)   Then and are computed using (eq:romberg)   Since , this is still not within the desired error. At least one more row must be calculated.   Then , and are computed: and now , so we can stop here. The approximate value of the integral is .   "
},
{
  "id": "sect-intro-approximation",
  "level": "1",
  "url": "sect-intro-approximation.html",
  "type": "Section",
  "number": "6.1",
  "title": "Introduction to Approximation Theory",
  "body": " Introduction to Approximation Theory   A very important subject in numerical analysis is that of approximation theory. In a nutshell, one desires to approximate one function by another function. For example, let . Although most computers and calculators will quickly evaluate this, let’s ignore that fact and try to think of how to do it with only the standard 4 operations: addition, subtraction, multiplication and division.  In order to evaluate for arbitrary values of , one way from calculus is to use the Maclaurin series   We learned in calculus that this series converges for any value of —the problem is that it may take a huge number of terms to find to a desired accuracy. In this section, we learn how to approximate functions like or a set of data using other functions, generally polynomials and rational functions.    Norms of Functions  As discussed, we seek a function (often a polynomial) that is “close” to the target function. In this section, we define carefully what this means. In order to do this, we discuss norms.    A norm is a function over a field , where is a vector space, that satisfies the following three properties for all and ,    ,     (This is called the triangle inequality.)     and if and only if , the zero vector.       Generally the field is either or , the sets of reals and complex numbers respectively.  If the vector space , the set of all real vectors of length , then a often-used norm is the Euclidean norm. If and   then the Euclidean norm is   and this can be shown to satisfy the three properties above.  The Euclidean norm gives the length of the vector in or and can be used to define the length in higher orders. In addition, the norm can be used to determine the distance between two point. If and are vectors in , then the distance between and is and reduce to the distance between points in and .  Recall that the notion of vector space is broad. Although it often applies to vectors and matrices, the set of polynomials of a given degree and the set of continuous functions on are examples of vector spaces.  Three standard norms are often called the and . For , the norms and are defined as   The , and norms of a function on an interval are defined   We will see that these norms play a large role in approximation theory. In short, we are looking for a function to approximate another function or a set of data. We will use one of the norms to determine how far the two are away from each other.    Inner Product Spaces  The vector space is called an inner product space if for every pair of vectors and in there is a unique number , called the inner product of and such that if and are in and then      ,     ,     and equals 0 if and only if .       Show that is an inner product space with and and .    First, the set is a vectors space. Next, we need to show that the three properties are satisfied.      so the first property is satisfied.        which satisfies . The only time that this quantity equals 0, is when or .       The example above shows a standard way of demonstrating that something is an inner product space. Using the definition of the inner product, each property is clearly shown.    Vector Norms and distance    Let and be elements of an inner product space. The norm of the vector is given by     Note: if then the vector norm is the length of the vector.    The distance between vectors and denoted and defined as .    Note: if and are in , then the distance function is the standard distance function.    The distance if and only if .     Let , then By definition, this is only zero if , therefore .  If , then .     Angles between vectors  If and are vectors in or then   and thus the angle between the vectors can be found.  This notion generalizes to any vectors in an inner product space, . Most helpful, two vectors meet at a right angle if .    Orthonormal sets of vectors    Let each be elements of an inner product space, . The set is called an orthonormal set if and   If only the first condition holds, the set is called orthogonal .      Show that is an orthonormal set where each vector is an element of .  Note: this is also a basis for .     Cauchy-Swartz Inequality   If and are elements of an inner product space then     If , then the inequality is satisfied. Assume and define   By definition of the inner product,   This can be rearranged to get: and taking the square root, you get the desired result.      Inner Products of functions  Above, we defined an inner product space and for both motivation as well as the examples shown, we used . This is a good space to become familiar with inner product spaces, because of the familiarity of the spaces and . In this section we will apply an inner product to a function on an interval .    The inner product between functions and , denoted on the interval is defined to be:       Show that the set of continuous function on with the inner product defined above is an inner product space .    We need to show that the three properties that define the inner product are valid for .          For and , real numbers, due to the linearity of integrals,      And since ,   If , then . If , then . The second statement can be shown by contradiction. That is, assume that , and the result is that , therefore the assumption that is not correct cannot hold.     So the set of continuous functions on with the given inner product is an inner product space.    As we saw above with vectors in , there is a relationship between norms and inner products. This is true with functions as well. The -norm of the function is given by     Weighted Inner Products    The inner product between functions and on the interval with respect to weight function is defined to be:     and in a similar vein,     Find the weighted inner product between and with weight function on the interval .   using tabular integration       Orthogonal Functions  Again, as we saw above, two vectors and in are orthogonal if . Similarly, we can define two functions and to be orthogonal on if     Show that and are orthogonal on .   since is an odd function and the interval is symmetric with respect to 0.      The set is an orthogonal set of functions on  if for all such that . If, in addition, the functions satisfy , for all , then the set is called orthonormal .    Note: a set of functions can be orthogonal with respect to a weight function if the appropriate inner product is used. The following example shows this.    Show that the set of functions are orthogonal with respect to the weight function on the interval .    We need to show that each of the following inner products (integrals) are zero. so these form an orthogonal set. These three polynomials are the first three Laguerre Polynomials . There is an infinite set of these.     "
},
{
  "id": "sect-intro-approximation-3-3",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-3-3",
  "type": "Definition",
  "number": "6.1.1",
  "title": "",
  "body": "  A norm is a function over a field , where is a vector space, that satisfies the following three properties for all and ,    ,     (This is called the triangle inequality.)     and if and only if , the zero vector.      "
},
{
  "id": "sect-intro-approximation-4-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-4-4",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": "  Show that is an inner product space with and and .    First, the set is a vectors space. Next, we need to show that the three properties are satisfied.      so the first property is satisfied.        which satisfies . The only time that this quantity equals 0, is when or .      "
},
{
  "id": "sect-intro-approximation-5-2",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-5-2",
  "type": "Definition",
  "number": "6.1.3",
  "title": "",
  "body": "  Let and be elements of an inner product space. The norm of the vector is given by    "
},
{
  "id": "sect-intro-approximation-5-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-5-4",
  "type": "Definition",
  "number": "6.1.4",
  "title": "",
  "body": "  The distance between vectors and denoted and defined as .   "
},
{
  "id": "sect-intro-approximation-5-6",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-5-6",
  "type": "Lemma",
  "number": "6.1.5",
  "title": "",
  "body": "  The distance if and only if .   "
},
{
  "id": "sect-intro-approximation-5-7",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-5-7",
  "type": "Proof",
  "number": "6.1.3.1",
  "title": "",
  "body": " Let , then By definition, this is only zero if , therefore .  If , then .  "
},
{
  "id": "sect-intro-approximation-7-2",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-7-2",
  "type": "Definition",
  "number": "6.1.6",
  "title": "",
  "body": "  Let each be elements of an inner product space, . The set is called an orthonormal set if and   If only the first condition holds, the set is called orthogonal .   "
},
{
  "id": "sect-intro-approximation-7-3",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-7-3",
  "type": "Example",
  "number": "6.1.7",
  "title": "",
  "body": "  Show that is an orthonormal set where each vector is an element of .  Note: this is also a basis for .   "
},
{
  "id": "sect-intro-approximation-7-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-7-4",
  "type": "Theorem",
  "number": "6.1.8",
  "title": "Cauchy-Swartz Inequality.",
  "body": " Cauchy-Swartz Inequality   If and are elements of an inner product space then     If , then the inequality is satisfied. Assume and define   By definition of the inner product,   This can be rearranged to get: and taking the square root, you get the desired result.   "
},
{
  "id": "sect-intro-approximation-8-3",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-8-3",
  "type": "Definition",
  "number": "6.1.9",
  "title": "",
  "body": "  The inner product between functions and , denoted on the interval is defined to be:    "
},
{
  "id": "sect-intro-approximation-8-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-8-4",
  "type": "Example",
  "number": "6.1.10",
  "title": "",
  "body": "  Show that the set of continuous function on with the inner product defined above is an inner product space .    We need to show that the three properties that define the inner product are valid for .          For and , real numbers, due to the linearity of integrals,      And since ,   If , then . If , then . The second statement can be shown by contradiction. That is, assume that , and the result is that , therefore the assumption that is not correct cannot hold.     So the set of continuous functions on with the given inner product is an inner product space.   "
},
{
  "id": "sect-intro-approximation-9-2",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-9-2",
  "type": "Definition",
  "number": "6.1.11",
  "title": "",
  "body": "  The inner product between functions and on the interval with respect to weight function is defined to be:    "
},
{
  "id": "sect-intro-approximation-9-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-9-4",
  "type": "Example",
  "number": "6.1.12",
  "title": "",
  "body": "  Find the weighted inner product between and with weight function on the interval .   using tabular integration    "
},
{
  "id": "sect-intro-approximation-10-3",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-10-3",
  "type": "Example",
  "number": "6.1.13",
  "title": "",
  "body": "  Show that and are orthogonal on .   since is an odd function and the interval is symmetric with respect to 0.   "
},
{
  "id": "sect-intro-approximation-10-4",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-10-4",
  "type": "Definition",
  "number": "6.1.14",
  "title": "",
  "body": "  The set is an orthogonal set of functions on  if for all such that . If, in addition, the functions satisfy , for all , then the set is called orthonormal .   "
},
{
  "id": "sect-intro-approximation-10-6",
  "level": "2",
  "url": "sect-intro-approximation.html#sect-intro-approximation-10-6",
  "type": "Example",
  "number": "6.1.15",
  "title": "",
  "body": "  Show that the set of functions are orthogonal with respect to the weight function on the interval .    We need to show that each of the following inner products (integrals) are zero. so these form an orthogonal set. These three polynomials are the first three Laguerre Polynomials . There is an infinite set of these.   "
},
{
  "id": "sect-discrete-least-squares",
  "level": "1",
  "url": "sect-discrete-least-squares.html",
  "type": "Section",
  "number": "6.2",
  "title": "Discrete Least Squares",
  "body": " Discrete Least Squares   Data is ubiquitous throughout today's society and our ability to process and understand it is a necessity. A manageable example is that of understanding the population growth of a state, the United States or the entire world. Consider the population of the state of Massachusetts from 1900 through 2000 which is given in the following table and plotted below:            year  Population (in millions)  year  Population (in millions)        1900  2.805  1950  4.690    1910  3.366  1960  5.148    1920  3.852  1970  5.689    1930  4.249  1980  5.737    1940  4.316  1990  6.016        2000  6.349            The reason that the data is only available on the decades is because of the U.S. census, which only collects data on these years. It is desirable to know the population in years between the known points and in light of this, we may consider using an interpolating polynomial. We skip the details from , and plot the data and the interpolating polynomial. The result is the following plot          In the middle of the plotting domain, the function reasonably fits the data and an expected trend. However for and , the function seems to oscillate more than expected.  The problem that occurs in this example is that a high-order (in this case the degree is 10) polynomial is probably not the best functional form to represent the data, where either a lower order polynomial (perhaps 2nd or 3rd order) may be better or perhaps another function like an exponential.  To explain how we can fit data , let's look at a simpler example. Consider the data , , , , which is plotted below:          It is fairly clear that no line can pass through all four of these points, so we seek a line that is “close”. One way to fit a line to the data would be to find and for the function such that is minimized. This can be written as the norm,   Geometrically, this sum is the total vertical distance from the line to the data and we desire to find the minimum value of .  Typically when finding a minimum, we would seek the values of and such that however the presence of the absolute values in the definition of results in function which is non differentiable at a number of points.  There is a number of techniques that allow one to find such a minimum, however we won't go into the details here. A minimization technique for this problem results in and . A plot of the line and the data is:          and as can be seen, the line appears to pass through the first and third points.  Because is not differentiable, this is a difficult problem to solve and most do not solve the problem as stated above.  An alternative is to define which can be written using the norm,   The function is differentiable and thus when solving and , it can be shown to have a unique solution.  To find the minimum of this problem as is typically done, is to find the derivatives with respect to and and set them to zero.     These two equations are linear in and and can easily be solved as:     Find the least squares regression line to fit the data .    For this problem, using the formulas in , the results are and . A plot of this line and the data is:            The line in this plot differs from the last one. First of all, the line above does not pass through any of the points, whereas the one on page plot:L1:min passes through two of the points. In short, there are two different best fit lines because each is minimizing a different norm.    Matrix Form of the Least Squares Regression  Although the formulas in are not that difficult, we will generalize to other functional forms and if we can write the problem in a more-convenient manner, then the results will be easier to follow.  Let Then can be written as   The sum can be written as . Using the fact that the derivative of with respect to is   Setting and solving for results in: where and are that in .  The next example shows how to use the matrix form of the least-squares line to find the best-fit line from .    Find the least-squares line that best fits the data in Example ex:ls:line using the matrix form in .    In this case, and and it inverse are and finally using ,   The vector represents the -intercept (first component) and slope (second component) of the line, so the least squares line for this problem is: and this is the same result as the problem in Example ex:ls:line.    The previous example put the least-squares line in a different context. However, this formulation allows us to extend from a least-squares line to any polynomial as we will see in the next section.    Least-Squares Polynomials  Now that the matrix form of the least-squares line has been derived, we can actually show that same formula exists for higher-order polynomials. If the data is given as and let   We now desire to find the th degree polynomial that best fits the given data in the least squares sense. More precisely, we seek the coefficients that minimize where is the column vector with the -coordinates of the data and is the column vector consisting of the polynomial evaluated at each value. Also,   Since is the same as that in , solving results in the same as .  The next example uses this analysis to find the cubic polynomial that best fits in the least-squares sense.    Find the cubic polynomial that best fits the population data at the beginning of this section.    In this case, , and   The matrix and its inverse is:   And finally the vector is   This means that the best fit cubic in the least-squares sense is:     To visualize this cubic, we plot it as well as the data:          As one can tell, the cubic approximates the data quite well.    Least-Squares and Interpolation  The idea of least-square polynomial fitting is that the number of data points exceeds that of the number of coefficients of the polynomial (degree of polynomial plus one). In interpolation the degree of the polynomial is chosen to be one fewer than the number of data points.  We can write the interpolation problem using the matrix form of the least-squares problem in the section above.    Find the quadratic polynomial that interpolates the data using the matrix least-squares formulation in and .    In this case, and the matrix and its inverse is: and finally using , so the quadratic is which is the same result as in and .     "
},
{
  "id": "fig-pop-mass",
  "level": "2",
  "url": "sect-discrete-least-squares.html#fig-pop-mass",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "fig-poly-pop",
  "level": "2",
  "url": "sect-discrete-least-squares.html#fig-poly-pop",
  "type": "Figure",
  "number": "6.2.2",
  "title": "",
  "body": "       "
},
{
  "id": "fig-poly-simple",
  "level": "2",
  "url": "sect-discrete-least-squares.html#fig-poly-simple",
  "type": "Figure",
  "number": "6.2.3",
  "title": "",
  "body": "       "
},
{
  "id": "fig-L1-min",
  "level": "2",
  "url": "sect-discrete-least-squares.html#fig-L1-min",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": "       "
},
{
  "id": "ex-ls-line",
  "level": "2",
  "url": "sect-discrete-least-squares.html#ex-ls-line",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Find the least squares regression line to fit the data .    For this problem, using the formulas in , the results are and . A plot of this line and the data is:           "
},
{
  "id": "sect-discrete-least-squares-3-7",
  "level": "2",
  "url": "sect-discrete-least-squares.html#sect-discrete-least-squares-3-7",
  "type": "Example",
  "number": "6.2.7",
  "title": "",
  "body": "  Find the least-squares line that best fits the data in Example ex:ls:line using the matrix form in .    In this case, and and it inverse are and finally using ,   The vector represents the -intercept (first component) and slope (second component) of the line, so the least squares line for this problem is: and this is the same result as the problem in Example ex:ls:line.   "
},
{
  "id": "sect-discrete-least-squares-4-6",
  "level": "2",
  "url": "sect-discrete-least-squares.html#sect-discrete-least-squares-4-6",
  "type": "Example",
  "number": "6.2.8",
  "title": "",
  "body": "  Find the cubic polynomial that best fits the population data at the beginning of this section.    In this case, , and   The matrix and its inverse is:   And finally the vector is   This means that the best fit cubic in the least-squares sense is:    "
},
{
  "id": "fig-line-pop",
  "level": "2",
  "url": "sect-discrete-least-squares.html#fig-line-pop",
  "type": "Figure",
  "number": "6.2.9",
  "title": "",
  "body": "       "
},
{
  "id": "sect-discrete-least-squares-5-4",
  "level": "2",
  "url": "sect-discrete-least-squares.html#sect-discrete-least-squares-5-4",
  "type": "Example",
  "number": "6.2.10",
  "title": "",
  "body": "  Find the quadratic polynomial that interpolates the data using the matrix least-squares formulation in and .    In this case, and the matrix and its inverse is: and finally using , so the quadratic is which is the same result as in and .   "
},
{
  "id": "sect-orthogonal-polynomials",
  "level": "1",
  "url": "sect-orthogonal-polynomials.html",
  "type": "Section",
  "number": "6.3",
  "title": "Orthogonal Polynomials and Least Squares Approximation",
  "body": " Orthogonal Polynomials and Least Squares Approximation   Let’s say that we have a function on an interval . We wish to find a polynomial that approximates on the interval. A mathematical statement of this is that we wish to minimize   If we let be a general th order polynomial, then   Then we wish to minimize and the minimum occurs when for all or   These are called the normal equations . Since the normal equations in form an linear system in the unknown ’s. The elements of the matrix have the form in and solving a system with such elements is numerically unstable due to rounding errors, thus finding the coefficients of the polynomial is not usually a desired way to go.  Despite this, we will show an interpolation using this form for on in the next example.    Use the normal equations in to find that interpolates on .    The equations form the linear equations: the solution to this (using exact precision is),   A plot of this polynomial, and is            The example above found the interpolating polynomial that minimizes , however due to the form of the matrix, numerically, this is a poor way find the polynomial.  Instead, we will use orthogonal polynomials to construct the interpolating polynomial. This has many advantages.    Orthogonal Polynomials    If is an orthogonal set of functions on with respect to the weight function , then th degree polynomial minimizes where for each , where     Since is an orthogonal set of functions, then   Since setting we get, the normal equations, and since if , then solving for results in     This shows that if we have a set of orthogonal functions, then this theorem provides a way to find the polynomial that minimizes . After the next section, we will show an example.    The Gram-Schmidt process for Orthogonalizing Polynomials  As alluded to above, it is desirable to use orthogonal polynomials (with respect to some weight). The following is called the Gram-Schmidt process for doing this.    The set of polynomial functions defined in the following way is orthogonal on with respect to weight function .  Let and where and when , where     We saw the Legendre polynomials in on Gaussian Quadrature and we now revisit them in a different context. The following example will show that the Legendre polynomials form an orthogonal set of functions with respect to .    Find the first 4 polynomials that are orthogonal with respect to the weight function on using the Gram-Schmidt process.     where so . Also, so and then so   Recall from that the interpolation points for the 2-pt Gaussian Quadrature formula are the roots of and that for the 3-pt formula was the roots of .    And now that the Legendre Polynomials have been found, we will use them to do interpolation.    Use the set found above to find the interpolating polynomial that minimizes with weight function where .    In this case, we will use to find the coefficients of where that is, and the polynomial is   A good way to determine if the above function is correct to plot and together as the following shows:          where the dashed curve is the polynomial. As one can see these are nearly identical as a plot.    The main purpose of this section is to show that there is a way to produce a set of orthogonal polynomials and then use them to produce a polynomial that minimizes a weighted norm. In the next section, we examine which norm may be the best.   "
},
{
  "id": "sect-orthogonal-polynomials-2-4",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#sect-orthogonal-polynomials-2-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "normal equations "
},
{
  "id": "sect-orthogonal-polynomials-2-6",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#sect-orthogonal-polynomials-2-6",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": "  Use the normal equations in to find that interpolates on .    The equations form the linear equations: the solution to this (using exact precision is),   A plot of this polynomial, and is           "
},
{
  "id": "thm-orth-poly",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#thm-orth-poly",
  "type": "Theorem",
  "number": "6.3.3",
  "title": "",
  "body": "  If is an orthogonal set of functions on with respect to the weight function , then th degree polynomial minimizes where for each , where     Since is an orthogonal set of functions, then   Since setting we get, the normal equations, and since if , then solving for results in    "
},
{
  "id": "thm-gram-schmidt",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#thm-gram-schmidt",
  "type": "Theorem",
  "number": "6.3.4",
  "title": "",
  "body": "  The set of polynomial functions defined in the following way is orthogonal on with respect to weight function .  Let and where and when , where    "
},
{
  "id": "sect-orthogonal-polynomials-4-5",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#sect-orthogonal-polynomials-4-5",
  "type": "Example",
  "number": "6.3.5",
  "title": "",
  "body": "  Find the first 4 polynomials that are orthogonal with respect to the weight function on using the Gram-Schmidt process.     where so . Also, so and then so   Recall from that the interpolation points for the 2-pt Gaussian Quadrature formula are the roots of and that for the 3-pt formula was the roots of .   "
},
{
  "id": "sect-orthogonal-polynomials-4-7",
  "level": "2",
  "url": "sect-orthogonal-polynomials.html#sect-orthogonal-polynomials-4-7",
  "type": "Example",
  "number": "6.3.6",
  "title": "",
  "body": "  Use the set found above to find the interpolating polynomial that minimizes with weight function where .    In this case, we will use to find the coefficients of where that is, and the polynomial is   A good way to determine if the above function is correct to plot and together as the following shows:          where the dashed curve is the polynomial. As one can see these are nearly identical as a plot.   "
},
{
  "id": "sect-optimal-pts",
  "level": "1",
  "url": "sect-optimal-pts.html",
  "type": "Section",
  "number": "6.4",
  "title": "Optimal Points for Interpolation",
  "body": " Optimal Points for Interpolation   In , we investigated the details of interpolation. In most cases we used equally-spaced points as the interpolation nodes. The main problem with using such points is that the error associated with this increases as the number of points increases. For example, recall the plot in On the edges on the interpolation domain, the function swings far above the points. In this section, we look at how to select the interpolation nodes that may do better.    Chebyshev Polynomials  In order to determine the optimal points for interpolation, we first examine a set of functions called the Chebyshev polynomials.    For each nonnegative integer, , the Chebyshev Polynomial  is defined for by     These don’t look much like polynomials, but we will see, in fact, they are. To see that they are each polynomials, we first need to establish,   Also in similar manner,   Adding and , we get: or which is called the recurrence relationship for the Chebyshev polynomials .  Returning to the definition in , and evaluating at and ,   And then using the recurrence relationship in , we find the Chebyshev polynomials for and ,   The following is a graph of the first five Chebyshev polynomials:          The graph of is the constant 1 and each successive polynomial has higher degree.  From the plot one can see one of the most important properties of Chebyshev—on the interval , all the polynomials, , satisfy . The following theorem proves this and other important properties.    The Chebyshev polynomial, has the following properties:      has simple zeros in . They are for .    The extreme values of are located at for .    The function values at the extremes are either or . More specifically,           The zeros of are those at . Using ,     The extremes of are found by first finding the derivative of , and then evaluate it at : and since the derivative is 0, it is an extreme value of .    Lastly, we show that the function values of the extremes are either 1 or .          Monic Polynomials  We are going to show that the roots of the Chebyshev polynomials will be ideal for choosing interpolation nodes. We will need to show that this will be the best choice and in order to accomplish this we need to discuss of subset of the polynomials called the monic polynomials. These will play an important role.    A polynomial is monic if its leading coefficient is . Let denote the set of all monic polynomials of degree .    And naturally we will define the monic Chebyshev polynomials to be the Chebyshev polynomials with its leading coefficient of .    Let be the monic Chebyshev Polynomials     And since these polynomials are monic, . The next theorem is the reason that we are studying the Chebyshev polynomials. It shows that the they have the smallest maximum value on .    The monic Chebyshev polynomial, satisfies for any , and if equality holds then .     Suppose with   Let . Since and are both monic polynomials of degree , it follows that is a polynomial of degree at most .  If we evaluate at the extrema of (which we called ),   By supposition, so therefore by the intermediate value theorem that there is a root between and for for a total of roots. However, is a polynomial of degree at most , so this implies that so .   The previous theorem says that the monic polynomials with smallest maximum norm (or ) are the Chebyshev polynomials. Let’s return to the error formula for interpolation. Recall that from , if is the interpolated polynomials using the nodes , then the error is given by where we examine the polynomial part of the error. Let and note that this is a monic polynomial. We seek to examine this polynomial for various interpolation points.  In the previous section, we saw that when the are equally spaced, large oscillations occur toward the edges of the interval .  The previous theorem showed that the Chebyshev Polynomials are the monic polynomials with smallest maximum norm ( ). This would also translate to the polynomials with roots at the Chebyshev roots of which are given in .    Plot the monic polynomials a) , b) with equally-spaced roots and c) randomly spaced roots.    These three polynomials are and a plot of this is in the following figure.          where the solid line is , the dashed line is and the dotted line is . As you can see the polynomial has the smallest value of of these three polynomials, and the theorem above proved this is always true.      Interpolation on the Chebyshev roots  From the discussion above, it appears that if we interpolate on the Chebyshev roots, then we find the best polynomial in the sense. The next example shows how to interpolate through these points.    Find the interpolating polynomial, of on using the Chebyshev roots.    First, we need to find the values of the roots of . Using: for .  Next, set up a table of and :                                                               We can then use either Newton Divided Differences or Lagrange polynomials to find the interpolant through these points to arrive at: and examining a plot of and on , we get:          which look identical, but we can see that the difference is:          and appears to be about accuracy to 2 decimal places. It also appears that the error is nearly uniformly distributed. It won’t be precisely uniformly distributed due to the function being interpolated.      Chebyshev Polynomials on   The Chebyshev polynomials are defined on , however, we may want them on a general interval . Thus, we seek a transformation that maps the interval to .  Let , and , then maps the interval to . This is the same transformation as in (eq:convert:interval) of Section sect:gauss:quad.  Thus, the points for are the Chebyshev roots on the interval . The next example shows how to use this transformation to interpolate a function on the interval .    Use the points above to find the polynomial interpolant, to on .    The interpolation points are those in and evaluating the function results in                                                                              Use Newton Divided Difference or Lagrange on the set of points to arrive at   Note: due to the symmetry of as well as the symmetry of the interpolation points, there is no term for . For a comparison, the 4th degree polynomial that passes through the points is           and a plot of the errors            As can be seen from the plot, the Chebyshev approximation, has the smaller maximum error (by about 75%) than the Legendre approximation, , however neither of these are reasonable approximations in that they still are only accurate to about 1 decimal place. In the next example, we extend the number of points to improve the approximation.    Extend the example to 9 points. Provide both the Interpolated Polynomial for equally-spaced points on and the Chebyshev points on .    Using the points for leads to the polynomial that can be written:   To find the polynomial that passes through the Chebyshev points, we build a table of from (eq:cheby:pts:[a,b]) and .               1  6.23545745567117  -0.0477097333130245    2  5.86229169995749  -0.408576233017198    3  5.16096948600951  -0.901063626090171    4  4.21608062324342  -0.879346445795841    5  3.14159265358397  0    6  2.06710468392645  0.879346445800469    7  1.12221582116592  0.901063626088372    8  0.420893607226473  0.408576233021196    9  0.0477278515232653  0.0477097333278532        The interpolating polynomial that passes through these points is:   The plots of the sine function and the interpolates are nearly identical. The following shows the differences and ,  where the solid line is , with the Chebyshev nodes and the dashed line is , where the equally-spaced nodes have been used. The maximum error using is about 5 times larger than the maximum error with . Also, as we have seen earlier, the error is distributed uniformly across the interval.    As has been seen in this section, when the nodes used for interpolation are those of the roots of the Chebyshev polynomials of appropriate order the maximum error is minimized. Recall that this is the error. As was discussed at the beginning of this chapter, other norms are often used as well. For example, the norm is very common. We will investigate how to interpolate that minimizes this norm in the next section.   "
},
{
  "id": "sect-optimal-pts-3-3",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-3-3",
  "type": "Definition",
  "number": "6.4.1",
  "title": "",
  "body": "  For each nonnegative integer, , the Chebyshev Polynomial  is defined for by    "
},
{
  "id": "sect-optimal-pts-3-6",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recurrence relationship for the Chebyshev polynomials "
},
{
  "id": "fig-plot-chebyshev5",
  "level": "2",
  "url": "sect-optimal-pts.html#fig-plot-chebyshev5",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": "       "
},
{
  "id": "sect-optimal-pts-3-13",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-3-13",
  "type": "Theorem",
  "number": "6.4.3",
  "title": "",
  "body": "  The Chebyshev polynomial, has the following properties:      has simple zeros in . They are for .    The extreme values of are located at for .    The function values at the extremes are either or . More specifically,           The zeros of are those at . Using ,     The extremes of are found by first finding the derivative of , and then evaluate it at : and since the derivative is 0, it is an extreme value of .    Lastly, we show that the function values of the extremes are either 1 or .       "
},
{
  "id": "sect-optimal-pts-4-3",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-4-3",
  "type": "Definition",
  "number": "6.4.4",
  "title": "",
  "body": "  A polynomial is monic if its leading coefficient is . Let denote the set of all monic polynomials of degree .   "
},
{
  "id": "sect-optimal-pts-4-5",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-4-5",
  "type": "Definition",
  "number": "6.4.5",
  "title": "",
  "body": "  Let be the monic Chebyshev Polynomials    "
},
{
  "id": "sect-optimal-pts-4-7",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-4-7",
  "type": "Theorem",
  "number": "6.4.6",
  "title": "",
  "body": "  The monic Chebyshev polynomial, satisfies for any , and if equality holds then .   "
},
{
  "id": "sect-optimal-pts-4-8",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-4-8",
  "type": "Proof",
  "number": "6.4.2.1",
  "title": "",
  "body": " Suppose with   Let . Since and are both monic polynomials of degree , it follows that is a polynomial of degree at most .  If we evaluate at the extrema of (which we called ),   By supposition, so therefore by the intermediate value theorem that there is a root between and for for a total of roots. However, is a polynomial of degree at most , so this implies that so .  "
},
{
  "id": "sect-optimal-pts-4-12",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-4-12",
  "type": "Example",
  "number": "6.4.7",
  "title": "",
  "body": "  Plot the monic polynomials a) , b) with equally-spaced roots and c) randomly spaced roots.    These three polynomials are and a plot of this is in the following figure.          where the solid line is , the dashed line is and the dotted line is . As you can see the polynomial has the smallest value of of these three polynomials, and the theorem above proved this is always true.   "
},
{
  "id": "ex-chebyshev-interp-exp",
  "level": "2",
  "url": "sect-optimal-pts.html#ex-chebyshev-interp-exp",
  "type": "Example",
  "number": "6.4.9",
  "title": "",
  "body": "  Find the interpolating polynomial, of on using the Chebyshev roots.    First, we need to find the values of the roots of . Using: for .  Next, set up a table of and :                                                               We can then use either Newton Divided Differences or Lagrange polynomials to find the interpolant through these points to arrive at: and examining a plot of and on , we get:          which look identical, but we can see that the difference is:          and appears to be about accuracy to 2 decimal places. It also appears that the error is nearly uniformly distributed. It won’t be precisely uniformly distributed due to the function being interpolated.   "
},
{
  "id": "sect-optimal-pts-6-5",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-6-5",
  "type": "Example",
  "number": "6.4.12",
  "title": "",
  "body": "  Use the points above to find the polynomial interpolant, to on .    The interpolation points are those in and evaluating the function results in                                                                              Use Newton Divided Difference or Lagrange on the set of points to arrive at   Note: due to the symmetry of as well as the symmetry of the interpolation points, there is no term for . For a comparison, the 4th degree polynomial that passes through the points is           and a plot of the errors           "
},
{
  "id": "sect-optimal-pts-6-7",
  "level": "2",
  "url": "sect-optimal-pts.html#sect-optimal-pts-6-7",
  "type": "Example",
  "number": "6.4.15",
  "title": "",
  "body": "  Extend the example to 9 points. Provide both the Interpolated Polynomial for equally-spaced points on and the Chebyshev points on .    Using the points for leads to the polynomial that can be written:   To find the polynomial that passes through the Chebyshev points, we build a table of from (eq:cheby:pts:[a,b]) and .               1  6.23545745567117  -0.0477097333130245    2  5.86229169995749  -0.408576233017198    3  5.16096948600951  -0.901063626090171    4  4.21608062324342  -0.879346445795841    5  3.14159265358397  0    6  2.06710468392645  0.879346445800469    7  1.12221582116592  0.901063626088372    8  0.420893607226473  0.408576233021196    9  0.0477278515232653  0.0477097333278532        The interpolating polynomial that passes through these points is:   The plots of the sine function and the interpolates are nearly identical. The following shows the differences and ,  where the solid line is , with the Chebyshev nodes and the dashed line is , where the equally-spaced nodes have been used. The maximum error using is about 5 times larger than the maximum error with . Also, as we have seen earlier, the error is distributed uniformly across the interval.   "
},
{
  "id": "sect-legendre-polys",
  "level": "1",
  "url": "sect-legendre-polys.html",
  "type": "Section",
  "number": "6.5",
  "title": "Legendre Polynomials and Interpolation",
  "body": " Legendre Polynomials and Interpolation   In the last section, we saw the Chebyshev polynomials and when using the roots of them as interpolation nodes that the norm was minimized. In this section, we learn another important set of polynomials, the Legendre polynomials. When these are used, the norm will be minimized.    The th Legendre Polynomial , is defined as    is called the Legendre Polynomial Recurrence Formula , which defines a polynomial in terms of the previous two Legendre polynomials.    As discussed at the beginning of this chapter, some sets of functions are orthogonal. In particular, the Legendre polynomials fit this case. The following lemma and theorem shows this.    The Legendre polynomials satisfy the relationship   Thus, if .    First, we will show that the inner product of two different Legendre polynomials is 0. This will be done by induction. Note that   Then we will show using the recurrence relation that      Need a proof for this.     The Legendre polynomials form an orthogonal set of polynomials.    From , polynomial and are orthogonal is , thus the set form an orthogonal set of functions.      Approximating functions using Legendre Polynomials  Let’s say that we wish to find a polynomial, , that best fits the function on an interval (let’s say, .) Let or   Multiply this equation by and integrate on .   From , the only term on the right that is non zero is when , so and solving for and using the same Lemma again above, we get:     Find the interpolating polynomial to using Legendre polynomials.    In this case, we need to evaluate the integrals: for , and we doing this we get: and the interpolating polynomial is which can be written as:   A plot of shows the result:   NEED PLOT   So it appears that this approximation is accurate to about 3 decimal places. Again, notice that the error pattern is similar to what we have seen before in that in the center of the interval, the error is small and the largest error is on the endpoints.      Chebyshev Polynomials  As discussed in , we covered inner product spaces with inner products. The first example of this is the Chebyshev polynomials that we saw in . The next theorem shows that these polynomials are orthogonal.    The Chebyshev polynomials are orthogonal on with respect to the weight function     Let and be the th and th Chebyshev polynomial defined in . where the last step is a standard integral from calculus. This means that the Chebyshev polynomials form an set of orthogonal polynomials.    Now that we have established that the Chebyshev polynomials are orthogonal, we can use this to do interpolation.  Let be a polynomial that we desire to approximate a function on and , then     Use the formula above to find and Chebyshev Polynomials on and .    First, we calculate for . We get:   And thus, which is the same result we arrived at in . It should be emphasized that the result is the same despite using either interpolation on the Chebyshev points or finding the minimizing polynomial using the appropriate norm.      Summary of Polynomial Interpolation  This is a summary of polynomial interpolation and all of the techniques that we saw in both this Chapter ch:interpolation and Chapter ch:approx. In short, we wish to find that passes through for . In some cases the are selected. In others, they are given.     Lagrange Form  The Lagrange Form from is and the polynomial that passes through the points is   The Lagrange form of the interpolated polynomial is useful for the error formula (see below) and the existence-unique theorem.    Existence-Uniqueness Theorem  The following is the Existence-Uniqueness theorem (see ) for a polynomial that passes through the points .   Existence Uniqueness Theorem of Interpolation   If are distinct points in the domain of , then there exists a unique polynomial, of degree at most such that interpolates ; that is for each .  One implication is that the method of finding the polynomial does not matter.    Error formula  The Error formula for polynomial interpolation was given in and is repeated here:  Suppose are distinct numbers in and . Then for each in , a number in exists with This results in a error term:   This theorem is key for determining the error (and a bound on the error) of both interpolated polynomials as well as numerical integration (the error formula is the integral of this error formula).    Newton Divided Differences  If we define where   Then the interpolating polynomial can be written as   The advantages of Newton's Divided differences is that one can add extra points to interpolate after one is created. In addition, the divided differences can be calculated relatively easily using a divided difference table.    Chebyshev Interpolation  Using either the Lagrange form or Newton’s Divided Differences, the actual -values of the points can be anything. Typically, equally-spaced points results in a poor fit to a function.  If one uses the the roots of the Chebyshev Polynomial as the points on (or the transformed version to ), then the result is that the error minimizes the norm or   Alternatively, the polynomial can be found by     The Legendre Polynomials and the norm  If one interpolates on the Legendre nodes, then the resulting polynomial minimizes the norm. The Legendre nodes are the roots of the Legendre polynomials, where   In particular, to find , the th degree polynomial that minimizes , one interpolates on the roots of .  Alternatively, to find , one can exploit the orthogonal nature of the Legendre polynomials. Then,       "
},
{
  "id": "sect-legendre-polys-2-2",
  "level": "2",
  "url": "sect-legendre-polys.html#sect-legendre-polys-2-2",
  "type": "Definition",
  "number": "6.5.1",
  "title": "",
  "body": "  The th Legendre Polynomial , is defined as    is called the Legendre Polynomial Recurrence Formula , which defines a polynomial in terms of the previous two Legendre polynomials.   "
},
{
  "id": "lem-legendre-ortho",
  "level": "2",
  "url": "sect-legendre-polys.html#lem-legendre-ortho",
  "type": "Lemma",
  "number": "6.5.2",
  "title": "",
  "body": "  The Legendre polynomials satisfy the relationship   Thus, if .    First, we will show that the inner product of two different Legendre polynomials is 0. This will be done by induction. Note that   Then we will show using the recurrence relation that    "
},
{
  "id": "thm-legendre-ortho",
  "level": "2",
  "url": "sect-legendre-polys.html#thm-legendre-ortho",
  "type": "Theorem",
  "number": "6.5.3",
  "title": "",
  "body": "  The Legendre polynomials form an orthogonal set of polynomials.    From , polynomial and are orthogonal is , thus the set form an orthogonal set of functions.   "
},
{
  "id": "sect-legendre-polys-3-5",
  "level": "2",
  "url": "sect-legendre-polys.html#sect-legendre-polys-3-5",
  "type": "Example",
  "number": "6.5.4",
  "title": "",
  "body": "  Find the interpolating polynomial to using Legendre polynomials.    In this case, we need to evaluate the integrals: for , and we doing this we get: and the interpolating polynomial is which can be written as:   A plot of shows the result:   NEED PLOT   So it appears that this approximation is accurate to about 3 decimal places. Again, notice that the error pattern is similar to what we have seen before in that in the center of the interval, the error is small and the largest error is on the endpoints.   "
},
{
  "id": "sect-legendre-polys-4-3",
  "level": "2",
  "url": "sect-legendre-polys.html#sect-legendre-polys-4-3",
  "type": "Theorem",
  "number": "6.5.5",
  "title": "",
  "body": "  The Chebyshev polynomials are orthogonal on with respect to the weight function     Let and be the th and th Chebyshev polynomial defined in . where the last step is a standard integral from calculus. This means that the Chebyshev polynomials form an set of orthogonal polynomials.   "
},
{
  "id": "sect-legendre-polys-4-6",
  "level": "2",
  "url": "sect-legendre-polys.html#sect-legendre-polys-4-6",
  "type": "Example",
  "number": "6.5.6",
  "title": "",
  "body": "  Use the formula above to find and Chebyshev Polynomials on and .    First, we calculate for . We get:   And thus, which is the same result we arrived at in . It should be emphasized that the result is the same despite using either interpolation on the Chebyshev points or finding the minimizing polynomial using the appropriate norm.   "
},
{
  "id": "sect-rational-interp",
  "level": "1",
  "url": "sect-rational-interp.html",
  "type": "Section",
  "number": "6.6",
  "title": "Rational Interpolation and Approximation",
  "body": " Rational Interpolation and Approximation   We now extend some of the ideas above to that using rational functions instead of polynomials.    Padé Approximations  The first Rational Approximation to a function that we will discuss is that of the Padé approximation. This is the equivalent of the Taylor Series to rational functions.  Recall that a Taylor approximation to a function is a polynomial such that     The Taylor Polynomial to at is     In a similar manner, let where generally . The Padé approximation is the rational function that satisfies: for .    Find the Padé approximation, to at .    The function can be written:   To find the Padé approximation, we will need the first two derivatives of this or: and then to find the coefficients , these must satisfy: and using in the second equation, one can find . Substituting into the 3rd equation above: so so   A plot of and is            And similar to Taylor Series, increasing will in general decrease the error in the approximation. Also similar to Taylor Series, the approximate is most accurate near the “center” (in this case, ) and the error typically increases as the distance from this center increases.  Note also that since this is a rational function, there may be places where it is undefined. In this case, is a vertical asymptote of the rational function, but not the original function .    A Hermite-Type Rational Approximation  Lastly, we chose a rational function that matches both the derivative and function values at interpolated points. We will explore this through an example. Consider and and we wish to evaluate and its derivative at 4 points. Although equally-spaced points can be used, we will use the roots of , the Chebyshev polynomial. Thus we will take , , , and . We will solve: and solve for the and values. Again, this is not easy to do by hand, but using a CAS, it is reasonably easy. The results are: where   A plot of the error shows that this is quite accurate   NEED PLOT    "
},
{
  "id": "sect-rational-interp-3-4",
  "level": "2",
  "url": "sect-rational-interp.html#sect-rational-interp-3-4",
  "type": "Example",
  "number": "6.6.1",
  "title": "",
  "body": "  The Taylor Polynomial to at is    "
},
{
  "id": "sect-rational-interp-3-6",
  "level": "2",
  "url": "sect-rational-interp.html#sect-rational-interp-3-6",
  "type": "Example",
  "number": "6.6.2",
  "title": "",
  "body": "  Find the Padé approximation, to at .    The function can be written:   To find the Padé approximation, we will need the first two derivatives of this or: and then to find the coefficients , these must satisfy: and using in the second equation, one can find . Substituting into the 3rd equation above: so so   A plot of and is           "
},
{
  "id": "sect-gauss-quad-revisit",
  "level": "1",
  "url": "sect-gauss-quad-revisit.html",
  "type": "Section",
  "number": "6.7",
  "title": "Gaussian Quadrature: revisited",
  "body": " Gaussian Quadrature: revisited  As we saw before in Chapter 4, we wish to find an approximate value for typically, we let where are called the weights and are the nodes. The technique of Gaussian Quadrature finds the weights and the nodes with highest degree of precision as possible, that is, it integrates polynomials of highest possible degree exactly.  In the previous few sections, we have seen the Legendre Polynomials, which are the set of polynomials that are orthogonal with respect to the weight . The next theorem shows that if the nodes are the roots of the Legendre polynomials, then the result is that sought for Gaussian Quadrature.    Suppose the are the roots of , the th degree Legendre Polynomial. In addition, let   If is any polynomial of degree less than , then     First, we will consider polynomials of degree less than and write it as with as the roots of . This is the Lagrange form of the polynomial and since they are unique...  Integrating on ,   If has degree at least and at most , then we divide by to get where is the th degree Legendre polynomial. Note that at the Legendre roots,   Since the Legendre polynomials are orthogonal to polynomials of degree less than , then   Also, since is a polynomial of degree less than , therefore part 1 of the proof leads to   Using these parts,     The consequence of this theorem is that using the Legendre roots and the weights given (eq:gq:weights) that this is Gaussian Quadrature.       . The roots are and the weights are resulting in the Gaussian Quadrature formula,       . The roots are and the weights are:       . The roots are And the weights are:       . The roots of this are:   And the weights are:       and the roots are And the weights are:      Use Gaussian Quadrature with 9 nodes to find    which is accurate to within .  "
},
{
  "id": "sect-gauss-quad-revisit-4",
  "level": "2",
  "url": "sect-gauss-quad-revisit.html#sect-gauss-quad-revisit-4",
  "type": "Theorem",
  "number": "6.7.1",
  "title": "",
  "body": "  Suppose the are the roots of , the th degree Legendre Polynomial. In addition, let   If is any polynomial of degree less than , then     First, we will consider polynomials of degree less than and write it as with as the roots of . This is the Lagrange form of the polynomial and since they are unique...  Integrating on ,   If has degree at least and at most , then we divide by to get where is the th degree Legendre polynomial. Note that at the Legendre roots,   Since the Legendre polynomials are orthogonal to polynomials of degree less than , then   Also, since is a polynomial of degree less than , therefore part 1 of the proof leads to   Using these parts,    "
},
{
  "id": "sect-intro-linear-algebra",
  "level": "1",
  "url": "sect-intro-linear-algebra.html",
  "type": "Section",
  "number": "7.1",
  "title": "Introduction to Linear Algebra",
  "body": " Introduction to Linear Algebra  hi there  "
},
{
  "id": "ch-linear-algebra-4",
  "level": "1",
  "url": "ch-linear-algebra-4.html",
  "type": "Section",
  "number": "7.2",
  "title": "Linear Systems and Gaussian Elimination",
  "body": " Linear Systems and Gaussian Elimination   The same elementary row operations that we used for a linear system works for a matrix as well. Here they are written in terms of rows:     Multiply any row by a constant     Interchange (swap) any two rows     Multiply any equation (row) by a constant and add to another row .       A upper triangular matrix is a matrix with the property that if .    That is, the matrix contains only zeros below the main diagonal.     Gaussian Elimination is the process of using the row operations above to transform a matrix to an upper diagonal matrix.      An augmented coefficient matrix is a matrix of coefficients from a linear system including the right hand side. In general if the linear system is can be written as the matrix:       Use Gaussian elimination and Back Substitution to solve:     can be written as an augmented coefficient matrix:    Now we perform back substitution, this results in the three linear equations: and therefore the solution is       Operation Counts of Gaussian Elimination  When solving systems of equations on realistic problems, often hundreds or thousands of variables are needed resulting in very large matrices. There are two big issues involved with such large matrices, the size needed for storage and the speed to solve such matrices.  First, we look at the speed of solving a linear system with rows (equations) and variables using Gaussian Elimination. Let's also assume that . In this case, we will examine solving a system in which no pivoting or row swaps are needed.     First, consider the number of operations of the form: for needed to eliminate the element in row , column 1.  This operation takes multiplications and additions.    The result is now a by matrix, so to repeat this process, there is let (that is there is more columns than rows).     For Backwards substitution, recall that if the matrix is in upper triangular form, then and each step requires multiplications. Since there are steps of back sub, there are multiplications for back substitution.       Comparison to Cramer's Rule  Although the number of operations needed to solve linear systems seem large, if we compare this to another standard method of solution, Cramer's rule, we will see that Gaussian Elimination is quite efficient.  Recall that Cramer's Rule for solving the linear system for a square matrix is that where the vector has be placed in the determine in the th column.  To determine the number of operations for Cramer's Rule, first, we need to know the number of operations to find a determinant. If is a 2 by 2 matrix, then there are multiplications and 1 addition. For other determinants, note that the cofactor expansion method is often used, which is where is the minor (that is the determinant of the matrix with the th row and th column removed). If we let be the number of multiplications needed for the determinant, then s and we know that , This is the definition of the factorial, so .  The number of operations for Cramer's rule of a matrix of size by can be found by noting that determinants are needed. Thus Cramer's rule requires multiplications, which is much larger than .    Pivoting Strategies    Solve using exact arithmetic.         If instead we use floating point arithmetic to 4 digits, we write the system as   An operation of and is   To eliminate the element in the 3rd row, 2nd column, we can perform , we get:   Next, performing back substitution, we get:   Since the actual solution is , the approximate values are off by large relative margins.    Partial Pivoting  One method to eliminate this error is to perform partial pivoting. The reason that much of the round off error occur above was due to the operation....  Instead, we will use something called partial pivoting, which means that at each pivoting step, we will swap rows to bring the largest value (in absolute value) to the pivoting element.  In the example above, the first pivot was fine as the 0.6667 was the large value, however look at the next step:   At this step, let's swap the 2nd and 3rd rows to get:   And then perform the operation to get: and finally back substitution yields: which is exact for and , and only off by 0.1%for .  In practice it is expensive to perform a row swap. Instead, we typically    Scaled Partial Pivoting   which has a solution and .  Using Partial Pivoting, the largest element in the first column is in row 1, so we pivot about that element to get: so and .  The reason partial pivoting didn't work is that we didn't take into account the fact that the absolute value of the largest does not matter. Instead, we should actually look at the relatively largest value (relative to others in the row).  Since , we should pivot about the 2nd row, first column, to get: which results in and , the exact result to 4 decimals.   "
},
{
  "id": "ch-linear-algebra-4-2-3",
  "level": "2",
  "url": "ch-linear-algebra-4.html#ch-linear-algebra-4-2-3",
  "type": "Definition",
  "number": "7.2.1",
  "title": "",
  "body": "  A upper triangular matrix is a matrix with the property that if .   "
},
{
  "id": "ch-linear-algebra-4-2-5",
  "level": "2",
  "url": "ch-linear-algebra-4.html#ch-linear-algebra-4-2-5",
  "type": "Definition",
  "number": "7.2.2",
  "title": "",
  "body": "   Gaussian Elimination is the process of using the row operations above to transform a matrix to an upper diagonal matrix.   "
},
{
  "id": "ch-linear-algebra-4-2-6",
  "level": "2",
  "url": "ch-linear-algebra-4.html#ch-linear-algebra-4-2-6",
  "type": "Definition",
  "number": "7.2.3",
  "title": "",
  "body": "  An augmented coefficient matrix is a matrix of coefficients from a linear system including the right hand side. In general if the linear system is can be written as the matrix:    "
},
{
  "id": "ch-linear-algebra-4-2-7",
  "level": "2",
  "url": "ch-linear-algebra-4.html#ch-linear-algebra-4-2-7",
  "type": "Example",
  "number": "7.2.4",
  "title": "",
  "body": "  Use Gaussian elimination and Back Substitution to solve:     can be written as an augmented coefficient matrix:    Now we perform back substitution, this results in the three linear equations: and therefore the solution is    "
},
{
  "id": "ch-linear-algebra-4-5-2",
  "level": "2",
  "url": "ch-linear-algebra-4.html#ch-linear-algebra-4-5-2",
  "type": "Example",
  "number": "7.2.5",
  "title": "",
  "body": "  Solve using exact arithmetic.        "
},
{
  "id": "sect-interval-arithemtic",
  "level": "1",
  "url": "sect-interval-arithemtic.html",
  "type": "Section",
  "number": "8.1",
  "title": "Interval Arithmetic",
  "body": " Interval Arithmetic   We first start with arithmetic and applying functions to intervals. We start with the definition of an interval.    An interval on the real line is the set . If , then the interval is called thin .    Note that we have defined an interval as a closed subset. That is, the endpoints of the interval are in the interval and that the interval can contain a single value.    Basic Interval Operations  Since intervals are also sets, let's define the following:   Also, the notion of intersection and union of sets can be extended to intervals if we are careful. Since in general, the union of two intervals is not necessarily an interval, then   This is called the convex hull of the two intervals. Also   If we define to be the radius, midpoint and diameter of the interval. Additional, if we define to be the “mignitude” and magnitude, which are the smallest (and largest respectively) distances between the origin and the interval. Another equivalent definition of these can be written: and     Operations on Intervals  Let and be intervals. We defined to be the four basic operations on real numbers. Then     Let , , and , find , , , , .    For each of these, we find all values in the resulting set, which typically means that we find the smallest possible value in the resulting set and the largest one.                                 We can define these more specifically as     Computational Concerns  The formulas above are the beginning of the ability to computations with intervals.     For computer languages that allow new types, it is relatively straightforward to define a interval type, you simply need to store the min and max values of the interval.    Using the formulas above, the four basic operations can be computed quite easily and fast.    Except for when 0 is in the dividend interval in division. We will see that later.       Expanding the idea of division  Let's redefine the notion of division to be   Let's look at an example of this: and . Since , we will replace with   And note that we can define and   So a way to define division containing 0 would be in this case is:   There are some issues with this. First, the result is not an interval. Secondly, if that wasn't a problem, how to handle the infinite interval?   "
},
{
  "id": "sect-interval-arithemtic-2-2",
  "level": "2",
  "url": "sect-interval-arithemtic.html#sect-interval-arithemtic-2-2",
  "type": "Definition",
  "number": "8.1.1",
  "title": "",
  "body": "  An interval on the real line is the set . If , then the interval is called thin .   "
},
{
  "id": "sect-interval-arithemtic-4-3",
  "level": "2",
  "url": "sect-interval-arithemtic.html#sect-interval-arithemtic-4-3",
  "type": "Example",
  "number": "8.1.2",
  "title": "",
  "body": "  Let , , and , find , , , , .    For each of these, we find all values in the resulting set, which typically means that we find the smallest possible value in the resulting set and the largest one.                                "
},
{
  "id": "ch-validated-numerics-4",
  "level": "1",
  "url": "ch-validated-numerics-4.html",
  "type": "Section",
  "number": "8.2",
  "title": "An Abstract Look at Intervals",
  "body": " An Abstract Look at Intervals  First, we can consider an interval in geometric terms as the point in . Some examples are:          And since for intervals , then all intervals can be represented as points on or above the line . All thin intervals are on the line .  Note also, that if we think of intervals in this way that addition is the same as vector addition. That is, as an example   Question: Is the set of all intervals with addition and scalar multiplication defined as ??? a vector space?  "
},
{
  "id": "fig-intervals",
  "level": "2",
  "url": "ch-validated-numerics-4.html#fig-intervals",
  "type": "Figure",
  "number": "8.2.1",
  "title": "",
  "body": "       "
},
{
  "id": "sect-function-intervals",
  "level": "1",
  "url": "sect-function-intervals.html",
  "type": "Section",
  "number": "8.3",
  "title": "Functions Defined on Intervals",
  "body": " Functions Defined on Intervals  We know turn to defining a function on an interval. It is natural to define where is an interval as defined in this chapter. In many cases, this is well-defined.    Let , and . Then       "
},
{
  "id": "sect-function-intervals-3",
  "level": "2",
  "url": "sect-function-intervals.html#sect-function-intervals-3",
  "type": "Example",
  "number": "8.3.1",
  "title": "",
  "body": "  Let , and . Then      "
},
{
  "id": "sect-interval-rootfinding",
  "level": "1",
  "url": "sect-interval-rootfinding.html",
  "type": "Section",
  "number": "8.4",
  "title": "Rootfinding using Intervals",
  "body": " Rootfinding using Intervals   The Bisection Method Revisited  Let's return to the problem we started with in in which we sought a numeric value to . One method of solution was the bisection method from , that we revisit here with knowledge of interval arithmetic and functions of intervals.  Recall that we can see a root with a graph. Repeating the plot of           And in , we used the Intermediate Value Theorem to prove that there is a root in the interval . With knowledge of functions on intervals, and because , this proves that there is a root in the interval .  The bisection method works in almost exactly the same way with intervals. If we start with the interval and define and , then and since , then the root is in .    If the input is a function, , an interval, and , a interval diam for stopping, then     Check that or declare an error that there is no root in the interval.    Let     Construct and .    If then , otherwise     If , then stop. The root is in . Otherwise, go to step 2.         Interval Newton's Method  We revisit Newton's method using intervals. To motivate this, let's turn to a simple function as shown below:           Krawczyk Method  Let have a zero, in the interval . The mean value theorem of applied to the interval where is for some . This can be multiplied by to get: adding to both sides: or since and are both in .   "
},
{
  "id": "fig-bisect-interval",
  "level": "2",
  "url": "sect-interval-rootfinding.html#fig-bisect-interval",
  "type": "Figure",
  "number": "8.4.1",
  "title": "",
  "body": "       "
},
{
  "id": "alg-interval-bisection",
  "level": "2",
  "url": "sect-interval-rootfinding.html#alg-interval-bisection",
  "type": "Algorithm",
  "number": "8.4.2",
  "title": "",
  "body": "  If the input is a function, , an interval, and , a interval diam for stopping, then     Check that or declare an error that there is no root in the interval.    Let     Construct and .    If then , otherwise     If , then stop. The root is in . Otherwise, go to step 2.      "
},
{
  "id": "fig-simple-quad",
  "level": "2",
  "url": "sect-interval-rootfinding.html#fig-simple-quad",
  "type": "Figure",
  "number": "8.4.3",
  "title": "",
  "body": "      "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
